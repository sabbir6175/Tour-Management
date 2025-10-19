import { Request, Response } from "express";
import httpStatus from "http-status-codes";
import { DestinationServices } from "./destination.service";

const createDestination = async (req: Request, res: Response) => {
  try {
    const destination = await DestinationServices.createDestination(req.body);
    res.status(httpStatus.CREATED).json({
      success: true,
      message: "destination created successfully",
      data: destination,
    });
  } catch (error) {
    console.log(error);
  }
};

//get all destination
const getAllDestination = async (req: Request, res: Response) => {
  const result = await DestinationServices.getAllDestination();

  res.status(httpStatus.OK).json({
    success: true,
    message: "All destination received successfully",
    data: result,
  });
};

// get single destination
const getSingleDestination = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await DestinationServices.getSingleDestination(id);

  res.status(httpStatus.OK).json({
    success: true,
    message: "Single destination received successfully",
    data: result,
  });
};

//single destination updated
const singleDestinationUpdate = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await DestinationServices.singleDestinationUpdate(
    id,
    req.body
  );

  res.status(httpStatus.OK).json({
    success: true,
    message: "single destination updated successfully",
    data: result,
  });
};

const singleDestinationDelete = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await DestinationServices.singleDestinationDelete(id);

  res.status(httpStatus.OK).json({
    success: true,
    message: "single destination deleted successfully",
    data: result,
  });
};

export const DestinationController = {
  createDestination,
  getAllDestination,
  getSingleDestination,
  singleDestinationUpdate,
  singleDestinationDelete,
};
