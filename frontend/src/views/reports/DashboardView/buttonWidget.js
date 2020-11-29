import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

const Buttonstyle = styled.button`
  background-color: #A894F3;
  color: white;
  font-size: 10px;
  padding: 5px 20px;
  border-radius: 5px;
  margin: 5px 0px;
  cursor: pointer;
  outline: 0;
  &: hover{
    background-color: #876DE6;
  }
`;

export default Buttonstyle;