import { createBrowserRouter } from "react-router-dom";
import DashboardLayOut from "../Main/DashboardLayOut";
import Main from "../Main/Main";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import AddDoctor from "../Pages/DashBoard/AddDoctor/AddDoctor";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";
import ManageDoctor from "../Pages/DashBoard/ManageDoctor/ManageDoctor";
import MyAppointment from "../Pages/DashBoard/MyAppointment/MyAppointment";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Profile from "../Pages/Profile/Profile";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
        ]


    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayOut></DashboardLayOut></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/allusers',
                element: <AllUsers></AllUsers>
            },
            {
                path: '/dashboard/adddoctor',
                element: <AddDoctor></AddDoctor>
            },
            {
                path: '/dashboard/manageDoctor',
                element: <ManageDoctor></ManageDoctor>
            },
        ]
    }
])
export default router;