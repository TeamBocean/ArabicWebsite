import React from "react";
import logoTwo from "../assets/images/header-logo-one.png"
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default function Footer () {
  return (

<footer class=" dark:bg-gray-900 bg-cream font-poppins">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="flex justify-around">
          <div class="mb-6 md:mb-0">
              <a href="https://flowbite.com/" class="flex items-center">
                  <img src={logoTwo} class="h-[100px]" alt="Arabic-Logo" />
                  {/* <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Ramadan</span> */}
              </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 class="mb-4 text-sm font-semibold text-green uppercase dark:text-white">Our Links</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium mb-4">
                      <li>
                          <a href="#hero" class="hover:underline"><Link activeClass="active" className="test1" to="hero" spy={true} smooth={true} duration={500}>Home</Link></a>
                      </li>
                      <li>
                          <a href="#about" class="hover:underline"><Link activeClass="active" className="test1" to="about" spy={true} smooth={true} duration={500}>About</Link></a>
                      </li>
                      <li>
                          <a href="#pricing" class="hover:underline"><Link activeClass="active" className="test1" to="pricing" spy={true} smooth={true} duration={500}>Pricing</Link></a>
                      </li>
                    <li>
                          <a href="#contact" class="hover:underline"><Link activeClass="active" className="test1" to="contact" spy={true} smooth={true} duration={500}>Contact</Link></a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>

      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" class="hover:underline">All Rights Reserved By Blue Ocean</a>
          </span>
          
      </div>
    </div>
</footer>

  )
}