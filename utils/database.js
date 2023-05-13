import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is connected already");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "dashboard",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log("DB is Conected");
  } catch (error) {
    console.log(error);
  }
};
