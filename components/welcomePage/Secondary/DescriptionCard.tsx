import React, { ReactNode } from 'react'

interface Data {
  title: string;
  description: string;
  icon: ReactNode;
}

interface Props {
  data: Data;
}

const DescriptionCard:React.FC<Props> = ({data}) => {
  return (
    <div className="flex flex-col p-4">
      <div className="w-full flex items-start ">
        <div className="mr-4 text-3xl">{data.icon} </div>
        <div>
          <h2 className="text-lg font-semibold">{data.title} </h2>
        </div>
      </div>
      <div className="w-full mt-2 text-gray-700">{data.description}</div>
    </div>
  );
}

export default DescriptionCard