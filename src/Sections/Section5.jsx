import React from "react";
import HoverTiltCard from "../components/HoverTiltCard";
import { motion } from "framer-motion";
import DrawOutlineButtonExample from "../components/DrawOutlineButton";

const Section5 = () => {
  return (
    <div className="relative w-full h-[200vh]">
      <div className="w-full h-[100vh] bg-[#213555] flex justify-between p-5">
        <div className="flex flex-col justify-center w-[30%] gap-5">
          <h1 className="text-[#F5EFE7] font-black uppercase text-[2.5vw] leading-[0.98]">
            Revolutionizing Industries with AI-Driven Solutions and Robotic
            Innovation
          </h1>
          <DrawOutlineButtonExample textColor={"D8C4B6"} bgColor={"D8C4B6"} hoverTextColor={"F5EFE7"} buttonName={"Start Coporating"}/>
        </div>
        <div className="flex flex-col items-center justify-center">
          <motion.img
            whileHover={{ borderTopWidth: "20px", borderLeftWidth: "20px" }}
            whileTap={{
              borderTopWidth: "25px",
              borderLeftWidth: "20px",
              borderRightWidth: "10px",
              borderBottomWidth: "10px",
            }}
            src="/Untitled design (1).png"
            alt=""
            className="object-cover object-center w-[65vw] h-[65vh] rounded-3xl border border-r-[4px] border-b-[4px] border-l-[12px] border-t-[12px] border-[#3E5879]"
          />
        </div>
      </div>
      <div className="w-full h-[100vh] bg-[#F5EFE7] flex justify-between p-5">
        <div className="flex flex-col justify-center w-[30%] gap-5">
          <h1 className="text-[#3E5879] font-black uppercase text-[2.5vw] leading-[0.95]">
            We create AI systems like chatbots and voice assistants to
            automate customer interactions with seamless, human-like
            communication.
          </h1>
          <DrawOutlineButtonExample textColor={"3E5879"} bgColor={"3E5879"} hoverTextColor={"213555"} buttonName={"Start Business"}/>
        </div>
        <div className="flex flex-col items-center justify-center">
          <motion.img
            whileHover={{
              borderTopWidth: "20px",
              borderLeftWidth: "20px",
              borderRightWidth: "6px",
              borderBottomWidth: "6px",
            }}
            whileTap={{
              borderTopWidth: "25px",
              borderLeftWidth: "20px",
              borderRightWidth: "10px",
              borderBottomWidth: "10px",
            }}
            src="/Untitled design (2).png"
            alt=""
            className="object-cover object-center w-[65vw] h-[65vh] rounded-3xl border border-r-[4px] border-b-[4px] border-l-[12px] border-t-[12px] border-[#3E5879]"
          />
        </div>
      </div>
      <div className="absolute top-[35%] left-[39%]">
        <HoverTiltCard />
      </div>
    </div>
  );
};

export default Section5;
