import React, { useState } from 'react'
import { BsPerson } from "react-icons/bs"
import { BiSearch } from "react-icons/bi"
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false)
  const handleNav = () => {
    setNav(!nav)
    setLogo(!logo)
  }
  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
      <div >
        <h1 onClick={handleNav} className={logo ? 'hidden': 'block'}>TRAVELSGO</h1>
      </div>
      <ul className='hidden md:flex'>
        <li className='cursor-pointer'>Home</li>
        <li className='cursor-pointer'>Destination</li>
        <li className='cursor-pointer'>About</li>
        <li className='cursor-pointer'>Contact</li>
        <li className='cursor-pointer'>FAQs</li>
      </ul>
      <div className='hidden md:flex'>
        <BsPerson size={20} className='mr-2' />
        <BiSearch size={20} />
      </div>

      {/* Hamburger */}
      <div onClick={handleNav} className='block md:hidden cursor-pointer z-10'>
        {nav ? <AiOutlineClose size={20} /> : <HiOutlineMenuAlt4 size={20} />}
      </div>

      {/* Mobile menu */}
      <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
        <ul>
          <h1>TRAVELSGO</h1>
          <li className='border-b'>Home</li>
          <li className='border-b'>Destination</li>
          <li className='border-b'>About</li>
          <li className='border-b'>Contact</li>
          <li className='border-b'>FAQs</li>
          <div className='flex flex-col'>
            <button className='my-6'>Learn More</button>
            <button>Join Us</button>
          </div>
          <div className='flex justify-between my-6'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaInstagram className='icon' />
            <FaLinkedin className='icon' />
            <FaYoutube className='icon' />
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar