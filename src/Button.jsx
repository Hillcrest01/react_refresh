import React, { useState } from 'react'

const Button = () => {

    const [count, setCount] = useState(0)

    const handleLeftClick =() => setCount (count + 1)
    const handleRightClick =() => setCount(count -1)
  return (
    <div>
        <button onClick={handleLeftClick}>
            +
        </button> &nbsp;
        <button> {count} </button>
        &nbsp;
        <button onClick={handleRightClick}>
            -
        </button>
    </div>
  )
}

export default Button