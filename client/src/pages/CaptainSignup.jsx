// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { CaptainDataContext } from "../context/CaptainContext";

// const CaptainSignup = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [firstName, setfirstName] = useState("");
//   const [lastName, setlastName] = useState("");
//   const [vechileColor, setVechileColor] = useState('')
//   const [vechilePlate, setVechilePlate] = useState('')
//   const [vechileCapacity, setVechileCapacity] = useState('')
//   const [vechileType, setVechileType] = useState('')

//   const { captain, setCaptain } = React.useContext(CaptainDataContext);

//   const submitHandler = (e) => {
//     e.preventDefault();
//     setUserData({
//       email: email,
//       password: password,
//       fullName: {
//         firstName: firstName,
//         lastName: lastName,
//       },
//     });

//     // console.log(userData);

//     setfirstName("");
//     setlastName("");
//     setEmail("");
//     setPassword("");
//   };

//   return (
//     <div className="h-screen flex items-center justify-center bg-gray-100 p-4 ">
//       {/* Card Container */}
//       <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/3 bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl ">
//         {/* Logo */}
//         <div className="mb-3">
//           <img className="w-20" src="uber-driver.svg" alt="Uber Logo" />
//         </div>

//         {/* Form */}
//         <form onSubmit={submitHandler}>
//           <h3 className="text-lg font-medium mb-2 text-gray-800">
//             What&apos;s our Captain&apos;s name
//           </h3>

//           <div className="flex gap-4">
//             <input
//               className="bg-gray-200 mb-5 rounded px-4 py-2 border w-1/2  text-lg placeholder:text-base focus:outline-none focus:ring-2 focus:ring-black"
//               type="text"
//               value={firstName}
//               onChange={(e) => setfirstName(e.target.value)}
//               required
//               placeholder="First Name"
//             />
//             <input
//               className="bg-gray-200 mb-5 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base focus:outline-none focus:ring-2 focus:ring-black"
//               type="text"
//               value={lastName}
//               onChange={(e) => setlastName(e.target.value)}
//               required
//               placeholder="Last Name"
//             />
//           </div>

//           <h3 className="text-lg font-medium mb-2 text-gray-800">
//             What&apos;s our Captain&apos;s email
//           </h3>
//           <input
//             className="bg-gray-200 mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base focus:outline-none focus:ring-2 focus:ring-black"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             placeholder="Email@example.com"
//           />

//           <h3 className="text-lg font-medium mb-2 text-gray-800">
//             Enter Password
//           </h3>
//           <input
//             className="bg-gray-200 mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-lg focus:outline-none focus:ring-2 focus:ring-black"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             placeholder="Password"
//           />

//           <button
//             type="submit"
//             className="bg-black text-white font-semibold mb-4 rounded px-4 py-2 w-full text-lg hover:bg-gray-800 transition duration-300"
//           >
//             Register
//           </button>

//           <p className="text-center text-gray-600 mb-20 ">
//             Exist Captain!{" "}
//             <Link to="/captainlogin" className="text-blue-600 hover:underline">
//               Login Here
//             </Link>
//           </p>
//         </form>

//         {/* Additional Login Option */}
//         <div className="mt-6">
//           <p className="text-[10px] leading-tight">
//             Thid site is protected by reCAPTCHA and the{" "}
//             <span className="underline">Google Privacy Policy</span> and{" "}
//             <span className="underline">Terms of Service apply</span>.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CaptainSignup;


import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainSignup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState(""); // New state for vehicleType

  const { captain, setCaptain } = React.useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();

    // Example data object to pass somewhere
    const newCaptain = {
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
      vehicleDetails: {
        vehicleColor: vehicleColor,
        vehiclePlate: vehiclePlate,
        vehicleCapacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };

    // const response = await axios.post(
    //   `${import.meta.env.VITE_BASE_URL}/captain/register`,
    //   newCaptain
    // );

    // if (response.status === 201) {
    //   const data = response.data;
    //   // setCaptain(data.captain);
    //   localStorage.setItem("token", data.token);
    //   navigate("/capatainHome");
    // }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captain/register`,
        // `http://localhost:4000/captain/register`,
        newCaptain
      );

      if (response.status == 201) {
        const data = response.data;
        console.log("Registration successful:", data);
        localStorage.setItem("token", data.token);
        setCaptain(data.captain);
        navigate("/capatainHome");
      } else {
        console.error("Unexpected status code:", response.status);
      }
    } catch (error) {
      console.error(
        "Error during registration:",
        error.response?.data || error.message
      );
      alert(
        `Registration Failed: ${error.response?.data?.message || error.message}`
      );
    }

    console.log(newCaptain); // Log to see data

    // Clear the fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleType("");
  };

  return (
    <div className="h-full flex items-center justify-center bg-gray-100 p-4">
      {/* Card Container */}
      <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/3 bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl">
        {/* Logo */}
        <div className="mb-3">
          <img className="w-20" src="uber-driver.svg" alt="Uber Logo" />
        </div>

        {/* Form */}
        <form onSubmit={submitHandler}>
          {/* Name */}
          <h3 className="text-lg font-medium mb-2 text-gray-800">
            What&apos;s our Captain&apos;s name
          </h3>
          <div className="flex gap-4">
            <input
              className="bg-gray-200 mb-5 rounded px-4 py-2 border w-1/2 text-lg focus:outline-none focus:ring-2 focus:ring-black"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              required
            />
            <input
              className="bg-gray-200 mb-5 rounded px-4 py-2 border w-1/2 text-lg focus:outline-none focus:ring-2 focus:ring-black"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              required
            />
          </div>

          {/* Email */}
          <h3 className="text-lg font-medium mb-2 text-gray-800">
            What&apos;s our Captain&apos;s email
          </h3>
          <input
            className="bg-gray-200 mb-5 rounded px-4 py-2 border w-full text-lg focus:outline-none focus:ring-2 focus:ring-black"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email@example.com"
            required
          />

          {/* Password */}
          <h3 className="text-lg font-medium mb-2 text-gray-800">
            Enter Password
          </h3>
          <input
            className="bg-gray-200 mb-6 rounded px-4 py-2 border w-full text-lg focus:outline-none focus:ring-2 focus:ring-black"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />

          {/* Vehicle Type */}
          <h3 className="text-lg font-medium mb-2 text-gray-800">
            Select Vehicle Type
          </h3>
          <select
            className="bg-gray-200 mb-5 rounded px-4 py-2 border w-full text-lg focus:outline-none focus:ring-2 focus:ring-black"
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            required
          >
            <option value="" disabled>
              Choose vehicle type
            </option>
            <option value="car">Car</option>
            <option value="motorcycle">Motorcycle</option>
            <option value="auto">Auto</option>
          </select>

          {/* Vehicle Color */}
          <h3 className="text-lg font-medium mb-2 text-gray-800">
            Vehicle Color
          </h3>
          <input
            className="bg-gray-200 mb-5 rounded px-4 py-2 border w-full text-lg focus:outline-none focus:ring-2 focus:ring-black"
            type="text"
            value={vehicleColor}
            onChange={(e) => setVehicleColor(e.target.value)}
            placeholder="e.g., Red, Black"
          />

          {/* Vehicle Capacity */}
          <h3 className="text-lg font-medium mb-2 text-gray-800">
            Vehicle Capacity
          </h3>
          <input
            className="bg-gray-200 mb-5 rounded px-4 py-2 border w-full text-lg focus:outline-none focus:ring-2 focus:ring-black"
            type="number"
            value={vehicleCapacity}
            // onChange={(e) => setVehicleCapacity(e.target.value)}
            onChange={(e) => {
              const value = parseInt(e.target.value, 10);
              if (value > 1 || e.target.value == "") {
                setVehicleCapacity(value);
              }
            }}
            placeholder="e.g., 4"
          />

          {/* Vehicle Plate */}
          <h3 className="text-lg font-medium mb-2 text-gray-800">
            Vehicle Plate Number
          </h3>
          <input
            className="bg-gray-200 mb-5 rounded px-4 py-2 border w-full text-lg focus:outline-none focus:ring-2 focus:ring-black"
            type="text"
            value={vehiclePlate}
            onChange={(e) => setVehiclePlate(e.target.value)}
            placeholder="e.g., MH12AB1234"
          />

          {/* Submit */}
          <button
            type="submit"
            className="bg-black text-white font-semibold mb-4 rounded px-4 py-2 w-full text-lg hover:bg-gray-800 transition duration-300"
          >
            Register
          </button>

          <p className="text-center text-gray-600">
            Existing Captain?{" "}
            <Link to="/captainlogin" className="text-blue-600 hover:underline">
              Login Here
            </Link>
          </p>
        </form>

        {/* Footer */}
        <div className="mt-6 text-xs text-gray-500">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy Policy</span> and{" "}
          <span className="underline">Terms of Service apply</span>.
        </div>
      </div>
    </div>
  );
};

export default CaptainSignup;
