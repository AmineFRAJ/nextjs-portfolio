import Link from "next/link";
import React from "react";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

const Socials = ({ containerStyles, iconStyles }) => {
  const socials = [
    {
      path: "https://www.linkedin.com/in/mohamed-amine-fraj-544111210/",
      icon: <FaLinkedin />,
    },
    { path: "https://github.com/AmineFRAJ", icon: <FaGithub /> },
    { path: "https://www.facebook.com/amine.fraj.18/", icon: <FaFacebook /> },
    { path: "https://www.instagram.com/amine_fredj/", icon: <FaInstagram /> },
  ];

  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
