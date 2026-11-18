import { Router } from "express";
import { getWorkspaces } from "./workspace.controller";

const workspaceRoutes = Router();

workspaceRoutes.get("/", getWorkspaces);

export default workspaceRoutes;
