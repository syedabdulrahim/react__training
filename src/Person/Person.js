import React,{useState} from 'react';
const Person=(props)=>{

    // props.name='abc;'
    // const a =props.name;
    // console.log(`${a+"b"}`);

    // const[PersonState,setPersonState]=useState([{name:"Abdul",age:28},"Male"]);
    //  const change=()=>{

    //     setPersonState("Saif");
    // }


    return (
        <div>
            <p >Hi I'm {props.name} and {props.age} year's old </p>
        </div>
        );
}

export  default Person;