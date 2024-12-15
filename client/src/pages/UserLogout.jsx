// import React from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const UserLogout = () => {
//   const token = localStorage.getItem("token");
//   const navigate = useNavigate();

//   axios
//     .get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//     .then((response) => {
//       if (response.status === 200) {
//         localStorage.removeItem("token");
//         navigate("/login");
//       }
//     });

//   return <div>UserLogout</div>;
// };

// export default UserLogout;



import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        const token = localStorage.getItem("token");

        // Call the logout API
        await axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } catch (error) {
        console.error("Error during logout:", error);
      } finally {
        // Ensure the token is removed and user is redirected
        localStorage.removeItem("token");
        navigate("/login");
      }
    };

    logout();
  }, [navigate]);

  return <div>Logging out...</div>;
};

export default UserLogout;
