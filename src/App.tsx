import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppHeader from './components/AppHeader';
import MainComponent from './components/MainComponent';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <br></br>
      <MainComponent/>
    </div>
  );
}

export default App;
