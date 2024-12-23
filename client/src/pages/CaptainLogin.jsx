import React, { useState } from "react";

import { Link } from "react-router-dom";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({
      email: email,
      password: password,
    });

    console.log(captainData);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 px-4 ">
      {/* Card Container */}
      <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/3 bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl">
        {/* Logo */}
        <div className="mb-3">
          <img className="w-20" src="uber-driver.svg" alt="Uber Logo" />
        </div>

        {/* Form */}
        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2 text-gray-800">
            What&apos;s your email
          </h3>
          <input
            className="bg-gray-200 mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base focus:outline-none focus:ring-2 focus:ring-black"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="email@example.com"
          />

          <h3 className="text-lg font-medium mb-2 text-gray-800">
            Enter Password
          </h3>
          <input
            className="bg-gray-200 mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base focus:outline-none focus:ring-2 focus:ring-black"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="password"
          />

          <button
            type="submit"
            className="bg-black text-white font-semibold mb-4 rounded px-4 py-2 w-full text-lg hover:bg-gray-800 transition duration-300"
          >
            Login
          </button>

          <p className="text-center text-gray-600 mb-20">
            Join a fleet?{" "}
            <Link to="/captainsignup" className="text-blue-600 hover:underline">
              Register as a Captain
            </Link>
          </p>
        </form>

        {/* Additional Login Option */}
        <div className="mt-6">
          <Link
            to="/Login"
            className="bg-[#e69d31] hover:bg-[#d58204] flex items-center justify-center text-white font-semibold rounded px-4 py-2 w-full text-lg transition duration-300"
          >
            Sign in as User
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaptainLogin;
