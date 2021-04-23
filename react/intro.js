import React, { Component } from 'react';

class Intro extends Component {
  state = {
    firstName: "rajesh",
    lastName: "bheri",
    age: 24,
    place: "Chandigarh",
    address:" East godavari district ap."
  }

  handleClick = () => {
    // We use setState to update our state
    this.setState({
      firstName: "Rajesh",
      age: 21,
      place: "AP",
      address:"3-52 East godavari district ap."

    })
  }
// React has multipl events defined which we can find here in link
// visit: https://reactjs.org/docs/events.html#supported-events  
  render() {
    return (
      <div>
    <h1>My Name is {this.state.firstName} and age is {this.state.age} and from {this.state.place} and address {this.state.address} </h1>
    <p></p>
    {/*We use camel case to write event we want to use*/} 
    <button onClick={this.handleClick}>Click Here!</button>
      </div>
    )
  }
}

export default Intro;