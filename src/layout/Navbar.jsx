import React from "react";
import Logo from "./../assets/black_logo.png";

export default function Navbar() {
  return (
    <nav className=" w-full flex items-center justify-around px-6 py-4 bg-white shadow-md sticky top-0 z-50">
      <>
        <div className="flex items-center mr-10">
          <img src={Logo} className="size-[50px]"></img>
          <div className="text-xl font-bold text-black">CODEV LABS</div>
        </div>

        <ul className="flex gap-6 text-sm font-medium">
          <li>
            <a href="#home" className="hover:bg-gray-300 p-2 rounded-lg ">
              Home
            </a>
          </li>
          <li>
            <a href="#services" className="hover:bg-gray-300 p-2 rounded-lg">
              Layanan
            </a>
          </li>
          <li>
            <a href="#portfolio" className="hover:bg-gray-300 p-2 rounded-lg">
              Portofolio
            </a>
          </li>
          <li>
            <a href="#about" className="hover:bg-gray-300 p-2 rounded-lg">
              Tentang
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:bg-gray-300 p-2 rounded-lg">
              Kontak
            </a>
          </li>
        </ul>
      </>
    </nav>
  );
}
