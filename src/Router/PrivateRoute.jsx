/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const { user } = useContext(AuthContext)
    if (user) {
        return children;
    }
    return <Navigate to={'/Login'} state={{from: location}} replace />;
    
};

export default PrivateRoute;