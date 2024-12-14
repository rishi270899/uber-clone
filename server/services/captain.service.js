const captainModel = require("../models/captain.model");
// const bcrypt = require("bcrypt");

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

  // Create the captain
  const captain = await captainModel.create({
    fullName: {
      firstName,
      lastName,
    },
    email,
    password, // Use the hashed password
    vehicle: {
      color,
      plate,
      capacity,
      vehicleType,
    },
  });

  return captain;
};

// const captainModel = require("../models/captain.model");
// const bcrypt = require("bcrypt");

// module.exports.createCaptain = async ({
//   firstName,
//   lastName,
//   email,
//   password,
//   color,
//   plate,
//   capacity,
//   vehicleType,
// }) => {
//   try {
//     // Check if captain with the provided email already exists
//     const existingCaptain = await captainModel.findOne({ email });
//     if (existingCaptain) {
//       throw new Error("Captain with this email already exists");
//     }

//     // Hash the password before saving
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create the captain
//     const captain = await captainModel.create({
//       fullName: {
//         firstName,
//         lastName,
//       },
//       email,
//       password: hashedPassword, // Use the hashed password
//       vehicle: {
//         color,
//         plate,
//         capacity,
//         vehicleType,
//       },
//     });

//     return captain;
//   } catch (error) {
//     throw new Error(error.message); // Pass the error message for handling at the controller level
//   }
// };
