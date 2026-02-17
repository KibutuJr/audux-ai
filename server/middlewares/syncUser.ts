import { Request, Response, NextFunction } from "express";
import { prisma } from "../configs/prisma.js";
import { getAuth, clerkClient } from "@clerk/express";

export const syncUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = getAuth(req);

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const existingUser = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!existingUser) {
      const clerkUser = await clerkClient.users.getUser(userId);

      const email =
        clerkUser.emailAddresses?.[0]?.emailAddress ?? "";

      await prisma.user.create({
        data: {
          id: userId,
          clerkId: userId,
          email,
          name: clerkUser.fullName ?? "",
          image: clerkUser.imageUrl ?? "",
          credits: 20,
        },
      });
    }

    next();
  } catch (error) {
    console.error("syncUser error:", error);
    next(error);
  }
};
