import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    height: 0;
    width: 0;
    opacity: 0;
  }

  input:focus ~ .radio::before,
  .radio:hover::before {

    background-color: ${props => props.state === 'disabled' ? 'transparent' : 'rgba(98, 0, 238, 0.1)'};
  }

  input:checked ~ .radio > .inner-circle {
    transform: scale(0.5, 0.5);
  }

  input:checked ~ .radio > .outer-circle {
    border-color: ${props => props.state === 'disabled' ? '#757575' : '#6200ee'};
  }

  .radio {
    position: relative;
    width: 20px;
    height: 20px;
    cursor: ${props => props.state === 'disabled' ? 'default': 'pointer'};
    
    ::before {
      content: '';
      position: absolute;
      width: 40px;
      height: 40px;
      left: 50%;
      margin-left: -20px;
      top: 50%;
      margin-top: -20px;
      border-radius: 50%;
      background-color: ${props => props.state === 'focused' ? 'rgba(98, 0, 238, 0.1)' : 'transparent'};
    }
  }
  
  .outer-circle {
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px solid #757575;
    opacity: ${props => props.state === 'disabled' ? 0.3 : 1};
  }

  .inner-circle {
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${props => props.state === 'disabled' ? '#757575' : '#6200ee'};
    transform: scale(0, 0);
    opacity: ${props => props.state === 'disabled' ? 0.3 : 1};

    transition: transform 0.1s linear;
  }

  p {
    font-size: 14px;
    color: rgb(125, 125, 125);
    text-align: center;
  }
`;

export default function RadioButton({ state }) {
  return (
    <Container state={state}>
      <p>{state}<br/>(interactive)</p>
      <label>
        <input type="radio" name="demo" required/>
        <div className="radio">
          <div className="outer-circle"></div>
          <div className="inner-circle"></div>
        </div>
      </label>
    </Container>
  )
}
