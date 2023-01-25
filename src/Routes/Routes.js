import { createBrowserRouter } from "react-router-dom";
import DashboardLayOut from "../Main/DashboardLayOut";
import Main from "../Main/Main";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import MyAppointment from "../Pages/DashBoard/MyAppointment/MyAppointment";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/appointment',
                element:<Appointment></Appointment>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]


    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayOut></DashboardLayOut></PrivateRoute>,
        children:[
            {
                path:'/dashboard',
                element:<MyAppointment></MyAppointment>
            }
        ]
    }
])
export default router;