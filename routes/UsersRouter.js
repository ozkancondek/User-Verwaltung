const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/UsersController");

// base url: /api/users

/**
 * @route   GET /api/users
 * @desc    Users list endpoint
 */
router.get("/", UsersController.getUsersList);
/**
 * @route   POST /api/users/add
 * @desc    post user endpoint
 */
router.post("/add", UsersController.adduser);

module.exports = router;
