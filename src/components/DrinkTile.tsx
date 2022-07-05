import React from 'react'
import {DrinkDict} from './Drinks'

interface DrinkTileProps {
    drink: DrinkDict;
    onRemove: (drink: DrinkDict) => void;
}

function DrinkTile(props: DrinkTileProps) {
  const {drink, onRemove} = props;

  return (
    <div className='row bordered'>
      <div className='col-sm-5'>
        <p>{drink.name}</p>
      </div>
      <div className='col-sm-3'>
        <p>{drink.category}</p>
      </div>
      <div className='col-sm-2'>
        <p>{drink.price}</p>
      </div>
      <div className='col-sm-1'>
        <button>
          <i className='material-icons'>edit</i>
        </button>
      </div>
      <div className='col-sm-1'>
        <button onClick={() => onRemove(drink)}>
          <i className='material-icons'>delete</i>
        </button>
      </div>
    </div>
  )
}

export default DrinkTile