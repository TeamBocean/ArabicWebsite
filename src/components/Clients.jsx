import React from "react";
import { motion } from "framer-motion"
import { fadeIn } from "../utils/motion"


export default function Clients() {
    return (
        <section id="clients" className="font-poppins">
            <div className="container px-4 py-10 mx-auto">
                <h1 className="mb-4 text-4xl font-extrabold text-center text-green capitalize dark:text-white">
                    What My Students Are <br />Saying About Me</h1>

                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3 font-poppins">
                    <motion.div variants={fadeIn('top', 'spring', 0.75, 0.75)} initial="hidden"
                        whileInView="show" className="p-8 border rounded-lg dark:border-gray-700 bg-green">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" viewBox="0 0 32 24" fill="none" className="mb-4">
                            <path d="M11.8463 0.154053C5.50017 0.154053 0.307861 5.34636 0.307861 11.6925V23.231H11.8463V11.6925H4.15401C4.15401 7.42328 7.57709 4.00021 11.8463 4.00021V0.154053ZM31.0771 0.154053C24.7309 0.154053 19.5386 5.34636 19.5386 11.6925V23.231H31.0771V11.6925H23.3848C23.3848 7.42328 26.8079 4.00021 31.0771 4.00021V0.154053Z" fill="white"/>
                        </svg>
                        <p className="leading-loose text-white dark:text-gray-400">
                            “I took Arabic lessons with Mr. Ramadan for my leaving certificate. His tailored approach and feedback significantly improved my Arabic. His interactive class enhanced our grammar understanding. He covered the Quran, two novels, and poetry, providing us with ample choices for the exams.”
                        </p>
                        <hr className="mt-4 border-2 rounded-lg border-white" />


                        <div className="flex items-center mt-8 -mx-2">
                            <div className="mx-2">
                                <h1 className="font-semibold text-white dark:text-white">Rana Mohamed</h1>
                                <span className="text-[#FFD700] text-sm  space-x-1">★★★★★</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={fadeIn('top', 'spring', 0.5, 0.75)} initial="hidden"
                        whileInView="show" className="p-8 border rounded-lg dark:border-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" viewBox="0 0 32 24" fill="none" className="mb-4">
          <path d="M11.8463 0.154053C5.50017 0.154053 0.307861 5.34636 0.307861 11.6925V23.231H11.8463V11.6925H4.15401C4.15401 7.42328 7.57709 4.00021 11.8463 4.00021V0.154053ZM31.0771 0.154053C24.7309 0.154053 19.5386 5.34636 19.5386 11.6925V23.231H31.0771V11.6925H23.3848C23.3848 7.42328 26.8079 4.00021 31.0771 4.00021V0.154053Z" fill="#00574E"/>
        </svg>
                        <p className="leading-loose text-black dark:text-gray-400">
                            "Mr. Abughalia is one of the best arabic teachers i’ve had throughout the years. The notes he provides us during the Leaving Cert course are very helpful and easy to understand, and therefore I left my Arabic Leaving Cert exam feeling very happy and confident. I highly encourage everyone to join his Arabic course."
                        </p>
                        <hr className="mt-4 border-2 rounded-lg border-black" />

                        <div className="flex items-center mt-8 -mx-2">

                            <div className="mx-2">
                                <h1 className="font-semibold text-gray-800 dark:text-white">Zeinab Malek</h1>
                                <span className="text-[#FFD700] text-sm  space-x-1">★★★★★</span>

                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={fadeIn('top', 'spring', 0.25, 0.75)} initial="hidden"
                        whileInView="show"  className="p-8 border rounded-lg dark:border-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" viewBox="0 0 32 24" fill="none" className="mb-4">
          <path d="M11.8463 0.154053C5.50017 0.154053 0.307861 5.34636 0.307861 11.6925V23.231H11.8463V11.6925H4.15401C4.15401 7.42328 7.57709 4.00021 11.8463 4.00021V0.154053ZM31.0771 0.154053C24.7309 0.154053 19.5386 5.34636 19.5386 11.6925V23.231H31.0771V11.6925H23.3848C23.3848 7.42328 26.8079 4.00021 31.0771 4.00021V0.154053Z" fill="#00574E"/>
        </svg>
                        <p className="leading-loose text-black dark:text-gray-400">
                            "I studied Arabic with Mr Ramadan in preparation for my Leaving Cert. He has an engaging teaching style that I really enjoyed and simplifies matters to make sure the class understood everything well. Based on my experience I would highly recommend taking classes with teacher Ramadan."
                        </p>
                        <hr className="mt-4 border-2 rounded-lg border-black" />


                        <div className="flex items-center mt-8 -mx-2">

                            <div className="mx-2">
                                <h1 className="font-semibold text-gray-800 dark:text-white">Raghad Alrefaee</h1>
                                <span className="text-[#FFD700] text-sm  space-x-1">★★★★★</span>

                            </div>
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="mt-10 flex justify-center"
                >
                <a
                    href="#"
                    className="inline-flex justify-center items-center mb-8 py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
                >
                    Read More
                </a>
                </motion.div>

            </div>

        </section>
    )
}