import mongoose from "mongoose";
import { URL } from "../config/db-config";

export class Database {
  public dbConnect(): void {
    mongoose.set("strictQuery", true);

    mongoose.connect(URL).then(() => {
      console.log("Db conectado");
    });
  }
}
