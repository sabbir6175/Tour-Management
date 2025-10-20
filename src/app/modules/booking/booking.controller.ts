import { Request, Response } from "express";
import httpStatus from "http-status-codes";
import { bookingService } from "./booking.services";

const createBooking = async (req: Request, res: Response) => {
  const booking = await bookingService.createBooking(req.body);
  console.log(booking);

  res.status(httpStatus.CREATED).json({
    success: true,
    message: "booking create successfully",
    data: booking,
  });
};

//get all booking
const getAllBooking = async (req: Request, res: Response) => {
  const result = await bookingService.getAllBooking();

  res.status(httpStatus.OK).json({
    success: true,
    message: "All booking data received successfully",
    data: result,
  });
};
//single booking
const singleBooking = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await bookingService.singleBooking(id);
  res.status(httpStatus.OK).json({
    success: true,
    message: "single booking data received successfully",
    data: result,
  });
};
//single booking updated
const singleBookingUpdated = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await bookingService.singleBookingUpdate(id, req.body);
  res.status(httpStatus.OK).json({
    success: true,
    message: "single booking data updated successfully",
    data: result,
  });
};
//single booking delete
const singleBookingDelete = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await bookingService.singleBookingDelete(id);
  res.status(httpStatus.OK).json({
    success: true,
    message: "single booking data deleted successfully",
    data: result,
  });
};
export const bookingController = {
  createBooking,
  getAllBooking,
  singleBooking,
  singleBookingUpdated,
  singleBookingDelete,
};
