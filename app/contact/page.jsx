"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Description } from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaPhoneAlt, FaMapMarkedAlt, FaEnvelope } from "react-icons/fa";

const info = [
  { icon: <FaPhoneAlt />, title: "Phone", Description: "(+216) 52 680 566" },
  { icon: <FaEnvelope />, title: "Email", Description: "amine0924@gmail.com" },
  {
    icon: <FaMapMarkedAlt />,
    title: "Adress",
    Description: "16 Rue Omar Mokhtar, Ariana",
  },
];
const initValues = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  message: "",
};
const initState = { values: initValues };
const Contact = () => {
  const [state, setState] = useState(initState);
  const { values } = state;
  
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto mb-24">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:h-[54%] order-2  xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Contact Me</h3> {/* input*/}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstname"
                  placeholder="Firstname"
                  required
                  value={values.firstname}
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Lastname"
                  required
                  value={values.lastname}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={values.email}
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={values.phone}
                />
              </div>
              {/* select*/}
              {/* <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="web-dev">Web Development</SelectItem>
                    <SelectItem value="manual-testing">
                      Manual Testing
                    </SelectItem>
                    <SelectItem value="ui-design">UI Design</SelectItem>
                    
                  </SelectGroup>
                </SelectContent>
              </Select> */}
              {/*Textarea*/}
              <Textarea
                className="h-[200px]"
                name="message"
                placeholder="Type your message here."
                requirevalue={values.message}
                rows={6}
                required
              />
              {/* btn*/}
              <Button
                variant="outline"
                className="  max-w-40 flex font-thin text-accent items-center gap-2 bg-dark border-accent rounded-2xl hover:font-bold "
              >
                Send message
              </Button>
            </form>
          </div>
          {/* info*/}
          <div className=" flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex gap-6 items-center">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.Description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
