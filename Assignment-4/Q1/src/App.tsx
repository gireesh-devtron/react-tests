import React from 'react';
import logo from './logo.svg';
import './App.css';
import Fruitslist from './fruitslist'

function App() {
  let fruitList=["apple","banana","orange","mango"];
  return (
    <Fruitslist values={fruitList}/>
    
  );
}

export default App;
