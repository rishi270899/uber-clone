const userModel = require("../models/userModel");
const userService = require("../services/userService");
const { validationResult } = require("express-validator"); // Correct import

// register user controller
module.exports.registerUser = async (req, res, next) => {
  // Validate input
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  console.log(req.body);

  const { fullName, email, password } = req.body;

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

  res.cookie('token', token);

  res.status(200).json({ token, user });
};

// profile user controller
module.exports.getUserProfile = async (req, res, next) => {
  res.status(200).json(req.user);
};
