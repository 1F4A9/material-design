import React from 'react';
import styled from 'styled-components';

import GlobalStyle from './GlobalStyle';
import TextField from './components/TextField';
import Switch from './components/Switch';

const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .textfield-container,
  .switch-container {
    margin: 50px;
    width: 70%;
    border: 1px solid #8e8e8e;
    
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .textfield-container {
    flex-direction: column;
  }

  .switch-container {
    flex-direction: row;
    background-color: #f7f7f7;
  }
  
  .textfield-container > div,
  .switch-container > div {
    flex: 1;
    margin: 50px 0px;
  }
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <div className="textfield-container">
        <TextField placeholder={'Firstname'} state={'enabled'}/>
        <TextField placeholder={'Lastname'} state={'focused'}/>
        <TextField placeholder={'Disabled'} state={'disabled'}/>
      </div>
      <div className="switch-container">
        <Switch state={'normal'}/>
        <Switch state={'focused'}/>
        <Switch state={'disabled'}/>
      </div>
    </Container>
  );
}

export default App;