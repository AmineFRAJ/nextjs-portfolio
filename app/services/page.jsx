"use client";

import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Full-Stack Web Development",
    description:
      "Building responsive and dynamic web applications using modern technologies like React, Node.js, and MongoDB. I specialize in both front-end and back-end development, ensuring a seamless user experience.",
    href: "",
  },
  {
    num: "02",
    title: "Responsive Web Design",
    description:
      "Ensuring that websites are fully responsive  with user-friendly interfaces and perform well on any device, including mobile, tablet, and desktop platforms using modern CSS frameworks (e.g., Tailwind ,Bootstrap).",
    href: "",
  },
  {
    num: "03",
    title: "API Development & Integration",
    description:
      "Developing and integrating RESTful APIs for web applications to enhance connectivity between front-end and back-end services. Expertise in building secure and scalable APIs.",
    href: "",
  },

  
  
  {
    num: "04",
    title: "Database Fundamentals",
    description:
      "Handling the fundamentals of databases using SQL and NoSQL solutions (e.g., MySQL, MongoDB) to ensure data integrity and optimized performance.",
    href: "",
  },
  {
    num: "05",
    title: "Quality Assurance (ISTQB Certified)",
    description:
      "Providing high-quality software testing services to ensure the reliability and performance of web applications. As an ISTQB-certified tester, I follow industry standards to deliver bug-free and efficient solutions.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl;py-0">
      <div className="container mx-auto ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex  flex-col justify-center gap-6 group "
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover cursor-default transitin-all duration-500">
                    {service.num}
                  </div>
                </div>

                {/* title */}
                <h2
                  className="text-2xl font-bold leading-none text-white
  group-hover:text-accent transition-all duration-500 cursor-default "
                >
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-md text-gray-300">{service.description}</p>
                {/*border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
