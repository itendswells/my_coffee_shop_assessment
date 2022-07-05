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

  const [categories, setCategories] = useState(drinkCats);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [drinks, setDrinks] = useState(drinkDicts);
  const [mode, setMode] = useState('order');

  const categoryClick = (catName: string) => setSelectedCategory(catName);
  const changeMode = (name: string) => setMode(name);
  const removeCategory = (category: string) => {
    let index = categories.indexOf(category);
    if (index != -1) {
      let updatedCategories = [...categories];
      updatedCategories.splice(index, 1);
      setCategories(updatedCategories);
    }
    setSelectedCategory(categories[0]);
    changeMode('order');
  };
  const addCategory = (category: string) => {
    if (!categories.includes(category)) {
      let updatedCategories = [...categories];
      updatedCategories = [...categories, ...[category]];
      setCategories(updatedCategories);
    }
    setSelectedCategory(categories[0]);
    changeMode('order');
  };

  let modeContent = <></>;

  function displayCategories() {
    return <>
      <div className='row'>
              {categories.map((category : string) => 
                <div className='cols-sm' key={category}>
                  <div 
                    className={(category === selectedCategory) ? 'card selected-category' : 'card category'} 
                    key={category} 
                    onClick={() => categoryClick(category)}>
                      {category}
                  </div>
                </div>
              )}
            </div>
    </>
  }

  if (mode === 'order') {
    modeContent = <>
      {displayCategories()}
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
    </>
  } else if (mode === 'removeCategory') {
    modeContent = <>
      {displayCategories()}
      <div className='display: block'>
        <label htmlFor='removeCategorySelect'>Choose a category to remove:</label>
        <select name='removeCategorySelect' id='removeCategorySelect'>
          {categories.map((category : string) => <option value={category}>{category}</option>)}
        </select>
        <button onClick={() => removeCategory((document.getElementById('removeCategorySelect')! as HTMLSelectElement).value)}>Remove</button>
        <button onClick={() => changeMode('order')}>Back</button>
      </div>
    </>
  } else if (mode === 'addCategory') {
    modeContent = <>
      {displayCategories()}
      <div className='display: block'>
        <label htmlFor='addCategoryInput'>Enter a category to add:</label>
        <input name='addCategoryInput' id='addCategoryInput' type='text'></input>
        <button onClick={() => addCategory((document.getElementById('addCategoryInput')! as HTMLInputElement).value)}>Add</button>
        <button onClick={() => changeMode('order')}>Back</button>
      </div>
    </>
  }

  return (
    <div className='bordered'>
      <div className='row'>
        <h2>Drinks</h2>
      </div>
      <hr></hr>
      {modeContent}
      <hr></hr>
      <div className='row'>
        <button name='addDrink' onClick={() => changeMode('addDrink')}>Add Drink</button>
        <button name='editDrinks' onClick={() => changeMode('editDrinks')}>Edit Drinks</button>
        <button name='addCategory' onClick={() => changeMode('addCategory')}>Add Category</button>
        <button name='removeCategory' onClick={() => changeMode('removeCategory')}>Remove Category</button>
      </div>
    </div>
  )
}

export default DrinkInterface