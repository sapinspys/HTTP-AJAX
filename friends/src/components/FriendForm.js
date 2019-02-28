import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import axios from 'axios';

import { Button, Form, Label, Input } from 'reactstrap';

// Inline Styles
const formStyles = {
  width: '400px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  margin: '0 auto',
  height: '400px',
  background: 'whitesmoke',
  padding: '20px',
  borderRadius: '5px',
  boxShadow: '0 0 2px black',
  marginTop: '50px'
}

export default class FriendForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            email: '',
            redirect: false
        };
    }

    componentDidMount() {
      console.log(this.props.friendToEdit)
      this.setState({
        name: [this.props.friendToEdit.name],
        age: [this.props.friendToEdit.age],
        email: [this.props.friendToEdit.email],
        redirect: false
      });
    }
  
    handleChange = e => {
      this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.addFriend(this.state);

      this.setState({
        name: '',
        age: '',
        email: ''
      })

      this.setState({redirect:true});
    }
  
    render() {
      if (this.state.redirect){
        return <Redirect push to="/" />
      }

      return (
        <Form onSubmit={this.handleSubmit} style={formStyles}>
          <Label style={{color:'gray', fontSize: '1.4rem'}}>Add or Edit Friends</Label>
          <Label>
            Name:
            <Input type="text" 
              value={this.state.name} 
              onChange={this.handleChange} 
              name='name' />
          </Label>
          <Label>
            Age:
            <Input type="text" 
              value={this.state.age} 
              onChange={this.handleChange} 
              name='age' />
          </Label>
          <Label>
            Email:
            <Input type="text" 
              value={this.state.email} 
              onChange={this.handleChange} 
              name='email' />
          </Label>
          {/* <Link>
            <Button color='primary' block>Submit</Button>
          </Link> */}
          <Button color='primary' block>Submit</Button>
        </Form>
      );
    }
  }