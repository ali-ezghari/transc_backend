import express, { type Request, type Response } from "express";

export const devAuthMiddleware = (
  req: Request,
  res: Response,
  next: express.NextFunction,
) => {
  req.user = {
    id: "1",
    role: "USER",
  };
  next();
};
