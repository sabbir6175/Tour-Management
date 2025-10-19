/* eslint-disable no-console */

import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";
import { envVars } from "./app/config/envVars";

let server: Server;

const startServer = async () => {
  try {
    await mongoose.connect(envVars.DB_URL);

    console.log("Connected to DB!");

    server = app.listen(envVars.PORT, () => {
      console.log(`Server is listening on port ${envVars.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();