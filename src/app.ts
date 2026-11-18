import express, { type Request, type Response } from "express";
import { devAuthMiddleware } from "./middleware/devAuthMiddleware";
import workspaceRoutes from "./modules/workspace/workspace.routes";

const app = express();

app.use(express.json());
app.use(devAuthMiddleware);

app.use("/api/workspaces", workspaceRoutes);

app.get("/health", (req: Request, res: Response) => {
  res.send("Server is healthy");
});
app.get("/", (req: Request, res: Response) => {
  res.send(`Hello, user with ID: ${req.user?.id} and role: ${req.user?.role}`);
});

export default app;
