import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: { name: 'Alex', city: 'Minneapolis'}

    // this.handleChange = this.handleChange.bind(this); 
    //makes 'this' in handleChange the same as 'this' in the constructor.  
    //Similar to const self = this. 
}
  };



handleChange = (event) => {
  // console.log('input was changed');
  // console.log(event.target);
  console.log(event.target.value);
  // this.state.user = event.target.value;

  this.setState({ 
    user: {
      ...this.state.user, 
    name: event.target.value,
  }
  });
};

handleCity = (event) => {
  console.log(event.target.value);
  this.setState({ 
    user: {
      ...this.state.user, 
    city: event.target.value,
  }
  });
};

onClick = () => {
  console.log(this.state.user);
}

  render() {
    return (
      <div>
     <input onChange={this.handleChange} placeholder="User Name" />
     <input onChange={this.handleCity} placeholder ="City" />
     {this.state.user.name} is from {this.state.user.city}
     <button onClick={this.onClick}>Submit</button>
      </div>
    );
  }
}

export default App;
