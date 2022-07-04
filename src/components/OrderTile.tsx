import { functionTypeParam, tsConstructSignatureDeclaration } from '@babel/types';
import React from 'react'
import {OrderDict} from './Drinks'

interface OrderTileProps {
    drink: OrderDict;
    qtyUpdate: (drink: OrderDict, change: string) => void;
}

function OrderTile(props: OrderTileProps) {
  const {drink, qtyUpdate} = props;

  return (
    <div className='row bordered'>
      <div className='col-sm-5'>
        <p className='qty-text'>{drink.name}</p>
      </div>
      <div className='col-sm-4'>
        <div className='display: block'>
          <button className='qty-btn' id='qty-' onClick={() => qtyUpdate(drink, '-')}>-</button>
          <p className='qty-text centered'>{drink.qty}</p>
          <button className='qty-btn' id='qty+' onClick={() => qtyUpdate(drink, '+')}>+</button>
        </div>
      </div>
      <p className='qty-text'>{(drink.qty*drink.price).toFixed(2)}</p>
    </div>
  )
}

export default OrderTile

// interface QtyTileProps {
//   id: string;
//   updateQty: (id: string, change: string) => void;
// }

// function QtyTile(props: QtyTileProps) {
//   const {id, updateQty} = props;

//   return (
//     <div className='row'>
//       <div className='col-sm-3'>
//         <button className='qty-btn' id='qty-' onClick={() => updateQty(id, '-')}>-</button>
//       </div>
//       <div className='col-sm-2'>
//         <p className='qty-text centered' id={id}>1</p>
//       </div>
//       <div className='col-sm-3'>
//         <button className='qty-btn' id='qty+' onClick={() => updateQty(id, '+')}>+</button>
//       </div>
//     </div>
//   )
// }