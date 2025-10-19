import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status-codes";
import { ActivityServices } from "./activity.service";

const createActivity = async (req: Request, res: Response) => {
  try {
    console.log("activity", req.body);
    const activity = await ActivityServices.createActivity(req.body);

    res.status(httpStatus.CREATED).json({
      success: true,
      message: "activity created successfully!",
      data: activity,
    });
  } catch (error) {
    console.log(error);
  }
};

//get all activity
const getAllActivity = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = await ActivityServices.getAllActivity();
  console.log(result);

  res.status(httpStatus.OK).json({
    success: true,
    message: "All activity received Successfully",
    data: result,
  });
};

//get single activity
const singleActivity = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await ActivityServices.singleActivity(id);
    res.status(httpStatus.OK).json({
      success: true,
      message: "single activity received successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

//get single activity updated
const singleActivityUpdate = async (req: Request, res: Response) => {
  const id = req.params.id;
  console.log("id: ", id, "body data", req.body);
  const result = await ActivityServices.singleActivityUpdate(id, req.body);
  res.status(httpStatus.OK).json({
    success: true,
    message: "single activity Updated successfully",
    data: result,
  });
};

//single activity deleted
const singleActivityDelete = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ActivityServices.singleActivityDelete(id);
  console.log("result", result);

  res.status(httpStatus.OK).json({
    success: true,
    message: "single activity deleted successfully",
    data: result,
  });
};

export const ActivityController = {
  createActivity,
  getAllActivity,
  singleActivity,
  singleActivityUpdate,
  singleActivityDelete,
};
