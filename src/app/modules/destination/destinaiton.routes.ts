import { Router } from "express";
import { DestinationController } from "./destinaiton.controller";

const router = Router();

router.post("/create-destination", DestinationController.createDestination);
router.get("/all-destination", DestinationController.getAllDestination);
router.get("/:id", DestinationController.getSingleDestination);
router.put("/:id", DestinationController.singleDestinationUpdate);
router.delete("/:id", DestinationController.singleDestinationDelete);

export const DestinationRoutes = router;
