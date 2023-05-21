const express = require("express");
const app = express();
require("dotenv").config();
const connectDb = require("./db/connect");

const port = 5000 || process.env.PORT;

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(port, console.log(`server is running on PORT: ${port}`));
  } catch (err) {
    console.log(err);
  }
};

start();
