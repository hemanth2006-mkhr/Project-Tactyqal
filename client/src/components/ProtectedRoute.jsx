import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token"); // Ensure key matches what you set on login

  if (!token) {
    return <Navigate to="/admin" replace />;
  }

  return children;
};

export default ProtectedRoute;