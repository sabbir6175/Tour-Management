import express, { Request, Response } from "express";
import { UserRoutes } from "./app/modules/users/user.routes";
import { AuthRoutes } from "./app/modules/auth/auth.routes";
import { ActivityRoutes } from "./app/modules/activity/activity.routes";
import { DestinationRoutes } from "./app/modules/destination/destinaiton.routes";

const app = express();

app.use(express.json());

app.use("/api/user", UserRoutes);
app.use("/api/auth", AuthRoutes);
app.use("/api/activities", ActivityRoutes);
app.use("/api/destinations", DestinationRoutes);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome to Tour Management System Backend",
  });
});

export default app;
