import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  const { user, setUser } = React.useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();

    // setUserData({
    //   email: email,
    //   password: password,
    //   fullName: {
    //     firstName: firstName,
    //     lastName: lastName,
    //   },
    // });

    // console.log(userData);

    const newUser = {
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/register`,
      newUser
    );

    if (response.status == 201) {
      const data = response.data;
      localStorage.setItem('token',data.token)
      setUser(data.user);

      navigate("/home");
    }

    setfirstName("");
    setlastName("");
    setEmail("");
    setPassword("");
  };

  // useEffect(() => {
  //   console.log(userData);
  // }, [userData]);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 p-4 ">
      {/* Card Container */}
      <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/3 bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl ">
        {/* Logo */}
        <div className="mb-8">
          <img className="w-20" src="Uber_logo_2018.png" alt="Uber Logo" />
        </div>

        {/* Form */}
        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2 text-gray-800">
            What&apos;s your name
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
            What&apos;s your email
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
            Create Account
          </button>

          <p className="text-center text-gray-600 mb-20 ">
            Exist User!{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login Here
            </Link>
          </p>
        </form>

        {/* Additional Login Option */}
        <div className="mt-6">
          <p className="text-[10px] leading-tight">
            By proceeding, you consent to get calls, WhatsApp or SMS message,
            including by automated means, from Uber and its affiliates to the
            number provided.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;
