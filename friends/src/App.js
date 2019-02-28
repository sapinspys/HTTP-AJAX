import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import styled from 'styled-components';

import Navigation from './components/Navigation';
import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';

// Styled Components
const PageContainer = styled.div`
  padding: 50px;
  background: #E8E8E8;
`;

class App extends Component {
  render() {
    return (
      <PageContainer>
        <Navigation />
        <Route exact path='/' component={FriendList} />
        <Route path='/add' component={FriendForm} />
        <Route path='/edit/:id' component={FriendForm} />
      </PageContainer>
    );
  }
}

export default App;
