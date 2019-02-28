import React, { Component } from 'react';

import axios from 'axios';
import styled from 'styled-components';
import { Card, CardTitle, CardText, Button } from 'reactstrap';

// Styled Components
const WrapperContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 20px;
`;

// Inline Styles
const cardStyles = {
    width: '30%',
    marginBottom: '20px', 
    padding: '15px'
}

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
            <WrapperContainer>
                {/* <FriendForm friends={this.state.friends} /> */}
                {this.state.friends.map(friend => (
                    <FriendDetails key={friend.id} 
                        friend={friend}
                        handleDelete={(name) => this.deleteFriend(name)} />
                ))}
            </WrapperContainer>
        )
    }
}

function FriendDetails({ friend, handleDelete }) {
    const { name, age, email } = friend;
    return(
        <Card inverse color='success' style={cardStyles}>
            <CardTitle style={{
                fontSize:'1.4rem', 
                borderBottom: '1px solid white'
                }}>
                    <strong>{name}</strong>
            </CardTitle>
            <CardText>
                <strong>Age</strong>: {age}
            </CardText>
            <CardText>
                <strong>Email</strong>: {email}
            </CardText>
            <Button onClick={() => handleDelete(name)} size='sm' color='warning'>Delete Friend</Button>
        </Card>
    );
  };

