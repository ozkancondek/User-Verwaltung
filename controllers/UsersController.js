//use given schema
const User = require("../models/UserModel");

const { validationResult } = require("express-validator");

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

//add new user
exports.adduser = async (req, res) => {
  const { firstName, lastName, email, birthDate } = req.body;

  //-validation of input fields at server side
  const validationErr = validationResult(req);
  if (validationErr.errors.length > 0) {
    return res.status(400).json({ errors: validationErr.array() });
  }
  //-check if user aldready in DB
  const userData = await User.findOne({ email });
  if (userData) {
    return res
      .status(400)
      .json({ errors: [{ message: "User aldready exist in DataBase" }] });
  }

  //-save user to db
  const user = new User({
    firstName,
    lastName,
    email,
    birthDate,
  });
  await user.save();

  res.send("User added successfully");
};
