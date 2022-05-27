const express = require("express");

const router = express.Router();

const UsersRouter = require("./UsersRouter");

/**
 * @route  /api/users
 * @desc  users endpoint
 
*/
router.use("/users", UsersRouter);

module.exports = router;
