"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { title } from "process";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 01",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur voluptate, quos numquam adipisci rerum minus quaerat voluptates necessitatibus animi enim? Nam natus fugit est esse magnam reiciendis porro tenetur atque.",
    stack: [{ name: "Html 5" }, { name: "Css" }, { name: "Javascript" }],
    image: "/",
    live: "*",
    github: "",
  },
  {
    num: "02",
    category: "frontend",
    title: "project 02",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur voluptate, quos numquam adipisci rerum minus quaerat voluptates necessitatibus animi enim? Nam natus fugit est esse magnam reiciendis porro tenetur atque.",
    stack: [{ name: "Html 5" }, { name: "Css" }, { name: "Javascript" }],
    image: "/",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 03",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur voluptate, quos numquam adipisci rerum minus quaerat voluptates necessitatibus animi enim? Nam natus fugit est esse magnam reiciendis porro tenetur atque.",
    stack: [{ name: "Html 5" }, { name: "Css" }, { name: "Javascript" }],
    image: "/",
    live: "",
    github: "",
  },
];

const Projects = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
      }}
      className=" min-h-[80vh] flex flex-col justify-center py xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/*outline number  */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline ">
                {project.num}
              </div>
              {/*outline number  */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text:accent transition-all duration-500 capitalize">
                {project.category} project{" "}
              </h2>
              {/*project description  */}
              <p className="text-white/60 text-justify">
                {project.description}
              </p>
              {/*stack  */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent ">
                      {item.name} {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/*border  */}
              <div className="border border-white/20"></div>
              {/*buttons */}
              <div className="flex items-center gap-4">
                {/*Live project  button */}
                {project.live && project.live !== "" && (
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger
                          className="w-[70px] h-[70px] rounded-full bg-whi
                        te/5 flex justify-center items-center group"
                        >
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Visit Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {/*github project  button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/*overlay*/}
                      <div className="absolute top-0 bottom-0 w-full hifull bg-black/10 z-10"></div>
                      {/*image */}
                      <div className="relative w-full hifull">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt="project-img"
                        />
                      </div>
                    </div>
                    {/* slider buttons */}
                    <WorkSliderBtns
                      containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none "
                      btnStyles="  bg-gray-200/50 rounded-full p-2 text-primary  hover:bg-white hover:text-accent flex justify-center  items-center transition-all"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
