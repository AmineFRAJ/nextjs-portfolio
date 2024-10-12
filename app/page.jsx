"use client";
import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import { FiDownload } from "react-icons/fi";

const Home = () => {
  // Navigate to the maintenance page
  // const router = useRouter();
  // const handleClick = () => {
  //   router.push("/maintenance");
  // };

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text Section */}
          <div className="text-center xl:text-left  order-2 xl:order-none">
            <span className="text-xl">FS Web Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />
              <span className="text-accent">Amine FRAJ</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 text-justify ">
              I completed my Master’s degree in International Business and
              Corporate Development from CNAM Paris. With a growing interest in
              technology, I transitioned into the tech world. I started by
              obtaining an ISTQB certification in software testing, which paved
              the way for my career as a full-stack web developer.
            </p>

            {/* Socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8 mb-6">
              <a href="/resume/CV FRAJ Mohamed Amine .pdf">
              <Button
                // onClick={handleClick} //navigate to maintenance
                variant="outline"
                className="uppercase flex font-thin text-accent items-center gap-2 bg-dark border-accent rounded-2xl hover:font-bold"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl  " />
              </Button>
              </a>

              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Photo Section */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
