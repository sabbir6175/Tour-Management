import { IDestination } from "./destinaiton.interface";
import { Destination } from "./destinaiton.model";

const createDestination = async (payload: IDestination) => {
  console.log("payload", payload);
  const destination = await Destination.create(payload);
  console.log(destination);
  return destination;
};

// get all destination
const getAllDestination = async () => {
  const destination = await Destination.find({});
  console.log(destination);
  const totalDestination = await Destination.countDocuments();

  return {
    data: destination,
    meta: {
      total: totalDestination,
    },
  };
};

//get single destination
const getSingleDestination = async (id: string) => {
  const result = await Destination.findById(id);
  return result;
};

// single destination updated
const singleDestinationUpdate = async (id: string, payload: IDestination) => {
  const result = await Destination.findByIdAndUpdate(
    { _id: id },
    { $set: payload },
    { new: true, runValidators: true }
  );
  return result;
};

const singleDestinationDelete = async (id: string) => {
  const result = await Destination.findByIdAndDelete(id);
  return result;
};

export const DestinationServices = {
  createDestination,
  getAllDestination,
  getSingleDestination,
  singleDestinationUpdate,
  singleDestinationDelete,
};
