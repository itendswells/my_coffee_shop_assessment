import { Dictionary } from 'express-serve-static-core';
import React, {useState} from 'react'
import drinkDicts from './Drinks';

function DrinkInterface() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState(['Coffee', 'Tea', 'Seasonals', 'Smoothies', 'Other']);
  const [drinks, setDrinks] = useState(drinkDicts);

  const categoryClick = (catName: string) => setSelectedCategory(catName);

  return (
    <div className='bordered'>
      <div className='row'>
        <h2>Drinks</h2>
        <button name='addDrink'>Add Drink</button>
        <button name='addCategory'>Add Category</button>
        <button name='removeCategory'>Remove Category</button>
      </div>
      <div className='row'>
        {categories.map((category : string) => 
          <div className='cols-sm' key={category}>
            <div className='card category' onClick={() => categoryClick(category)}>{category}</div>
          </div>
        )}
      </div>
      <hr></hr>
      <div className='row'>
        {drinks.map((drink) => (
          drink.category === selectedCategory ? (
            <div className='cols-sm' key={drink.name}>
              <div className='card drink'>
                <span>{drink.name}</span>
              </div>
            </div>
          ) : (
            <></>
          )
        ))}
      </div>
    </div>
  )
}

export default DrinkInterface