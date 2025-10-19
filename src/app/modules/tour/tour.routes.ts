import { Router } from "express";
import { TourController } from "./tour.controller";

const router = Router();

router.post("/create-tour", TourController.createTour);
router.get("/all-tour", TourController.getAllTour);
router.post("/:id", TourController.getSingleTour);
router.put("/:id", TourController.singleTourUpdate);
router.delete("/:id", TourController.singleTourDelete);

export const TourRoutes = router;
