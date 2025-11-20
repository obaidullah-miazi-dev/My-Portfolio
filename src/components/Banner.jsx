import React from 'react';
import Container from './Container';
import me from "../assets/images/png-version-of-me.png";

const Banner = () => {
    return (
        <div className="mt-8 relative">
        <div className="w-full h-26 bg-linear-to-t from-[#24243e] to-[#24243e00]  absolute bottom-0 z-50"></div>
          <Container>
        <h2 className="text-center font-thin md:text-4xl sm:text-3xl myFont mt-12">
          Hello ! I'm Obaidullah Miazi
        </h2>
        <h3 className="myFont text-center text-sm 2xl:hidden">a passionate MERN Stack Developer. dedicated to building clean, scalable, and user focused web applications.</h3>
        <img
          src={me}
          alt="Obaidullah Miazi"
          className="mx-auto mt-6 z-20 relative"
        />
        <div>
          <h1 className="hidden 2xl:block myFont text-9xl text-center absolute top-76 right-36">
            MERN Stack Developer
          </h1>
          <h1 className="hidden 2xl:block myFont text-5xl text-center absolute top-[440px] right-36 z-30">
            Focused on building real-world, production-ready projects.
          </h1>
        </div>
    </Container>
      </div>
    );
};

export default Banner;