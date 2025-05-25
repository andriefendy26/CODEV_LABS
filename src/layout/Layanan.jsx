import React from "react";

export default function Layanan() {
  return (
    <section id="services" className="relative py-20 px-6 overflow-hidden">
   {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        {/* Decorative elements */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-green-100 to-blue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full blur-2xl opacity-40"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-16">
          <div
            data-aos="fade-down"
            className="inline-flex items-center px-4 py-2 bg-black/5 backdrop-blur-sm border border-black/10 rounded-full text-sm text-gray-600 mb-6"
          >
            <div
              
              className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"
            ></div>
            Solusi Digital Terlengkap
          </div>

          <h2
            data-aos="zoom-out"
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
              Layanan yang Kami
            </span>
            <br />
            <span className="bg-gradient-to-r from-gray-700 via-black to-gray-700 bg-clip-text text-transparent">
              Tawarkan
            </span>
          </h2>

          <p data-aos="fade-left" className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Berikut layanan utama yang bisa Anda pesan untuk mengembangkan
            bisnis digital Anda dengan teknologi terdepan.
          </p>
        </div>

        {/* Services Grid */}
        <div data-aos="fade-up" className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          <ServiceCard
          
            title="Website Development"
            icon="🖥️"
            desc="Pembuatan website profesional untuk bisnis, toko online, dan sistem informasi dengan teknologi modern."
            features={["Responsive Design", "SEO Optimized", "Fast Loading"]}
            color="from-blue-500 to-cyan-500"
          />
          <ServiceCard
            title="Aplikasi Android"
            icon="📱"
            desc="Pengembangan aplikasi Android native atau hybrid sesuai kebutuhan bisnis Anda."
            features={[
              "Native Performance",
              "User Friendly",
              "Play Store Ready",
            ]}
            color="from-green-500 to-emerald-500"
          />
          <ServiceCard
            title="Aplikasi Desktop"
            icon="🖱️"
            desc="Pengembangan aplikasi atau program berbasis desktop yang interaktif dan efisien."
            features={[
              "Cross-Platform",
              "UI/UX Friendly",
              "Integrasi Sistem Lokal",
            ]}
            color="from-yellow-500 to-amber-500"
          />
          <ServiceCard
            title="Proyek IoT"
            icon="🔌"
            desc="Sistem monitoring, kontrol perangkat, dan otomasi berbasis sensor dan mikrokontroler."
            features={[
              "Real-time Monitoring",
              "Remote Control",
              "Smart Automation",
            ]}
            color="from-purple-500 to-violet-500"
          />
          <ServiceCard  
            title="Analisis Data"
            icon="📊"
            desc="Visualisasi dan analisis data untuk mendukung pengambilan keputusan bisnis yang tepat."
            features={[
              "Data Visualization",
              "Business Intelligence",
              "Predictive Analysis",
            ]}
            color="from-orange-500 to-red-500"
          />
        </div>

        {/* Bottom CTA */}
        <div data-aos="zoom-out" className="mt-16 p-8 bg-gradient-to-r from-black/5 to-black/10 backdrop-blur-sm border border-black/10 rounded-3xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Tidak Menemukan yang Anda Cari?
          </h3>
          <p className="text-gray-600 mb-6">
            Kami siap membantu dengan solusi custom sesuai kebutuhan spesifik
            Anda
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-black to-gray-800 text-white font-semibold rounded-xl hover:from-gray-800 hover:to-black transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Diskusi Kebutuhan Anda
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, icon, desc, features, color }) {
  return (
    <div className="group relative bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl rounded-2xl p-8 transition-all duration-500 transform hover:-translate-y-2 border border-gray-100/50 hover:border-white">
      {/* Gradient background on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
      ></div>

      {/* Icon container */}
      <div className="relative mb-6">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${color} opacity-10 rounded-2xl blur-xl group-hover:opacity-20 transition-opacity duration-500`}
        ></div>
        <div className="relative text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-sm text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
          {desc}
        </p>

        {/* Features list */}
        <div className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center text-xs text-gray-500"
            >
              <div
                className={`w-2 h-2 bg-gradient-to-r ${color} rounded-full mr-2 opacity-70`}
              ></div>
              {feature}
            </div>
          ))}
        </div>

        {/* Learn more button */}
        <button
          className={`w-full py-2 px-4 bg-gradient-to-r ${color} text-white text-sm font-semibold rounded-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:shadow-lg`}
        >
          Pelajari Lebih Lanjut
        </button>
      </div>

      {/* Decorative corner */}
      <div
        className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${color} opacity-10 rounded-bl-3xl rounded-tr-2xl group-hover:opacity-20 transition-opacity duration-500`}
      ></div>
    </div>
  );
}
