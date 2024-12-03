
const captainModel = require("../models/captain.model");
const bcrypt = require("bcrypt");

module.exports.createCaptain = async ({
  firstName,
  lastName,
  email,
  password,
  color,
  plate,
  capacity,
  vehicleType,
}) => {
  // Validation for required fields
  if (
    !firstName ||
    !lastName ||
    !email ||
    !password ||
    !color ||
    !plate ||
    !capacity ||
    !vehicleType
  ) {
    throw new Error("All fields are required");
  }

  // Hash the password before saving
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create the captain
  const captain = await captainModel.create({
    fullName: {
      firstName,
      lastName,
    },
    email,
    password: hashedPassword, // Use the hashed password
    vehicle: {
      color,
      plate,
      capacity,
      vehicleType,
    },
  });

  return captain;
};
