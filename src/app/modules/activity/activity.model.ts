import { Schema, model } from "mongoose";
import { IActivity } from "./activity.interface";

const activitySchema = new Schema<IActivity>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Activity = model<IActivity>("Activity", activitySchema);
