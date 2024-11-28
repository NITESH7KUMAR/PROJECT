import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, isAuthenticated }) => {
    // If the user is not authenticated, redirect to the login page and replace the history entry
    return isAuthenticated ? element : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
