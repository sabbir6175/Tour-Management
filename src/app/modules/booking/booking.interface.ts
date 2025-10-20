import { Types } from "mongoose";

export interface IBooking {
  user: Types.ObjectId;
  tour: Types.ObjectId;
  nidNumber: string;
  bookingDate: Date;
  status: "Pending" | "Confirmed" | "Cancelled";
}
