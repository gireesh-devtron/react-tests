import React from 'react';
import logo from './logo.svg';
import './App.css';
import Pets from './pets'

function App() {
  const usersDetails = [
      {
        Name:'chris',
        pets:[
            {name:'billi',type:'dog'},
            {name:'holy',type:'dog'}
        ]
      },
      {
        Name:'nick',
        pets:[
            {name:'snoopy',type:'cat'},
            {name:'polly',type:'cat'}
        ]
      }
  ];

  return (
   <Pets values={usersDetails}/>
  );
}

export default App;
