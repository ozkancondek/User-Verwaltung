const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/UsersController");

// base url: /api/users

/**
 * @route   GET /api/users
 * @desc    Users list endpoint
 */
router.get("/", UsersController.getUsersList);

module.exports = router;
