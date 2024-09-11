import Link from "next/link";
import React from "react";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

const Socials = () => {
  const socials = [
    { path: "https://www.linkedin.com/in/mohamed-amine-fraj-544111210/", icon: <FaLinkedin /> },
    { path: "https://github.com/AmineFRAJ", icon: <FaGithub /> },
    { path: "https://www.facebook.com/amine.fraj.18/", icon: <FaFacebook /> },
    { path: "https://www.instagram.com/amine_fredj/", icon: <FaInstagram /> },
  ];

  return (
    <div className="flex space-x-4">  
      {socials.map((item, index) => (
        <Link key={index} href={item.path} target="_blank" rel="noopener noreferrer" className="text-xl hover:text-accent transition-all">
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;

