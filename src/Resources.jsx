import React from "react";
import { motion } from "framer-motion";
import single from './assets/singleuser.webp';
import partner from './assets/partnership.png';
import group from './assets/groupaccount.jpeg';

function Resources() {
  return (
    <section id='resources' className="left-0 absolute w-full h-full mt-650 md:mt-650 lg:mt-570">
      <div className='flex flex-col md:flex-col lg:flex-row lg:px-100 lg:gap-2 gap-10'>

        {/* Card 1 */}
        <motion.div
          className='flex flex-col justify-center w-80 h-100 shadow-xl rounded-xl mx-auto 
                     transition-transform duration-300 ease-in-out hover:scale-105'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.3 }}
        >
          <img src={single} alt="Single User" className='w-15 flex mx-auto' />
          <h1 className='font-bold text-2xl mt-3'>Single User</h1>
          <h1 className='font-bold text-3xl mt-3'>$149</h1>
          <p className='font-bold mt-3'>500 GB Storage</p>
          <p className='font-bold mt-2'>1 User Allowed</p>
          <p className='font-bold mt-2'>Send up to 20GB</p>
          <button className="bg-green-400 text-black w-55 h-15 rounded-xl mt-10 font-bold mx-auto">
            Start Trial
          </button>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className='flex flex-col justify-center w-80 h-100 shadow-xl rounded-xl mx-auto 
                     transition-transform bg-gray-200 duration-300 ease-in-out hover:scale-105'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ amount: 0.3 }}
        >
          <img src={partner} alt="Partner Plan" className='w-15 flex mx-auto' />
          <h1 className='font-bold text-2xl mt-3'>Partner Plan</h1>
          <h1 className='font-bold text-3xl mt-3'>$199</h1>
          <p className='font-bold mt-3'>1 TB Storage</p>
          <p className='font-bold mt-2'>2 User Allowed</p>
          <p className='font-bold mt-2'>Send up to 20GB</p>
          <button className="bg-green-400 text-black w-55 h-15 rounded-xl mt-10 font-bold mx-auto">
            Start Trial
          </button>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className='flex flex-col justify-center w-80 h-100 shadow-xl rounded-xl mx-auto 
                     transition-transform duration-300 ease-in-out hover:scale-105'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ amount: 0.3 }}
        >
          <img src={group} alt="Group Plan" className='w-15 flex mx-auto' />
          <h1 className='font-bold text-2xl mt-3'>Group Plan</h1>
          <h1 className='font-bold text-3xl mt-3'>$299</h1>
          <p className='font-bold mt-3'>5 TB Storage</p>
          <p className='font-bold mt-2'>10 User Allowed</p>
          <p className='font-bold mt-2'>Send up to 30GB</p>
          <button className="bg-green-400 text-black w-55 h-15 rounded-xl mt-10 font-bold mx-auto">
            Start Trial
          </button>
        </motion.div>

      </div>
    </section>
  );
}

export default Resources;
