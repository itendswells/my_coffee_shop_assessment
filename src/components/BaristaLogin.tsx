import React, {useState} from 'react'

function BaristaLogin() {
  const [barista, setBarista] = useState('');

  const login = () => {
    let name = (document.getElementById('baristaName') as HTMLInputElement);
    console.log(name!.value);
  }

  const pass = () => {};

  return (
    <div>
      <label htmlFor='baristaName'>Barista: </label>
      <input id='baristaName' name='baristaName' defaultValue={barista} type='text'/>
      <button name='login' onClick={login}>Login</button>
      <button name='logout'>Logout</button>
      {/* <p>{document.getElementById('baristaName').value}</p> */}
    </div>
  )
}

export default BaristaLogin