/* eslint-disable no-unused-vars */
import React from "react";
import Container from "./Container";
import me from "../assets/images/png-version-of-me.png";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div id="home" className="pt-30 relative">
      <div className="w-full h-26 bg-linear-to-t from-[#24243e] to-[#24243e00]  absolute bottom-0 z-50"></div>
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="text-center font-thin md:text-4xl sm:text-3xl myFont mt-12"
        >
          Hello ! I'm Obaidullah Miazi
        </motion.h2>
        <h3 className="myFont text-center text-sm 2xl:hidden">
          a passionate MERN Stack Developer. dedicated to building clean,
          scalable, and user focused web applications.
        </h3>
        <div>
          <img
            src={me}
            alt="Obaidullah Miazi"
            className="mx-auto mt-6 z-20 relative"
          />
        </div>
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="hidden 2xl:block myFont text-9xl text-center absolute top-[430px] right-36"
          >
            MERN Stack Developer
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            className="hidden 2xl:block myFont text-5xl text-center absolute top-[570px] right-36 z-30"
          >
            Focused on building real-world, production-ready projects.
          </motion.h1>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
