import { Dictionary } from 'express-serve-static-core';
import React, {useState} from 'react'
import {drinkCats} from './Drinks';
import {drinkDicts} from './Drinks';
import {DrinkDict} from './Drinks';

interface DrinkInterfaceProps {
  addToOrder: (drink: DrinkDict) => void
}

function DrinkInterface(props: DrinkInterfaceProps) {
  const {addToOrder} = props;

  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState(drinkCats);
  const [drinks, setDrinks] = useState(drinkDicts);

  const categoryClick = (catName: string) => setSelectedCategory(catName);

  return (
    <div className='bordered'>
      <div className='row'>
        <h2>Drinks</h2>
      </div>
      <hr></hr>
      <div className='row'>
        {categories.map((category : string) => 
          <div className='cols-sm' key={category}>
            <div className='card category' key={category} onClick={() => categoryClick(category)}>{category}</div>
          </div>
        )}
      </div>
      <hr></hr>
      <div className='row'>
        {drinks.map((drink: DrinkDict) => (
          drink.category === selectedCategory ? (
            <div className='cols-sm' key={drink.name}>
              <div className='card drink' key={drink.name} onClick={() => addToOrder(drink)}>
                <span>{drink.name}</span>
              </div>
            </div>
          ) : (
            <React.Fragment key={drink.name}></React.Fragment>
          )
        ))}
      </div>
      <hr></hr>
      <div className='row'>
        <button name='addDrink'>Add Drink</button>
        <button name='addCategory'>Add Category</button>
        <button name='removeCategory'>Remove Category</button>
      </div>
    </div>
  )
}

export default DrinkInterface