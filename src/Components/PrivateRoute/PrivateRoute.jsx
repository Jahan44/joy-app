import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "./../Datas/FireDatas";

const PrivateRoute = () => {
  const { users } = useAuth();
  const userHandle = () => {
    console.log(users.email);
  };
  userHandle();

  return users?.email ? <Outlet></Outlet> : <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
