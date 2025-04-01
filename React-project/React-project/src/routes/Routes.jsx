import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Layout from "../pages/Layout";
import ForgetPassword from "../auth/ForgetPassword";
import UpdatePassword from "../user/UpdatePassword"
import UpdatePicture from "../user/UpdatePicture"
import UpdateProfile from "../user/UpdateProfile"
import UserAccount from "../user/UserAccount"
import UserLayout from "../user/UserLayout"
import AdminLayout from "../admin/AdminLayout";
import AdminDashboard from "../admin/AdminDashboard";
import AddAlbum from "../admin/AddAlbum";
const routes=createBrowserRouter([
    {
        path: "/",
        element:<Layout/>,
        children:[
            {
                path: "/",
                element:<Home/>
            },
            {
                path:"auth/login",
                element:<Login/>
            },
            {
                path:"auth/register",
                element:<Register/>
            },
            {
                path:"auth/forget-password",
                element: <ForgetPassword />
            },{
                path: "admin",
                element: <AdminLayout />,
                children:[
                    {
                        index:true,
                        element: <AdminDashboard />
                    },
                    {
                        path: "add-album",
                        element: <AddAlbum />
                    }
                ]
            },{
                path:"user-profile",
                element: <UserLayout />,
                children:[
                    {
                        index:true,
                        element: <UserAccount />

                    },
                    {
                        path:"user-picture",
                        element:<UpdatePicture />
                    },
                    {
                        path:"user-profile",
                        element:<UpdateProfile />
                    },{
                        path: "user-password",
                        element: <UpdatePassword />
                    }
                ]
            }
        ]
    }
])

export default routes