import React from "react";
import new1 from '../src/assets/newtech1.png';

function About(){
return(

<section id="about" className="mt-300 h-full lg:bg-white left-0 absolute w-full  lg:pt-10 ">
   <div className="flex flex-col md:flex-col lg:flex-row  justify-center gap-20" >
    <div><img src={new1} alt=""  className="md:w-100 mx-auto "/></div>
    <div>
        <p className="text-green-400 font-bold">DATA ANALYTICS DASHBOARD</p>
    <h1 className="text-4xl font-bold">Manage Data Analytics Centrally</h1>
    <p className="font-bold md:w-150 mt-2 mx-auto px-2">At Techify, we strive to deliver cutting-edge solutions with precision and care. Our team works tirelessly to build secure, scalable systems that solve real problems. Through smart design and seamless technology, we help clients unlock true digital potential. Innovation drives everything we do.</p>
    <button className="bg-black text-green-400 w-55 h-10 md:h-15 rounded-xl mt-5 font-bold transition hover:scale-120">Get started</button>
    </div>
   </div>

</section>
)

};
export default About;