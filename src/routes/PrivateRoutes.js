import React, { useContext } from "react";
import { AuthContext } from "../sharedComponents/UseContext/AuthProvider";
import { Navigate } from "react-router-dom";
import Loading from "../sharedComponents/Loading/Loading";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Loading></Loading>;
  }
  if (user && user.uid) {
    return children;
  }

  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoutes;
