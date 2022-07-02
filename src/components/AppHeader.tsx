import React from 'react'
import BaristaLogin from './BaristaLogin'
import CustomerClock from './CustomerClock'

function AppHeader() {
  return (
    <header>
        <div className="container">
            <div className="row">
                <div className="col-sm-10">
                    <BaristaLogin />
                </div>
                <div className="col-sm-2">
                    <CustomerClock />
                </div>
            </div>
        </div>
    </header>
  )
}

export default AppHeader