import React from 'react';
import image from '../assets/image.png';
import { TypeAnimation } from 'react-type-animation';
import ShinnyEffect from './ShinnyEffect';

const Hero = () => {
  return (
    <div className="grid md:grid-cols-2 place-items-center mx-auto mb-8 md:mb-32 mt-14">
      <div className="max-w-[800px]">
        <p className="text-gray-200 md:text-6xl text-3xl tracking-tight">
          HEY, I AM <br />
          <span className="">YASIN SHAIK</span>
          <TypeAnimation
            sequence={[
              "Developer",
              1000,
              "Webdesigner",
              1000,
              "Consultant",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold italic"
          />
        </p>
        <h2 className="text-gray-300">
          I specialize in crafting interactive and responsive websites that
          deliver great user experiences.
        </h2>

        <div className="flex flex-row gap-4 mb-4 md:mb-0">
          {/* Download CV Button */}
          <a
            href="/My Resume.pdf"
            download="Yasin_Shaik_CV.pdf"
            className="transform transition-transform hover:scale-105 hover:shadow-lg 
             z-10 cursor-pointer font-bold text-gray-200 w-1/2 mt-6 p-2
             bg-gradient-to-r from-[#50a7c7] via-[#1f7c8f] to-[#3d6ca4] rounded-xl"
          >
            Download CV
          </a>

          {/* View Work Button */}
          <a
            href="https://github.com/YASIN0707"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform hover:scale-105 hover:shadow-lg 
             z-10 cursor-pointer font-bold text-gray-200 w-1/2 mt-6 p-2 border border-gray-400 rounded-xl text-center"
          >
            View Work
          </a>
        </div>
      </div>

      {/* ShinnyEffect and Image Section */}
      <div className="absolute inset-0 overflow-hidden md:overflow-visible">
        <div className="hidden md:block">
          <ShinnyEffect left={100} top={200} size={1400} />
        </div>
        <ShinnyEffect left={-100} top={0} size={1200} />
      </div>

      <img src={image} className="w-[300px] md:w-[500px]" alt="Yasin Shaik" />
    </div>
  );
};

export default Hero;
