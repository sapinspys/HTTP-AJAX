import React, { Component } from 'react';
import axios from 'axios';

import FriendForm from './FriendForm';

export default class FriendList extends Component {
    constructor(props) {
        super(props);
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

    componentDidUpdate() {
        axios
            .get('http://localhost:5000/friends')
            .then(response => {
                this.setState(() => ({ friends: response.data }))
            })
            .catch(error => {
                console.error('Server Error', error)
            })
    }

    deleteFriend = name => {
        let match = this.state.friends.find(friend => friend.name === name);

        axios
            .delete(`http://localhost:5000/friends/${match.id}`)
    }

    render() {
        return(
            <div>
                <FriendForm friends={this.state.friends} />
                {this.state.friends.map(friend => (
                    <FriendDetails key={friend.id} 
                        friend={friend}
                        handleDelete={(name) => this.deleteFriend(name)} />
                ))}
            </div>
        )
    }
}

function FriendDetails({ friend, handleDelete }) {
    const { name, age, email } = friend;
    return(
        <div>
            <h2>{name}</h2>
            <button onClick={() => handleDelete(name)}>X</button>
            <div>
                <strong>Age</strong>: {age}
            </div>
            <div>
                <strong>Email</strong>: {email}
            </div>
        </div>
    );
  };

