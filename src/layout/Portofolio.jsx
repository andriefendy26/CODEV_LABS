import React, { useEffect, useRef } from "react";
import Aos from "aos";
import C2UKALTARA from "../assets/portofolio/c2ukaltara.png";
import CASHIERMATE from "../assets/portofolio/cashiermate.png";
import RDASSISTEM from "../assets/portofolio/rdas_system.png";
import "aos/dist/aos.css";

export default function Portfolio() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  const projects = [
    {
      title: "Website C2UKALTARA",
      description:
        "Website c2ukaltara.id memiliki berbagai fitur yang mendukung pengelolaan data dan aktivitas pengguna, Fitur manajemen berita, Manajemen Pengguna, Fitur pengelolaan data sampah , dan Pengisian Logbook Berbasis Face Recognition",
      image: C2UKALTARA,
    },
    {
      title: "Website Ecommerce",
      description:
        "Web Prototype Ecommerce ini Menerapkan beberapa fungsi seperti Menggunakan API untuk menampilkan halaman detail produk yang dinamis dengan informasi terperinci dan gambar produk",
      image:
        "https://portofolio-six-snowy.vercel.app/assets/Ecommerce-h95v5BwB.png",
    },
    {
      title: "Sistem Perekapan dan Analisis Data Radiosonde Untuk BMKG Kota Tarakan",
      description: "Sistem perekapan otomatis dan analisis klasifikasi data radiosonde dengan menggunakan metode random forest untuk stasiun meteorologi BMKG Kota Tarakan.",
      image: RDASSISTEM,
    },
        {
      title: "Aplikasi Kasir Cross Platrofm (Android & Website)",
      description: "Aplikasi kasir cross platform untuk UMKM berbasis Android & Website.",
      image: CASHIERMATE,
    },
    {
      title: "Dashboard IoT",
      description: "Visualisasi data sensor IoT secara real-time.",
      image:
        "https://portofolio-six-snowy.vercel.app/assets/Monitoring-Ll_DeqKg.jpg",
    },
    {
      title: "Company Profile",
      description: "Website company profile elegan untuk perusahaan lokal.",
      image: "/portfolio/company.jpg",
    },
    {
      title: "E-Learning App",
      description: "Platform belajar online dengan fitur interaktif.",
      image: "/portfolio/elearning.jpg",
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-4 bg-white text-black relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        {/* Decorative elements */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-green-100 to-blue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full blur-2xl opacity-40"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>
      <div className="max-w-6xl mx-auto text-center mb-12">
        <div className="inline-flex items-center px-4 py-2 bg-black/5 backdrop-blur-sm border border-black/10 rounded-full text-sm text-gray-600 mb-6">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
          Recent Project
        </div>
        <h2
          data-aos="fade-up"
          className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent"
        >
          Portofolio Kami
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-gray-600 text-lg max-w-3xl mx-auto"
        >
          Berikut beberapa proyek yang telah kami selesaikan untuk klien kami.
        </p>
      </div>

      {/* Wrapper untuk scroll + tombol */}
      <div className="relative max-w-6xl mx-auto">
        {/* Tombol kiri */}
        <button
          onClick={scrollLeft}
          aria-label="Scroll Left"
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/30 text-white rounded-full p-2 z-10 hover:bg-black/60 transition"
        >
          &#8592;
        </button>

        {/* Container scroll horizontal */}
        <div
          ref={scrollRef}
          data-aos="fade-up"
          data-aos-delay="400"
          className="overflow-x-auto no-scrollbar scroll-smooth"
        >
          <div className="flex gap-6 px-2 md:px-6 lg:px-12">
            {projects.map((project, i) => (
              <div
                key={i}
                className="min-w-[280px] sm:min-w-[320px] bg-white border border-gray-200 shadow-md rounded-2xl p-4 hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tombol kanan */}
        <button
          onClick={scrollRight}
          aria-label="Scroll Right"
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/30 text-white rounded-full p-2 z-10 hover:bg-black/60 transition"
        >
          &#8594;
        </button>
      </div>

      {/* Custom scrollbar hidden */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
