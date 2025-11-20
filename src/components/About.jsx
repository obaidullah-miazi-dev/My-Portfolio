/* eslint-disable no-unused-vars */

import React from "react";
import Container from "./Container";
import { TypeAnimation } from "react-type-animation";
import aboutImg from "../assets/images/about.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden mt-16">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#0f0f1e] to-transparent opacity-50"></div>

      <Container>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-thin myFont text-white">
              About <span className="text-purple-400">Me</span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              I'm Obaidullah Miazi, a passionate{" "}
              <span className="text-purple-300 font-semibold">
                MERN Stack Developer
              </span>{" "}
              based in Bangladesh. I love turning ideas into fast, responsive,
              and beautiful web applications using modern technologies.
            </p>

            <p className="text-gray-400 leading-relaxed">
              With strong expertise in MongoDB, Express.js, React, and Node.js,
              I build full-stack solutions that are clean, scalable, and
              production-ready. I'm constantly learning new tools and best
              practices to deliver the best user experience possible.
            </p>

            <div className="text-xl md:text-2xl text-purple-200 myFont">
              <span className="text-gray-400">I work with → </span>
              <TypeAnimation
                sequence={[
                  "React.js",
                  1500,
                  "Node.js",
                  1500,
                  "Express.js",
                  1500,
                  "MongoDB",
                  1500,
                  "Tailwind CSS",
                  1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-purple-400 font-bold"
              />
            </div>

            <div className="pt-6">
              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                Let's Connect
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <img
              src={aboutImg}
              alt="Obaidullah Miazi"
              className="mx-auto rounded-2xl w-full animate-pulse"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default About;
