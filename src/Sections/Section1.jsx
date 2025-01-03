import React from 'react'
import FuzzyOverlayExample from '../components/FuzzyOverlay'
import NavBar from '../components/NavBar';
import DrawOutlineButtonExample from '../components/DrawOutlineButton';
import { motion } from 'framer-motion';


const Section1 = () => {
    return (
        <FuzzyOverlayExample ContentComponent={Section1Content} />
    )
}

const Section1Content = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.5" className="relative top-0 left-0 h-screen  bg-[#F5EFE7]">
            <NavBar />
            <div className=''>
                <motion.h1 initial={{ marginRight: "4vw"}} animate={{ marginRight: "0vw"}} transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }} className="text-center whitespace-nowrap text-[14.5vw] font-poppins font-black leading-[0.9] text-[#213555] select-none m-0">
                    NEURA NOVA
                </motion.h1>
                <motion.div className='bg-[#3E5879] py-[2vh] pt-[3vh] px-[1.6vw] font-poppins font-bold w-full  m-0 absolute top-[30%]'>
                    <h1 className='text-[3.9vw] leading-[0.8] text-[#F5EFE7]'>INNOVATING TOMORROW WITH AI POWERED SOLUTIONS</h1>
                </motion.div>
                <motion.div initial={{ width: 0}} animate={{ width: "105vw"}} transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }} className='bg-[#3E5879] h-[5vh] mt-[19vh] radius rounded-r-xl-r'>
                </motion.div>
                <motion.div initial={{ width: 0}} animate={{ width: "105vw"}} transition={{ ease: [0.76, 0, 0.24, 1], duration: 2 }} className='bg-[#3E5879] h-[5vh] mt-[3vh] rounded-r-xl'>
                </motion.div>
                <motion.div initial={{ width: 0}} animate={{ width: "105vw"}} transition={{ ease: [0.76, 0, 0.24, 1], duration: 3 }} className='bg-[#3E5879] h-[5vh] mt-[3vh] rounded-r-xl'>
                </motion.div>
                <div className='bg-[#D8C4B6] w-full h-[20vh] mt-[6vh] flex py-[2vh] px-[1.6vw] items-center gap-[14.5vw]'>
                    <h1 className='text-[#213555] font-bold text-[1.8vw] leading-[0.98] w-[70%]'>Your bridge to neural-powered business transformation. Revolutionizing Your business operations with intelligent machine learning systems.</h1>
                    <DrawOutlineButtonExample textColor={"3E5879"} bgColor={"3E5879"} hoverTextColor={"213555"} buttonName={"Join Now"}/>
                </div>
            </div>
        </div>
    );
};

export default Section1