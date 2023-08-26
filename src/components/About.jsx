import React from "react";
import aboutImage from '../assets/images/about.png';
import {motion} from "framer-motion"
import { slideIn } from "../utils/motion";

export default function About() {
  return (
    <motion.div variants={slideIn("right", 'tween, 1.5, 1')} initial="hidden"
    whileInView="show" viewport={{ once: true }} class="relative px-4 flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl mb-28">

      <div class="w-full h-64 lg:w-2/5 lg:h-auto">
        <img class="h-full w-full object-cover" src={aboutImage} alt="about-ramadan" />
      </div>

      <div
        class="max-w-lg bg-green md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-2/3 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
        <div class="flex flex-col p-12 md:px-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white">About Me</h2>
          <p class="mt-4 mb-4 text-white font-poppins font-medium">
            Ramadan has been teaching Leaving Certificate Arabic for over 8 years, He has taught Arabic for non Arabic speakers for over 10 years and also has 13 years experience in teaching English as a second language.
          </p>

          <p className="text-white font-poppins font-medium">
            Previously, Ramadan was the principal of a school in Libya for 2 years and was also the Public Relations Officer and Courses Co-ordinator at the European Institute for Arabic Teaching. Along with having many articles that he has written published in multiple newspapers and magazines, Ramadan is also editor the book ‘Alwajeez in Islamic Religious Studies’.
          </p>

        </div>
      </div>

    </motion.div>
  )
}
