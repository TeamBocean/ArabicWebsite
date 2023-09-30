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
<section id="pricing" className="mb-28 ">

        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 font-poppins">
        <motion.div className="mx-auto max-w-screen-md text-center mb-4 lg:mb-4">
        {/* <TypingText title="| About Metaversus" textStyles="text-center" /> */}
            <h2 variants={fadeIn('top', 'spring', 0.3, 0.75)} initial="hidden"
                          whileInView="show" className=" text-4xl tracking-tight font-extrabold text-green dark:text-white">Our Plans</h2>
        </motion.div>

        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-4">
        
        <button className={`bg-green text-white px-4 py-2 rounded-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none`}>Online</button>
        </div>
        

        
            <div className="space-y-8 lg:grid lg:grid-cols-3 lg:space-y-0">
            <div className="">
          <motion.div variants={fadeIn('right', 'spring', 0.25, 0.75)} initial="hidden" whileInView="show"  className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow xl:p-8 ">
                  <h3 className="text-2xl font-semibold">1:1 Classes</h3>
                  <div className="flex justify-center items-baseline my-8">
                      <span className="mr-2 text-5xl font-extrabold">€40</span>
                      <span className="text-gray-500 dark:text-gray-400">/Hour</span>
                  </div>
                  <ul role="list" className="mb-8 space-y-4 text-left">
                      <li className="flex items-center space-x-3">
                          <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 12V17C20 18.8856 20 19.8284 19.4142 20.4142C18.8284 21 17.8856 21 16 21H6.5C5.11929 21 4 19.8807 4 18.5V18.5C4 17.1193 5.11929 16 6.5 16H16C17.8856 16 18.8284 16 19.4142 15.4142C20 14.8284 20 13.8856 20 12V7C20 5.11438 20 4.17157 19.4142 3.58579C18.8284 3 17.8856 3 16 3H8C6.11438 3 5.17157 3 4.58579 3.58579C4 4.17157 4 5.11438 4 7V18.5" stroke="#23564E" stroke-width="2"/>
                            <path d="M9 10L10.2929 11.2929C10.6834 11.6834 11.3166 11.6834 11.7071 11.2929L15 8" stroke="#23564E" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                          <span>Payment In Advance</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 12V17C20 18.8856 20 19.8284 19.4142 20.4142C18.8284 21 17.8856 21 16 21H6.5C5.11929 21 4 19.8807 4 18.5V18.5C4 17.1193 5.11929 16 6.5 16H16C17.8856 16 18.8284 16 19.4142 15.4142C20 14.8284 20 13.8856 20 12V7C20 5.11438 20 4.17157 19.4142 3.58579C18.8284 3 17.8856 3 16 3H8C6.11438 3 5.17157 3 4.58579 3.58579C4 4.17157 4 5.11438 4 7V18.5" stroke="#23564E" stroke-width="2"/>
                            <path d="M9 10L10.2929 11.2929C10.6834 11.6834 11.3166 11.6834 11.7071 11.2929L15 8" stroke="#23564E" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        <span>Online Zoom Classes</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 12V17C20 18.8856 20 19.8284 19.4142 20.4142C18.8284 21 17.8856 21 16 21H6.5C5.11929 21 4 19.8807 4 18.5V18.5C4 17.1193 5.11929 16 6.5 16H16C17.8856 16 18.8284 16 19.4142 15.4142C20 14.8284 20 13.8856 20 12V7C20 5.11438 20 4.17157 19.4142 3.58579C18.8284 3 17.8856 3 16 3H8C6.11438 3 5.17157 3 4.58579 3.58579C4 4.17157 4 5.11438 4 7V18.5" stroke="#23564E" stroke-width="2"/>
                            <path d="M9 10L10.2929 11.2929C10.6834 11.6834 11.3166 11.6834 11.7071 11.2929L15 8" stroke="#23564E" strokeWidth="2" strokeLinecap="round"/>
                        </svg>                          
                        <span>Minimum Of <span className="font-semibold">3 Classes</span></span>
                      </li>
                      <li className="flex items-center space-x-3">
 <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 12V17C20 18.8856 20 19.8284 19.4142 20.4142C18.8284 21 17.8856 21 16 21H6.5C5.11929 21 4 19.8807 4 18.5V18.5C4 17.1193 5.11929 16 6.5 16H16C17.8856 16 18.8284 16 19.4142 15.4142C20 14.8284 20 13.8856 20 12V7C20 5.11438 20 4.17157 19.4142 3.58579C18.8284 3 17.8856 3 16 3H8C6.11438 3 5.17157 3 4.58579 3.58579C4 4.17157 4 5.11438 4 7V18.5" stroke="#23564E" stroke-width="2"/>
                            <path d="M9 10L10.2929 11.2929C10.6834 11.6834 11.3166 11.6834 11.7071 11.2929L15 8" stroke="#23564E" strokeWidth="2" strokeLinecap="round"/>
                            </svg>                          
                            <span>Suitable For Beginners<span className="font-semibold"></span></span>
                      </li>
                      <li className="flex items-center space-x-3">
 <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 12V17C20 18.8856 20 19.8284 19.4142 20.4142C18.8284 21 17.8856 21 16 21H6.5C5.11929 21 4 19.8807 4 18.5V18.5C4 17.1193 5.11929 16 6.5 16H16C17.8856 16 18.8284 16 19.4142 15.4142C20 14.8284 20 13.8856 20 12V7C20 5.11438 20 4.17157 19.4142 3.58579C18.8284 3 17.8856 3 16 3H8C6.11438 3 5.17157 3 4.58579 3.58579C4 4.17157 4 5.11438 4 7V18.5" stroke="#23564E" stroke-width="2"/>
                            <path d="M9 10L10.2929 11.2929C10.6834 11.6834 11.3166 11.6834 11.7071 11.2929L15 8" stroke="#23564E" strokeWidth="2" strokeLinecap="round"/>
                            </svg>                          
                            <span>PDF Format Material<span className="font-semibold"></span></span>
                      </li>
                  </ul>
                  <motion.a  whileInView="show" 
                            whileHover={{ scale: 1.1 }} href="https://book.stripe.com/test_aEU8zo6pd0yTbn2aEE" className="text-white bg-green hover:bg-green hover:text-white focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900 " >Sign Up</motion.a>
              </motion.div>
              </div>
    




            {/* Leaving Cert Plan */}
              <motion.div variants={fadeIn('right', 'spring', 0.5, 0.75)} initial="hidden" whileInView="show"  whileHover={{ scale: 1.1 }}  transition={{ type: "spring", stiffness: 400, damping: 10 }} className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-green rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white ">
                <h3 className="text-2xl font-semibold text-white">Leaving Cert Arabic</h3>
                <div className="flex justify-center items-baseline my-8">
                    <span className="mr-2 text-5xl font-extrabold text-white">€300</span>
                    <span className="text-white dark:text-gray-400" dark:text-gray-400>/Year</span>
                </div>
                  <ul role="list" className="mb-8 space-y-4 text-left text-white">
                      <li className="flex items-center space-x-3">
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 12V17C20 18.8856 20 19.8284 19.4142 20.4142C18.8284 21 17.8856 21 16 21H6.5C5.11929 21 4 19.8807 4 18.5V18.5C4 17.1193 5.11929 16 6.5 16H16C17.8856 16 18.8284 16 19.4142 15.4142C20 14.8284 20 13.8856 20 12V7C20 5.11438 20 4.17157 19.4142 3.58579C18.8284 3 17.8856 3 16 3H8C6.11438 3 5.17157 3 4.58579 3.58579C4 4.17157 4 5.11438 4 7V18.5" stroke="white" strokeWidth="2"/>
                            <path d="M9 10L10.2929 11.2929C10.6834 11.6834 11.3166 11.6834 11.7071 11.2929L15 8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        </svg>                    
                        <span>€300 To Be Paid In Advance</span>
                      </li>

                      <li className="flex items-center space-x-3">
 <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 12V17C20 18.8856 20 19.8284 19.4142 20.4142C18.8284 21 17.8856 21 16 21H6.5C5.11929 21 4 19.8807 4 18.5V18.5C4 17.1193 5.11929 16 6.5 16H16C17.8856 16 18.8284 16 19.4142 15.4142C20 14.8284 20 13.8856 20 12V7C20 5.11438 20 4.17157 19.4142 3.58579C18.8284 3 17.8856 3 16 3H8C6.11438 3 5.17157 3 4.58579 3.58579C4 4.17157 4 5.11438 4 7V18.5" stroke="white" strokeWidth="2"/>
                            <path d="M9 10L10.2929 11.2929C10.6834 11.6834 11.3166 11.6834 11.7071 11.2929L15 8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                            <span>Online Zoom Classes</span>
                      </li>

                      <li className="flex items-center space-x-3">
 <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 12V17C20 18.8856 20 19.8284 19.4142 20.4142C18.8284 21 17.8856 21 16 21H6.5C5.11929 21 4 19.8807 4 18.5V18.5C4 17.1193 5.11929 16 6.5 16H16C17.8856 16 18.8284 16 19.4142 15.4142C20 14.8284 20 13.8856 20 12V7C20 5.11438 20 4.17157 19.4142 3.58579C18.8284 3 17.8856 3 16 3H8C6.11438 3 5.17157 3 4.58579 3.58579C4 4.17157 4 5.11438 4 7V18.5" stroke="white" strokeWidth="2"/>
                            <path d="M9 10L10.2929 11.2929C10.6834 11.6834 11.3166 11.6834 11.7071 11.2929L15 8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                            <span>Saturday - May<span className="font-semibold"></span></span>
                      </li>
                      
                      <li className="flex items-center space-x-3">
 <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 12V17C20 18.8856 20 19.8284 19.4142 20.4142C18.8284 21 17.8856 21 16 21H6.5C5.11929 21 4 19.8807 4 18.5V18.5C4 17.1193 5.11929 16 6.5 16H16C17.8856 16 18.8284 16 19.4142 15.4142C20 14.8284 20 13.8856 20 12V7C20 5.11438 20 4.17157 19.4142 3.58579C18.8284 3 17.8856 3 16 3H8C6.11438 3 5.17157 3 4.58579 3.58579C4 4.17157 4 5.11438 4 7V18.5" stroke="white" strokeWidth="2"/>
                            <path d="M9 10L10.2929 11.2929C10.6834 11.6834 11.3166 11.6834 11.7071 11.2929L15 8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                            <span>Course Duration <span className="font-semibold">= 60 Hours</span></span>
                      </li>
                      
                      <li className="flex items-center space-x-3">
 <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 12V17C20 18.8856 20 19.8284 19.4142 20.4142C18.8284 21 17.8856 21 16 21H6.5C5.11929 21 4 19.8807 4 18.5V18.5C4 17.1193 5.11929 16 6.5 16H16C17.8856 16 18.8284 16 19.4142 15.4142C20 14.8284 20 13.8856 20 12V7C20 5.11438 20 4.17157 19.4142 3.58579C18.8284 3 17.8856 3 16 3H8C6.11438 3 5.17157 3 4.58579 3.58579C4 4.17157 4 5.11438 4 7V18.5" stroke="white" strokeWidth="2"/>
                            <path d="M9 10L10.2929 11.2929C10.6834 11.6834 11.3166 11.6834 11.7071 11.2929L15 8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                            </svg>                          
                            <span>Every Saturday <span className="font-semibold">@ 2 P.M.</span></span>
                      </li>
                  </ul>
                  <motion.a  whileInView="show" 
                            whileHover={{ scale: 1.1 }} href="https://buy.stripe.com/6oE5m9fQpcTuaJi7st" target="_blank" className="text-black bg-white  hover:text-green focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Sign Up</motion.a>
              </motion.div>






              {/* Quranic Arabic Plan */}
              <div className=""> 
              <motion.div variants={fadeIn('right', 'spring', 0.75, 0.75)} initial="hidden"
                            whileInView="show" className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                  <h3 className="text-2xl font-semibold">Quranic Arabic</h3>
                  <div className="flex justify-center items-baseline my-8">
                      <span className="mr-2 text-5xl font-extrabold">€180</span>
                      <span className="text-gray-500 dark:text-gray-400">/Term</span>
                  </div>
                  <ul role="list" className="mb-8 space-y-4 text-left">
                      <li className="flex items-center space-x-3">
 <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 12V17C20 18.8856 20 19.8284 19.4142 20.4142C18.8284 21 17.8856 21 16 21H6.5C5.11929 21 4 19.8807 4 18.5V18.5C4 17.1193 5.11929 16 6.5 16H16C17.8856 16 18.8284 16 19.4142 15.4142C20 14.8284 20 13.8856 20 12V7C20 5.11438 20 4.17157 19.4142 3.58579C18.8284 3 17.8856 3 16 3H8C6.11438 3 5.17157 3 4.58579 3.58579C4 4.17157 4 5.11438 4 7V18.5" stroke="#23564E" stroke-width="2"/>
                            <path d="M9 10L10.2929 11.2929C10.6834 11.6834 11.3166 11.6834 11.7071 11.2929L15 8" stroke="#23564E" strokeWidth="2" strokeLinecap="round"/>
                            </svg>                          
                            <span>€180 Paid In Advance</span>
                      </li>
                      <li className="flex items-center space-x-3">
 <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 12V17C20 18.8856 20 19.8284 19.4142 20.4142C18.8284 21 17.8856 21 16 21H6.5C5.11929 21 4 19.8807 4 18.5V18.5C4 17.1193 5.11929 16 6.5 16H16C17.8856 16 18.8284 16 19.4142 15.4142C20 14.8284 20 13.8856 20 12V7C20 5.11438 20 4.17157 19.4142 3.58579C18.8284 3 17.8856 3 16 3H8C6.11438 3 5.17157 3 4.58579 3.58579C4 4.17157 4 5.11438 4 7V18.5" stroke="#23564E" stroke-width="2"/>
                            <path d="M9 10L10.2929 11.2929C10.6834 11.6834 11.3166 11.6834 11.7071 11.2929L15 8" stroke="#23564E" strokeWidth="2" strokeLinecap="round"/>
                            </svg>                          
                            <span>Online Zoom Classes</span>
                      </li>
                      <li className="flex items-center space-x-3">
 <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 12V17C20 18.8856 20 19.8284 19.4142 20.4142C18.8284 21 17.8856 21 16 21H6.5C5.11929 21 4 19.8807 4 18.5V18.5C4 17.1193 5.11929 16 6.5 16H16C17.8856 16 18.8284 16 19.4142 15.4142C20 14.8284 20 13.8856 20 12V7C20 5.11438 20 4.17157 19.4142 3.58579C18.8284 3 17.8856 3 16 3H8C6.11438 3 5.17157 3 4.58579 3.58579C4 4.17157 4 5.11438 4 7V18.5" stroke="#23564E" stroke-width="2"/>
                            <path d="M9 10L10.2929 11.2929C10.6834 11.6834 11.3166 11.6834 11.7071 11.2929L15 8" stroke="#23564E" strokeWidth="2" strokeLinecap="round"/>
                            </svg>                          
                            <span>September - December<span className="font-semibold"></span></span>
                      </li>
                      <li className="flex items-center space-x-3">
 <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 12V17C20 18.8856 20 19.8284 19.4142 20.4142C18.8284 21 17.8856 21 16 21H6.5C5.11929 21 4 19.8807 4 18.5V18.5C4 17.1193 5.11929 16 6.5 16H16C17.8856 16 18.8284 16 19.4142 15.4142C20 14.8284 20 13.8856 20 12V7C20 5.11438 20 4.17157 19.4142 3.58579C18.8284 3 17.8856 3 16 3H8C6.11438 3 5.17157 3 4.58579 3.58579C4 4.17157 4 5.11438 4 7V18.5" stroke="#23564E" stroke-width="2"/>
                            <path d="M9 10L10.2929 11.2929C10.6834 11.6834 11.3166 11.6834 11.7071 11.2929L15 8" stroke="#23564E" strokeWidth="2" strokeLinecap="round"/>
                            </svg>                          
                            <span>Course Duration<span className="font-semibold"> = 10 Hours</span></span>
                      </li>
                      <li className="flex items-center space-x-3">
 <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 12V17C20 18.8856 20 19.8284 19.4142 20.4142C18.8284 21 17.8856 21 16 21H6.5C5.11929 21 4 19.8807 4 18.5V18.5C4 17.1193 5.11929 16 6.5 16H16C17.8856 16 18.8284 16 19.4142 15.4142C20 14.8284 20 13.8856 20 12V7C20 5.11438 20 4.17157 19.4142 3.58579C18.8284 3 17.8856 3 16 3H8C6.11438 3 5.17157 3 4.58579 3.58579C4 4.17157 4 5.11438 4 7V18.5" stroke="#23564E" stroke-width="2"/>
                            <path d="M9 10L10.2929 11.2929C10.6834 11.6834 11.3166 11.6834 11.7071 11.2929L15 8" stroke="#23564E" strokeWidth="2" strokeLinecap="round"/>
                            </svg>                          
                            <span>Every Sunday<span className="font-semibold"> @ 2 P.M.</span></span>
                      </li>
                  </ul>
                  <motion.a  whileInView="show" 
                            whileHover={{ scale: 1.1 }} href="https://islamireland.ie/departments/adult-education/" target="_blank" className="text-white bg-green hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Sign Up</motion.a>
              </motion.div>
              </div>
          </div>
        

        

        
    </div>
        
</section>
  )
}










