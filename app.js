const express = require("express");
const app = express();
require("dotenv").config();
const connectDb = require("./db/connect");
const cors = require("cors");
const fieldRouter = require("./routers/fields");

//middleWares
app.use(express.json());
app.use(cors());
app.use("/api/v1", fieldRouter);
//set port
const port = 5000 || process.env.PORT;

//database connection
const start = async () => {
  try {
    await connectDb(`${process.env.MONGO_URL}`);
    app.listen(port, console.log(`server is running on PORT: ${port}`));
  } catch (err) {
    console.log(err);
  }
};

start();
