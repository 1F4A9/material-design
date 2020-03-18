import React from 'react';
import styled from 'styled-components';

import GlobalStyle from './GlobalStyle';
import TextField from './components/TextField';

const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <div className="textfield-container">
        <TextField placeholder={'Name'} />
      </div>
    </Container>
  );
}

export default App;