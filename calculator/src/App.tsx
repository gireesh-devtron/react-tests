import React from 'react';
import { useState } from 'react';

function App() {

  const[calciVal, setCalciVal] = useState("")
  const[result, setResult] = useState("");
  const ops = ['/', '*', '+', '-', '.','%'];


  const updateCalc = (value: string) => {
    if(
      ops.includes(value) && calciVal === '' ||
      ops.includes(value) && ops.includes(calciVal.slice(-1))
    ){
      return;
    }
    if (calciVal === '0')
      setCalciVal(value)
    else if (calciVal.slice(-1) === '0' && ops.includes(calciVal.slice(-2,-1)))
      setCalciVal(calciVal.slice(0,-1) + value)
    else
      setCalciVal(calciVal + value)

    if(!ops.includes(value)){
      if (calciVal === '0')
        setResult(eval(value).toString())
      else if (calciVal.slice(-1) === '0' && ops.includes(calciVal.slice(-2,-1)))
      setResult(eval(calciVal.slice(0,-1) + value).toString());
      else setResult(eval(calciVal + value).toString());
    }
  }

   
  const createDigits = () => {
    const digits = [];
    for (let i = 1; i<10; i++){
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>{i}</button>
      )
    }
    return digits;
  }

  const calculate = () => {
    setCalciVal(eval(calciVal).toString());
  }


  const deleteLast = () => {
    if (calciVal == ''){
      return;
    }
    const value = calciVal.slice(0, -1);
    setCalciVal(value);
  }

    
  const setAC = () =>{
    const value = "";
    setCalciVal(value)
    setResult(value)
  }
  




  return (
    <div className="App">

       <div className="calculator">

         <div className="display">
           {result?  <span>({result})</span> : ''} &nbsp; 
           { calciVal || "0" }
         </div>


         <div className="operators">
          <button onClick={setAC}>AC</button>
          <button onClick={deleteLast}>DEL</button>
          <button onClick={() => updateCalc('%')}>%</button>
           <button onClick={() => updateCalc('/')}>/</button>           
         </div>


         <div className="digitsAndOperators">

         <div className="digits">          
          { createDigits() }
          <button></button>
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc('.')}>.</button>
         </div>

         <div className="operatorss">   
           <button onClick={() => updateCalc('*')}>*</button>
           <button onClick={() => updateCalc('-')}>-</button>
           <button onClick={() => updateCalc('+')}>+</button>
           <button onClick={calculate}>=</button>
           </div>
          
         </div>
         
         

       </div>

    </div>
  );
}

export default App;
