import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Team() {
  const teamMembers = [
    {
      name: "Andri Efendy",
      role: "Fullstack Developer",
      skills: [
        {
          nama: "JavaScript",
          icon: "JS",
          color: "from-yellow-400 to-yellow-600",
        },
        { nama: "Next JS", icon: "▲", color: "from-black to-gray-800" },
        { nama: "React Native", icon: "⚛", color: "from-blue-400 to-blue-600" },
        { nama: "Laravel", icon: "L", color: "from-red-500 to-red-700" },
        {
          nama: "FireBase",
          icon: "🔥",
          color: "from-orange-400 to-orange-600",
        },
        { nama: "MySQL", icon: "🐬", color: "from-blue-600 to-blue-800" },
        { nama: "Figma", icon: "F", color: "from-purple-400 to-purple-600" },
      ],
      avatar: "https://avatars.githubusercontent.com/u/103976426?v=4",
      linkedin: "#",
      github: "#",
      description:
        "Spesialis dalam pengembangan aplikasi web dan mobile dengan teknologi modern",
      experience: "5+ Years",
      projects: "50+ Projects",
    },
    {
      name: "Farhan Nabil",
      skills: [
        { nama: "Python", icon: "🐍", color: "from-green-400 to-green-600" },
        { nama: "React", icon: "⚛", color: "from-blue-400 to-blue-600" },
        { nama: "MySQL", icon: "🐬", color: "from-blue-600 to-blue-800" },
        { nama: "PyQT5", icon: "Qt", color: "from-green-500 to-green-700" },
        { nama: "Arduino", icon: "🔧", color: "from-teal-400 to-teal-600" },
        { nama: "Streamlit", icon: "📊", color: "from-red-400 to-red-600" },
      ],
      role: "Data Specialist & Desktop Developer",
      avatar: "",
      linkedin: "#",
      github: "#",
      description:
        "Ahli dalam analisis data dan pengembangan aplikasi desktop dengan Python",
      experience: "4+ Years",
      projects: "35+ Projects",
    },
    {
      name: "Saputra Junior",
      skills: [
        { nama: "Python", icon: "🐍", color: "from-green-400 to-green-600" },
        { nama: "MySQL", icon: "🐬", color: "from-blue-600 to-blue-800" },
        { nama: "PyQT5", icon: "Qt", color: "from-green-500 to-green-700" },
        { nama: "Arduino", icon: "🔧", color: "from-teal-400 to-teal-600" },
        { nama: "Streamlit", icon: "📊", color: "from-red-400 to-red-600" },
      ],
      role: "Internet of Things Specialist",
      avatar: "",
      linkedin: "#",
      github: "#",
      description:
        "Fokus pada pengembangan sistem IoT dan otomasi dengan sensor dan mikrokontroler",
      experience: "3+ Years",
      projects: "25+ Projects",
    },
  ];

  return (
    <section id="team" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        {/* Decorative elements */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-green-100 to-blue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full blur-2xl opacity-40"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-black/5 backdrop-blur-sm border border-black/10 rounded-full text-sm text-gray-600 mb-6">
            <div className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></div>
            Tim Expert Berpengalaman
          </div>

          <h2
            data-aos="fade-left"
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
              Tim Pengembang
            </span>
            <br />
            <span className="bg-gradient-to-r from-gray-700 via-purple-700 to-gray-700 bg-clip-text text-transparent">
              Profesional
            </span>
          </h2>

          <p data-aos="fade-up  " className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tim kami terdiri dari pengembang yang ahli di bidang masing-masing:
            frontend, backend, mobile, IoT, dan data. Siap mewujudkan solusi
            teknologi impian Anda.
          </p>
        </div>

        {/* Team Grid */}
        <div data-aos="fade-left" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <CardTim key={index} member={member} index={index} />
          ))}
        </div>

        {/* Bottom Stats */}
        <div data-aos="fade-left" className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white/50 backdrop-blur-sm border border-gray-200/50 rounded-2xl">
            <div className="text-3xl font-bold text-gray-800 mb-2">2+</div>
            <div className="text-gray-600">Years Combined Experience</div>
          </div>
          <div className="p-6 bg-white/50 backdrop-blur-sm border border-gray-200/50 rounded-2xl">
            <div className="text-3xl font-bold text-gray-800 mb-2">20+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="p-6 bg-white/50 backdrop-blur-sm border border-gray-200/50 rounded-2xl">
            <div className="text-3xl font-bold text-gray-800 mb-2">100%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CardTim({ member, index }) {
  const gradients = [
    "from-blue-500 to-purple-600",
    "from-green-500 to-teal-600",
    "from-purple-500 to-pink-600",
  ];

  return (
    <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100/50">
      {/* Profile Header */}
      <div
        className={`relative h-48 bg-gradient-to-br ${gradients[index]} p-8 text-white`}
      >
        {/* Avatar placeholder */}
        {member.avatar ? (
          <img
            src={member.avatar}
            className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-2xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300"
          ></img>
        ) : (
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-2xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300">
            {member.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
        )}

        {/* Floating elements */}
        <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-8 right-8 w-8 h-8 bg-white/20 rounded-lg rotate-45"></div>
        <div className="absolute top-1/2 right-4 w-4 h-4 bg-white/30 rounded-full"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Name and Role */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-800 mb-1">
            {member.name}
          </h3>
          <p className="text-sm font-medium text-gray-600 mb-2">
            {member.role}
          </p>
          <p className="text-xs text-gray-500 leading-relaxed">
            {member.description}
          </p>
        </div>

        {/* Stats */}
        {/* <div className="flex gap-4 mb-4 text-xs">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            <span className="text-gray-600">{member.experience}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
            <span className="text-gray-600">{member.projects}</span>
          </div>
        </div> */}

        {/* Skills */}
        <div className="mb-6">
          <div className="text-xs font-semibold text-gray-700 mb-3">
            Tech Stack:
          </div>
          <div className="flex flex-wrap gap-2">
            {member.skills.map((skill, i) => (
              <span
                key={i}
                className={`group/skill flex items-center text-xs bg-gradient-to-r ${skill.color} text-white px-3 py-1.5 rounded-full shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200 gap-1.5 font-medium`}
              >
                <span className="group-hover/skill:animate-pulse">
                  {skill.icon}
                </span>
                {skill.nama}
              </span>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 pt-4 border-t border-gray-100">
          <div className="mt-4 flex gap-4">
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className=" transition" size={20} />
            </a>
            <a href={member.github} target="_blank" rel="noopener noreferrer">
              <FaGithub className="transition" size={20} />
            </a>
            <a href={member.github} target="_blank" rel="noopener noreferrer">
              <FaInstagram className="transition" size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Hover overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
      ></div>
    </div>
  );
}
