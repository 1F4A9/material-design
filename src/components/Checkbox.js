import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input {
    height: 0;
    width: 0;
    opacity: 0;
  }

  input:focus ~ .box {
    outline: none;
  }

  input:focus ~ .box > div,
  input:hover ~ .box > div {
    opacity: ${props => props.state === 'disabled' ? 0 : 0.1};
    cursor: ${props => props.state === 'disabled' ? 'default' : 'pointer'};
  }

  input:checked ~ .box > i  {
    opacity: 1;
  }
  
  input:checked ~ .box {
    background-color: #6200ee;
    border: 2px solid #6200ee;
  }
  
  .box {
    position: relative;
    border: 2px solid #757575;
    box-sizing: border-box;
    border-radius: 2px;
    width: 18px;
    height: 18px;

    opacity: ${props => props.state === 'disabled' ? 0.3 : 1};
  }

  .box:hover {
    cursor: ${props => props.state === 'disabled' ? 'default' : 'pointer'};
  }

  .focus-effect {
    position: absolute;
    width: 36px;
    height: 36px;
    left: 50%;
    margin-left: -18px;
    top: 50%;
    margin-top: -18px;

    background-color: #6200ee;
    opacity: ${props => props.state === 'focused' ? 0.1 : 0};
    border-radius: 50%;
  }

  i {
    position: absolute;
    opacity: 0;
    font-size: 13px;
    color: #fff;
    top: 1px;
  }

  p {
    font-size: 14px;
    color: rgb(125, 125, 125);
    text-align: center;
  }

`;

export default function Checkbox({ state }) {
  let checkboxJSX = null;
  if (state === 'disabled') {
    checkboxJSX = <input type="checkbox" required checked={false}/>
  } else {
    checkboxJSX = <input type="checkbox" required/>
  }

  return (
    <Container state={state}>
      <p>{state}</p>
      <label>
        {checkboxJSX}
        <div className="box">
          <div className="focus-effect"></div>
          <i className="fas fa-check"></i>
        </div>
      </label>
    </Container>
  )
}
