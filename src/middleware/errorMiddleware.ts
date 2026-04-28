import type { Request, Response, NextFunction } from "express";

/**
 * Global error handler middleware.
 * Ensures the API responds gracefully to unexpected errors.
 */
export default function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  return res.status(500).json({
    success: false,
    message: err.message || "Internal server error"
  });
}