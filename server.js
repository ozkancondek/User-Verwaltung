require("dotenv").config();

const express = require("express");

const app = express();

const router = require("./routes/router");

const connectDB = require("./utils/database/connectDB");

//trigger connect to db function
connectDB();

app.use("/api", router);

app.listen(process.env.PORT, () => {
  console.log("I am listening on port  " + process.env.PORT);
});
