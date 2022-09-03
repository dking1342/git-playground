import React from 'react'

type Props = {}

const Order = (props: Props) => {
  return (
    <div>
      <h1>Order</h1>
      <form action="">
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" />
        </div>
        <div>
          <label htmlFor="item">Item</label>
          <input type="text" name="item" id="item" />
        </div>
        <div>
          <label htmlFor="quantity">Quantity</label>
          <input type="number" name="quantity" id="quantity" />
        </div>
        <div>
          <input type="submit" value="Order" />
        </div>
      </form>
    </div>
  )
}

export default Order