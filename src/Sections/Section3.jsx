import React from 'react'
import { VelocityText } from '../components/VelocityText'

const Section3 = ({text}) => {
  return (
    <div className='w-full h-[25vh] bg-[#213555] flex items-center justify-center text-center p-2 rounded-xl'>
            <h1 className='uppercase text-[5.5vw] text-center text-[#F5EFE7] font-black '>{text}</h1>
    </div>
  )
}

export default Section3