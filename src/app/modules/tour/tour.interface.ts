import { Types } from "mongoose";

export interface ITour {
  title: string;
  description: string;
  price: number;
  duration: string;
  destination: Types.ObjectId;
  activities: Types.ObjectId[];
  image: string;
}
