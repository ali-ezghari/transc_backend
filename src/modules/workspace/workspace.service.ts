// import { Request, Response } from "express";
import * as workspaceRepository from "./workspace.repository.ts";

// ** Service layer for workspace-related operations.

export async function getAllUserWorkspaces(userId: string) {
  const workspaces = await workspaceRepository.findAllUserWorkspaces(userId);

  return workspaces;
}

export async function getWorkspaceById(workspaceId: string) {
  const workspace = await workspaceRepository.findWorkspaceById(workspaceId);

  return workspace;
}
