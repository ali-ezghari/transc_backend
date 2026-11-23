import type { Request, Response, NextFunction } from "express";
import * as workspaceService from "./workspace.service.ts";

export async function getAllWorkspaces( // extracting the user ID from the request and passing it to the service layer
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

// Get a specific workspace by ID
export async function getWorkspace(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const workspace_id: string = req.params.workspace_id.toString();

    const workspace = await workspaceService.getWorkspaceById(workspace_id);
    res.status(200).json(workspace);
  } catch (error) {
    next(error);
  }
}
