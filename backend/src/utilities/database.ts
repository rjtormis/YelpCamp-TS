import mongoose from "mongoose";
import { DATABASE } from "./general";

export const connectMoongoseDB = async () => {
  try {
    const connection = await mongoose.connect(DATABASE);
    console.log(`Mongo Conneection Established @ ${connection.connection.host}}`);
  } catch (e) {
    console.log(`An Error Occured:${e}`);
  }
};
