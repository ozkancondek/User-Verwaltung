require("dotenv").config();

const express = require("express");

const app = express();

const router = require("./routes/router");

const connectDB = require("./utils/database/connectDB");

//trigger connect to db function
connectDB();

//mw for req.body
app.use(express.json());

//forward every request to router
app.use("/api", router);

//listen to server
app.listen(process.env.PORT, () => {
  console.log("I am listening on port  " + process.env.PORT);
});
