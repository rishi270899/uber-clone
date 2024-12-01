const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController')

const { body } = require("express-validator");



router.post("/register", [
  body("email").isEmail().withMessage("Invalid Email"),
  body("fullName.firstName")
    .isLength({ min: 3 })
    .withMessage("First name must be 3 character or more"),
  body("fullName.lastName")
    .isLength({ min: 3 })
    .withMessage("Last name must be 3 character or more"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be 6 character or more"),
], 

userController.registerUser

);

module.exports = router;
