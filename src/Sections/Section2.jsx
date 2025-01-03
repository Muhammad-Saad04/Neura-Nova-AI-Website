import React from 'react';
import { FaBrain } from 'react-icons/fa';
import DrawOutlineButtonExample from '../components/DrawOutlineButton';
import VerticalMarquee from '../components/VerticalMarquee';


const Section2 = () => {
    return (
        <div data-scroll data-scroll-section className='w-full h-[100vh] bg-[#F5EFE7] rounded-t-xl px-[2vw] flex gap-5'>
            <VerticalMarquee arrayText={"Transform your business with neural network"} bgHex={"D8C4B6"} textHex={"3E5879"} ReactIconChild={FaBrain} />
            <VerticalMarquee arrayText={"Transform your business with neural network"} bgHex={"3E5879"} textHex={"D8C4B6"} ReactIconChild={FaBrain} />
            <Text />

        </div>
    )
}

const Text = () => {
    return (
        <div className=' w-[55.5vw] h-full ml-[10vw] p-6'>
            <h1 className='text-[#213555] font-black text-[3.4vw] uppercase mb-5'>Unleashing Innovation with Neura Nova.</h1>
            <p className='text-[#3E5879] mb-[10vh]'>Empower your business with cutting-edge neural network solutions. At Neura Nova, we transform ideas into actionable insights with AI-powered services like predictive analytics, natural language processing, computer vision, and intelligent automation. From tailored AI models to seamless system integration, our scalable and secure solutions are designed to streamline operations, enhance decision-making, and drive growth in an ever-evolving digital landscape.</p>
            <DrawOutlineButtonExample textColor={"3E5879"} bgColor={"3E5879"} hoverTextColor={"213555"} buttonName={"Unleash Innovation!"}/>
        </div>
    )
}

export default Section2