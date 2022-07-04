import React, {useState} from 'react'
import DrinkInterface from './DrinkInterface'
import OrderInterface from './OrderInterface'
import {DrinkDict} from './Drinks'

function MainComponent() {
  const [currentOrder, setCurrentOrder] = useState(new Array<DrinkDict>);

  const addToOrder = (drink: DrinkDict) => {
    let updatedOrder = [...currentOrder, ...[drink]];
    setCurrentOrder(updatedOrder);
  }

  const updateQty = (id: string, change: string) => {
    let p = document.getElementById(id);
    let curr = parseInt(p?.textContent!);
    if (change === '-') {
      curr = curr - 1;
    } else if (change === '+') {
      curr = curr + 1;
    }
    p!.textContent = curr.toString();
  }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-sm-6'>
                <DrinkInterface addToOrder={addToOrder}/>
            </div>
            <div className='col-sm-6'>
                <OrderInterface currentOrder={currentOrder} qtyUpdate={updateQty}/>
            </div>
        </div>
    </div>
  )
}

export default MainComponent