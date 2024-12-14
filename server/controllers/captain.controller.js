const blacklistToken = require("../models/blacklistToken");
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

    const { fullName, email, password, vehicle } = req.body;

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
      color: vehicle.color,
      plate: vehicle.plate,
      capacity: vehicle.capacity,
      vehicleType: vehicle.vehicleType,
    });

    // Generate token
    const token = captain.generateAuthToken();
    res.status(201).json({ token, captain });
  } catch (error) {
    next(error); // Handle unexpected errors
  }
};

module.exports.loginCaptain = async (req, res, next) => {
  try {
    // Validate inputs
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    console.log({ email }, { password });

    // Fetch captain by email and include password for comparison
    const captain = await captainModel.findOne({ email }).select("+password");

    if (!captain) {
      console.log("Login failed: Captain not found for email:", email);
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Compare input password with hashed password
    const isMatch = await captain.comparePassword(password);
    if (!isMatch) {
      console.log("Login failed: Password does not match for email:", email);
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate a JWT token
    const token = captain.generateAuthToken();

    // Optionally, set the token as a cookie
    res.cookie("token", token, { httpOnly: true, maxAge: 3600000 });

    res.status(200).json({ token, captain });
  } catch (error) {
    console.error("Login error:", error);
    next(error);
  }
};


module.exports.getCaptainProfile = async (req, res, next) => {
  res.status(200).json({ captain: req.captain });
};

module.exports.logoutCaptain = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (token) {
    await blacklistToken.create({ token });
    res.clearCookie("token");
  }

  res.status(200).json({ message: "Logout successfully" });
};
