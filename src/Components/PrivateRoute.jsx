import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth(); // Get user and loading state from auth context
    const location = useLocation();

    // Show loading indicator while checking authentication
    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="loading loading-bars loading-lg"></div>
            </div>
        );
    }

    // If no user is authenticated, redirect to login
    if (!user) {
        return <Navigate to='/login' state={{ from: location.pathname }} />;
    }

    // If authenticated, render the children (protected route)
    return <>{children}</>;
};

export default PrivateRoute;
