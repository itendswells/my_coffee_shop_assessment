import React from 'react'
import {DrinkDict} from './Drinks'
import OrderTile from './OrderTile';

interface OrderInterfaceProps {
  currentOrder: Array<DrinkDict>;
  qtyUpdate: (id: string, change: string) => void;
}

function OrderInterface(props: OrderInterfaceProps) {
  const {currentOrder, qtyUpdate} = props;

  return (
    <div className='bordered'>
      <h2>Order:</h2>
      <div>
      {currentOrder.map((drink: DrinkDict) => (
          <OrderTile name={drink.name} key={drink.name} qtyUpdate={qtyUpdate}/>
        ))}
      </div>
    </div>
  )
}

export default OrderInterface