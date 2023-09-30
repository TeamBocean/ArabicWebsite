import React from 'react'

import headerLogo from "../assets/images/header-logo.png"
import { motion } from "framer-motion"
import { navVariants } from "../utils/motion"
import "flowbite"
import { useState } from "react"
import logo from "../assets/images/header-logo-one.png"
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


export default function Header() {

  const [hide, setHide] = useState(true);

  const handleHide = () => {
    setHide(!hide)
  }

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="fixed z-20 top-0 w-full bg-white h-20">

      <div className='max-w-screen-xl flex justify-between items-center mx-auto font-poppins'>


        <div>
          <a href="#" class="flex items-center">
            <img src={logo} class="h-[100px] mr-3" alt="Arabic Logo" />
          </a>
        </div>
        <div className='flex hidden w-full md:block md:w-auto mr-10 '>
          <ul class="flex  my-auto gap-10 uppercase font-semibold flex flex-col p-4 md:p-0  border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:border-0 md:bg-white ">
            <li>
              <a href="#hero" class="block py-2 pl-3 pr-4 text-gray-900 rounded md:bg-transparent  md:hover:bg-transparent md:border-0 md:hover:text-green md:p-0  " aria-current="page"><Link activeClass="active" className="test1" to="hero" spy={true} smooth={true} duration={500}>Home</Link></a>
            </li>
            <li>
              <a href="#about" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green md:p-0 "><Link activeClass="active" className="test1" to="about" spy={true} smooth={true} duration={500}>About</Link></a>
            </li>
            <li>
              <a href="#pricing" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green md:p-0 "><Link activeClass="active" className="test1" to="pricing" spy={true} smooth={true} duration={500}>Pricing</Link></a>
            </li>
            <li>
              <a href="#contact" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green md:p-0 "><Link activeClass="active" className="test1" to="contact" spy={true} smooth={true} duration={500}>Contact</Link></a>
            </li>
          </ul>
        </div>

        <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 mr-6" aria-controls="navbar-default" aria-expanded="false" onClick={handleHide}>
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
      </div>
      {/* mobile menu */}
      <div className={`${hide ? "hidden" : ""} md:hidden`}>
        <ul className="flex flex-col my-auto gap-10 uppercase font-bold p-4 md:p-0  border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:border-0 md:bg-white ">
          <li>
            <a href="#hero" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:bg-transparent  md:hover:bg-transparent md:border-0 md:hover:text-green md:p-0  " aria-current="page"><Link activeClass="active" className="test1" to="hero" spy={true} smooth={true} duration={500} >Home</Link></a>
          </li>
          <li>
            <a href="#about" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green md:p-0 "><Link activeClass="active" className="test1" to="about" spy={true} smooth={true} duration={500} >About</Link></a>
          </li>
          <li>
            <a href="#pricing" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green md:p-0 "><Link activeClass="active" className="test1" to="pricing" spy={true} smooth={true} duration={500} >Pricing</Link></a>
          </li>
          <li>
            <a href="#contact" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green md:p-0 "><Link activeClass="active" className="test1" to="contact" spy={true} smooth={true} duration={500} >Contact</Link></a>
          </li>
        </ul>
      </div>

    </motion.nav>
  )
}
