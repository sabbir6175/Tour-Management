import { model, Schema } from "mongoose";
import { IDestination } from "./destinaiton.interface";

const destinationSchema = new Schema<IDestination>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    location: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
export const Destination = model<IDestination>(
  "Destination",
  destinationSchema
);
