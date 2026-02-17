import { Request, Response } from "express";
import { verifyWebhook } from "@clerk/express/webhooks";
import { prisma } from "../configs/prisma.js";
import * as Sentry from "@sentry/node";

const clerkWebhooks = async (req: Request, res: Response) => {
  try {
    // Verify webhook signature
    const evt = await verifyWebhook(req);
    const { data, type } = evt;

    console.log("🔔 Clerk Webhook Received:", type);
    console.log("📦 Full Payload:", JSON.stringify(evt, null, 2));

    switch (type) {
      /**
       * ✅ When a new user is created
       */
      case "user.created": {
        const clerkUserId = data?.id;
        if (!clerkUserId) {
          console.warn("⚠️ Missing user id in user.created event");
          break;
        }

        await prisma.user.upsert({
          where: { clerkId: clerkUserId },
          update: {},
          create: {
            id: clerkUserId,
            clerkId: clerkUserId,
            email: data?.email_addresses?.[0]?.email_address || "",
            name: `${data?.first_name || ""} ${data?.last_name || ""}`.trim(),
            image: data?.image_url || "",
            credits: 20, // default free plan credits
          },
        });

        console.log(`✅ New user created: ${clerkUserId}`);
        break;
      }

      /**
       * ✅ When subscription is created or updated
       */
      case "subscription.created":
      case "subscription.updated": {
        // Clerk webhook may include subscription info inside `data.object`
        const subscription = (data as any)?.object;
        if (!subscription) {
          console.warn("⚠️ Missing subscription object in webhook");
          break;
        }

        const clerkUserId = subscription?.user_id;
        if (!clerkUserId) {
          console.warn("⚠️ Missing user_id in subscription object");
          break;
        }

        // Determine plan slug (adjust according to your Clerk dashboard)
        const planSlug = subscription?.plan?.id?.toLowerCase();
        if (!planSlug) {
          console.warn("⚠️ Missing plan id in subscription object");
          break;
        }

        // Map Clerk plan IDs to credits
        const creditsMap: Record<string, number> = {
          pro: 80,
          premium: 300,
        };

        const creditsToAdd = creditsMap[planSlug];
        if (!creditsToAdd) {
          console.warn(`⚠️ Plan slug "${planSlug}" not mapped to credits`);
          break;
        }

        // Update user's credits
        const updatedUser = await prisma.user.update({
          where: { clerkId: clerkUserId },
          data: {
            credits: { increment: creditsToAdd },
          },
        });

        console.log(
          `✅ Credits updated for ${clerkUserId}. Added ${creditsToAdd}, new total: ${updatedUser.credits}`
        );
        break;
      }

      default:
        console.log(`ℹ️ Event type not handled: ${type}`);
        break;
    }

    // Always respond 200 to acknowledge receipt
    res.status(200).json({ received: true });
  } catch (error: any) {
    Sentry.captureException(error);
    console.error("❌ Webhook error:", error);
    res.status(500).json({ message: error.message });
  }
};

export default clerkWebhooks;
