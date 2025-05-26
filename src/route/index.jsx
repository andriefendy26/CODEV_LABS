import React from "react";
import Home from "../pages/Home";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../layout/ErrorPage";
import PortfolioDetail from "../layout/DetailPorto";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/detail/:id",
    element: <PortfolioDetail />,
  },
]);

export default router;
