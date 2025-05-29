import React from 'react'

const Cart = () => {
    const items = ['watch' , 'smart phone' , 'console' ,'books']
  return (
    <div>
        {items.map(
            (item) =>(
                <li key={Math.random()}>{item}</li>
            )
        )}
    </div>
  )
}

export default Cart