import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import github from '../imgs/github-white.png';
import linkedin from '../imgs/linkedin-white.png';

// Styled Components
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

// Inline Styles
const navLink = {
    color: '#ecf0f1',
    textDecoration: 'none',
    fontSize: '0.9rem'
}

export default class Navigation extends Component {
    render() {
        return (
        <NavWrapper>
            <NavContainer>
                <Link style={navLink} to='/'>Home</Link>
                <Link style={navLink} to='/add'>Add Friend</Link>
                <a style={navLink} 
                    href='https://www.linkedin.com/in/guillermo-arria-devoe/' 
                    target='_blank'
                    rel="noopener noreferrer">
                        <img src={linkedin} alt="linkedin" width='20' />
                </a>
                <a style={navLink} 
                    href='https://github.com/sapinspys' 
                    target='_blank'
                    rel="noopener noreferrer">
                        <img src={github} alt="github" width='20' />
                </a>
            </NavContainer>
        </NavWrapper>
        )
    }
}