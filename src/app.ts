import express from "express";
import type { Application } from "express";
import cardRoutes from "./routes/cardRoute";
import errorHandler from "./middleware/errorMiddleware";



export function createApp(): express.Application {
  const app = express();

  app.use(express.json());

app.use("/api/cards", cardRoutes); 

  app.use(errorHandler);

  return app;
}