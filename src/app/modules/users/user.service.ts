import bcrypt from "bcrypt";
import { IUser } from "./user.interface";
import { User } from "./user.model";

//create user
const createUser = async (payload: IUser) => {
  console.log('payload',payload);

  const hashedPassword = await bcrypt.hash(payload.password as string, 10);
  console.log(hashedPassword);

  payload.password = hashedPassword;

  const user = await User.create(payload);

  return user;
};

//get all user
const getAllUsers = async () => {
  const users = await User.find({});
  console.log(users);
  const totalUsers = await User.countDocuments();

  return {
    data: users,
    meta: {
      total: totalUsers,
    },
  };
};

//single user get
const singleUser = async (id: string) => {
  const result = await User.findById(id);
  console.log(result);
  return result;
};

//single user updated
const singleUserUpdate = async (id: string, payload: IUser) => {
  const result = await User.findByIdAndUpdate(
    { _id: id },
    { $set: payload },
    { new: true, runValidators: true }
  );
  console.log(result);
  return result;
};

//single user deleted
const singleUserDelete = async (id: string) => {
  const result = await User.findByIdAndDelete(id);
  console.log(result);
  return result;
};

//export all function
export const UserServices = {
  createUser,
  singleUser,
  getAllUsers,
  singleUserUpdate,
  singleUserDelete,
};