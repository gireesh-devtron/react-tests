import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './person'

function App() {
  const persons=[
      {id:1,userName:'name1',age:22,skill:'Python'},
      {id:2,userName:'name2',age:25,skill:'Java'},
      {id:3,userName:'name3',age:23,skill:'Golang'},
      {id:4,userName:'name4',age:21,skill:'React'}
  ];
  return (
    <Person values={persons}/>
  );
}

export default App;
