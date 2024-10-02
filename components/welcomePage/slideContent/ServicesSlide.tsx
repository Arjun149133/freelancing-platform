import React from "react";
import JobWindow from "./JobWindow";

const ServicesSlide = () => {
  return (
    <div className="w-full h-full bg-[#dce6f6] p-4 flex flex-col justify-between overflow-hidden">
      {/* Title Section */}
      <div className="text-center mb-6">
        <h2 className="text-2xl text-gray-800 font-bold">
          BECOME A FREELANCER
        </h2>
        <p className="mt-2 text-gray-600">
          Explore exciting job opportunities in fields like web development,
          blockchain, and graphic design.
        </p>
      </div>

      {/* Circular Categories with Hover Effects */}
      <div className="flex justify-center space-x-6">
        <JobWindow />
        <JobWindow />
        <JobWindow />
        <JobWindow />
      </div>

      
      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800">
          Ready to Get Started?
        </h3>
        <div className="mt-2 flex justify-center space-x-4">
          <button className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition duration-200 ease-in-out">
            Sign Up Now
          </button>
          <button className="bg-[#104eb3] text-white py-2 px-6 rounded-lg hover:bg-[#083980] transition duration-200 ease-in-out">
            Discover Opportunities
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesSlide;
