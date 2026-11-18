import { Router } from "express";
import * as workspaceController from "./workspace.controller";

const workspaceRoutes = Router();

workspaceRoutes.get("/", workspaceController.getAllWorkspaces);
workspaceRoutes.get("/:workspace_id", workspaceController.getWorkspace);
export default workspaceRoutes;
