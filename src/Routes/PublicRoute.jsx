import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import Home from "../Pages/Home/Home";
import Login from "./../Pages/Login/Login";
import Register from "../Pages/Register/Regsiter";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      { path: "/", element: <Home />, loader: () => fetch("/data.json") },
      {
        path: "/service/:id",
        element: <ServiceDetails />,
        loader: () => fetch("/data.json"),
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);
