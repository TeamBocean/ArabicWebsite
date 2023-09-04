import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { TypingText } from '../components/CustomTexts';


import React, { useState } from "react";

export default function Pricing() {
  const [selectedOption, setSelectedOption] = useState("in-person");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  

  return (
<section id="pricing" class="mb-28 ">

        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 font-poppins">
        <motion.div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
        {/* <TypingText title="| About Metaversus" textStyles="text-center" /> */}
            <h2 variants={fadeIn('top', 'spring', 0.3, 0.75)} initial="hidden"
                          whileInView="show" class="mb-4 text-4xl tracking-tight font-extrabold text-green dark:text-white">Our Plans</h2>
        </motion.div>

        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
        <button
            className={`${
                selectedOption === "in-person"
                ? "bg-green text-white"
                : "bg-white text-green dark:bg-gray-800 dark:text-white"
            } px-4 py-2 rounded-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none`}
            onClick={() => handleOptionChange("in-person")}
            >
            In Person
            </button>
            <button
            className={`${
                selectedOption === "online"
                ? "bg-green text-white"
                : "bg-white text-green dark:bg-gray-800 dark:text-white"
            } px-4 py-2 rounded-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none`}
            onClick={() => handleOptionChange("online")}
            >
            Online
        </button>

        </div>
        

        {selectedOption === "in-person" && (
            <div className="space-y-8 lg:grid lg:grid-cols-3 lg:space-y-0">
            <div className="md:p-10">
          <motion.div variants={fadeIn('right', 'spring', 0.25, 0.75)} initial="hidden"
                            whileInView="show"  class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow xl:p-8 ">
                  <h3 class="text-2xl font-semibold">1:1 Classes</h3>
                  <div class="flex justify-center items-baseline my-8">
                      <span class="mr-2 text-5xl font-extrabold">€40</span>
                      <span class="text-gray-500 dark:text-gray-400">/Hour</span>
                  </div>
                  <ul role="list" class="mb-8 space-y-4 text-left">
                      <li class="flex items-center space-x-3">
                          <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>Individual configuration</span>
                      </li>
                      <li class="flex items-center space-x-3">
                          <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>No setup, or hidden fees</span>
                      </li>
                      <li class="flex items-center space-x-3">
                          <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>Team size: <span class="font-semibold">1 developer</span></span>
                      </li>
                      <li class="flex items-center space-x-3">
                          <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>Premium support: <span class="font-semibold">6 months</span></span>
                      </li>
                      <li class="flex items-center space-x-3">
                          <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>Free updates: <span class="font-semibold">6 months</span></span>
                      </li>
                  </ul>
                  <motion.a  whileInView="show" 
                            whileHover={{ scale: 1.1 }} href="#" class="text-white bg-green hover:bg-green hover:text-white focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Sign Up</motion.a>
              </motion.div>
              </div>
    
              <motion.div variants={fadeIn('right', 'spring', 0.5, 0.75)} initial="hidden"
                            whileInView="show" 
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-green rounded-lg border border-gray-100 shadow dark:border-gray-600 lg:p-10 dark:bg-gray-800 dark:text-white">
                  <h3 class="text-2xl font-semibold text-white">Leaving Cert Arabic</h3>
                  <div class="flex justify-center items-baseline my-8">
                      <span class="mr-2 text-5xl font-extrabold text-white">€300</span>
                      <span class="text-white dark:text-gray-400" dark:text-gray-400>/Year</span>
                  </div>
                  <ul role="list" class="mb-8 space-y-4 text-left text-white">
                      <li class="flex items-center space-x-3">
                          <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>Individual configuration</span>
                      </li>
                      <li class="flex items-center space-x-3">
                          <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>No setup, or hidden fees</span>
                      </li>
                      <li class="flex items-center space-x-3">
                          <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>Team size: <span class="font-semibold">10 developers</span></span>
                      </li>
                      <li class="flex items-center space-x-3">
                          <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>Premium support: <span class="font-semibold">24 months</span></span>
                      </li>
                      <li class="flex items-center space-x-3">
                          <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>Free updates: <span class="font-semibold">24 months</span></span>
                      </li>
                  </ul>
                  <motion.a  whileInView="show" 
                            whileHover={{ scale: 1.1 }} href="https://islamireland.ie/departments/adult-education/" target="_blank" class="text-black bg-white  hover:text-green focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Sign Up</motion.a>
              </motion.div>
    
              <div className="md:p-10"> 
              <motion.div variants={fadeIn('right', 'spring', 0.75, 0.75)} initial="hidden"
                            whileInView="show" class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                  <h3 class="text-2xl font-semibold">Quranic Arabic</h3>
                  <div class="flex justify-center items-baseline my-8">
                      <span class="mr-2 text-5xl font-extrabold">€150</span>
                      <span class="text-gray-500 dark:text-gray-400">/Term</span>
                  </div>
                  <ul role="list" class="mb-8 space-y-4 text-left">
                      <li class="flex items-center space-x-3">
                          <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>Individual configuration</span>
                      </li>
                      <li class="flex items-center space-x-3">
                          <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>No setup, or hidden fees</span>
                      </li>
                      <li class="flex items-center space-x-3">
                          <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>Team size: <span class="font-semibold">100+ developers</span></span>
                      </li>
                      <li class="flex items-center space-x-3">
                          <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>Premium support: <span class="font-semibold">36 months</span></span>
                      </li>
                      <li class="flex items-center space-x-3">
                          <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>Free updates: <span class="font-semibold">36 months</span></span>
                      </li>
                  </ul>
                  <motion.a  whileInView="show" 
                            whileHover={{ scale: 1.1 }} href="https://islamireland.ie/departments/adult-education/" target="_blank" class="text-white bg-green hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Sign Up</motion.a>
              </motion.div>
              </div>
          </div>
        )}

        {selectedOption === "online" && (
            <div className="space-y-8 lg:grid lg:grid-cols-3 lg:space-y-0">
            <div className="md:p-10">
          <motion.div variants={fadeIn('right', 'spring', 0.25, 0.75)} initial="hidden"
                            whileInView="show"  class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow xl:p-8 ">
                  <h3 class="text-2xl font-semibold">1:1 Classes</h3>
                  <div class="flex justify-center items-baseline my-8">
                      <span class="mr-2 text-5xl font-extrabold">€40</span>
                      <span class="text-gray-500 dark:text-gray-400">/Hour</span>
                  </div>
                  <ul role="list" class="mb-8 space-y-4 text-left">
                      <li class="flex items-center space-x-3">
                          <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>Individual configuration</span>
                      </li>
                      <li class="flex items-center space-x-3">
                          <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>No setup, or hidden fees</span>
                      </li>
                      <li class="flex items-center space-x-3">
                          <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>Team size: <span class="font-semibold">1 developer</span></span>
                      </li>
                      <li class="flex items-center space-x-3">
                          <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>Premium support: <span class="font-semibold">6 months</span></span>
                      </li>
                      <li class="flex items-center space-x-3">
                          <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>Free updates: <span class="font-semibold">6 months</span></span>
                      </li>
                  </ul>
                  <motion.a  whileInView="show" 
                            whileHover={{ scale: 1.1 }} href="#" class="text-white bg-green hover:bg-green hover:text-white focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Sign Up</motion.a>
              </motion.div>
              </div>
    
              <motion.div variants={fadeIn('right', 'spring', 0.5, 0.75)} initial="hidden"
                            whileInView="show" 
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-green rounded-lg border border-gray-100 shadow dark:border-gray-600 lg:p-10 dark:bg-gray-800 dark:text-white">
                  <h3 class="text-2xl font-semibold text-white">Leaving Cert Arabic</h3>
                  <div class="flex justify-center items-baseline my-8">
                      <span class="mr-2 text-5xl font-extrabold text-white">€300</span>
                      <span class="text-white dark:text-gray-400" dark:text-gray-400>/Year</span>
                  </div>
                  <ul role="list" class="mb-8 space-y-4 text-left text-white">
                      <li class="flex items-center space-x-3">
                          <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>Individual configuration</span>
                      </li>
                      <li class="flex items-center space-x-3">
                          <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>No setup, or hidden fees</span>
                      </li>
                      <li class="flex items-center space-x-3">
                          <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>Team size: <span class="font-semibold">10 developers</span></span>
                      </li>
                      <li class="flex items-center space-x-3">
                          <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>Premium support: <span class="font-semibold">24 months</span></span>
                      </li>
                      <li class="flex items-center space-x-3">
                          <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>Free updates: <span class="font-semibold">24 months</span></span>
                      </li>
                  </ul>
                  <motion.a  whileInView="show" 
                            whileHover={{ scale: 1.1 }} href="https://islamireland.ie/departments/adult-education/" target="_blank" class="text-black bg-white  hover:text-green focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Sign Up</motion.a>
              </motion.div>
    
              <div className="md:p-10"> 
              <motion.div variants={fadeIn('right', 'spring', 0.75, 0.75)} initial="hidden"
                            whileInView="show" class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                  <h3 class="text-2xl font-semibold">Quranic Arabic</h3>
                  <div class="flex justify-center items-baseline my-8">
                      <span class="mr-2 text-5xl font-extrabold">€150</span>
                      <span class="text-gray-500 dark:text-gray-400">/Term</span>
                  </div>
                  <ul role="list" class="mb-8 space-y-4 text-left">
                      <li class="flex items-center space-x-3">
                          <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>Individual configuration</span>
                      </li>
                      <li class="flex items-center space-x-3">
                          <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>No setup, or hidden fees</span>
                      </li>
                      <li class="flex items-center space-x-3">
                          <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>Team size: <span class="font-semibold">100+ developers</span></span>
                      </li>
                      <li class="flex items-center space-x-3">
                          <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>Premium support: <span class="font-semibold">36 months</span></span>
                      </li>
                      <li class="flex items-center space-x-3">
                          <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>Free updates: <span class="font-semibold">36 months</span></span>
                      </li>
                  </ul>
                  <motion.a  whileInView="show" 
                            whileHover={{ scale: 1.1 }} href="https://islamireland.ie/departments/adult-education/" target="_blank" class="text-white bg-green hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Sign Up</motion.a>
              </motion.div>
              </div>
          </div>
        )}

        

        
    </div>
        
</section>
  )
}










