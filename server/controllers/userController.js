const userModel = require("../models/userModel");
const userService = require("../services/userService");
const { validationResult } = require("express-validator"); // Correct import
const blackListTokenModel = require("../models/blacklistToken");
// register user controller
module.exports.registerUser = async (req, res, next) => {
  // Validate input
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  console.log(req.body);

  const { fullName, email, password } = req.body;

  const isUserAlready = await userModel.findOne({ email });

  if (isUserAlready) {
    return res.status(400).json({ message: "User already exist" });
  }

  try {
    // Hash the password
    const hashPassword = await userModel.hashPassword(password);

    // Create user in the database
    const user = await userService.createUser({
      firstName: fullName.firstName,
      lastName: fullName.lastName,
      email,
      password: hashPassword,
    });

    // Generate a JWT token
    const token = user.generateAuthToken();

    // Respond with token and user details
    res.status(201).json({ token, user });
  } catch (error) {
    // Handle errors (e.g., duplicate email)
    if (error.code === 11000) {
      // MongoDB duplicate key error
      return res.status(400).json({ error: "Email already exists" });
    }
    next(error); // Pass unexpected errors to the error handler
  }
};

// login user controller
module.exports.loginUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  const user = await userModel.findOne({ email }).select("+password");

  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const token = user.generateAuthToken();

  res.cookie("token", token);

  res.status(200).json({ token, user });
};

// profile user controller
module.exports.getUserProfile = async (req, res, next) => {
  res.status(200).json(req.user);
};

// logout user controller
module.exports.logoutUser = async (req, res, next) => {
  res.clearCookie("token");
  const token = req.cookies.token || req.header("authorization")?.split(" ")[1];

  await blackListTokenModel.create({ token });

  res.status(200).json({ message: "Logged out" });
};
