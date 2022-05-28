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
 * @route   GET /api/users/details/:id
 * @desc    single user endpoint
 */
router.get("/details/:id", UsersController.UserDetails);
/**
 * @route   POST /api/users/add
 * @desc    post user endpoint
 */
router.post("/add", UsersController.addUser);
/**
 * @route   DELETE /api/users/delete/:id
 * @desc    delete user endpoint
 */
router.delete("/delete/:id", UsersController.DeleteUser);
/**
 * @route   PUT /api/users/update/:id
 * @desc    update user endpoint
 */
router.put("/update/:id", UsersController.UpdateUser);

module.exports = router;
