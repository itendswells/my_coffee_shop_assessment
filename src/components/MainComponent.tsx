import React from 'react'
import DrinkInterface from './DrinkInterface'
import OrderInterface from './OrderInterface'

function MainComponent() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-sm-6'>
                <DrinkInterface/>
            </div>
            <div className='col-sm-6'>
                <OrderInterface/>
            </div>
        </div>
    </div>
  )
}

export default MainComponent