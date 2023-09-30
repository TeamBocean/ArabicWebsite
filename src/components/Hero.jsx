import React from "react";
import heroImage from "../assets/images/hero.png"
import { motion } from "framer-motion"
import { slideIn, staggerContainer, textVariant } from "../utils/motion"
import HeroImg from "../assets/images/arabic-herp.png"

import Book from "../assets/images/book.png";
import Calendar from "../assets/images/Calendar.png";
import Graduation from "../assets/images/graduation.png";


export default function Hero() {
    return (
        <motion.section id="hero" className="mt-24 mb-28 font-poppins"
        
        initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 1,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]}}
        >

            {/* <motion.div initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 1,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }} className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-24 lg:px-12">
                <div>
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Master The Arabic Language With <span className="text-green">Ramadan</span></h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Begin with the Arabic alphabet, dive into grammar, and with tailored lessons from Ramadan to achieve fluency in no time.</p>

                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex flex-col mb-20 lg:mb-36 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                            Book A className Now
                        </a>

                    </motion.div>
                </div> */}
            <section className="bg-white dark:bg-gray-900">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-10 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mx-auto lg:mr-auto place-self-center lg:col-span-7">
                    <h1 className="text-center lg:text-left max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">
                    Master The Arabic Language With <span className="text-green">Ramadan</span>
                    </h1>
                    <p className="text-center lg:text-left max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                    Begin with the Arabic alphabet, dive into grammar, and with tailored lessons from Ramadan to achieve fluency in no time.
                    </p>

                    <div className="flex flex-row space-x-4 sm:space-x-2 justify-center lg:justify-start">
                    <motion.a
                        whileInView="show"
                        whileHover={{ scale: 1.1 }}
                        href="#pricing"
                        className=" lg:mx-0  py-3 px-5 font-medium text-white rounded-full bg-green hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 text-c"
                    >Book A Class 
                    </motion.a>

                    <motion.a
                        whileInView="show"
                        whileHover={{ scale: 1.1 }}
                        href="#contact"
                        className="mx-auto lg:mx-0 items-center py-3 px-5 text-base font-medium text-green rounded-full border-2 border-green hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
                    >
                        Contact Me
                    </motion.a>
                    </div>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src={HeroImg} alt="mockup" />
                </div>
                </div>

            </section>

            <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
        
            <div className="flex flex-wrap justify-center items-center mt-8 text-black sm:justify-between text-2xl">
            
                <div className="text-center mx-4">
            <div className="flex items-center"> {/* Wrap image and text */}
                <img src={Graduation} alt="Students Icon" className="w-10 h-10" />
                <h1 className="text-5xl font-bold ml-4">100+</h1> {/* Add left margin */}
            </div>
            <h3 className="text-gray-700 text-lg mt-2">Students</h3>
            </div>

            <div className="text-center mx-4">
            <div className="flex items-center">
                <img src={Calendar} alt="Experience Icon" className="w-10 h-10" />
                <h1 className="text-5xl font-bold ml-4">20+</h1>
            </div>
            <h3 className="text-gray-700 text-lg mt-2">Years Experience</h3>
            </div>

            <div className="text-center mx-4">
            <div className="flex items-center">
                <img src={Book} alt="Articles Icon" className="w-10 h-10" />
                <h1 className="text-5xl font-bold ml-4">30+</h1>
            </div>
            <h3 className="text-gray-700 text-lg mt-2">Articles</h3>
            </div>

        </div>
</div>

            {/* </motion.div> */}
        </motion.section>

    )
}