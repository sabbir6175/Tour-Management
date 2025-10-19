import { Request, Response } from "express";
import httpStatus from "http-status-codes";
import { TourServices } from "./tour.sevices";

const createTour = async (req: Request, res: Response) => {
  console.log(req.body);
  const result = await TourServices.createTour(req.body);
  console.log("tour controller ", result);
  res.status(httpStatus.CREATED).json({
    success: true,
    message: "tour create successfully",
    data: result,
  });
};

//get all Tour
const getAllTour = async (req: Request, res: Response) => {
  const result = await TourServices.getAllTour();
  console.log(result);
  res.status(httpStatus.OK).json({
    success: true,
    message: "All tour received successfully",
    data: result,
  });
};
// single Tour
const getSingleTour = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await TourServices.getSingleTour(id);
  console.log(result);
  res.status(httpStatus.OK).json({
    success: true,
    message: "single tour received successfully",
    data: result,
  });
};

//single tour updated
const singleTourUpdate = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await TourServices.singleTourUpdate(id, req.body);
  console.log(result);
  res.status(httpStatus.OK).json({
    success: true,
    message: "single tour update successfully",
    data: result,
  });
};
//single tour DELETED
const singleTourDelete = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await TourServices.singleTourDelete(id);
  console.log(result);
  res.status(httpStatus.OK).json({
    success: true,
    message: "single tour deleted successfully",
    data: result,
  });
};
export const TourController = {
  createTour,
  getAllTour,
  getSingleTour,
  singleTourUpdate,
  singleTourDelete,
};
