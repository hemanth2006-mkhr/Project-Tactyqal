import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import ProtectedRoute from "../../components/ProtectedRoute";
import AdminLogin from "./AdminLogin";
import React from 'react';

const AdminIndex = () => {
  return (
    <Routes>
      {/* Root of /admin/* acts as the Login Page */}
      <Route path="/" element={<AdminLogin />} />
      
      {/* Protected Dashboard sits at /admin/dashboard */}
      <Route 
        path="dashboard" 
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        } 
      />
    </Routes>
  );
};

export default AdminIndex;