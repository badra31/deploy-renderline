import React from "react";
import { Navigate, Outlet } from "react-router";

const useAuth = () => {
  const user = localStorage.getItem("user");
  if (user) {
    return true;
  } else {
    return false;
  }
};

const ProtectedRoute = ({ children }) => {
  const auth = useAuth();

  if (auth) {
    return children;
  }
  return <Navigate to="/" />;
};

export default ProtectedRoute;

// const ProtectedRoute = ({ user, children }) => {
//   if (!user) {
//     return <Navigate to="/" replace />;
//   }
//   return children;
// };

// export default ProtectedRoute;
