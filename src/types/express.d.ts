import "express";

declare global {
  interface Request {
    user?: {
      id: sring;
      role: string;
    };
  }
}
