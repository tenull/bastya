import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  background-color: coral;
  li {
    padding: 2rem 2rem;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: coral;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>Főoldal</li>
      <li>Foglalkozások</li>
      <li>Rólunk</li>
      <li>Képek</li>
      <li>Videók</li>
      <li>Kapcsolat</li>
    </Ul>
  )
}

export default RightNav