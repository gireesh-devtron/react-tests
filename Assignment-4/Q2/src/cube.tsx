import React,{useState} from "react"
const Cube=(props:any)=>{
    const[initialValues,setInitialValues]=useState(props.values)
    const cubeChangeHandler=()=>{
        const changedValues=initialValues.map((val:number)=>(val*val*val))
        setInitialValues(changedValues);

    }
    const initialOrderedValues=initialValues.map((val:any)=><li>{val}</li>)
    return (
        <div>
           <ul>{initialOrderedValues}</ul>
           <button onClick={cubeChangeHandler}>clickForCube</button>
        </div>

    );

}
export default Cube;