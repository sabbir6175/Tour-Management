import { Router } from "express";
import { ActivityController } from "./activity.controller";

const router = Router();

router.post("/create-activity", ActivityController.createActivity);
//get all activity
router.get("/all-activity", ActivityController.getAllActivity);
//get single activity
router.get("/:id", ActivityController.singleActivity);
//updated single activity
router.put("/:id", ActivityController.singleActivityUpdate);
//delete single activity
router.delete("/:id", ActivityController.singleActivityDelete);

export const ActivityRoutes = router;
