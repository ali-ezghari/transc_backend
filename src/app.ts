import express, { type Request, type Response } from "express";
import { devAuthMiddleware } from "./middleware/devAuthMiddleware";
import workspaceRoutes from "./modules/workspace/workspace.routes";
import pool from "./config/database";

const app = express();

app.use(express.json());
app.use(devAuthMiddleware);

app.use("/api/workspaces", workspaceRoutes);

app.get("/health", async (req: Request, res: Response) => {
  try {
    const result = await pool.query("SELECT NOW()");

    res.status(200).json({
      status: "ok",
      database: "connected",
      timestamp: result.rows[0].now,
    });
  } catch (error) {
    console.error("Health check failed:", error);

    res.status(503).json({
      status: "error",
      database: "disconnected",
    });
  }
});

app.get("/", (req: Request, res: Response) => {
  res.send(`Hello, user with ID: ${req.user?.id} and role: ${req.user?.role}`);
});

export default app;
