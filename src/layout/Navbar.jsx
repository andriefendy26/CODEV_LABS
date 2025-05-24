import React, { useState, useEffect } from "react";
import LogoWhite from "../assets/white_logo.png"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Layanan' },
    { href: '#portfolio', label: 'Portofolio' },
    { href: '#about', label: 'Tentang' },
    { href: '#contact', label: 'Kontak' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/95 backdrop-blur-md shadow-2xl border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-around">
          {/* Logo Section */}
          <div className="flex items-center group cursor-pointer">
            <div className="relative overflow-hidden rounded-xl p-2 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 group-hover:border-white/40 transition-all duration-300">
              <div className="size-[40px] bg-white/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {/* <span className="text-black font-bold text-lg">C</span> */}
                <img src={LogoWhite}></img>
              </div>
            </div>
            <div className="ml-3">
              <div className="text-xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                CODEV LABS
              </div>
              <div className="text-xs text-gray-400 -mt-1">Digital Solutions</div>
            </div>
          </div>

          {/* Navigation Menu */}
          <ul className="hidden md:flex items-center gap-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="group relative px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-all duration-300"
                >
                  {/* Background hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Border animation */}
                  <div className="absolute inset-0 border border-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Text */}
                  <span className="relative z-10">{item.label}</span>
                  
                  {/* Active indicator */}
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-white to-gray-300 group-hover:w-full transition-all duration-300"></div>
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          {/* <div className="hidden md:block">
            <a
              href="#contact"
              className="group relative px-6 py-3 bg-gradient-to-r from-white to-gray-200 text-black font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/25"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Mulai Konsultasi</span>
            </a>
          </div> */}

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors duration-300">
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className="w-6 h-0.5 bg-white rounded"></div>
              <div className="w-6 h-0.5 bg-white rounded"></div>
              <div className="w-6 h-0.5 bg-white rounded"></div>
            </div>
          </button>
        </div>

        {/* Animated bottom border */}
        <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent transition-opacity duration-300 ${
          scrolled ? 'opacity-100' : 'opacity-0'
        }`}></div>
      </div>

      {/* Floating navigation indicator */}
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2">
        <div className={`w-2 h-2 bg-white/60 rounded-full transition-all duration-300 ${
          scrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}></div>
      </div>
    </nav>
  );
}