import React, { Component } from "react";

export default class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <form>
        <input
          name="username"
          type="text"
          placeholder="Username"
          onChange={this.handleInputChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={this.handleInputChange}
        />
        <button>Submit</button>
      </form>
    );
  }
}
