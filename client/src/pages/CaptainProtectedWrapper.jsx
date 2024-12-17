import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CaptainProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/captainlogin");
    }
  }, [token, navigate]);

  if (!token) {
    return null;
  }
  return <div>{children}</div>;
};

export default CaptainProtectedWrapper;
