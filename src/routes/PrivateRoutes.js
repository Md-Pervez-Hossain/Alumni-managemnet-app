import React, { useContext } from "react";
import { AuthContext } from "../sharedComponents/UseContext/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (user && user.uid) {
    return children;
  }

  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoutes;
