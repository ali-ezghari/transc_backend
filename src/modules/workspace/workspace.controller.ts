import { Request, Response, NextFunction } from "express";
import * as workspaceService from "./workspace.service";

export async function getAllWorkspaces(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const userId: string = req.user.id;
    const workspaces = await workspaceService.getAllUserWorkspaces(userId);
    res.status(200).json(workspaces);
  } catch (error) {
    next(error);
  }
}
export async function getWorkspace(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const userId: string = req.user.id;
    const workspaces = await workspaceService.getUserWorkspaces(userId);
    res.status(200).json(workspaces);
  } catch (error) {
    next(error);
  }
}
