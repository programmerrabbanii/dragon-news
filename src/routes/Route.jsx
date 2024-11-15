import { createBrowserRouter, Navigate, Route } from "react-router-dom";
import MainLayOut from "../layouts/MainLayOut";
import About from "../Pages/About";
import Career from "../Pages/Career";
import CategoryNews from "../Pages/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "./PrivateRoute";

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
  {
    path:"/news/:id",
    element:
    <PrivateRoute>
      <NewsDetails></NewsDetails>,
    </PrivateRoute>,
    loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
  },
  {
    path:"auth",
    element:<AuthLayout></AuthLayout>,
    children:[
        {
            path:"/auth/login",
            element:<Login></Login> 
        },
        {
            path:"/auth/register",
            element:<Register></Register>
        }
    ]
  }
]);
export default router;
