import React, { Component } from 'react-router-dom';
import axios from 'axios';

export default class FriendList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: []
        }
    }

    componentDidMount() {

    }

    render() {
        return(
            <div>
                {this.state.friends.map(friend => (
                    <FriendDetails key={friend.id} friend={friend} />
                ))}
            </div>
        )
    }
}

