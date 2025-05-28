import React from 'react'

const Greeting = () => {
    const name = 'John'
    
    // getting date using Javascript
    const now = new Date()

    //Javascript object
    let product = {name: 'Laptop' , price: '$1200' , availability: 'In Stock'}


    //JavaScript list
    const numbers = [1,2,3,4,5,6,7,8]

    //Arrays and objects together

    const usersInfo = [
        {
            username: 'Petra' , 
            email: 'petra@gmail.com' , 
            location: 'Iowa'
        },

         {
             username: 'Johnte',
             email: 'johnte@gmail.com',
             location: 'Arkansas'
         }
    ]


  return (
    <div>
        {/* <p>
            Greetings Mr. {name}. Today is {now.getDate()}
        </p>
        <p>
            The {product.name} is {product.availability} at {product.price}
        </p>
         */}
            {/* {numbers.map((index, number) => (
                <ul key={index}>
                    <li>
                        {number}
                    </li>
                </ul>
            ))} */}

            {/* username, email and location have been destructured */}
            { usersInfo.map(({username, email, location} ) =>(
                <ul key={Math.random()}>
                    <li> {username} </li>
                    <li> {email} </li>
                    <li> {location} </li>
                </ul>
            )) }
    </div>
  )
}

export default Greeting