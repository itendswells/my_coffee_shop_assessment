import { functionTypeParam, tsConstructSignatureDeclaration } from '@babel/types';
import React from 'react'

interface OrderTileProps {
    name: string;
    qtyUpdate: (id: string, change: string) => void;
}

function OrderTile(props: OrderTileProps) {
  const {name, qtyUpdate} = props;

  return (
    <div className='row bordered'>
      <div className='col-sm-5'>
        <p className='qty-text'>{name}</p>
      </div>
      <div className='col-sm-6'>
        <QtyTile id={name.concat('_qty')} updateQty={qtyUpdate}/>
      </div>
    </div>
  )
}

export default OrderTile

interface QtyTileProps {
  id: string;
  updateQty: (id: string, change: string) => void;
}

function QtyTile(props: QtyTileProps) {
  const {id, updateQty} = props;

  return (
    <div className='row'>
      <div className='col-sm-3'>
        <button id='qty-' onClick={() => updateQty(id, '-')}>-</button>
      </div>
      <div className='col-sm-2'>
        <p className='qty-text centered' id={id}>1</p>
      </div>
      <div className='col-sm-3'>
        <button id='qty+' onClick={() => updateQty(id, '+')}>+</button>
      </div>
    </div>
  )
}