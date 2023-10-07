import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import Home from "../Pages/Home/Home";
import Login from "./../Pages/Login/Login";
import Register from "../Pages/Register/Regsiter";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Pricing from "../components/Pricing/Pricing";
import DashBoard from "../Pages/DashBoard/DashBoard";
import Blogs from "../Pages/Blogs/Blogs";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import PrivateRoute from "./PrivateRoute";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      { path: "/", element: <Home />, loader: () => fetch("/data.json") },
      {
        path: "/service/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails />
          </PrivateRoute>
        ),
        loader: () => fetch("/data.json"),
      },
      { path: "/pricing", element: <Pricing /> },
      { path: "/contact", element: <Contact /> },
      { path: "/login", element: <Login /> },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <DashBoard />
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs",
        element: (
          <PrivateRoute>
            <Blogs />{" "}
          </PrivateRoute>
        ),
      },
      { path: "/register", element: <Register /> },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
]);
