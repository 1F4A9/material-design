import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-family: 'Raleway', sans-serif;
  font-weight: 500;

  .textfield {
    position: relative;
  }

  label {
    position: absolute;
    left: 12px;
    top: 22px;
    pointer-events:none;
    font-size: 14px;
    color: #626262;

    transition: 0.2s ease all;
  }

  .border-top-left, .border-top-right {
    position: absolute;
    height: 1px;
    bottom: -1px;
    width: 0%;
    background-color: #6200ee;

    transition: 0.2s ease width;
  }

  .border-top-left {
    right: 50%;
  }

  .border-top-right {
    left: 50%;
  }

  .border-bottom {
    position: absolute;
    height: 1px;
    width: 100%;
    background-color: #8e8e8e;
  }

  input {
    padding: 26px 12px 12px 12px;
    width: 256px;
    background-color: #f5f5f5;
    border: none;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    font-size: 16px;
    transition: 0.15s ease background-color;
    color: #373737;

    :hover {
      background-color: #e8e8e8;
      cursor: pointer;
    }

    :focus {
      outline: none;
      cursor: text;
    }

    :focus ~ .border-top-right, 
    :focus ~ .border-top-left {
      background-color: #6200ee;
      border-top: 1px solid #6200ee;
      width: 50%;
      z-index: 1;
    }

    :focus ~ label,
    :valid ~ label {
      top: 10px;
      font-size: 12px;
    }

    :focus ~ label {
      color: #6200ee;
    }
  }

  p {
    font-size: 14px;
    padding-bottom: 12px;
    color: rgb(125, 125, 125);
    text-align: center;
  }
`;

const DisabledContainer = styled.div`
  font-family: 'Raleway', sans-serif;
  font-weight: 500;

  .textfield {
    position: relative;
    padding: 20px 12px;
    width: 256px;
    background-color: #f5f5f5;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    font-size: 16px;
    color: #373737;
    opacity: 0.3;
  }

  label {
    font-size: 14px;
    color: #626262;
  }

  p {
    font-size: 14px;
    padding-bottom: 12px;
    color: rgb(125, 125, 125);
    text-align: center;
  }
`;

const FocusContainer = styled.div`
  font-family: 'Raleway', sans-serif;
  font-weight: 500;

  .textfield {
    position: relative;
  }

  label {
    position: absolute;
    left: 12px;
    pointer-events:none;
    font-size: 14px;
    color: #6200ee;
    top: 10px;
    font-size: 12px;
  }

  .border-top-left, .border-top-right {
    position: absolute;
    height: 1px;
    bottom: -1px;
    background-color: #6200ee;
    border-top: 1px solid #6200ee;
    width: 50%;
    z-index: 1;
  }

  .border-top-left {
    right: 50%;
  }

  .border-top-right {
    left: 50%;
  }

  .border-bottom {
    position: absolute;
    height: 1px;
    width: 100%;
    background-color: #8e8e8e;
  }

  input {
    padding: 26px 12px 12px 12px;
    width: 256px;
    background-color: #e8e8e8;
    border: none;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    font-size: 16px;
    transition: 0.15s ease background-color;
    color: #373737;

    :focus {
      outline: none;
    }
  }

  p {
    font-size: 14px;
    padding-bottom: 12px;
    color: rgb(125, 125, 125);
    text-align: center;
  }
`;

export default function TextField({ placeholder, state }) {
  let textFieldJSX = null;

  if (state === 'disabled') {
    textFieldJSX = (
      <DisabledContainer state={state}>
        <p>{state}</p>
        <div className="textfield">
          <label>{placeholder}</label>
        </div>
      </DisabledContainer>
    )
  } else if (state ==='focused') {
    textFieldJSX = (
      <FocusContainer state={state}>
        <p>{state}<br/>(interactive)</p>
        <div className="textfield">
          <input type="text" required/>
          <label>{placeholder}</label>
          <div className="border-top-left"></div>
          <div className="border-top-right"></div>
          <div className="border-bottom"></div>
        </div>
      </FocusContainer>
    )
  } else {
    textFieldJSX = (
      <Container state={state}>
        <p>{state}<br/>(interactive)</p>
        <div className="textfield">
          <input type="text" required/>
          <label>{placeholder}</label>
          <div className="border-top-left"></div>
          <div className="border-top-right"></div>
          <div className="border-bottom"></div>
        </div>
      </Container>
    )
  }
  return textFieldJSX;
}