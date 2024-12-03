
const express = require("express");
const router = express.Router();
const captainController = require("../controllers/captain.controller");

const { body } = require("express-validator");

router.post("/register", [
  body("email").isEmail().withMessage("Invalid Email"),
  body("fullName.firstName")
    .isLength({ min: 3 })
    .withMessage("First name must be 3 characters or more"),
  body("fullName.lastName")
    .isLength({ min: 3 })
    .withMessage("Last name must be 3 characters or more"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be 6 characters or more"),

  body("vehicle.color") // Corrected "vechile" to "vehicle"
    .isLength({ min: 3 })
    .withMessage("Color name must contain 3 or more characters"),

  body("vehicle.plate") // Corrected "vechile" to "vehicle"
    .isLength({ min: 3 })
    .withMessage("Plate must contain 3 or more characters"),

  body("vehicle.capacity") // Corrected "vechile" to "vehicle"
    .isInt({ min: 1 })
    .withMessage("Capacity must be at least 1"),

  body("vehicle.vehicleType") // Corrected "vechileType" to "vehicleType"
    .isIn(["car", "motorcycle", "auto"])
    .withMessage("Invalid Vehicle Type"),
], captainController.registerCaptain);

module.exports = router;
