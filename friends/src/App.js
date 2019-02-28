import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import axios from 'axios';

import styled from 'styled-components';

import Navigation from './components/Navigation';
import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';

// Styled Components
const PageContainer = styled.div`
  padding-bottom: 30px;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
        friends: []
    }
  }

  componentDidMount() {
      axios
          .get('http://localhost:5000/friends')
          .then(response => {
              this.setState(() => ({ friends: response.data }))
          })
          .catch(error => {
              console.error('Server Error', error)
          })
  }

  // componentDidUpdate() {
  //     axios
  //         .get('http://localhost:5000/friends')
  //         .then(response => {
  //             this.setState(() => ({ friends: response.data }))
  //         })
  //         .catch(error => {
  //             console.error('Server Error', error)
  //         })
  // }

  deleteFriend = name => {
      let match = this.state.friends.find(friend => friend.name === name);

      axios
          .delete(`http://localhost:5000/friends/${match.id}`)
          .then(response => {
              this.setState(() => ({ friends: response.data }))
          })
          .catch(error => {
              console.error('Server Error', error)
          })
  }

  addFriend = (name) => {
    let match = this.state.friends.find(friend => friend.name === name);
    if(match) {
      console.log(`Match found: http://localhost:5000/friends/${match.id}`)
      axios
        .put(`http://localhost:5000/friends/${match.id}`, this.state)
        .then(response => {
          this.setState(() => ({ friends: response.data }))
        })
        .catch(error => {
            console.error('Server Error', error)
        })
    } else {
      console.log('No match found')
      axios
        .post('http://localhost:5000/friends', this.state)
        .then(response => {
          this.setState(() => ({ friends: response.data }))
        })
        .catch(error => {
            console.error('Server Error', error)
        })
    }

    this.setState({
      name: '',
      age: '',
      email: ''
    })
  }

  render() {
    return (
      <PageContainer>
        <Navigation />
        <Route exact path='/' 
          render={(props) => 
            <FriendList {...props} 
              friends={this.state.friends} 
              handleDelete={(name) => this.deleteFriend(name)} />} />
        <Route exact path='/add' 
          render={(props) => 
            <FriendForm {...props} 
              friends={this.state.friends}
              addFriend={(name) => this.addFriend(name)} />} />
        <Route path='/edit/:id' component={FriendForm} />
      </PageContainer>
    );
  }
}

export default App;
