import React from 'react'

export default function CTA() {
  return (
    <section id="contact" className="relative py-20 px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        
        {/* Floating elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-white/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-white/15 rounded-lg rotate-45 animate-pulse"></div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white/80 mb-6">
          <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
          Siap Membantu Anda 24/7
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
            Siap Bangun Solusi Digital 
          </span>
          <br />
          <span className="bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent">
            Bersama?
          </span>
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Hubungi kami sekarang untuk konsultasi gratis dan dapatkan penawaran terbaik 
          untuk solusi digital yang akan mengubah bisnis Anda.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a 
            href="https://wa.me/08XXXXXXXXXX" 
            className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-2xl hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 flex items-center gap-3"
          >
            {/* WhatsApp Icon */}
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <span className="group-hover:animate-pulse">Hubungi via WhatsApp</span>
            
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </a>

          <a 
            href="mailto:contact@codevlabs.com" 
            className="group px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-2xl hover:bg-white/5 hover:border-white/50 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm flex items-center gap-3"
          >
            {/* Email Icon */}
            <div className="w-6 h-6 border border-white/40 rounded flex items-center justify-center">
              <div className="w-3 h-2 border border-white/60 rounded-sm"></div>
            </div>
            <span className="group-hover:animate-pulse">Kirim Email</span>
          </a>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="group p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300">
            <div className="text-2xl mb-2">⚡</div>
            <div className="text-white font-semibold mb-1">Respon Cepat</div>
            <div className="text-gray-400 text-sm">Dalam 1 jam</div>
          </div>

          <div className="group p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300">
            <div className="text-2xl mb-2">💡</div>
            <div className="text-white font-semibold mb-1">Konsultasi Gratis</div>
            <div className="text-gray-400 text-sm">Tanpa biaya tersembunyi</div>
          </div>

          <div className="group p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300">
            <div className="text-2xl mb-2">🚀</div>
            <div className="text-white font-semibold mb-1">Implementasi Cepat</div>
            <div className="text-gray-400 text-sm">Siap dalam hitungan hari</div>
          </div>
        </div>
      </div>

      {/* Bottom wave effect */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-20 fill-white/5">
          <path d="M0,0 C480,60 960,60 1440,0 L1440,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  )
}