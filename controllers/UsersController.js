//use given schema
const User = require("../models/UserModel");

//get all users
exports.getUsersList = async (req, res) => {
  try {
    const userList = await User.find();
    res.status(200).json({ userList });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
