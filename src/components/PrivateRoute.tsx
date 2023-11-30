import React from "react";
import { Navigate, Outlet } from "react-router-dom";

type PrivateRouteType = {
  isAllowed: boolean;
  redirectPath?: string;
  children: React.ReactNode;
};

const PrivateRoute = ({
  isAllowed,
  redirectPath = "/auth/login",
  children,
}: PrivateRouteType) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }
  return children ? children : <Outlet />;
};

export default PrivateRoute;
