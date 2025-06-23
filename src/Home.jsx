import React from "react";
import { ReactTyped as Typed } from "react-typed";
function Home(){
return(

    
    <section id="home" className="md:h-full lg:h-full h-210 w-full left-0 absolute bg-black mt-10 ">
   <div className=" md:mt-70 lg:mt-70 mt-50 px-10">
    <p className="text-green-400 font-bold  text-4xl ">GROWING WITH DATA ANALYTICS</p>
    <h1 className="text-white md:text-7xl sm:text-6xl text-4xl font-bold mt-10">Grow with data.</h1>
    <div className="text-white flex justify-center">
        <p className="md:text-5xl sm:text-4xl text-xl font-bold">Fast, flexible financing for  </p>
        <Typed  className="md:text-5xl sm:text-4xl text-xl font-bold text-gray-400" strings={['BTB','BTC', 'SASS' ]} typeSpeed={120} backSpeed={140} loop/>
    </div>
    <p className="md:text-2xl text-xl font-bold text-gray-400 mt-5">Monitor your data analytics to inscrease revenue for BTB, BTC, & SASS platforms.</p>
    <button className="bg-green-400 text-black w-55 h-15 rounded-xl mt-10 font-bold transition hover:scale-120">Get Started</button>
   </div>
   </section>
)

}
export default Home;