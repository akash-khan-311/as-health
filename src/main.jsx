import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { RouterProvider } from "react-router-dom";
import { Router } from "./Routes/PublicRoute.jsx";
import AuthProvider from "./ContextApi/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={Router}></RouterProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
