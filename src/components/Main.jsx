import React, { Component } from 'react'

export class Main extends Component {
  constructor(props){
    super(props)
    this.state= {
      age: this.props.age
      
    }
  }

  increaseAge = () =>{
    this.setState({age: this.state.age+1})
  }

  render() {
      // const { firstName, lastName, age, hairColor } = this.props;
    return (
      <div>
      
        <h1>{ this.props.firstName } { this.props.lastName }</h1>
        <p>Age: { this.state.age }</p>
        <p>Hair Color: { this.props.hairColor }</p>
        <button onClick={this.increaseAge}>Birthday </button>

      </div>
    )
  }
}

export default Main