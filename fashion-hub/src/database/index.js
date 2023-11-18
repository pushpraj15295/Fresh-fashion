import mongoose from "mongoose";

const configOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectToDB = async () => {
  const connectionUrl =
    "mongodb+srv://pushpraj150295:fashion12345@cluster0.ao0fo6h.mongodb.net/";

  mongoose
    .connect(connectionUrl, configOptions)
    .then(() => console.log("DB connected successfully!"))
    .catch((err) =>
      console.log(`Getting Error from DB connection ${err.message}`)
    );
};

export default connectToDB;
