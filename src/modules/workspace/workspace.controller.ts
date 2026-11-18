import { Request, Response, NextFunction } from "express";
import * as workspaceService from "./workspace.service";

export async function getWorkspaces(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const user: String = req.user.id;
    const workspaces: String = await workspaceService.getUserWorkspaces(userId);
    res.status(200).json(workspaces);
  } catch (error) {
    next(error);
  }
}
