import React from 'react';
import { motion } from 'framer-motion';

const VerticalMarquee = ({ReactIconChild, arrayText, bgHex, textHex}) => {
    const marqueeItems = Array(100).fill(arrayText);

    return (
        <div className={`h-full w-[10vw] bg-[#${bgHex}] rounded-xl flex flex-col items-center text-[#${textHex}] font-black overflow-hidden`}>
            <motion.div
                initial={{ y: "0%" }}
                animate={{ y: "-100%" }}
                transition={{ repeat: Infinity, ease: "linear", duration: 500 }}
                className="flex flex-col gap-[10vh]">
                {marqueeItems.map((item, index) => (
                    <div key={index} className="flex flex-col items-center pb-[10vh]">
                        <h1 className="uppercase text-center">{item}</h1>
                    <ReactIconChild className="text-[50px]" />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default VerticalMarquee;
