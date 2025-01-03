import React from 'react'
import { Link } from 'react-router-dom'
import DrawOutlineButtonExample from './DrawOutlineButton'

const NavBar = () => {
  return (
    <nav className='flex h-[3%] w-full gap-5 p-1 mb-[3vh]'>
        <Link to={"/"} className='text-[#213555] font-black mt-[1.3vh] ml-2'>
            NEURANOVA
        </Link>
        {["ai solutions", "case study", "products", "blog", "SignUp", "Login"].map((item, index) => (
            <Link key={index} to={`/${item}`} className={`${item === "SignUp" && "ml-[35vw]"}`}>
                <DrawOutlineButtonExample textColor={"3E5879"} bgColor={"3E5879"} hoverTextColor={"213555"} buttonName={item}/>
            </Link>
        ) )}

    </nav>
  )
}

export default NavBar