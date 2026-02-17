import { NextFunction, Request, Response } from "express";
import { getAuth } from "@clerk/express";
import * as Sentry from "@sentry/node";

export const protect = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = getAuth(req);

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // attach for downstream usage
    (req as any).userId = userId;

    next();
  } catch (error: any) {
    Sentry.captureException(error);
    return res.status(401).json({ message: "Unauthorized" });
  }
};
