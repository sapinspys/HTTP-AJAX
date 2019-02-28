import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavWrapper = styled.div`
    width: 100%;
    background: #2C3539;
`;

const NavContainer = styled.div`
    width: 90%;
    max-width: 1000px;
    padding: 10px 0;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const navLink = {
    color: '#ecf0f1',
    textDecoration: 'none',
    fontSize: '0.9rem'
}

export default class Navigation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <NavWrapper>
            <NavContainer>
                <Link style={navLink} to='/'>Home</Link>
                <Link style={navLink} to='/add'>Add Friend</Link>
                <Link style={navLink} to='/add'><img src={link} alt="search" width='20' /></Link>
                <Link style={navLink} to='/add'><img src={github} alt="search" width='20' /></Link>
            </NavContainer>
        </NavWrapper>
        )
    }
}