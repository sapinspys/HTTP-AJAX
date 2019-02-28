import React, { Component } from 'react';

import styled from 'styled-components';

import FriendList from './components/FriendList';

const PageContainer = styled.div`
  padding: 50px;
  background: #E8E8E8;
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
