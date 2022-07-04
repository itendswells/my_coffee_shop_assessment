export const drinkCats = ['Coffee', 'Tea', 'Seasonals', 'Smoothies', 'Other']

export const drinkDicts = [
  {
    name: 'Brewed Coffee',
    category: 'Coffee',
    price: 2.60
  },
  {
    name: 'Flat White',
    category: 'Coffee',
    price: 3.75
  },
  {
    name: 'Latte',
    category: 'Coffee',
    price: 4.45
  },
  {
    name: 'Cappuccino',
    category: 'Coffee',
    price: 4.45
  },
  {
    name: 'Mocha',
    category: 'Coffee',
    price: 4.95
  },
  {
    name: 'Americano',
    category: 'Coffee',
    price: 3.40
  },
  {
    name: 'Espresso',
    category: 'Coffee',
    price: 2.95
  },
  {
    name: 'Macchiato',
    category: 'Coffee',
    price: 3.25
  },
  {
    name: 'Cortado',
    category: 'Coffee',
    price: 3.45
  },
  {
    name: 'Draft Session Cold Brew',
    category: 'Coffee',
    price: 3.65
  },
  {
    name: 'Draft Nitro Cold Brew',
    category: 'Coffee',
    price: 4.95
  },
  {
    name: 'Chai Latte',
    category: 'Tea',
    price: 4.75
  },
  {
    name: 'Matcha Latte',
    category: 'Tea',
    price: 2.95
  },
  {
    name: 'Brewed Tea',
    category: 'Tea',
    price: 2.95
  },
  {
    name: 'Sportea',
    category: 'Tea',
    price: 2.95
  },
  {
    name: 'Iced Tea',
    category: 'Tea',
    price: 2.95,
  },
  {
    name: 'Steamer',
    category: 'Tea',
    price: 2.95
  },
  {
    name: 'Hot Chocolate',
    category: 'Other',
    price: 3.75
  },
  {
    name: 'London Fog',
    category: 'Tea',
    price: 4.25
  },
  {
    name: 'Cold Shot Latte',
    category: 'Seasonals',
    price: 6.25
  },
  {
    name: 'Turmeric Mango Iced Tea',
    category: 'Seasonals',
    price: 2.85
  },
  {
    name: 'Summer Gala',
    category: 'Seasonals',
    price: 2.85
  },
  {
    name: 'Salted Caramel Latte',
    category: 'Seasonals',
    price: 5.25
  },
  {
    name: 'Windy Ci-Tea',
    category: 'Seasonals',
    price: 4.25
  },
  {
    name: 'Cold Brew Oat-Chata',
    category: 'Seasonals',
    price: 5.25
  },
  {
    name: 'Acai Power',
    category: 'Smoothies',
    price: 8.75
  },
  {
    name: 'Power Super Green',
    category: 'Smoothies',
    price: 8.75
  },
  {
    name: 'Cold Brew Power PB Banana',
    category: 'Smoothies',
    price: 8.75
  },
  {
    name: 'Berry Booster',
    category: 'Smoothies',
    price: 6.50
  },
  {
    name: 'Mango Peach Ginger',
    category: 'Smoothies',
    price: 5.25
  },
  {
    name: 'Sweet Creme Frappes',
    category: 'Other',
    price: 5.95
  },
  {
    name: 'Mocha Shake',
    category: 'Other',
    price: 6.95
  },
  {
    name: 'Cold Brew Shake',
    category: 'Other',
    price: 6.95
  }
]

export interface DrinkDict {
    name: string;
    category: string;
    price: number;
}

export interface OrderDict {
  name: string;
  qty: number;
  price: number;
}