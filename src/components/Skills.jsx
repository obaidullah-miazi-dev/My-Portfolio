/* eslint-disable no-unused-vars */

import React from 'react';
import Container from './Container';
import { motion } from 'framer-motion';

// Import all logos (put these in src/assets/icons/ or wherever you prefer)
import html from '../assets/icons/html5-original.svg';
import css from '../assets/icons/css3-original.svg';
import tailwind from '../assets/icons/tailwindcss-icon.svg';
import javascript from '../assets/icons/javascript-original.svg';
import react from '../assets/icons/react-original.svg';
import firebase from '../assets/icons/firebase-plain.svg';
import nodejs from '../assets/icons/nodejs-original.svg';
import express from '../assets/icons/express-white.svg';
import mongodb from '../assets/icons/mongodb-original.svg';
import figma from '../assets/icons/figma-original.svg';
import git from '../assets/icons/git-original.svg';
import github from '../assets/icons/github.svg';
import postman from '../assets/icons/postman.svg';
import gsap from '../assets/icons/gsap.svg';
import framer from '../assets/icons/framer-icon.svg';

const Skills = () => {
  const techStack = [
    { name: 'HTML', icon: html },
    { name: 'CSS', icon: css },
    { name: 'Tailwind CSS', icon: tailwind },
    { name: 'JavaScript', icon: javascript },
    { name: 'React.js', icon: react },
    { name: 'Firebase', icon: firebase },
    { name: 'Node.js', icon: nodejs },
    { name: 'Express.js', icon: express },
    { name: 'MongoDB', icon: mongodb },
  ];

  const tools = [
    { name: 'Figma', icon: figma },
    { name: 'Git', icon: git },
    { name: 'GitHub', icon: github },
    { name: 'Postman', icon: postman },
    { name: 'GSAP', icon: gsap },
    { name: 'Framer Motion', icon: framer },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-5xl font-thin myFont text-white mb-16"
        >
          Skills & <span className="text-purple-400">Tools</span>
        </motion.h2>

        <div className="mx-auto mt-16">
          {/* Technical Stack */}
          <div>
            <h3 className="text-2xl md:text-3xl myFont text-purple-200 mb-10 text-center">
              Tech Stack
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
              {techStack.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  
                  className="group relative bg-gray-900/60 backdrop-blur-md border border-purple-400 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 shadow-xl hover:shadow-purple-500/30 transition-all duration-300"
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-16 h-16 object-contain drop-shadow-lg group-hover:drop-shadow-2xl transition-all"
                  />
                  <span className="text-gray-300 text-sm font-medium tracking-wide">
                    {item.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tools & Frameworks */}
          <div className='mt-16'>
            <h3 className="text-2xl md:text-3xl myFont text-purple-200 mb-10 text-center">
              Tools I Use
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
              {tools.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group relative bg-gray-900/60 backdrop-blur-md border border-purple-400 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 shadow-xl hover:shadow-purple-500/30 transition-all duration-500"
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-16 h-16 object-contain drop-shadow-lg group-hover:drop-shadow-2xl transition-all"
                  />
                  <span className="text-gray-300 text-sm font-medium tracking-wide">
                    {item.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Skills;