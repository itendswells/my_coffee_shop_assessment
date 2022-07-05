import React, {SyntheticEvent, useState} from 'react'
import {DrinkDict} from './Drinks'

interface DrinkFormProps {
    initialDrink: DrinkDict;
    categories: Array<string>;
    onCancel: () => void;
    onSubmit: (drink: DrinkDict) => void;
}

function DrinkForm(props: DrinkFormProps) {
  const {initialDrink, categories, onCancel, onSubmit} = props;

  const [drink, setDrink] = useState(initialDrink);

  const handleChange = (event: any) => {
      const { type, name, value, checked } = event.target;
      let updatedValue = type === 'checkbox' ? checked : value;

      if (type === 'number') {
        updatedValue = Number(updatedValue);
      }
      const change = {
        [name]: updatedValue,
      };

      let updatedProject: DrinkDict;
      setDrink(() => {
        updatedProject = ({ ...drink, ...change });
        return updatedProject;
      });
    };

    const handleSubmit = (event: SyntheticEvent) => {
      event.preventDefault();
      onSubmit(drink);
    }

  return (
    <form className='input-group vertical' onSubmit={handleSubmit}>
      <label htmlFor='drinkName'>Name:</label>
      <input name='name' id='drinkName' type='text' placeholder='enter name' defaultValue={drink.name} onChange={handleChange}></input>

      <label htmlFor='drinkCategory'>Category:</label>
      <select name='category' id='drinkCategory' defaultValue={drink.category} onChange={handleChange}>
          {categories.map((category : string) => <option key={category} value={category}>{category}</option>)}
        </select>

      <label htmlFor='drinkPrice'>Price: $</label>
      <input name='price' id='drinkPrice' type='number' step='0.01' placeholder='enter price' defaultValue={drink.price} onChange={handleChange}></input>

      <div className="input-group">
          <button className="primary bordered medium">Save</button>
          <span></span>
          <button type="button" className="bordered medium" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  )
}

export default DrinkForm