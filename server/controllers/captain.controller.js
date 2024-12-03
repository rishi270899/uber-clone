const captainModel = require("../models/captain.model");
const captainService = require("../services/captain.service");
const { validationResult } = require("express-validator");

module.exports.registerCaptain = async (req, res, next) => {
  try {
    // Validate input
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ error: error.array() });
    }

    const { fullName, email, password, vehicle } = req.body; // Corrected spelling to 'vehicle'

    // Check if captain already exists
    const isCaptainAlreadyExist = await captainModel.findOne({ email });
    if (isCaptainAlreadyExist) {
      return res.status(400).json({ message: "Captain already exists" });
    }

    // Hash the password
    const hashPassword = await captainModel.hashPassword(password);

    // Create captain
    const captain = await captainService.createCaptain({
      firstName: fullName.firstName,
      lastName: fullName.lastName,
      email,
      password: hashPassword,
      color: vehicle.color, // Corrected spelling to 'vehicle'
      plate: vehicle.plate, // Corrected spelling to 'vehicle'
      capacity: vehicle.capacity, // Corrected spelling to 'vehicle'
      vehicleType: vehicle.vehicleType, // Corrected spelling to 'vehicle'
    });

    // Generate token
    const token = captain.generateAuthToken();
    res.status(201).json({ token, captain });
  } catch (error) {
    // Handle unexpected errors
    next(error);
  }
};
