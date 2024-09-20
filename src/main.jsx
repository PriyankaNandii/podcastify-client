<<<<<<< HEAD
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './index.css'
import router from "./Routes/Router";
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
=======
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import AuthProviders from "./Providers/AuthProviders";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
>>>>>>> 7bae41bab359b454004711dd8e3785f55cda1279
  </React.StrictMode>
);
