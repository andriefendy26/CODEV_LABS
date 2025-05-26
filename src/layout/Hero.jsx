import Aos from "aos";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Helmet } from "react-helmet";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden"
    >
      <Helmet>
        <title>CODEV LABS</title>
        <meta property="og:site_name" content="codev-labs-s4xd.vercel.app" />
        <meta property="og:title" content="Solusi Digital untuk TAnda" />
        <meta
          property="og:description"
          content="Kami adalah pengembang Website, Aplikasi Android, IoT, dan Analis Data siap membantu Anda membangun solusi digital yang optimal."
        />
        <meta
          property="og:image"
          content="https://codev-labs-s4xd.vercel.app/assets/white_logo-BBUWN1vC.png"
        />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="og:url" content="https://codev-labs-s4xd.vercel.app/" />
      </Helmet>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/15 rounded-lg rotate-45 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-white/20 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-1/3 w-8 h-8 bg-white/10 rounded-full animate-pulse"></div>

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-white/8 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-white">
        <h1
          data-aos="fade-up"
          className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent animate-pulse"
        >
          Solusi Digital untuk{" "}
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Bisnis",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "Project",
              1000,
              "Tugas",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: "1em",
              display: "inline-block",
              fontStyle: "bold",
              letterSpacing: "2px",
            }}
            repeat={Infinity}
          />
          Anda
        </h1>
        <p
          data-aos="fade-down"
          className="text-lg md:text-xl mb-8 max-w-4xl text-center  text-gray-300 leading-relaxed"
        >
          Kami adalah pengembang Website, Aplikasi Android, IoT, dan Analis Data
          siap membantu Anda membangun solusi digital yang optimal.
        </p>
        <div
          data-aos="zoom-in"
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="group px-8 py-4 bg-gradient-to-r from-white to-gray-200 text-black rounded-2xl hover:from-gray-100 hover:to-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-white/25 font-semibold"
          >
            <span className="group-hover:animate-pulse">Konsultasi Gratis</span>
          </a>
          <a
            href="#portfolio"
            className="group px-8 py-4 border-2 border-white/50 text-white rounded-2xl hover:bg-white/10 hover:border-white transition-all duration-300 transform hover:scale-105 backdrop-blur-sm font-semibold"
          >
            <span className="group-hover:animate-pulse">Lihat Portofolio</span>
          </a>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>

      <style jsx>{`
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0;
            transform: scale(0.5);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
