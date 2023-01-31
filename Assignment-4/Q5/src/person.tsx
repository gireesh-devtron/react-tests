type result={
    values:{
        id:number,
        userName:string,
        age:number,
        skill:string}[]
}
const Person=(props:result)=>{

    const users=props.values.map(({id,userName,age,skill})=>(
        <h1 key={id}>{`I am ${userName}.I am ${age} years old.I know ${skill}`} </h1>
    ))
    return(
        <ul> { users } </ul>
    );

}
export default Person;