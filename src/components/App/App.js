import React, { Component } from 'react';

const emptyUser = {
 name: '', 
 city: '', 
 zip: '',
};
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: '',
        city: '',
        zip: '',
      },
      userList: []
    }
  }
  //     user: emptyUser,
  //   };
  // }

    // this.handleChange = this.handleChange.bind(this); 
    //makes 'this' in handleChange the same as 'this' in the constructor.  
    //Similar to const self = this. 




// handleChangeFor = () => {
//   // console.log('input was changed');
//   // console.log(event.target);
//   console.log(event.target.value);
//   // this.state.user = event.target.value;

//   this.setState({ 
//     user: {
//       ...this.state.user, //an object that has a name property and a city property.  Give me all the properties that the object currently has.
//     name: event.target.value, //we want something that will replace the value in the object with whatever is in our input.
//   }
//   });
// };

// handleCity = (event) => {
//   console.log(event.target.value);
//   this.setState({ 
//     user: {
//       ...this.state.user, 
//     city: event.target.value,
//   }
//   });
// };

// Currying
handleChangeFor = (propertyName) => event => {
  console.log(event.target.value);
  this.setState({ 
    user: {
      ...this.state.user, 
    [propertyName]: event.target.value,
    }
  });
}

// handleZip = (event) => {
//   console.log(event.target.value);
//   this.setState({
//     user: {
//       ...this.state.user,
//       zip: event.target.value,
//     }
//   });
// };

handleSubmit = (event) => {
  event.preventDefault();
  console.log(this.state.user);
  this.setState({
    userList: [...this.state.userList, this.state.user],
  user: {
    name: '',
    city: '',
    zip: '',
  }
});
}

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
     <input value={this.state.user.name} onChange={this.handleChangeFor('name')} placeholder="User Name" />
     <input value={this.state.user.city} onChange={this.handleChangeFor('city')} placeholder ="City" /> 
     {/* handleChangeFor() runs right away on page load.  When it runs, it returns the function within handleChangeFor(), which then waits until its event (onChange, onClick, etc.) to run     */}
     <input value= {this.state.user.zip} onChange={this.handleChangeFor('zip')} placeholder ="Zip" />
      {this.state.user.name} is from {this.state.user.city} at {this.state.user.zip}
     {/* in react, we can't put an object on the DOM, so we need to put this.state.user.*property* instead of this.state.user */}
     <input type="submit" value="Click me to submit form!" />
     </form>
     <ul>
       {this.state.userList.map(user => <li key={user.name}>
       {user.name } is from {user.city} at {user.zip}</li>)}
       </ul>
      </div>
    );
  }
}

export default App;
