import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Zap,
  Award,
  Eye,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";
import Detail from "./detail.json";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PortfolioDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  const project = Detail.project.find((item) => item.id === parseInt(id));


  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) =>
          prev === project.images.length - 1 ? 0 : prev + 1
        );
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, project.images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const handleBack = () => {
   

    console.log("Navigate back to portfolio");
    navigate(`/`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-green-100 to-blue-100 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full blur-3xl opacity-15 animate-pulse delay-500"></div>
      </div>

      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={handleBack}
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Portfolio</span>
            </button>

            <div className="flex items-center space-x-4">
              <div
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  project.status === "Deployed"
                    ? "bg-green-100 text-green-800"
                    : project.status === "Development"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-blue-100 text-blue-800"
                }`}
              >
                {project.status}
              </div>

              <div className="flex items-center space-x-2">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200"
                  >
                    <Github size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image Carousel */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={project.images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover transition-transform duration-700"
              />

              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-10`}
              ></div>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full shadow-lg transition-all duration-200"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full shadow-lg transition-all duration-200"
              >
                <ChevronRight size={20} />
              </button>

              {/* Auto-play Toggle */}
              <button
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className="absolute bottom-4 right-4 p-2 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full shadow-lg transition-all duration-200"
              >
                {isAutoPlay ? <Pause size={16} /> : <Play size={16} />}
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-sm rounded-full">
                {currentImageIndex + 1} / {project.images.length}
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex space-x-2 mt-4 overflow-x-auto pb-2">
              {project.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    index === currentImageIndex
                      ? "border-blue-500 shadow-lg"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Project Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-2xl">🌐</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  {project.category}
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                {project.title}
              </h1>
              <p className="text-xl text-gray-600 mb-6">{project.subtitle}</p>
              <p className="text-gray-700 leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-gray-900">
                  {project.stats.users}
                </div>
                <div className="text-sm text-gray-600">Active Users</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-gray-900">
                  {project.stats.uptime}
                </div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-gray-900">
                  {project.stats.performance}
                </div>
                <div className="text-sm text-gray-600">Performance</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-gray-900">
                  {project.stats.satisfaction}
                </div>
                <div className="text-sm text-gray-600">User Rating</div>
              </div>
            </div>

            {/* Project Meta */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-600">
                <Calendar size={18} className="mr-3" />
                <span>
                  Launched: {new Date(project.launchDate).toLocaleDateString()}
                </span>
              </div>
              <div className="flex items-center text-gray-600">
                <Users size={18} className="mr-3" />
                <span>Client: {project.client}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="flex space-x-8 border-b border-gray-200 mb-8">
          {["overview", "features", "tech", "team", "timeline"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 px-2 font-medium capitalize transition-all duration-200 ${
                activeTab === tab
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Project Overview
                </h3>
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Quick Stats
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status</span>
                      <span className="font-medium text-green-600">
                        {project.status}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Category</span>
                      <span className="font-medium">{project.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Launch Date</span>
                      <span className="font-medium">
                        {new Date(project.launchDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "features" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <Zap size={16} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {feature}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Fitur unggulan yang meningkatkan produktivitas dan user
                        experience.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "tech" && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Technology Stack
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {project.tech.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-xl p-4 text-center hover:shadow-lg transition-all duration-200"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                      <Award size={24} className="text-white" />
                    </div>
                    <div className="font-medium text-gray-900">{tech}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "team" && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Project Team
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.team.map((member, index) => (
                  <div
                    key={index}
                    className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-200"
                  >
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {member.name}
                    </h4>
                    <p className="text-gray-600 text-sm">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "timeline" && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Project Timeline
              </h3>
              <div className="space-y-6">
                {project.timeline.map((phase, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                        phase.status === "completed"
                          ? "bg-green-100 text-green-600"
                          : phase.status === "active"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      {phase.status === "completed" && <Award size={16} />}
                      {phase.status === "active" && <Zap size={16} />}
                      {phase.status === "pending" && <Eye size={16} />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">
                          {phase.phase}
                        </h4>
                        <span className="text-sm text-gray-600">
                          {phase.duration}
                        </span>
                      </div>
                      <div
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          phase.status === "completed"
                            ? "bg-green-100 text-green-800"
                            : phase.status === "active"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {phase.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Interested in Similar Project?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Kami siap membantu mewujudkan visi digital Anda dengan solusi
              teknologi terdepan dan tim ahli yang berpengalaman.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-200">
                Start Project
              </button>
              <button className="px-6 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200">
                View More Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;
