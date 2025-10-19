import { IActivity } from "./activity.interface";
import { Activity } from "./activity.model";

const createActivity = async (payload: IActivity) => {
  console.log("payload", payload);
  const activity = await Activity.create(payload);
  return activity;
};

//get all activity
const getAllActivity = async () => {
  const activity = await Activity.find({});
  console.log(activity);
  const totalActivity = await Activity.countDocuments();

  return {
    data: activity,
    meta: {
      total: totalActivity,
    },
  };
};

//single activity get
const singleActivity = async (id: string) => {
  const result = await Activity.findById(id);
  console.log(result);
  return result;
};

//single activity updated
const singleActivityUpdate = async (id: string, payload: IActivity) => {
  const result = await Activity.findByIdAndUpdate(
    { _id: id },
    { $set: payload },
    { new: true, runValidators: true }
  );
  // console.log(result);
  return result;
};

//single activity deleted
const singleActivityDelete = async (id: string) => {
  const result = await Activity.findByIdAndDelete(id);
  console.log(result);
  return result;
};

export const ActivityServices = {
  createActivity,
  getAllActivity,
  singleActivity,
  singleActivityUpdate,
  singleActivityDelete,
};
