import React from "react";
import { RouterProvider } from "react-router-dom";
import Routers from "./Route/index";
import "./App.css";

function App() {
  return (
    <>
      <RouterProvider router={Routers}></RouterProvider>
    </>
  );
}

export default App;
