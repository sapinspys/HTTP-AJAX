import React, { Component } from 'react';

export default class FriendForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            email: ''
        };
    }
  
    handleChange = event => {
      this.setState({[value]: event.target.value});
    }
  
    handleSubmit = event => {
      event.preventDefault();
      console.log(`You have submitted ${this.state}`)
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.name} onChange={this.handleChange} />
          </label>
          <label>
            Age:
            <input type="text" value={this.state.age} onChange={this.handleChange} />
          </label>
          <label>
            Email:
            <input type="text" value={this.state.email} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }