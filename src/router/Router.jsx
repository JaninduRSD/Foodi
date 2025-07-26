import { createBrowserRouter } from "react-router";
import {Main} from "../layout/Main"
import Home from "../pages/home/Home"
import Menu  from "../pages/shop/Menu";
import  SignUp  from "../components/SignUp";
import UpdateProfile  from "../pages/dashboard/UpdateProfile";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import CartPage from "../pages/shop/CartPage";

const router= createBrowserRouter([
    {
        path:"/", 
        element:<Main/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path: "/menu",
                element:<Menu/>
            },
            {
                path: "/cart-page",
                element:<PrivateRouter><CartPage /></PrivateRouter>
            },
            {
                path: "/update-profile",
                element: <PrivateRouter><UpdateProfile /></PrivateRouter>
            }
        ]
    },
    {
        path: "/signup",
        element: <SignUp />
    }
]);
export default router;