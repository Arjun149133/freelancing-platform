import React, { ReactNode } from 'react'

interface Props{
    onClick: () => void,
    ele : ReactNode
}

const ChangeButton:React.FC<Props> = ({onClick , ele  }) => {
  return (
      <button onClick={onClick} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">{ ele}</button>
  );
}

export default ChangeButton