import "./configs/instrument.mjs";
import express, { Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
import * as Sentry from "@sentry/node";
import { clerkMiddleware } from "@clerk/express";

import clerkWebhooks from "./controllers/clerk.js";
import userRouter from "./routes/userRoutes.js";
import projectRouter from "./routes/projectRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

/**
 * ✅ CORS
 */
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

/**
 * ✅ Clerk auth middleware (MUST COME BEFORE ROUTES)
 */
app.use(clerkMiddleware());

/**
 * ✅ Clerk webhook — RAW BODY ONLY
 */
app.post(
  "/api/clerk",
  express.raw({ type: "application/json" }),
  clerkWebhooks
);

/**
 * ✅ Normal JSON middleware AFTER webhook
 */
app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.send("Server is Live!");
});

/**
 * ✅ API routes
 */
app.use("/api/user", userRouter);
app.use("/api/project", projectRouter);

/**
 * ✅ Sentry error handler
 */
Sentry.setupExpressErrorHandler(app);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
