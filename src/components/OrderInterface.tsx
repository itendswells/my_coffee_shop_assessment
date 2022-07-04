import React from 'react'
import {DrinkDict, OrderDict} from './Drinks'
import OrderTile from './OrderTile';

interface OrderInterfaceProps {
  currentOrder: Array<OrderDict>;
  qtyUpdate: (drink: OrderDict, change: string) => void;
}

function OrderInterface(props: OrderInterfaceProps) {
  const {currentOrder, qtyUpdate} = props;

  const taxRate = 0.05;

  function getSubtotal() {
    let subtotal = 0;
    currentOrder.forEach(drink => {
      subtotal = subtotal + (drink.qty*drink.price)
    });
    return subtotal;
  }

  function getTaxes() {
    return getSubtotal()*taxRate;
  }

  function getTotal() {
    return getSubtotal() + getTaxes();
  }

  return (
    <div className='bordered'>
      <h2>Order:</h2>
      {currentOrder.map((drink: OrderDict) => (
          <OrderTile drink={drink} key={drink.name} qtyUpdate={qtyUpdate}/>
      ))}
      <div className='row'>
        <div className='col-sm-9'>
          <h4>Subtotal:</h4>
        </div>
        <div className='col-sm-3'>
          <h5>{getSubtotal().toFixed(2)}</h5>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-9'>
          <h5>Tax:</h5>
        </div>
        <div className='col-sm-3'>
          <h5>{getTaxes().toFixed(2)}</h5>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-9'>
          <h3>Total:</h3>
        </div>
        <div className='col-sm-3'>
          <h5>{getTotal().toFixed(2)}</h5>
        </div>
      </div>
    </div>
  )
}

export default OrderInterface