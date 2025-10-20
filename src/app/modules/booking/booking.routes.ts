import { Router } from "express";
import { bookingController } from "./booking.controller";

const router = Router();

router.post("/create-booking", bookingController.createBooking);
router.get("/all-booking", bookingController.getAllBooking);
router.get("/:id", bookingController.singleBooking);
router.put("/:id", bookingController.singleBookingUpdated);
router.delete("/:id", bookingController.singleBookingDelete);

export const bookingRouters = router;
