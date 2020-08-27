import React, { Component } from "react";
import "./style.css";

class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    password: ""
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    if (!this.state.firstName || !this.state.lastName) {
      alert("Please enter both your first and last name.")
    } else if (this.state.password.length < 6) {
      alert(`Please choose a more secure password, ${this.state.firstName} ${this.state.lastName}.`)
    } else if (this.state.password.length > 15) {
      alert("Password can not be more than 15 characters.")
    } else {
      alert(`Hello ${this.state.firstName} ${this.state.lastName}!`);
    }
    
    this.setState({
      firstName: "",
      lastName: "",
      password: ""
    });
  };

  render() {
    return (
      <div>
        <p>
          Hello {this.state.firstName} {this.state.lastName}
        </p>
        <form className="form">
          <input
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Password"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
