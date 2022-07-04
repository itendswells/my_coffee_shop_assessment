import React, {useState, useEffect} from 'react'
import DrinkInterface from './DrinkInterface'
import OrderInterface from './OrderInterface'
import {DrinkDict, OrderDict} from './Drinks'

function MainComponent() {
  const [currentOrder, setCurrentOrder] = useState(new Array<OrderDict>);

  const addToOrder = (drink: DrinkDict) => {
    let order = {
      name: drink.name,
      qty: 1,
      price: drink.price
    }
    let updatedOrder = [...currentOrder, ...[order]];
    setCurrentOrder(updatedOrder);
  }

  const removeFromOrder = (drink: OrderDict) => {
    let newOrder = [...currentOrder];
    let index = newOrder.indexOf(drink);
    if (index != -1) {
      newOrder.splice(index, 1);
    }

    setCurrentOrder(newOrder);   
  }

  const updateQty = (drink: OrderDict, change: string) => {
    let newQty = drink.qty;
    if (change === '-') {
      newQty = newQty - 1;
    } else if (change === '+') {
      newQty = newQty + 1;
    }
    
    if (newQty < 1) newQty = 1;
    
    let newDrink = {
      name: drink.name,
      qty: newQty,
      price: drink.price
    };
    let newOrder = [...currentOrder];
    let index = newOrder.indexOf(drink);
    if (index != -1) {
      newOrder[index] = newDrink;
    }

    setCurrentOrder(newOrder);   
  }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-sm-6'>
                <DrinkInterface addToOrder={addToOrder}/>
            </div>
            <div className='col-sm-6'>
                <OrderInterface currentOrder={currentOrder} qtyUpdate={updateQty} removeDrink={removeFromOrder}/>
            </div>
        </div>
    </div>
  )
}

export default MainComponent