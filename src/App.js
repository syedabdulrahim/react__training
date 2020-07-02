import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component{



state={
    persons:[{name:"Abdul",age:22},{name:"Rahim",age:23}]
}

clickEventHandler=()=>{

    if(this.state.persons[0].name=="Abdul")
    {
    this.setState({
        persons:[{name:"clicked",age:22},{name:"Rahim",age:23}]
    })
}


if(this.state.persons[0].name=="clicked")
{
this.setState({
    persons:[{name:"Abdul",age:22},{name:"Rahim",age:23}]
})
}
}


render(){



    return(
        <div>
        <Person name={this.state.persons[0].name}></Person>
        <Person name={this.state.persons[1].name}></Person>
        <button onClick={this.clickEventHandler}>Click Me</button>
        </div>

    )

}

}

export default App;