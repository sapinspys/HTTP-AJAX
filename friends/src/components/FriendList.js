import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { Card, CardTitle, CardText, Button } from 'reactstrap';

// Styled Components
const WrapperContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 50px;
`;

// Inline Styles
const cardStyles = {
    width: '30%',
    minWidth: '280px',
    marginBottom: '20px', 
    padding: '15px'
}

export default class FriendList extends Component {
    render() {
        return(
            <WrapperContainer>
                {/* <FriendForm friends={this.state.friends} /> */}
                {this.props.friends.map(friend => (
                    <FriendDetails key={friend.id} 
                        friend={friend}
                        handleDelete={(name) => this.props.handleDelete(name)}
                        friendDetails={(friend) => this.props.sendFormData(friend)} />
                ))}
            </WrapperContainer>
        )
    }
}

function FriendDetails({ friend, handleDelete, friendDetails }) {
    const { name, age, email } = friend;
    return(
        <Card inverse color='info' style={cardStyles}>
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
            <Button onClick={() => handleDelete(name)}
                size='sm'
                color='warning'>
                    Delete Friend
            </Button>
            <Link to='/edit' style={{textDecoration:'none'}}>
                <Button onClick={() => friendDetails(friend)} 
                    size='sm' 
                    color='success'
                    block>
                        Edit Friend
                </Button>
            </Link>
        </Card>
    );
  };

