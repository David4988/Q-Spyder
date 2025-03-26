import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Layout from "../pages/Layout";

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
        ]
    }
])

export default routes