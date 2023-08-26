import React from "react";
import { motion } from "framer-motion"
import { fadeIn } from "../utils/motion"


export default function Clients() {
    return (
        <section id="clients" class="font-poppins">
            <div class="container px-4 py-10 mx-auto">
                <h1 class="mb-4 text-4xl font-extrabold text-center text-green capitalize dark:text-white">
                    What My Students Are <br />Saying About Me</h1>

                <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3 font-poppins">
                    <motion.div variants={fadeIn('top', 'spring', 0.75, 0.75)} initial="hidden"
                        whileInView="show" viewport={{ once: true }} class="p-8 border rounded-lg dark:border-gray-700 bg-purple">
                        <h3 className="text-white font-semibold text-2xl mb-2">Tailored Approach</h3>
                        <p class="leading-loose text-white dark:text-gray-400">
                            “I took Arabic lessons with Mr. Ramadan for my leaving certificate. His tailored approach and feedback significantly improved my Arabic. His interactive classes enhanced our grammar understanding. He covered the Quran, two novels, and poetry, providing us with ample choices for the exams.”
                        </p>
                        <hr className="mt-4 border border-2 rounded-lg" />


                        <div class="flex items-center mt-8 -mx-2">
                            <div class="mx-2">
                                <h1 class="font-semibold text-white dark:text-white">Rana Mohamed</h1>
                                <span className="text-[#FFD700] text-sm  space-x-1">★★★★★</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={fadeIn('top', 'spring', 0.5, 0.75)} initial="hidden"
                        whileInView="show" viewport={{ once: true }} class="p-8 border rounded-lg dark:border-gray-700">
                        <h3 className="text-green font-semibold text-2xl mb-2">Great Teacher</h3>
                        <p class="leading-loose text-black dark:text-gray-400">
                            "Mr. Abughalia is one of the best arabic teachers i’ve had throughout the years. The notes he provides us during the Leaving Cert course are very helpful and easy to understand, and therefore I left my Arabic Leaving Cert exam feeling very happy and confident. I highly encourage everyone to join his Arabic course."
                        </p>
                        <hr className="mt-4 border border-2 rounded-lg" />

                        <div class="flex items-center mt-8 -mx-2">

                            <div class="mx-2">
                                <h1 class="font-semibold text-gray-800 dark:text-white">Zeinab Malek</h1>
                                <span className="text-[#FFD700] text-sm  space-x-1">★★★★★</span>

                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={fadeIn('top', 'spring', 0.25, 0.75)} initial="hidden"
                        whileInView="show" viewport={{ once: true }} class="p-8 border rounded-lg dark:border-gray-700">
                        <h3 className="text-green font-semibold text-2xl mb-2">Engaging Style</h3>
                        <p class="leading-loose text-black dark:text-gray-400">
                            "I studied Arabic with Mr Ramadan in preparation for my Leaving Cert. He has an engaging teaching style that I really enjoyed and simplifies matters to make sure the class understood everything well. Based on my experience I would highly recommend taking classes with teacher Ramadan."
                        </p>
                        <hr className="mt-4 border-2 rounded-lg" />


                        <div class="flex items-center mt-8 -mx-2">

                            <div class="mx-2">
                                <h1 class="font-semibold text-gray-800 dark:text-white">Raghad Alrefaee</h1>
                                <span className="text-[#FFD700] text-sm  space-x-1">★★★★★</span>

                            </div>
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="mt-10 flex justify-center">
                    <a href="#" className=" inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 ">
                        Read More
                    </a>
                </motion.div>
            </div>

        </section>
    )
}