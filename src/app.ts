import express, { Request, Response } from "express";
import { ActivityRoutes } from "./app/modules/activity/activity.routes";
import { AuthRoutes } from "./app/modules/auth/auth.routes";
import { bookingRouters } from "./app/modules/booking/booking.routes";
import { DestinationRoutes } from "./app/modules/destination/destinaiton.routes";
import { TourRoutes } from "./app/modules/tour/tour.routes";
import { UserRoutes } from "./app/modules/users/user.routes";

const app = express();

app.use(express.json());

app.use("/api/user", UserRoutes);
app.use("/api/auth", AuthRoutes);
app.use("/api/activities", ActivityRoutes);
app.use("/api/destinations", DestinationRoutes);
app.use("/api/tours", TourRoutes);
app.use("/api/bookings", bookingRouters);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome to Tour Management System Backend",
  });
});

export default app;
