import { Router } from "express";
import * as workspaceController from "./workspace.controller.ts";

const workspaceRoutes = Router();

// Define routes for workspaces 

workspaceRoutes.get("/", workspaceController.getAllWorkspaces);
workspaceRoutes.get("/:workspace_id", workspaceController.getWorkspace);
export default workspaceRoutes;
