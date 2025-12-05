// src/pages/ProjectDetails.jsx
import React, { useState } from 'react';
import { useParams, Link } from 'react-router';
import { ArrowLeft, ExternalLink, Github, X } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import projectsData from '../data/projects.json';

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projectsData.find(p => p.slug === slug);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-3xl">
        Project not found
      </div>
    );
  }

  const images = [
    project.image2,
    project.image3
  ].filter(Boolean);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <div className="min-h-screen bg-linear-to-b from-black via-[#0f0f1e] to-black pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Back Button */}
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-white mb-10 text-lg transition-colors"
          >
            <ArrowLeft size={24} /> Back to Projects
          </Link>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 items-start">
            {/* Image Slider */}
            <div className="space-y-6">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={images.length > 1}
                className="rounded-2xl overflow-hidden shadow-2xl"
              >
                {images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="relative cursor-zoom-in group"
                      onClick={() => openLightbox(index)}
                    >
                      <img
                        src={img}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="w-full h-fit rounded-2xl border border-purple-500/20 transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white text-lg font-medium">Click to enlarge</span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              
            </div>

            {/* Project Info */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-6xl font-thin myFont text-white mb-4">
                  {project.title}
                </h1>
                <span className="inline-block px-4 py-2 bg-purple-900/30 text-purple-300 rounded-full text-sm font-medium">
                  {project.category}
                </span>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed">
                {project.description}
              </p>

              <div>
                <h3 className="text-xl text-purple-300 mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-4 py-2 bg-gray-900/60 border border-purple-500/30 rounded-lg text-sm text-gray-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-5 pt-6">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition-all shadow-lg"
                >
                  <ExternalLink size={20} /> Live Demo
                </a>
                {project.clientRepo && (
                  <a href={project.clientRepo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-xl border border-gray-700 transition-all">
                    <Github size={20} /> Client Code
                  </a>
                )}
                {project.serverRepo && (
                  <a href={project.serverRepo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-xl border border-gray-700 transition-all">
                    <Github size={20} /> Server Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center" onClick={() => setLightboxOpen(false)}>
          <button className="absolute top-6 right-6 text-white hover:text-purple-400 transition">
            <X size={40} />
          </button>
          <img
            src={images[lightboxIndex]}
            alt="Fullscreen"
            className="max-w-full max-h-full object-contain"
          />
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full">
            {lightboxIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectDetails;