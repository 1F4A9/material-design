import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
position: relative;
font-family: 'Raleway', sans-serif;
font-weight: 500;

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
    cursor: text;
  }

  :focus {
    outline: none;
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
`;

export default function TextField({ placeholder }) {
  return (
    <Container>
      <form>
        <input type="text" required/>
        <label>{placeholder}</label>
        <div className="border-top-left"></div>
        <div className="border-top-right"></div>
        <div className="border-bottom"></div>
      </form>
    </Container>
  )
}
