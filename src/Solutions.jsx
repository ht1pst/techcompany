function Solutions(){
return(
    <section id="solutions" className="left-0 absolute h-120 w-full md:h-100 mt-500 mt-400 md:mt-500 lg:mt-400 bg-black">
<div className="flex flex-col md:flex-col lg:flex-row justify-center md:gap-20 lg:gap-60 px-4 pt-20">
    <div className="py-5">
      <h1  className="text-2xl text-white font-bold">Want tips and tricks to optimize your flow?</h1>  
      <p className="text-xl text-white font-bold">Sign up with our newsletter and stay up to date</p>
    </div>

    <div className="flex flex-col md:flex-col">
         <input type="text" placeholder="Enter your email" className="bg-white text-gray-400 h-13 w-70 lg:w-100 px-5 rounded-xl mx-auto" />
    <button className="bg-green-400 text-black- w-45 h-10 md:h-13 rounded-xl mt-5 font-bold mx-auto transition hover:scale-120">Notify me</button>
    <p className="text-white   mt-5 font-bold">We care about the protection of your data.</p>

    </div>
</div>
    </section>
  
)

};

export default Solutions;