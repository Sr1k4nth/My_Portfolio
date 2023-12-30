import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function Privateroute() {
  let auth = { token: sessionStorage.getItem("accessToken") };

  return auth?.token ? <Navigate to="/" /> : <Outlet />;
}

export default Privateroute;
