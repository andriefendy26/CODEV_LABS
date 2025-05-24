import React from "react";
import Home from "../pages/Home";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../layout/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
