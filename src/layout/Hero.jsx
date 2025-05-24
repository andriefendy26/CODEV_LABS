import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-blue-50 to-white"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Solusi Digital untuk Bisnis Anda
      </h1>
      <p className="text-lg md:text-xl mb-6 max-w-xl">
        Kami adalah pengembang Website, Aplikasi Android, IoT, dan Analis Data
        siap membantu Anda membangun solusi digital yang optimal.
      </p>
      <div className="flex gap-4">
        <a
          href="#contact"
          className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        >
          Konsultasi Gratis
        </a>
        <a
          href="#portfolio"
          className="px-6 py-3 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition"
        >
          Lihat Portofolio
        </a>
      </div>
    </section>
  );
}
