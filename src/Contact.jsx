import face from './assets/facebook2.webp';
import insta from './assets/instagram.webp';
import x from './assets/twitter.webp';
import tik from './assets/tiktok.webp';
import git from './assets/github.webp';

function Contact(){
return(
   <section className="left-0 absolute w-full h-370  lg:h-full mt-1000 lg:mt-700 md:mt-1000 bg-black md:h-350">
      <div className='flex  gap-20 lg:px-40 mt-20 lg:mt-20 md:flex-col md:gap-20 flex-col'>
<div>
   <h1  className='text-green-400 text-3xl font-bold'>TechifyINC</h1>
   <p className='font-bold  px-4 lg:w-200 text-white mt-5 mx-auto'>Techify is a forward-thinking tech company, passionate about innovation and simplicity. We deliver reliable, scalable solutions that empower businesses. Techify focuses on user-friendly platforms, cloud services, and intelligent systems to drive transformation and growth.</p>
   <div className='flex space-x-3 mt-5 justify-center'>
      <img src={face} alt="" className='rounded-xl w-9 h-9 md:w-12 lg:w-11' />
        <img src={insta} alt="" className='rounded-xl w-10 h-9 md:w-12 lg:w-12' />
          <img src={x} alt="" className='rounded-xl  w-10 h-9 md:w-12 lg:w-12'/>
            <img src={tik} alt="" className='rounded-xl w-10 h-9 md:w-12 lg:w-11'/>
              <img src={git} alt="" className='rounded-xl w-10 h-9 md:w-12 lg:w-10'/>
   </div>
</div>

<div className='grid lg:grid-cols-4 gap-15 lg:gap-50'>
   <div className='flex flex-col gap-5'>
   <h1 className='text-gray-300 text-xl font-bold'>Solutions</h1>
   <a href="#" className='text-white font-bold'>Analytics</a>
   <a  href="#" className='text-white font-bold'>Marketing</a>
   <a  href="#" className='text-white font-bold'>Commerce</a>
   <a  href="#" className='text-white font-bold'>Insights</a>
   </div>

    <div className='flex flex-col gap-5'>
   <h1 className='text-gray-300 text-xl font-bold'>Support</h1>
   <a href="#" className='text-white font-bold'>Pricing</a>
   <a  href="#" className='text-white font-bold'>Documentation</a>
   <a  href="#" className='text-white font-bold'>Guide</a>
   <a  href="#" className='text-white font-bold'>API status</a>
   </div>

 <div className='flex flex-col gap-5'>
   <h1 className='text-gray-300 text-xl font-bold'>Company</h1>
   <a href="#" className='text-white font-bold'>About</a>
   <a  href="#" className='text-white font-bold'>Blog</a>
   <a  href="#" className='text-white font-bold'>Jobs</a>
   <a  href="#" className='text-white font-bold'>Press</a>
   </div>

 <div className='flex flex-col gap-5'>
   <h1 className='text-gray-300 text-xl font-bold'>Legal</h1>
   <a href="#" className='text-white font-bold'>Claims</a>
   <a  href="#" className='text-white font-bold'>Properties</a>
   <a  href="#" className='text-white font-bold'>Terms & conditions</a>
   <a  href="#" className='text-white font-bold'>Partners</a>
   </div>


   


</div>
      </div>
   </section>
)

};

export default Contact;