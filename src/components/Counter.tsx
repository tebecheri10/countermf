import React, { useState } from 'react'
import "../index.css"

const Counter = () => {

  const [ counter, setCounter] = useState(1)

  return (
    <div className="container">
        <p>{counter}</p>
        <div>
            <button onClick={()=>{setCounter((prev)=> prev + 1)}}>Increase</button>
            <button onClick={()=>{setCounter((prev)=> prev - 1)}}>Decrease</button>
        </div>
    </div>
  )
}

export default Counter