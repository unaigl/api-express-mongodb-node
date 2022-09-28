import mongoose from "mongoose";
import { config } from "./config";

(async () => {
  await mongoose.connect(`mongodb://${config.HOST}/${config.DATABASENAME}`);
  console.log(`database connected in port ${config.PORT}`);
})();
