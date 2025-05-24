import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import Routers from "./route/index";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000, // durasi animasi dalam ms
      once: true, // hanya animasi satu kali
    });
  }, []);
  return (
    <>
      <RouterProvider router={Routers}></RouterProvider>
    </>
  );
}

export default App;
