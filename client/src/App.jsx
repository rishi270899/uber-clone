import React from "react";
import { Route, Routes } from "react-router-dom";
import Start from "./pages/Start";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";
import Home from "./pages/Home";
import UserProtectedWrapper from "./pages/UserProtectedWrapper";
import UserLogout from "./pages/UserLogout";
import CaptainHome from "./pages/CaptainHome";
import CaptainProtectedWrapper from "./pages/CaptainProtectedWrapper";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/Login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captainlogin" element={<CaptainLogin />} />
        <Route path="/captainsignup" element={<CaptainSignup />} />
        <Route
          path="/home"
          element={
            <UserProtectedWrapper>
              <Home />
            </UserProtectedWrapper>
          }
        />

        <Route
          path="/users/logout"
          element={
            <UserProtectedWrapper>
              <UserLogout />
            </UserProtectedWrapper>
          }
        />

        <Route
          path="/captainHome"
          element={
            // <CaptainProtectedWrapper>
             
            // </CaptainProtectedWrapper>
            <CaptainHome />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
