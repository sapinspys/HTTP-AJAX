import React, { Component } from "react";
import { Route } from "react-router-dom";

import axios from "axios";

import styled from "styled-components";

import Navigation from "./components/Navigation";
import FriendList from "./components/FriendList";
import FriendForm from "./components/FriendForm";

// Styled Components
const PageContainer = styled.div`
  padding-bottom: 30px;
`;

class App extends Component {
  state = {
    friends: [],
    friendToEdit: ""
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }

  deleteFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  };

  addFriend = formState => {
    delete formState.redirect;
    let match = this.state.friends.find(
      friend => friend.id === formState.id
    );
    delete formState.id;
    if (match) {
      console.log(`Match found: http://localhost:5000/friends/${match.id}`);
      axios
        .put(`http://localhost:5000/friends/${match.id}`, formState)
        .then(response => {
          this.setState(() => ({
            friends: response.data,
            friendToEdit: ""
          }));
        })
        .catch(error => {
          console.error("Server Error", error);
        });
    } else {
      console.log(`No match found for ${formState.name}`);
      axios
        .post("http://localhost:5000/friends", formState)
        .then(response => {
          this.setState(() => ({ friends: response.data }));
        })
        .catch(error => {
          console.error("Server Error", error);
        });
    }
  };

  sendFriendData = friend => {
    this.setState({ friendToEdit: friend });
  };

  render() {
    return (
      <PageContainer>
        <Navigation />
        <Route
          exact
          path="/"
          render={props => (
            <FriendList
              {...props}
              friends={this.state.friends}
              deleteFriend={id => this.deleteFriend(id)}
              sendFriendData={friend => this.sendFriendData(friend)}
            />
          )}
        />
        <Route
          path="/add"
          render={props => (
            <FriendForm
              {...props}
              friends={this.state.friends}
              addFriend={formState => this.addFriend(formState)}
              friendToEdit={this.state.friendToEdit}
            />
          )}
        />
      </PageContainer>
    );
  }
}

export default App;
