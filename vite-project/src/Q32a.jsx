//create a private route in ur react that only authenticated users can access a specific page create a privateRoute component that check if user is authenticated before rendering the route

import { Navigate } from "react-router-dom";

export default function PrivateRoute({ isAuthenticated, children }) {
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }
    return children;
}