import React, { useContext } from "react";
import { AuthContext } from "../ContextApi/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  if (loading) {
    return (
      <div className="flex justify-center py-40">
        <Spinner className="h-16 w-16 text-gray-900/50" />;
      </div>
    );
  }
  if (user) {
    return children;
  }

  return <Navigate to={"/login"} state={{ from: location }} replace />;
};

export default PrivateRoute;
