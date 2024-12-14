const userModel = require("../models/userModel");
const captainModel = require('../models/captain.model');
const jwt = require("jsonwebtoken");
const blackListTokenModel = require('../models/blacklistToken');

// Middleware to authenticate a user
module.exports.authUser = async (req, res, next) => {
  const token = req.cookies.token || req.header("authorization")?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  try {
    // Check if the token is blacklisted
    const isBlackListed = await blackListTokenModel.findOne({ token });

    if (isBlackListed) {
      return res.status(401).json({ message: "Unauthorized: Token is blacklisted" });
    }

    // Decode and verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Fetch the user from the database
    const user = await userModel.findById(decoded._id);
    if (!user) {
      return res.status(401).json({ message: "Unauthorized: User not found" });
    }

    req.user = user;
    return next();
  } catch (error) {
    console.error("JWT verification failed:", error); // For debugging purposes
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};

// Middleware to authenticate a captain
module.exports.authCaptain = async (req, res, next) => {
  const token = req.cookies.token || req.header("authorization")?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  try {
    // Check if the token is blacklisted
    const isBlackListed = await blackListTokenModel.findOne({ token });

    if (isBlackListed) {
      return res.status(401).json({ message: "Unauthorized: Token is blacklisted" });
    }

    // Decode and verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Fetch the captain from the database
    const captain = await captainModel.findById(decoded._id);
    if (!captain) {
      return res.status(401).json({ message: "Unauthorized: Captain not found" });
    }

    req.captain = captain;
    return next();
  } catch (error) {
    console.error("JWT verification failed:", error); // For debugging purposes
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};

