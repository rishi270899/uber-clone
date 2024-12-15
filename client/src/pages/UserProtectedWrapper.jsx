import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token"); // Retrieve token
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login"); // Redirect to login if no token exists
    }
  }, [token, navigate]); // useEffect depends on token and navigate

  if (!token) {
    return null; // Prevent rendering children during redirection
  }

  return <>{children}</>; // Render children if token exists
};

export default UserProtectedWrapper;
