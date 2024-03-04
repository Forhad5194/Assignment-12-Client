import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import Properties from "../Pages/Properties/Properties";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/SingUp/SingUp";
import PrivateRoute from "./PrivateRoute";
import Dashbord from "../Pages/Dashbord/Dashbord";
import PropertieDetails from "../Pages/Properties/PropertieDetails";
import AdvertisementDetails from "../Pages/Home/Advertisement/AdvertisementDetails";
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
                element: <PrivateRoute > <Properties /></PrivateRoute>
            },
            {
                path: "Dashbord",
                element: <PrivateRoute><Dashbord /></PrivateRoute>
            },
            {
                path: '/propertie/:id',
                element:  <PropertieDetails />
            },
            {
                path: '/card/:id',
                element: <PrivateRoute ><AdvertisementDetails /></PrivateRoute>,
            }

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