import React, { Component } from 'react';
import axios from 'axios';

export default class FriendForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            email: ''
        };
    }
  
    handleChange = e => {
      this.setState({[e.target.name]: e.target.value});
    }
  
    handleSubmit = e => {
      e.preventDefault();
      
      let match = this.props.friends.find(friend => friend.name === this.state.name);
      if(match) {
        // console.log(`Match found: http://localhost:5000/friends/${match.id}`)
        axios
          .put(`http://localhost:5000/friends/${match.id}`, this.state)
      } else {
        // console.log('No match found')
        axios
          .post('http://localhost:5000/friends', this.state)
      }

      this.setState({
        name: '',
        age: '',
        email: ''
      })
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" 
              value={this.state.name} 
              onChange={this.handleChange} 
              name='name' />
          </label>
          <label>
            Age:
            <input type="text" 
              value={this.state.age} 
              onChange={this.handleChange} 
              name='age' />
          </label>
          <label>
            Email:
            <input type="text" 
              value={this.state.email} 
              onChange={this.handleChange} 
              name='email' />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }