import React, { useEffect, useState } from "react";
import Aos from "aos";
import C2UKALTARA from "../assets/portofolio/c2ukaltara.png";
import CASHIERMATE from "../assets/portofolio/cashiermate.png";
import KASIRSEDERHANA from "../assets/portofolio/kasirsederhana.png";
import BMIFUZZY from "../assets/portofolio/bmifuzzy.png";
import RDASSISTEM from "../assets/portofolio/rdas_system.png";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
// import required modules
import { EffectCards, Autoplay } from "swiper/modules";
import { Eye } from "lucide-react";
import { Link } from "react-router";

export default function Portfolio() {
  const [activeSlideByCat, setActiveSlideByCat] = useState({
    0: 0,
    1: 0,
    2: 0,
  });
  // const [isHovered, setIsHovered] = useState({ 0: false, 1: false, 2: false });
  const [swiperInstances, setSwiperInstances] = useState({});

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  const allProjects = [
    {
      id: 1,
      title: "Website C2UKALTARA",
      description:
        "Website c2ukaltara.id memiliki berbagai fitur yang mendukung pengelolaan data dan aktivitas pengguna, Fitur manajemen berita, Manajemen Pengguna, Fitur pengelolaan data sampah , dan Pengisian Logbook Berbasis Face Recognition",
      image: C2UKALTARA,
      category: "Mobile & Web",
      tech: ["React", "Node.js", "Face Recognition"],
      status: "Deployed",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "Website Ecommerce",
      description:
        "Web Prototype Ecommerce ini Menerapkan beberapa fungsi seperti Menggunakan API untuk menampilkan halaman detail produk yang dinamis dengan informasi terperinci dan gambar produk",
      image:
        "https://portofolio-six-snowy.vercel.app/assets/Ecommerce-h95v5BwB.png",
      category: "Mobile & Web",
      tech: ["React", "API Integration", "Dynamic Content"],
      status: "Prototype",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      title: "Aplikasi Kasir Cross Platform (Android & Website)",
      description:
        "Aplikasi kasir cross platform untuk UMKM berbasis Android & Website.",
      image: CASHIERMATE,
      category: "Mobile & Web",
      tech: ["Laravel", "React", "Cross Platform"],
      status: "Active",
      gradient: "from-orange-500 to-red-500",
    },
    {
      id: 4,
      title: "Web Perhitungan BMI menggunakan Logika Fuzzy",
      description:
        "Web ini menghitung BMI dengan akurat karena sudah memiliki logika fuzzy sebagai algoritma untuk menghitung BMI secara akurat.",
      image: BMIFUZZY,
      category: "Mobile & Web",
      tech: ["React", "Fuzzy Logic"],
      status: "Active",
      gradient: "from-orange-500 to-red-500",
    },
    {
      id: 5,
      title:
        "Sistem Perekapan dan Analisis Data Radiosonde Untuk BMKG Kota Tarakan",
      description:
        "Sistem perekapan otomatis dan analisis klasifikasi data radiosonde dengan menggunakan metode random forest untuk stasiun meteorologi BMKG Kota Tarakan.",
      image: RDASSISTEM,
      category: "Desktop App & Analysis Data",
      tech: ["Python", "Random Forest", "Data Analysis"],
      status: "Production",
      gradient: "from-green-500 to-teal-500",
    },
    {
      id: 6,
      title: "Kasir Sederhana Desktop App",
      description:
        "Aplikasi desktop kasir sederhana ini dirancang menggunakan Python dengan fungsi CRUD dan PyQT5 untuk Design Antarmuka.",
      image: KASIRSEDERHANA,
      category: "Desktop App & Analysis Data",
      tech: ["PyQT5", "Python", "MySQL"],
      status: "Completed",
      gradient: "from-emerald-500 to-green-500",
    },
    {
      id: 7,
      title: "E-Learning Desktop Platform",
      description:
        "Platform belajar offline berbasis desktop dengan fitur interaktif dan manajemen kelas.",
      image: "/portfolio/elearning.jpg",
      category: "Desktop App & Analysis Data",
      tech: ["Electron", "SQLite", "React"],
      status: "Development",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      id: 8,
      title: "POS Desktop Application",
      description:
        "Aplikasi Point of Sale desktop dengan fitur inventory management dan reporting.",
      image: "/portfolio/pos-desktop.jpg",
      category: "Desktop App & Analysis Data",
      tech: ["Java", "MySQL", "JavaFX"],
      status: "Production",
      gradient: "from-indigo-500 to-blue-500",
    },

    {
      id: 9,
      title: "Dashboard IoT Monitoring",
      description:
        "Visualisasi data sensor IoT secara real-time untuk monitoring lingkungan dan industri.",
      image:
        "https://portofolio-six-snowy.vercel.app/assets/Monitoring-Ll_DeqKg.jpg",
      category: "IoT",
      tech: ["React", "Real-time", "Data Visualization"],
      status: "Live",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      id: 10,
      title: "Smart Agriculture IoT System",
      description:
        "Sistem IoT untuk monitoring dan analisis data pertanian pintar dengan sensor terintegrasi.",
      image: "/portfolio/smart-agriculture.jpg",
      category: "IoT",
      tech: ["Arduino", "Python", "Machine Learning"],
      status: "Active",
      gradient: "from-green-400 to-blue-500",
    },
  ];

  const categories = [
    {
      name: "Mobile & Web",
      icon: "🌐",
      description: "Aplikasi web dan mobile modern",
      bgGradient: "from-blue-50 to-cyan-50",
      borderGradient: "from-blue-200 to-cyan-200",
    },
    {
      name: "Desktop App & Analysis Data",
      icon: "💻",
      description: "Aplikasi desktop powerful",
      bgGradient: "from-purple-50 to-indigo-50",
      borderGradient: "from-purple-200 to-indigo-200",
    },
    {
      name: "IoT",
      icon: "📊",
      description: "Analisis data dan sistem IoT",
      bgGradient: "from-green-50 to-teal-50",
      borderGradient: "from-green-200 to-teal-200",
    },
  ];

  const projectsByCategory = categories.map((category) => ({
    ...category,
    projects: allProjects.filter(
      (project) => project.category === category.name
    ),
  }));

  const handleSlideChange = (swiper, categoryIndex) => {
    setActiveSlideByCat((prev) => ({
      ...prev,
      [categoryIndex]: swiper.activeIndex,
    }));
  };

  const goToSlide = (categoryIndex, slideIndex) => {
    if (swiperInstances[categoryIndex]) {
      swiperInstances[categoryIndex].slideTo(slideIndex);
    }
  };

  const handleSwiper = (swiper, categoryIndex) => {
    setSwiperInstances((prev) => ({
      ...prev,
      [categoryIndex]: swiper,
    }));
  };

  // const handleMouseEnter = (categoryIndex) => {
  //   setIsHovered((prev) => ({
  //     ...prev,
  //     [categoryIndex]: true,
  //   }));
  // };

  // const handleMouseLeave = (categoryIndex) => {
  //   setIsHovered((prev) => ({
  //     ...prev,
  //     [categoryIndex]: false,
  //   }));
  // };

  const totalProjects = allProjects.length;

  return (
    <section
      id="portfolio"
      className="py-20 px-4 bg-white text-black relative overflow-hidden"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        {/* Animated decorative elements */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-green-100 to-blue-100 rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full blur-2xl opacity-40 animate-pulse delay-500"></div>

        {/* Enhanced grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:60px_60px] opacity-50"></div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animation: `float ${
                  3 + Math.random() * 4
                }s ease-in-out infinite`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
        <div
          data-aos="fade-up"
          className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full text-sm text-gray-600 mb-6 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
          <span className="font-medium">Recent Projects</span>
          <div className="ml-3 px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
            {totalProjects}
          </div>
        </div>

        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-black to-gray-800 bg-clip-text text-transparent"
        >
          Portofolio Kami
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8"
        >
          Berikut beberapa proyek unggulan yang telah kami selesaikan dengan
          dedikasi tinggi untuk klien kami.
        </p>

        {/* Project Counter */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex justify-center space-x-8"
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">
              {totalProjects}+
            </div>
            <div className="text-sm text-gray-500">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">100%</div>
            <div className="text-sm text-gray-500">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">24/7</div>
            <div className="text-sm text-gray-500">Support</div>
          </div>
        </div>
      </div>

      {/* All Categories Side by Side */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
          {projectsByCategory.map((categoryData, categoryIndex) => (
            <div
              key={categoryIndex}
              data-aos="fade-up"
              data-aos-delay={400 + categoryIndex * 200}
              className={`bg-gradient-to-br ${categoryData.bgGradient} rounded-3xl p-6 shadow-lg border-gray-200 bg-gradient-to-br ${categoryData.borderGradient} relative overflow-hidden`}
            >
              {/* Category Header */}
              <div className="text-center mb-6">
                <div className="flex items-center justify-center mb-3">
                  <span className="text-3xl mr-3">{categoryData.icon}</span>
                  <h3 className="text-xl font-bold text-gray-800">
                    {categoryData.name}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  {categoryData.description}
                </p>
                <div className="inline-flex items-center px-3 py-1 bg-white/60 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700">
                  {categoryData.projects.length} Projects
                </div>
              </div>

              {/* Swiper Container */}
              <div className="flex justify-center overflow-visible">
                <div className="relative">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-2xl scale-105 opacity-50"></div>

                  {categoryData.projects.length > 0 ? (
                    <Swiper
                      effect="cards"
                      grabCursor={true}
                      modules={[EffectCards, Autoplay]}
                      className="w-[280px] h-[420px] swiper-cards-custom !overflow-visible"
                      onSlideChange={(swiper) =>
                        handleSlideChange(swiper, categoryIndex)
                      }
                      onSwiper={(swiper) => handleSwiper(swiper, categoryIndex)}
                      // autoplay={{
                      //   delay: 1000 + categoryIndex * 1000,
                      //   disableOnInteraction: false,
                      //   pauseOnMouseEnter: true,
                      // }}
                      speed={600}
                      // loop={categoryData.projects.length > 1}
                      cardsEffect={{
                        slideShadows: false,
                        perSlideOffset: 6,
                        perSlideRotate: 2,
                      }}
                    >
                      {categoryData.projects.map((project, i) => (
                        <SwiperSlide
                          key={`slide-${categoryIndex}-${i}`}
                          className="relative"
                        >
                          {/* Main Card */}
                          <div className="relative bg-white border border-gray-200 rounded-xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col group overflow-hidden">
                            {/* Status Badge */}
                            <div className="absolute top-3 right-3 z-10">
                              <span
                                className={`px-2 py-1 text-xs font-semibold rounded-full ${
                                  project.status === "Deployed" ||
                                  project.status === "Production" ||
                                  project.status === "Live" ||
                                  project.status === "Active"
                                    ? "bg-green-100 text-green-800"
                                    : project.status === "Development"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-blue-100 text-blue-800"
                                }`}
                              >
                                {project.status}
                              </span>
                            </div>

                            {/* Image Container */}
                            {/* Image Container */}
                            <div className="relative h-48 overflow-hidden rounded-t-xl">
                              <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              />

                              {/* Gradient Overlay */}
                              <div
                                className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-30 transition-all duration-500`}
                              ></div>

                              {/* Simple View Detail Button */}
                              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                                <button className="px-6 py-3 bg-white text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-50 transition-all duration-200 flex items-center space-x-2 shadow-lg transform translate-y-2 group-hover:translate-y-0">
                                  <Eye size={16} />
                                  <Link to={`/detail/${project.id}`}>
                                    <span>View Detail</span>
                                  </Link>
                                </button>
                              </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 flex flex-col">
                              <h4 className="text-sm font-bold text-gray-800 mb-2 line-clamp-2">
                                {project.title}
                              </h4>

                              <p className="text-gray-600 text-xs leading-relaxed mb-3 flex-1 line-clamp-3">
                                {project.description}
                              </p>

                              {/* Tech Stack */}
                              <div className="space-y-2">
                                <div className="flex flex-wrap gap-1">
                                  {project.tech
                                    .slice(0, 2)
                                    .map((tech, techIndex) => (
                                      <span
                                        key={techIndex}
                                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                                      >
                                        {tech}
                                      </span>
                                    ))}
                                  {project.tech.length > 2 && (
                                    <span className="px-2 py-1 bg-gray-200 text-gray-500 text-xs rounded-md">
                                      +{project.tech.length - 2}
                                    </span>
                                  )}
                                </div>

                                {/* Progress Bar */}
                                <div className="pt-1">
                                  <div className="flex justify-between items-center mb-1">
                                    <span className="text-xs text-gray-500">
                                      Progress
                                    </span>
                                    <span className="text-xs text-gray-500">
                                      {project.status === "Development"
                                        ? "75%"
                                        : "100%"}
                                    </span>
                                  </div>
                                  <div className="w-full bg-gray-200 rounded-full h-1">
                                    <div
                                      className={`bg-gradient-to-r ${
                                        project.gradient
                                      } h-1 rounded-full transition-all duration-500 ${
                                        project.status === "Development"
                                          ? "w-3/4"
                                          : "w-full"
                                      }`}
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  ) : (
                    <div className="w-[280px] h-[420px] flex items-center justify-center bg-white/60 backdrop-blur-sm border border-gray-200 rounded-xl">
                      <div className="text-center">
                        <div className="text-3xl mb-3">{categoryData.icon}</div>
                        <p className="text-gray-500 text-sm">
                          No projects available
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Navigation Dots */}
              {categoryData.projects.length > 0 && (
                <div className="flex justify-center mt-4 space-x-2">
                  {categoryData.projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(categoryIndex, index)}
                      className={`transition-all duration-300 rounded-full ${
                        index === activeSlideByCat[categoryIndex]
                          ? "w-6 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500"
                          : "w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              )}

              {/* Project Counter */}
              {categoryData.projects.length > 0 && (
                <div className="flex justify-center mt-3">
                  <div className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 shadow-sm">
                    <div className="flex items-center space-x-4 text-xs">
                      <span className="text-gray-600">
                        <span className="font-semibold text-gray-800">
                          {activeSlideByCat[categoryIndex] + 1}
                        </span>{" "}
                        / {categoryData.projects.length}
                      </span>
                      <div className="w-px h-3 bg-gray-300"></div>
                      <div className="flex items-center space-x-1">
                        <div
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${
                            categoryData.projects[
                              activeSlideByCat[categoryIndex]
                            ]?.gradient || "from-blue-500 to-purple-500"
                          }`}
                        ></div>
                        <span className="text-gray-600 font-medium text-xs">
                          {categoryData.name}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(1deg);
          }
          66% {
            transform: translateY(5px) rotate(-1deg);
          }
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .swiper-cards-custom {
          padding: 15px;
        }

        .swiper-cards-custom .swiper-slide {
          border-radius: 12px;
          transform-style: preserve-3d;
        }

        .swiper-cards-custom .swiper-slide-active {
          z-index: 3;
        }

        .swiper-cards-custom .swiper-slide-next {
          z-index: 2;
        }

        .swiper-cards-custom .swiper-slide-prev {
          z-index: 1;
        }

        @media (max-width: 1024px) {
          .grid-cols-1.lg\\:grid-cols-3 {
            grid-template-columns: repeat(1, minmax(0, 1fr));
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
