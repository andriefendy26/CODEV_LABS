import React from "react";

export default function Layanan() {
  return (
    <section id="services" className="py-16 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl font-semibold mb-4">
        Layanan yang Kami Tawarkan
      </h2>
      <p className="text-gray-600 mb-10">
        Berikut layanan utama yang bisa Anda pesan:
      </p>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        <ServiceCard
          title="Website Development"
          icon="🖥️"
          desc="Pembuatan website profesional untuk bisnis, toko online, dan sistem informasi."
        />
        <ServiceCard
          title="Aplikasi Android"
          icon="📱"
          desc="Pengembangan aplikasi Android native atau hybrid sesuai kebutuhan."
        />
        <ServiceCard
          title="Proyek IoT"
          icon="🔌"
          desc="Sistem monitoring, kontrol perangkat, dan otomasi berbasis sensor dan mikrokontroler."
        />
        <ServiceCard
          title="Analisis Data"
          icon="📊"
          desc="Visualisasi dan analisis data untuk mendukung pengambilan keputusan bisnis."
        />
      </div>
    </section>
  );
}


function ServiceCard({ title, icon, desc }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}