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

import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "e-commerce",
    title: "MERN E-commerce Project",
    description:
      "This is a MERN stack e-commerce application that enables users to browse products, add items to their cart, and authenticate their accounts. The project features a user-friendly interface for product management, allowing users to easily navigate through various categories. It utilizes JWT for user authentication, ensuring secure access to user profiles.",
    stack: [
      { name: "MongoDB" },
      { name: "Express.js" },
      { name: "React" },
      { name: "Node.js" },
      { name: "JWT " },
    ],
    image: "/assets/project10.png",
    live: "https://gadget-hub-client.vercel.app/",  
    github: "https://github.com/AmineFRAJ/GadgetHub-client.git",  
  },
  {
    num: "02",
    category: "frontend",
    title: "Portfolio Project",
    description:
      "This is my personal portfolio built using Next.js to showcase my web development skills. The project highlights various sections including About Me, Projects, and Contact. It is styled with Tailwind CSS for responsive design and incorporates smooth animations using Framer Motion.",
    stack: [
      { name: "Next.js" },
      { name: "React" },
      { name: "Tailwind CSS" },
      { name: "JSX" },
      { name: "Framer Motion" },
    ],
    image: "/assets/project1.png",
    live: "https://amine-fraj-portfolio.vercel.app/",
    github: "https://github.com/AmineFRAJ/nextjs-portfolio.git",
  },
  {
    num: "03",
    category: "frontend",
    title: "ToDo List App",
    description:
      "A feature-rich ToDo List application that uses Redux for state management and Tailwind CSS for modern, responsive styling. The app allows users to add, edit, delete, and filter tasks. Built with JSX for component structuring and includes robust functionality for task management.",
    stack: [{ name: "Redux" }, { name: "Tailwind CSS" }, { name: "JSX" }],
    image: "/assets/project2.png",
    live: "https://redux-todo-app-azure.vercel.app/",
    github: "https://github.com/AmineFRAJ/Redux-todo-app.git",
  },
  {
    num: "04",
    category: "frontend",
    title: "Movie App",
    description:
      "A dynamic movie application that allows users to filter movies based on various criteria. Built with React Router for seamless navigation and Bootstrap for responsive design. The app includes features such as movie filtering, detailed views, and a user-friendly interface.",
    stack: [{ name: "React Router" }, { name: "Bootstrap" }, { name: "React" }],
    image: "/assets/project3.png",
    live: "",
    github: "https://github.com/AmineFRAJ/movie-router-app.git",
  },
  {
    num: "05",
    category: "frontend",
    title: "Weather App",
    description:
      "A weather application that displays real-time weather data fetched from an API. The project involves setting up the HTML structure, styling with CSS, and using JavaScript to handle API requests and display weather information, such as temperature and location.",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }],
    image: "/assets/project4.png",
    live: "",
    github: "https://github.com/AmineFRAJ/Weather-App.git",
  },
  {
    num: "06",
    category: "frontend",
    title: "Counter App",
    description:
      "A simple counter application built using vanilla JavaScript and DOM manipulation. This project involves creating a user interface to display a counter and buttons to increment or decrement its value. The application demonstrates basic DOM manipulation and event handling techniques.",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }],
    image: "/assets/project5.png",
    live: "",
    github: "",
  },
  {
    num: "07",
    category: "frontend",
    title: "Calculator App",
    description:
      "A functional calculator application developed with vanilla JavaScript and DOM manipulation. This project features a user interface for performing basic arithmetic operations, such as addition, subtraction, multiplication, and division. It demonstrates how to handle user input and update the display using DOM methods.",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }],
    image: "/assets/project6.png",
    live: "",
    github: "",
  },
  {
    num: "08",
    category: "frontend",
    title: "Shopping Cart System",
    description:
      "A comprehensive shopping cart application developed with vanilla JavaScript and DOM manipulation. This project allows users to add, update, and remove items from the cart, view cart totals, and manage their shopping experience. It demonstrates advanced DOM manipulation techniques for dynamic content updates and interactive features.",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }],
    image: "/assets/project7.png",
    live: "",
    github: "https://github.com/AmineFRAJ/Dom-check01.git",
  },
  {
    num: "09",
    category: "frontend",
    title: "Jewelry Store Website",
    description:
      "A responsive jewelry store website designed with Bootstrap. The project features an elegant and user-friendly layout, showcasing various jewelry pieces with clear, attractive presentation. It includes features such as product galleries, detailed descriptions, and a responsive design to ensure a seamless user experience across devices.",
    stack: [{ name: "Bootstrap" }, { name: "HTML" }, { name: "CSS" }],
    image: "/assets/project8.png",
    live: "",
    github: "https://github.com/AmineFRAJ/Jewelry-Store-Website.git",
  },
  {
    num: "10",
    category: "frontend",
    title: "Restaurant Website",
    description:
      "A responsive restaurant website crafted with Bootstrap, featuring a sleek and user-friendly interface. This project showcases the restaurant's menu, special offers, and contact information with a modern design that adapts seamlessly across various devices, providing an optimal user experience.",
    stack: [{ name: "Bootstrap" }, { name: "HTML" }, { name: "CSS" }],
    image: "/assets/project9.png",
    live: "",
    github: "https://github.com/AmineFRAJ/Restaurant-Site-Web.git",
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
              <div className="group">
                <div className="text-8xl leading-none font-extrabold text-transparent text-outline  group-hover:text-outline-hover transition-all duration-500">
                  {project.num}
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {project.title}
                </h2>
              </div>

              <h2 className="text-[30px] font-bold leading-none text-white  capitalize">
                Category :{project.category}{" "}
              </h2>
              {/*project description  */}
              <p className="text-white/60 text-justify">
                {project.description}
              </p>
              {/*stack  */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className=" text-accent text-xs lg:text-lg">
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
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                         
                          <p>Visit project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                {/*github project  button */}
                {project.github && project.github !== "" ? (
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>GitHub repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                ) : (
                  <div className="w-[70px] h-[70px] rounded-full bg-gray-300 flex justify-center items-center cursor-not-allowed">
                    <BsGithub className="text-gray-500 text-3xl" />
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipContent>
                          <p>GitHub repository not available</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                )}
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
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/*image */}
                      <div className="relative w-full h-full ">
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
                      containerStyles=" flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none "
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
