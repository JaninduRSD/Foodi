import { createBrowserRouter } from "react-router";
import {Main} from "../layout/Main"
import Home from "../pages/home/Home"

const router= createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
                path:"/",
                element:<Home/>
            }
        ]
    },
]);
export default router;