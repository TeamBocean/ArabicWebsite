import React from "react";


export default function Clients () {
  return (
    <section class=" dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
        <h1 class="mb-4 text-4xl font-extrabold text-center text-green capitalize lg:text-3xl dark:text-white">
            What My Students Are <br/>Saying About Me</h1>

        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3 font-poppins">
            <div class="p-8 border rounded-lg dark:border-gray-700 bg-purple">
                <h3 className="text-white font-semibold text-2xl mb-2">Tailored Approach</h3>
                <p class="leading-loose text-white dark:text-gray-400">
                    “I took Arabic lessons with Mr. Ramadan for my leaving certificate. His tailored approach and feedback significantly improved my Arabic. His interactive classes enhanced our grammar understanding. He covered the Quran, two novels, and poetry, providing us with ample choices for the exams.”
                </p>
                <hr className="mt-4 border border-2 rounded-l"/>


                <div class="flex items-center mt-8 -mx-2">
                    <div class="mx-2">
                        <h1 class="font-semibold text-white dark:text-white">Rana Mohamed</h1>
                        <span className="text-sm text-white space-x-1">★★★★★</span>
                    </div>
                </div>
            </div>

            <div class="p-8 border rounded-lg dark:border-gray-700">
                <h3 className="text-green font-semibold text-2xl mb-2">Great Teacher</h3>
                <p class="leading-loose text-black dark:text-gray-400">
                "Mr. Abughalia is one of the best arabic teachers i’ve had throughout the years. The notes he provides us during the Leaving Cert course are very helpful and easy to understand, and therefore I left my Arabic Leaving Cert exam feeling very happy and confident. I highly encourage everyone to join his Arabic course."
                </p>
                <hr className="mt-4 border border-2 rounded-l"/>

                <div class="flex items-center mt-8 -mx-2">

                    <div class="mx-2">
                        <h1 class="font-semibold text-gray-800 dark:text-white">Zeinab Malek</h1>
                        <span className="text-sm text-black space-x-1">★★★★★</span>

                    </div>
                </div>
            </div>

            <div class="p-8 border rounded-lg dark:border-gray-700">
                <h3 className="text-green font-semibold text-2xl mb-2">Engaging Style</h3>
                <p class="leading-loose text-black dark:text-gray-400">
                "I studied Arabic with Mr Ramadan in preparation for my Leaving Cert. He has an engaging teaching style that I really enjoyed and simplifies matters to make sure the class understood everything well. Based on my experience I would highly recommend taking classes with teacher Ramadan."
                </p>
                <hr className="mt-4 border-2 rounded-lg"/>


                <div class="flex items-center mt-8 -mx-2">

                    <div class="mx-2">
                        <h1 class="font-semibold text-gray-800 dark:text-white">Raghad Alrefaee</h1>
                        <span className="text-sm text-black space-x-1">★★★★★</span>

                    </div>
                </div>
            </div>
        </div>
        
    </div>
    
</section>
  )
}