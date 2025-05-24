
import React from "react";
import Home from "../pages/Home";
import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/About",
    element: <Home />,
  },
  {
    path: "/Project",
    element: <Home />,
  },
  {
    path: "/Contact",
    element: <Home />,
  },
]);

export default router;