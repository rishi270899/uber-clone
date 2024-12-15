// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const UserLogin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [userData, setUserData] = useState({});

//   const submitHandler = (e) => {
//     e.preventDefault();
//     setUserData({
//       email: email,
//       password: password,
//     });

//     setEmail("");
//     setPassword("");
//   };

//   return (
//     <div className="h-screen flex items-center justify-center bg-gray-100 px-4 ">
//       {/* Card Container */}
//       <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/3 bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl">
//         {/* Logo */}
//         <div className="mb-8">
//           <img className="w-20" src="Uber_logo_2018.png" alt="Uber Logo" />
//         </div>

//         {/* Form */}
//         <form onSubmit={submitHandler}>
//           <h3 className="text-lg font-medium mb-2 text-gray-800">
//             What&apos;s your email
//           </h3>
//           <input
//             className="bg-gray-200 mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base focus:outline-none focus:ring-2 focus:ring-black"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             placeholder="email@example.com"
//           />

//           <h3 className="text-lg font-medium mb-2 text-gray-800">
//             Enter Password
//           </h3>
//           <input
//             className="bg-gray-200 mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base focus:outline-none focus:ring-2 focus:ring-black"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             placeholder="password"
//           />

//           <button
//             type="submit"
//             className="bg-black text-white font-semibold mb-4 rounded px-4 py-2 w-full text-lg hover:bg-gray-800 transition duration-300"
//           >
//             Login
//           </button>

//           <p className="text-center text-gray-600 mb-20">
//             New here?{" "}
//             <Link to="/signup" className="text-blue-600 hover:underline">
//               Create new Account
//             </Link>
//           </p>
//         </form>

//         {/* Additional Login Option */}
//         <div className="mt-6">
//           <Link
//             to="/captainlogin"
//             className="bg-[#10b461] hover:bg-[#0ca059] flex items-center justify-center text-white font-semibold rounded px-4 py-2 w-full text-lg transition duration-300"
//           >
//             Sign in as Captain
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserLogin;




import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      email: email,
      password: password,
    });
    setEmail("");
    setPassword("");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-100 px-4"
      style={{
        backgroundImage: "url('pexels-jakeheinemann-2399254.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Card Container */}
      <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/3 bg-white bg-opacity-95 p-6 md:p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <img
            className="w-16 md:w-20"
            src="Uber_logo_2018.png"
            alt="Uber Logo"
          />
        </div>

        {/* Form */}
        <form onSubmit={submitHandler} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-1"
            >
              What&apos;s your email
            </label>
            <input
              id="email"
              className="bg-gray-100 rounded px-4 py-2 w-full border text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@example.com"
              aria-label="Email"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-1"
            >
              Enter Password
            </label>
            <input
              id="password"
              className="bg-gray-100 rounded px-4 py-2 w-full border text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              aria-label="Password"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-black text-white font-semibold rounded px-4 py-2 w-full text-lg hover:bg-gray-800 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Sign-up Link */}
        <p className="text-center text-gray-600 mt-4">
          New here?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Create new Account
          </Link>
        </p>

        {/* Additional Login Option */}
        <div className="mt-6">
          <Link
            to="/captainlogin"
            className="bg-green-500 hover:bg-green-600 flex items-center justify-center text-white font-semibold rounded px-4 py-2 w-full text-lg transition duration-300"
          >
            Sign in as Captain
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
