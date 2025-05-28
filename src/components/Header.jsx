import React from 'react'

const Header = ({heading}) => {
  return (
    <div>
        <h1>
            {heading}
        </h1>
        <nav>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </nav>
    </div>
  )
}

export default Header