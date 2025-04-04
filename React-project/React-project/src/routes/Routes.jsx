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
import DeleteAccount from "../user/DeleteAccount";
import Dashboard from "../components/home/Dashboard";

import AlbumDetails from "../components/home/AlbumDetails";
import PublicRoutes from "./PublicRoutes";
import NotFound from "../pages/NotFound";
import PrivateRoutes from "./PrivateRoutes";
import AdminProtected from "./AdminProtected"
const routes=createBrowserRouter([
    {
        path: "/",
        element:<Layout/>,
        children:[
            {
                path: "/",
                element:<PrivateRoutes><Home/></PrivateRoutes>,
                children: [
                    {
                        index:true,
                        element:<Dashboard />
                    },
                    {
                        path:`album-details`,
                        element:<AlbumDetails />
                    }
                ]
            },
            {
                path:"auth/login",
                element:<PublicRoutes>
                            <Login/>
                        </PublicRoutes>
            },
            {
                path:"auth/register",
                element:<PublicRoutes>
                            <Register />
                        </PublicRoutes>
            },
            {
                path:"auth/forget-password",
                element: <PublicRoutes>
                            <ForgetPassword />
                        </PublicRoutes>
            },{
                path: "admin",
                element: <AdminProtected>
                            <AdminLayout />
                        </AdminProtected>,
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
                        element: <PrivateRoutes>
                                    <UserAccount />
                                </PrivateRoutes>

                    },
                    {
                        path:"user-picture",
                        element:<PrivateRoutes>
                                    <UpdatePicture />
                                </PrivateRoutes>
                    },
                    {
                        path:"user-profile",
                        element:<PrivateRoutes>
                                    <UpdateProfile />
                                </PrivateRoutes>
                    },{
                        path: "user-password",
                        element:<PrivateRoutes>
                                    <UpdatePassword />
                                </PrivateRoutes>
                    },
                    {
                        path: "delete-account",
                        element: <PrivateRoutes>
                                    <DeleteAccount />
                                </PrivateRoutes>
                    }
                ]
            },
            {
                path:"*",
                element:<NotFound />
            }
        ]
    }
])

export default routes