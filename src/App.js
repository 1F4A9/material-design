import React from 'react';
import styled from 'styled-components';

import GlobalStyle from './GlobalStyle';
import TextField from './components/TextField';
import Switch from './components/Switch';
import Checkbox from './components/Checkbox';

const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .textfield-container,
  .switch-container,
  .checkbox-container {
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 50px;
    width: 70%;
    border: 1px solid #8e8e8e;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  

    transition: box-shadow 0.5s;
  }

  .textfield-container:hover,
  .switch-container:hover,
  .checkbox-container:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }

  .textfield-container {
    flex-direction: column;
  }

  .switch-container,
  .checkbox-container {
    flex-direction: row;
  }
  
  .textfield-container > div,
  .switch-container > div,
  .checkbox-container > div {
    flex: 1;
    margin: 50px 0px;
  }
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <div className="textfield-container">
        <TextField placeholder={'Firstname'} state={'interactive'}/>
        <TextField placeholder={'Lastname'} state={'focused'}/>
        <TextField placeholder={'Disabled'} state={'disabled'}/>
      </div>
      <div className="switch-container">
        <Switch state={'interactive'}/>
        <Switch state={'focused'}/>
        <Switch state={'disabled'}/>
      </div>
      <div className="checkbox-container">
        <Checkbox state={'interactive'}/>
        <Checkbox state={'focused'}/>
        <Checkbox state={'disabled'}/>
      </div>
    </Container>
  );
}

export default App;