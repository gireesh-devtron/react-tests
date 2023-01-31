const Fruitslist=(props:any)=>{
    const final=props.values.slice(0,3).map((fruit:any)=>(
        <li>{fruit}</li>
    ))
    return(
        <div>
            <ul>{final}</ul>
        </div>
    );


};
export default Fruitslist;