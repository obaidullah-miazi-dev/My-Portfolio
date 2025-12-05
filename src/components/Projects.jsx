/* eslint-disable no-unused-vars */
// src/components/Projects.jsx
import React, { useState } from "react";
import Container from "./Container";
import { motion } from "framer-motion";
import projectsData from "../data/projects.json";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    "E-commerce",
    "Community Service Platform",
    "Entertainment",
    "Personal",
  ];

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  // Featured projects first
  const sortedProjects = [...filteredProjects].sort(
    (a, b) => b.featured - a.featured
  );

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-thin myFont text-white">
            My <span className="text-purple-400">Projects</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Here are some of my favorite real-world projects built with modern
            technologies.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === cat
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-500/50"
                  : "bg-gray-800/60 text-gray-300 hover:bg-gray-700 border border-purple-500/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {sortedProjects.map((project, index) => (
            <Link to={`/project/${project.slug}`} className="block">
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1 }}
                className={`group relative bg-gray-900/60 backdrop-blur-md rounded-2xl overflow-hidden border border-purple-500/50 shadow-xl shadow-purple-500/20 transition-all duration-500 h-full`}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10 bg-purple-600 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg">
                    Featured
                  </div>
                )}

                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl myFont text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400">{project.category}</p>
                  <p className="text-gray-300 line-clamp-2">
                    {project.shortDescription}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-purple-400 hover:text-white transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                    {project.clientRepo && (
                      <a
                        href={project.clientRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                      >
                        <Github size={20} />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Large floating text on big screens */}
        <div className="hidden 2xl:block absolute -top-10 -right-20 pointer-events-none opacity-10">
          <h1 className="myFont text-9xl text-gray-800 leading-none">
            PROJECTS
          </h1>
          <h1 className="myFont text-7xl text-gray-800 leading-none -mt-16 text-right">
            BUILT
          </h1>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
