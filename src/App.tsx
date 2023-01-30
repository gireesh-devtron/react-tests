import React from 'react';
import { useState } from 'react';

function App() {

  const[calc, setCalc] = useState("")
  const[result, setResult] = useState("");
  const ops = ['/', '*', '+', '-', '.','%'];


  const updateCalc = (value: string) => {
    if(
      ops.includes(value) && calc === '' ||
      ops.includes(value) && ops.includes(calc.slice(-1))
    ){
      return;
    }
    if (calc === '0')
      setCalc(value)
    else if (calc.slice(-1) === '0' && ops.includes(calc.slice(-2,-1)))
      setCalc(calc.slice(0,-1) + value)
    else
      setCalc(calc + value)

    if(!ops.includes(value)){
      if (calc === '0') 
        setResult(eval(value).toString())
      else if (calc.slice(-1) === '0' && ops.includes(calc.slice(-2,-1)))
      setResult(eval(calc.slice(0,-1) + value).toString());
      else setResult(eval(calc + value).toString());
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
    setCalc(eval(calc).toString());
  }


  const deleteLast = () => {
    if (calc == ''){
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  }

    
  const setAC = () =>{
    const value = "";
    setCalc(value)
    setResult(value)
  }
  




  return (
    <div className="App">

       <div className="calculator">

         <div className="display">
           {result?  <span>({result})</span> : ''} &nbsp; 
           { calc || "0" }
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
