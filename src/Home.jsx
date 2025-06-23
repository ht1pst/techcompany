import React from "react";
import { ReactTyped as Typed } from "react-typed";
import { motion } from "framer-motion";

function Home() {
  return (
    <section id="home" className="md:h-full lg:h-full h-210 w-full left-0 absolute bg-black mt-10">
      <div className="md:mt-70 lg:mt-70 mt-50 px-10">
        <motion.p
          className="text-green-400 font-bold text-4xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.3 }}
        >
          GROWING WITH DATA ANALYTICS
        </motion.p>

        <motion.h1
          className="text-white md:text-7xl sm:text-6xl text-4xl font-bold mt-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ amount: 0.3 }}
        >
          Grow with data.
        </motion.h1>

        <motion.div
          className="text-white flex justify-center mt-4 flex-wrap"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ amount: 0.3 }}
        >
          <p className="md:text-5xl sm:text-4xl text-xl font-bold">
            Fast, flexible financing for{" "}
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold text-gray-400 ml-2"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </motion.div>

        <motion.p
          className="md:text-2xl text-xl font-bold text-gray-400 mt-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ amount: 0.3 }}
        >
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.
        </motion.p>

        <motion.button
          className="bg-green-400 text-black w-55 h-15 rounded-xl mt-10 font-bold transition hover:scale-110"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ amount: 0.3 }}
          whileHover={{ scale: 1.1 }}
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
}

export default Home;
