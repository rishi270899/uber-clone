// import React from "react";
// import { Link } from "react-router-dom";

// const Home = () => {
//   return (
//     <div>
//       <div className="bg-cover bg-center bg-[url(trafice-image.avif)] h-screen w-full pt-9 flex justify-between flex-col bg-red-400">
//         <img className="w-16 ml-8" src="Uber_logo_2018.png" alt="" />
//         <div className="bg-white py-4 px-4 pb-7">
//           <h2 className="text-3xl font-bold">Get Started with Uber</h2>
//         <Link to="/login" className=" flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5">Continue</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;



// import React from "react";
// import { Link } from "react-router-dom";

// const Home = () => {
//   return (
//     <div className="min-h-screen">
//       {/* Mobile Layout */}
//       <div className="bg-cover bg-center bg-[url('trafice-image.avif')] h-screen w-full flex flex-col justify-between md:hidden">
//         {/* Logo */}
//         <img className="w-16 ml-8 pt-4" src="Uber_logo_2018.png" alt="Uber Logo" />
//         {/* Content */}
//         <div className="bg-white py-4 px-6 pb-7 mx-4 rounded shadow-lg">
//           <h2 className="text-3xl font-bold text-center">Get Started with Uber</h2>
//           <Link
//             to="/login"
//             className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5 hover:bg-gray-800"
//           >
//             Continue
//           </Link>
//         </div>
//       </div>

//       {/* Desktop Layout */}
//       <div className="hidden md:flex flex-col lg:flex-row items-center justify-between px-8 py-16 bg-gray-100 min-h-screen">
//         {/* Logo Section */}
//         <div className="flex flex-col items-start lg:w-1/3">
//           <img className="w-32 mb-8" src="Uber_logo_2018.png" alt="Uber Logo" />
//           <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Uber</h1>
//           <p className="text-gray-600 text-lg">
//             Book your ride or explore our services to get started.
//           </p>
//         </div>

//         {/* Card Section */}
//         <div className="bg-white shadow-lg rounded-lg p-8 w-full lg:w-1/3">
//           <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
//             Get Started with Uber
//           </h2>
//           <p className="text-gray-600 mb-4 text-center">
//             Log in to your account to begin your journey.
//           </p>
//           <Link
//             to="/login"
//             className="flex items-center justify-center bg-black text-white py-3 rounded hover:bg-gray-800"
//           >
//             Continue
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;




import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat bg-[url('pexels-jakeheinemann-2399254.jpg')] min-h-screen flex flex-col justify-between px-6 py-8"
    >
      {/* Logo Section */}
      <div className="flex items-start bg-white justify-center w-[100px] p-3 rounded-full">
        <img className="w-16" src="Uber_logo_2018.png" alt="Uber Logo" />
      </div>

      {/* Main Content Section */}
      <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg max-w-md mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Get Started with Uber
        </h2>
        <p className="text-gray-600 mb-6">
          Log in to your account or explore our services to begin your journey.
        </p>
        <Link
          to="/login"
          className="bg-black text-white py-3 rounded w-full inline-block hover:bg-gray-800 transition duration-300"
        >
          Continue
        </Link>
      </div>

    </div>
  );
};

export default Home;
