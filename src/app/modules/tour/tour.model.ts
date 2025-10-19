import { Schema, model } from "mongoose";
import { ITour } from "./tour.interface";

const tourSchema = new Schema<ITour>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: String, required: true },
    destination: {
      type: Schema.Types.ObjectId,
      ref: "Destination",
      required: true,
    },
    activities: [
      {
        type: Schema.Types.ObjectId,
        ref: "Activity",
        required: true,
      },
    ],
    image: { type: String, required: true },
  },
  {
    timestamps: true, // auto adds createdAt and updatedAt
    versionKey: false,
  }
);

export const Tour = model<ITour>("Tour", tourSchema);
