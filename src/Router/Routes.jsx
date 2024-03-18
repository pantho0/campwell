import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import CampDetails from "../Pages/CampDetails/CampDetails";
import useAxiosPublic from "../Components/Hooks/useAxiosPublic";


const axiosPublic = useAxiosPublic()

export const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout/>,
      children:[
        {   
            index : true,
            element: <Home/>
        },
        {
          path : 'login',
          element: <Login/>
        },
        {
          path :'signup',
          element : <Signup/>
        },
        {
          path : '/camp-details/:campID',
          element : <CampDetails/>,
          loader : async ({params}) => await axiosPublic(`/camp-details/${params.campID}`)

        }
      ]
    },
    {
      path: '/dashboard',
      element : <Dashboard/>,
      children:[

      ]
    }
  ]);
  