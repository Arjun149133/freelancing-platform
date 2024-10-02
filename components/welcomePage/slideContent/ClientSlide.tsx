import React from 'react'

const ClientSlide = () => {
  return (
    <div className="w-full h-full bg-[#f0f4fa] text-center p-8 flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold text-[#104eb3]">
        Benefits for Clients
      </h2>
      <p className="mt-4 text-gray-600">
        Find trusted freelancers with high success rates and secure payment
        options. "Don’t wait—great talent is just a click away! Get started
        now!" Collaborate and watch your vision come to life!
      </p>
      <div className="mt-6">
        <button className="border-2 border-[#104eb3] text-[#104eb3] py-2 px-4 rounded-lg hover:bg-[#104eb3] hover:text-white">
          Post a Job in Minutes
        </button>
      </div>
    </div>
  );
};


export default ClientSlide