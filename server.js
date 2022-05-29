//dotenv configuration package
require("dotenv").config();

var cors = require("cors");

const express = require("express");

const app = express();

const router = require("./routes/router");

//to prevent proxy conflict
app.use(cors());

//call connectDB function
const connectDB = require("./utils/database/connectDB");

//trigger connectDB function to connect db
connectDB();

//mw for req.body
app.use(express.json());

//production
if (process.env.NODE_ENV === "production") {
  //mw for using files in build folder on client side
  app.use(express.static("client/build"));
  // index.html for all get requests
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//forward every request to router
app.use("/api", router);

//listen to server on port 5000
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`I am listening on port ${port}`);
});
