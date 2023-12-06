import Image from "next/image";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar"

import { motion } from "framer-motion";

import { fadeIn } from "../variants"

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">

          <h1 className="h1">
            Transforming Ideas <br /> Into { ' ' }
            <span className="text-accent">Digital Reality</span>
          </h1>

          <p className="max-w sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
            lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu
          </p>

          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>

          <motion.div variants={fadeIn('down', 0.4)} className="hidden xl:flex">
            <ProjectsBtn />
          </motion.div>

        </div>
      </div>

      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge tanslate-z-0"></div>

        <ParticlesContainer />

        <div className="w-full h-full max-w-[787px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"><Avatar /></div>
      </div>
    </div>
  );
};

export default Home;
