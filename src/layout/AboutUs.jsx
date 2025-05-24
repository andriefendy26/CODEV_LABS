import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white py-20 px-4 relative overflow-hidden"
    >
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
      <div className="relative z-10 max-w-5xl mx-auto text-center">
            {/* Badge */}
        <div data-aos="fade-down" className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white/80 mb-6">
          <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
          Sedikit Cerita
        </div>

        <h2
          data-aos="fade-up"
          className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent"
        >
          Tentang Kami
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto"
        >
          CODEV LABS adalah tim pengembang teknologi digital yang berfokus pada
          solusi inovatif seperti pembuatan website, aplikasi mobile, sistem
          IoT, dan analisis data. Kami percaya bahwa teknologi harus menjadi
          alat yang memberdayakan bisnis lokal maupun skala besar untuk
          berkembang secara efisien dan berkelanjutan.
        </p>

        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left text-sm text-white/80"
        >
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-md">
            <h3 className="text-white font-semibold text-lg mb-2">Visi</h3>
            <p>
              Menjadi mitra digital terbaik bagi bisnis lokal dan startup di
              seluruh Indonesia.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-md">
            <h3 className="text-white font-semibold text-lg mb-2">Misi</h3>
            <p>
              Memberikan layanan pengembangan teknologi yang terjangkau,
              inovatif, dan berkualitas tinggi.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-md">
            <h3 className="text-white font-semibold text-lg mb-2">Nilai</h3>
            <p>
              Inovasi, integritas, kolaborasi, dan komitmen terhadap kepuasan
              klien.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
