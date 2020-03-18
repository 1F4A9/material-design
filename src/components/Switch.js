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
  
  input:focus ~ .slider::before {
    background-color: rgba(155, 155, 155, 0.1);
  }

  input:checked ~ .slider::after {
    background-color: #6200ee;
    left: 21px;
  }

  input ~ .slider::after {
    background-color: #fff;
  }
  
  input:checked ~ .slider {
    background-color: #a472ea;
  }

  .slider {
    position: relative;
    height: 20px;
    width: 36px;
    left: 4px;
    bottom: 4px;
    background-color: #9b9b9b;
    border-radius: 20px;
    cursor: ${props => props.state === 'disabled' ? 'default' : 'pointer'};
    opacity: ${props => props.state === 'disabled' ? '0.3' : null};
    
    transition: 0.2s;
    
    ::after {
      content: '';
      
      display: block;
      position: absolute;
      top: -2px;
      left: -9px;
      background-color: #fff;
      height: 24px;
      width: 24px;
      border-radius: 50%;
      box-shadow: 0 2px 3px rgba(0,0,0,0.16), 0 3px 3px rgba(0,0,0,0.23);
      
      transition: 0.2s;
    }
    
    ::before {
      content: '';
      
      display: block;
      position: absolute;
      top: -15px;
      left: -23px;
      height: 50px;
      width: 50px;
      border-radius: 50%;

      transition: 0.2s;
    }
  }

  p {
    font-size: 14px;
    color: rgb(125, 125, 125);
  }

`;

export default function Switch({ state }) {
  let slider = null;
  if (state === 'disabled') {
    slider = <input type="checkbox" checked={false} required/>
  } else if (state === 'focused') {
    slider = <input type="checkbox" checked={true} required/>
  } else {
    slider = <input type="checkbox" required/>
  }



  return (
    <Container state={state}>
      <p>{state}</p>
      <label>
        {slider}
        <div className="slider"></div>
      </label>
    </Container>
  )
}