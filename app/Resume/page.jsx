"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiPostman,
  SiRedux,
} from "react-icons/si";
import { DiPhotoshop } from "react-icons/di";
import { PiFileSqlDuotone } from "react-icons/pi";
import { RiNextjsLine } from "react-icons/ri";

//about data
const about = {
  title: "About Me",
  description:
    "After completing my Master's degree in International Business and Corporate Development from CNAM Paris, I transitioned into the field of web development. Since then, I have worked with various technologies and frameworks such as HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS. I am now focused on expanding my skills and seeking opportunities to contribute to the tech industry.",
  info: [
    { fieldName: "Name", fieldValue: "Amine FRAJ" },
    { fieldName: "Phone", fieldValue: "(+216) 52 680 560" },
    { fieldName: "Skype", fieldValue: "amine_fraj" },
    { fieldName: "Nationality", fieldValue: "Tunisian" },
    { fieldName: "Email", fieldValue: "amine0924@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English, French,Aabic" },
  ],
  skills: [],
};

//Certifications and Training
const certifications = {
  icon: "/resume/badge.svg",
  title: "Certifications & Training",
  description:
    "I have undergone intensive training in both web development and software testing, equipping me with a well-rounded skill set. My journey includes hands-on coding experience and mastery of testing methodologies.",
  items: [
    {
      bootcamp: "GoMyCode",
      formation: "Full Stack Web Development",
      duration: "2024",
    },
    {
      bootcamp: "ITland",
      formation: "ISTQB Certification",
      duration: "2023",
    },
  ],
};

//education
const education = {
  icon: "/resume/cap.svg",
  title: "Education",
  description:
    "My educational journey includes advanced degrees in International Business and Corporate Development, Logistics, and Management. These programs have provided me with a strong foundation in strategic planning, international trade, and management principles.",
  items: [
    {
      institution: "CNAM Paris",
      degree: "Master 2 in International Business and Corporate Development",
      duration: "2019-2020",
    },
    {
      institution: "Sesame University",
      degree: "Master 1 in Logistics, Purchasing, and International Trade",
      duration: "2018-2019",
    },
    {
      institution: "IHEC Carthage",
      degree: "Licence Fondamentale in Management",
      duration: "2013-2015",
    },
  ],
};

//skills
const skills = {
  icon: "/resume/cap.svg",
  title: "Skills",
  description:
    "In my full-stack web development bootcamp, I mastered core technologies like JavaScript, CSS, HTML, along with advanced tools such as React, Redux, and Next.js. I also gained experience with MongoDB, enabling me to build full-stack, data-driven applications efficiently.",
  list: [
    { icon: <FaHtml5 />, name: "HTML 5" },
    { icon: <FaCss3 />, name: "CSS " },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiBootstrap />, name: "Bootstrap" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <SiExpress />, name: "Express" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiRedux />, name: "Redux" },
    { icon: <RiNextjsLine />, name: "Next.js  " },
    { icon: <PiFileSqlDuotone />, name: "SQL" },
    { icon: <DiPhotoshop />, name: "Photoshop" },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="certifications"
          className=" flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="certifications">
              Certification & Training
            </TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* certif */}
            <TabsContent value="certifications" className="  w-full">
              <div className=" flex flex-col gap-[30px] text-center  xl:text-left">
                <h3 className="text-4xl font bold">
                  {certifications.title}</h3>
                <p className="max-w-[600px] text-white/60  mx-auto xl:mx-0 lg:text-justify">
                  {certifications.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {certifications.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <h3 className="text-l max-w-[260px] min-h-[60px] text-center lg:text:left">
                            {item.formation}
                          </h3>

                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.bootcamp}</p>
                          </div>
                          <span className="text-accent">{item.duration}</span>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="  w-full">
              <div className=" flex flex-col gap-[30px] text-center  xl:text-left">
                <h3 className="text-4xl font bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60  mx-auto xl:mx-0 lg:text-justify ">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start   "
                        >
                          <h3 className="text-l max-w-[260px] min-h-[60px] text-center lg:text:left">
                            {item.institution}
                          </h3>

                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.degree}</p>
                          </div>
                          <span className="text-accent">{item.duration}</span>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills*/}
            <TabsContent value="skills" className="  w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center  xl:text-left ">
                  <h3 className="text-4xl font bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 lg:text-justify">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] ">
                  {skills.list.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group ">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className=" w-full text-center xl:text:left  "
            >
              <div className="flex flex-col gap-[30px] text-center  xl:text-left">
                <h3 className="text-4xl font bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 lg:text-justify">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-l">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
