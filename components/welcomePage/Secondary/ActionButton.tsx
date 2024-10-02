import React from 'react'
import { ArrowRightIcon } from "lucide-react";

interface Props{
    title: string,
    description: string
}
const ActionButton:React.FC<Props> = ({title , description}) => {
  return (
    <div className="group">
      <button className="bg-[#082b63] text-white font-semibold py-4 px-6 rounded-lg shadow-md transition duration-300 flex flex-col items-center hover:bg-white custom8-md:max-w-[300px] w-auto">
        <span className="text-2xl transition duration-300 group-hover:text-[#082b63]">
          {title}
        </span>
        <p className="mt-1 text-sm text-gray-200 text-center transition duration-300 group-hover:text-[#082b63]">
          {description}
        </p>
        <ArrowRightIcon className="mt-1 text-lg text-gray-200 text-center transition duration-300 group-hover:text-[#082b63] transform group-hover:scale-125" />
      </button>
    </div>
  );
}

export default ActionButton