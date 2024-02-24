import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import Properties from "../Pages/Properties/Properties";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/SingUp/SingUp";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'propertie',
                element: <Properties />,
            },

        ],


    },
    {
        path: 'Login',
        element: <Login />,
    },
    {
        path: 'SingUp',
        element: <SingUp />,
    }

])