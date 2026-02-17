import { Request, Response } from "express";
import * as Sentry from "@sentry/node";
import { prisma } from "../configs/prisma.js";

/**
 * Get User Credits
 */
export const getUserCredits = async (req: Request, res: Response) => {
  try {
    const { userId } = req.auth();
    if (!userId) return res.status(401).json({ message: "Unauthorized" });

    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
      select: { credits: true },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ credits: user.credits });
  } catch (error: any) {
    Sentry.captureException(error);
    res.status(500).json({ message: error.message });
  }
};

/**
 * Get all user projects
 */
export const getAllProjects = async (req: Request, res: Response) => {
  try {
    const { userId } = req.auth();
    if (!userId) return res.status(401).json({ message: "Unauthorized" });

    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const projects = await prisma.project.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
    });

    res.json({ projects });
  } catch (error: any) {
    Sentry.captureException(error);
    res.status(500).json({ message: error.message });
  }
};

/**
 * Get project by ID
 */
export const getProjectById = async (
  req: Request<{ projectId: string }>,
  res: Response
) => {
  try {
    const { userId } = req.auth();
    const { projectId } = req.params;
    if (!userId) return res.status(401).json({ message: "Unauthorized" });

    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const project = await prisma.project.findFirst({
      where: {
        id: projectId,
        userId: user.id,
      },
    });

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.json({ project });
  } catch (error: any) {
    Sentry.captureException(error);
    res.status(500).json({ message: error.message });
  }
};

/**
 * Publish / Unpublish project
 */
export const toggleProjectPublic = async (
  req: Request<{ projectId: string }>,
  res: Response
) => {
  try {
    const { userId } = req.auth();
    const { projectId } = req.params;
    if (!userId) return res.status(401).json({ message: "Unauthorized" });

    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const project = await prisma.project.findFirst({
      where: {
        id: projectId,
        userId: user.id,
      },
    });

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    if (!project.generatedImage && !project.generatedVideo) {
      return res
        .status(400)
        .json({ message: "Image or video not generated" });
    }

    const updated = await prisma.project.update({
      where: { id: projectId },
      data: { isPublished: !project.isPublished },
    });

    res.json({ isPublished: updated.isPublished });
  } catch (error: any) {
    Sentry.captureException(error);
    res.status(500).json({ message: error.message });
  }
};
