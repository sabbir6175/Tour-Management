import { IBooking } from "./booking.interface";
import { Booking } from "./booking.model";

const createBooking = async (payload: IBooking) => {
  const booking = await Booking.create(payload);
  console.log(booking);
  return booking;
};

// get all booking
const getAllBooking = async () => {
  const booking = await Booking.find({}).populate("user").populate("tour");
  console.log(booking);
  const totalBooking = await Booking.countDocuments();

  return {
    data: booking,
    meta: {
      total: totalBooking,
    },
  };
};

//get single booking
const singleBooking = async (id: string) => {
  const booking = await Booking.findById(id)
    .populate("user", "name email")
    .populate("tour");
  return booking;
};

//single booking updated
const singleBookingUpdate = async (id: string, payload: IBooking) => {
  const result = await Booking.findByIdAndUpdate(
    { _id: id },
    { $set: payload },
    { new: true, runValidators: true }
  );
  console.log(result);
  return result;
};
// single Booking Delete
const singleBookingDelete = async (id: string) => {
  const result = await Booking.findByIdAndDelete(id);
  console.log(result);
  return result;
};

export const bookingService = {
  createBooking,
  getAllBooking,
  singleBooking,
  singleBookingUpdate,
  singleBookingDelete,
};
