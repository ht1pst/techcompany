import single from './assets/singleuser.webp';
import partner from './assets/partnership.png';
import group from './assets/groupaccount.jpeg';

import React from "react";
function Resources(){
return(

   <section id='resources' className="left-0 absolute w-full h-full mt-650 md:mt-650 lg:mt-570">
<div className='flex flex-col md:flex-col lg:flex-row lg:px-100  lg:gap-2 gap-10' >
   <div className='flex flex-col justify-center w-80 h-100 shadow-xl rounded-xl mx-auto 
                transition-transform duration-300 ease-in-out hover:scale-105'>
  <img src={single} alt="" className='w-15 flex mx-auto' />
  <h1 className='font-bold text-2xl mt-3'>Single User</h1>
  <h1 className='font-bold text-3xl mt-3'>$149</h1>
  <p className='font-bold mt-3'>500 GB Storage</p>
  <p className='font-bold mt-2'>1 User Allowed</p>
  <p className='font-bold mt-2'>Send up to 20GB</p>
  <button className="bg-green-400 text-black w-55 h-15 rounded-xl mt-10 font-bold mx-auto">
    Start Trial
  </button>
</div>


   <div className='flex flex-col justify-center w-80 h-100 shadow-xl rounded-xl mx-auto 
                transition-transform bg-gray-200 duration-300 ease-in-out hover:scale-105'>
  <img src={partner} alt="" className='w-15 flex mx-auto' />
  <h1 className='font-bold text-2xl mt-3'>Single User</h1>
  <h1 className='font-bold text-3xl mt-3'>$199</h1>
  <p className='font-bold mt-3'>1 TB Storage</p>
  <p className='font-bold mt-2'>2 User Allowed</p>
  <p className='font-bold mt-2'>Send up to 20GB</p>
  <button className="bg-green-400 text-black w-55 h-15 rounded-xl mt-10 font-bold mx-auto">
    Start Trial
  </button>
</div>


  <div className='flex flex-col justify-center w-80 h-100 shadow-xl rounded-xl mx-auto 
                transition-transform duration-300 ease-in-out hover:scale-105'>
  <img src={group} alt="" className='w-15 flex mx-auto' />
  <h1 className='font-bold text-2xl mt-3'>Single User</h1>
  <h1 className='font-bold text-3xl mt-3'>$299</h1>
  <p className='font-bold mt-3'>5 TB Storage</p>
  <p className='font-bold mt-2'>10 User Allowed</p>
  <p className='font-bold mt-2'>Send up to 30GB</p>
  <button className="bg-green-400 text-black w-55 h-15 rounded-xl mt-10 font-bold mx-auto">
    Start Trial
  </button>
</div>

</div>
   </section>
)

};

export default Resources;