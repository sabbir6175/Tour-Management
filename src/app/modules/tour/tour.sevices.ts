import { ITour } from "./tour.interface";
import { Tour } from "./tour.model";

const createTour = async (payload: ITour) => {
  console.log("payload", payload);
  const result = await Tour.create(payload);
  console.log(result);
  return result;
};

// get all destination
const getAllTour = async () => {
  const tour = await Tour.find({})
    .populate("destination") // Destination object
    .populate("activities"); // Array of Activity objects
  console.log(tour);
  const totalTour = await Tour.countDocuments();

  return {
    data: tour,
    meta: {
      total: totalTour,
    },
  };
};

//get single Tour
const getSingleTour = async (id: string) => {
  const result = await Tour.findById(id);
  return result;
};

// single Tour updated
const singleTourUpdate = async (id: string, payload: ITour) => {
  const result = await Tour.findByIdAndUpdate(
    { _id: id },
    { $set: payload },
    { new: true, runValidators: true }
  );
  return result;
};

const singleTourDelete = async (id: string) => {
  const result = await Tour.findByIdAndDelete(id);
  return result;
};

export const TourServices = {
  createTour,
  getAllTour,
  getSingleTour,
  singleTourUpdate,
  singleTourDelete,
};
