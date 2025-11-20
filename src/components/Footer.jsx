// src/components/Footer.jsx
import React from 'react';
import { Github, Linkedin, Instagram, Mail, Facebook } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative pt-18 py-12 backdrop-blur-xl bg-black/60 border-t border-purple-500/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Left - Name & Tagline */}
          <div className="text-center md:text-left">
            <h3 className="myFont text-2xl text-white font-thin">
              Obaidullah <span className="text-purple-400">Miazi</span>
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              MERN Stack Developer | Building the Future, One Line at a Time
            </p>
          </div>

          {/* Center - Social Links */}
          <div className="flex gap-6">
            <a
              href="mailto:obaidullahmiazi.dev@gmail.com"
              className="p-3 bg-purple-900/20 rounded-full hover:bg-purple-600/40 transition-all duration-300 group"
            >
              <Mail size={22} className="text-gray-300 group-hover:text-white" />
            </a>

            <a
              href="https://github.com/obaidullah-miazi-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-purple-900/20 rounded-full hover:bg-purple-600/40 transition-all duration-300 group"
            >
              <Github size={22} className="text-gray-300 group-hover:text-white" />
            </a>
            <a
              href="https://linkedin.com/in/obaidullah-miazi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-purple-900/20 rounded-full hover:bg-purple-600/40 transition-all duration-300 group"
            >
              <Linkedin size={22} className="text-gray-300 group-hover:text-white" />
            </a>

            <a
              href="https://www.facebook.com/ObaidullahMiazi.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-purple-900/20 rounded-full hover:bg-purple-600/40 transition-all duration-300 group"
            >
              <Facebook size={22} className="text-gray-300 group-hover:text-white" />
            </a>
            
            <a
              href="https://www.instagram.com/obaidullahmiazi.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-purple-900/20 rounded-full hover:bg-purple-600/40 transition-all duration-300 group"
            >
              <Instagram size={22} className="text-gray-300 group-hover:text-white" />
            </a>
            
          </div>

          {/* Right - Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-500 text-sm">
              © {year} Obaidullah Miazi. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Optional subtle top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-purple-500/50 to-transparent"></div>
    </footer>
  );
};

export default Footer;