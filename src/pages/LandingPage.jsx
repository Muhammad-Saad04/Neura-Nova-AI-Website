import React from 'react'
import Section1 from '../Sections/Section1'
import Section2 from '../Sections/Section2'
import Section3 from '../Sections/Section3'
import Section4 from '../Sections/Section4'
import Section5 from '../Sections/Section5'
import { ClipPathLinksExample } from '../components/ClipPathLinks'
import LocomotiveScroll from 'locomotive-scroll'

const LandingPage = () => {
    const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
        <Section1/>
        <Section2/>
        <Section3 text={"So what we actually provide?"}/>
        <Section4/>
        <Section5/>
        <Section3 text={"Do Follow Us?"}/>
        <ClipPathLinksExample/>
    </>
  )
}

export default LandingPage