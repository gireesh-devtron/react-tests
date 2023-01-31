import React from 'react';
import { useState } from 'react';

function App() {

  const[calciVal, setCalciVal] = useState("")
  const[result, setResult] = useState("");
  const ops = ['%', '*', '+', '-', '.','/'];


  const calculate = () => {
    // eslint-disable-next-line no-eval
    setCalciVal(eval(calciVal).toString());
  }


  const deleteLast = () => {
    if (calciVal === ''){
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

  const updateCalc = (value: string) => {
    if((ops.includes(value) && calciVal === '') || (ops.includes(value) && ops.includes(calciVal.slice(-1)))){
      return;
    }
    let val1 = ''
    if (calciVal === '0'){
      val1 = value
    } else if (calciVal.slice(-1) === '0' && ops.includes(calciVal.slice(-2,-1))) {
      val1 = calciVal.slice(0, -1) + value
    } else{
      val1 = calciVal + value
    }

    setCalciVal(val1)
    let val2 = ''

    if(!ops.includes(value)){
      if (calciVal === '0')
          // eslint-disable-next-line no-eval
        val2 = eval(value).toString()
      else if (calciVal.slice(-1) === '0' && ops.includes(calciVal.slice(-2,-1)))
          // eslint-disable-next-line no-eval
        val2 = eval(calciVal.slice(0,-1) + value).toString()
      else {
        // eslint-disable-next-line no-eval
        val2 = eval(calciVal + value).toString()
      }

      setResult(val2)
    }
  }

   
  const createDigits = () => {
    const digits = [];
    for (let i = 0; i<9; i++){
      digits.push(
        <button onClick={() => updateCalc((i+1).toString())} key={i+1}>{i+1}</button>
      )
    }
    return digits;
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
          <button onClick={() => updateCalc('/')}>/</button>
           <button onClick={() => updateCalc('%')}>%</button>
         </div>


         <div className="digitsAndOperators">

         <div className="digits">          
          { createDigits() }
          <button></button>
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc('.')}>.</button>
         </div>

         <div className="operators-1">
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
