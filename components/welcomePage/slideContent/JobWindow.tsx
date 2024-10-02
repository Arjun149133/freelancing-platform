import React from 'react'

const JobWindow = () => {
  return (
    <div>
      <div className="relative group">
        <div className="w-40 h-56 rounded-t-full bg-gray-200 shadow-lg overflow-hidden group-hover:bg-gray-50 transition duration-300 ease-in-out">
          <img
            src="digitalmarketing-image.png"
            alt="Digital Marketing"
            className="object-cover w-full h-full group-hover:hidden"
          />
          <div className="hidden group-hover:flex items-center justify-center h-full">
            <p className="text-center text-sm font-semibold text-gray-700">
              Job
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobWindow