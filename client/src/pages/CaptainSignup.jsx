import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      email: email,
      password: password,
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
    });

    // console.log(userData);

    setfirstName("");
    setlastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 p-4 ">
      {/* Card Container */}
      <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/3 bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl ">
        {/* Logo */}
        <div className="mb-3">
          <img className="w-20" src="uber-driver.svg" alt="Uber Logo" />
        </div>

        {/* Form */}
        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2 text-gray-800">
            What&apos;s our Captain&apos;s name
          </h3>

          <div className="flex gap-4">
            <input
              className="bg-gray-200 mb-5 rounded px-4 py-2 border w-1/2  text-lg placeholder:text-base focus:outline-none focus:ring-2 focus:ring-black"
              type="text"
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
              required
              placeholder="First Name"
            />
            <input
              className="bg-gray-200 mb-5 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base focus:outline-none focus:ring-2 focus:ring-black"
              type="text"
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
              required
              placeholder="Last Name"
            />
          </div>

          <h3 className="text-lg font-medium mb-2 text-gray-800">
          What&apos;s our Captain&apos;s email
          </h3>
          <input
            className="bg-gray-200 mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base focus:outline-none focus:ring-2 focus:ring-black"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email@example.com"
          />

          <h3 className="text-lg font-medium mb-2 text-gray-800">
            Enter Password
          </h3>
          <input
            className="bg-gray-200 mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-lg focus:outline-none focus:ring-2 focus:ring-black"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />

          <button
            type="submit"
            className="bg-black text-white font-semibold mb-4 rounded px-4 py-2 w-full text-lg hover:bg-gray-800 transition duration-300"
          >
            Register
          </button>

          <p className="text-center text-gray-600 mb-20 ">
            Exist Captain!{" "}
            <Link to="/captainlogin" className="text-blue-600 hover:underline">
              Login Here
            </Link>
          </p>
        </form>

        {/* Additional Login Option */}
        <div className="mt-6">
          <p className="text-[10px] leading-tight">
            Thid site is protected by reCAPTCHA and the{" "}
            <span className="underline">Google Privacy Policy</span> and{" "}
            <span className="underline">Terms of Service apply</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaptainSignup;
