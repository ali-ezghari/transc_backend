import { Request, Response } from "express";
import * as workspaceRepository from "./workspace.repository";

export async function getUserWorkspaces(userId: string) {
  const workspaces = await workspaceRepository.findByUserId(userId);

  return workspaces;
}
