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
exports.addUser = async (req, res) => {
  const { firstName, lastName, email, birthDate } = req.body;

  //-validation of input fields at server side
  const validationErr = validationResult(req);
  if (validationErr.errors.length > 0) {
    return res.status(400).json({ errors: validationErr.array() });
  }
  //-check if user aldready in DB
  const userData = await User.findOne({ email });
  if (userData) {
    return res.status(400).json({
      errors: [{ message: "This email is aldready exist in DataBase" }],
    });
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

//get single user detail
exports.UserDetails = async (req, res) => {
  try {
    const UserDetails = await User.findOne({
      _id: req.params.id,
    });
    res.status(200).json({ UserDetails });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
//delete user
exports.DeleteUser = async (req, res) => {
  try {
    await User.deleteOne({
      _id: req.params.id,
    });
    res.status(200).json("User deleted successfully");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
//update user
exports.UpdateUser = async (req, res) => {
  const { firstName, lastName, email, birthDate } = req.body;
  try {
    await User.updateOne(
      {
        _id: req.params.id,
      },
      { firstName, lastName, email, birthDate }
    );

    res.status(200).json("User updated successfully");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Check credentials");
  }
};
