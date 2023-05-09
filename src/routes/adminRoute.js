import React, { useContext } from "react";
import { AuthContext } from "../sharedComponents/UseContext/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../sharedComponents/Loading/Loading";
import useAdmin from "../customHooksReact/useAdmin";

const AdminRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace={true}></Navigate>;
};

export default AdminRoutes;
