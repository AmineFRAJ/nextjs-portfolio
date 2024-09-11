import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full ">
      <div className="container mx-auto h-full ">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left">
            <span className="text-xl">FS Web Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />
              <span className="text-accent">FRAJ Amine</span>
            </h1>
            <p className="max-w-[500px] mb-6 text-white/80">
              I earned my degree in International Business and Corporate
              Development in CNAM Paris, but I soon decided to pivot to the tech
              world. I began my journey by obtaining an ISTQB certification in
              software testing, and from there, I transitioned into becoming a
              full-stack web developer.
            </p>

            {/* Socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8 mb-4">
              <a href="\assets\Resume\CV FRAJ Mohamed Amine (ba).pdf/">
                {" "}
                <Button
                  variant="outline"
                  className="uppercase flex items-center gap-2 bg-dark border-accent rounded-lg"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>

              <div className=" xl:mb-0">
                <Socials />
              </div>
            </div>
          </div>

          {/* photo */}
          <Image src="/assets/photo.png" alt="aa" width={550} height={400} />
        </div>
      </div>
    </section>
  );
};

export default Home;
