import React from 'react'
import { Typewriter } from "react-simple-typewriter";
interface Props{
    elements: string[]
    styles : string
}
const Typewritter:React.FC<Props> = ({elements,styles}) => {
  return (
    <div>
      <h1>
        <span className={`${styles}`} >
          <Typewriter
            words={elements}
            loop={5}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
    </div>
  );
}

export default Typewritter