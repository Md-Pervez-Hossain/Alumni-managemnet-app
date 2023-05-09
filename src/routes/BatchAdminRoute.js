import React, { useContext } from "react";
import { AuthContext } from "../sharedComponents/UseContext/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../sharedComponents/Loading/Loading";
import useBatchAdmin from "../customHooksReact/useBatchAdmin";

const BatchAdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isBatchAdmin, isBatchAdminLoading] = useBatchAdmin(user?.email);
  const location = useLocation();

  if (loading || isBatchAdminLoading) {
    return <Loading></Loading>;
  }

  if (user && isBatchAdmin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace={true}></Navigate>;
};

export default BatchAdminRoute;
