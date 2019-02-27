import React, { Component } from 'react';

import styled from 'styled-components';

import FriendList from './components/FriendList';

const PageContainer = styled.div`
  padding: 20px;
  border: 1px solid black;
`;

class App extends Component {
  render() {
    return (
      <PageContainer>
        <FriendList />
      </PageContainer>
    );
  }
}

export default App;
