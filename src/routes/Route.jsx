import { createBrowserRouter, Route } from "react-router-dom";
import MainLayOut from "../layouts/MainLayOut";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Career from "../Pages/Career";

const router=createBrowserRouter([
    {
        path:"/",
        element:<MainLayOut></MainLayOut>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/about",
                element:<About></About>
            },
            {
                path:"/career",
                element:<Career></Career>

            }
        ]
    }
]);
export default router