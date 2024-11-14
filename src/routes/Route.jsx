import { createBrowserRouter, Navigate, Route } from "react-router-dom";
import MainLayOut from "../layouts/MainLayOut";
import About from "../Pages/About";
import Career from "../Pages/Career";
import CategoryNews from "../Pages/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children:[
        {
            path:"",
            element:<Navigate to={"/category/01"}></Navigate>

        },
        {
            path:"/category/:id",
            element:<CategoryNews></CategoryNews>,
            loader:({params})=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            
        }
    ]
  },

  {
    path: "/about",
    element: <About></About>,
  },
  {
    path: "/career",
    element: <Career></Career>,
  },
]);
export default router;
