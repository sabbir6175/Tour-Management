import bcrypt from "bcrypt";
import jwt, { SignOptions } from "jsonwebtoken";
import { envVars } from "../../config/envVars";
import { IUser } from "../users/user.interface";
import { User } from "../users/user.model";

const credentialsLogin = async (payload: IUser) => {
  const { email, password } = payload;
  console.log(email, password)

  const isUserExist = await User.findOne({ email });
    console.log(isUserExist);

  const isPasswordMatched = await bcrypt.compare(
    password as string,
    isUserExist?.password as string
  );
  //   console.log(isPasswordMatched);

  if (!isPasswordMatched) {
    throw new Error("Incorrect Password");
  }

  const jwtPayload = {
    userId: isUserExist?._id,
    email: isUserExist?.email,
    role: isUserExist?.role,
  };

  const accessToken = jwt.sign(jwtPayload, envVars.JWT_ACCESS_SECRET, {
    expiresIn: envVars.JWT_ACCESS_EXPIRES,
  } as SignOptions);

  console.log(accessToken)

  return {
    accessToken,
    user: isUserExist
  };
};

export const AuthServices = {
  credentialsLogin,
};