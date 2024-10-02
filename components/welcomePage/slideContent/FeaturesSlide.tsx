import React from 'react'

const FeaturesSlide = () => {
  return (
    <div className="w-full h-full bg-[#e2ebf8] text-center p-8 flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold text-[#104eb3]">
        Collaborative Rooms & Messaging
      </h2>
      <p className="mt-4 text-gray-600">
        Start collaborating with real-time messaging and project rooms.
      </p>
      <div className="mt-6">
        <button className="bg-[#104eb3] text-white py-2 px-4 rounded-lg hover:bg-[#083980]">
          Start Collaborating
        </button>
      </div>
    </div>
  );
};


export default FeaturesSlide