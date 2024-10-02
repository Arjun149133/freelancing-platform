import React from 'react'
import Typewriter from './Typewritter';

const WelcomeSlide = () => {
    const jobs = [
      "Web Developer","Graphic Designer","AI Content Creators","SEO Specialist","Bussiness Consultant","Video Editor","Swift Developers","Data Analyst","Freelancer",
    ];
  return (
    <div className="w-full h-full bg-gradient-to-r from-gray-100 to-blue-50  flex flex-col   p-8">
      <h2 className=" font-bold text-blue-900 text-4xl sm:text-6xl lg:text-7xl ">
        Hire Expert
      </h2>
      <div className="">
        <Typewriter
          elements={jobs}
          styles="text-blue-900 text-5xl sm:text-7xl lg:text-8xl font-bold"
        />
      </div>
      <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-[#333333] mt-3">for any job</h2>
      <p className="mt-4 text-sm sm:text-md lg:text-lg  text-[#555555] font-sans">
        Connecting skilled freelancers with businesses seeking top talent.
      </p>
      <div className="mt-6 space-x-4">
        <button className="bg-[#104eb3] text-white py-2 px-4 rounded-lg hover:bg-[#083980]">
          Find Talent
        </button>
      </div>
    </div>
  );
};


export default WelcomeSlide