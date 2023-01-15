import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  background-color: #4A3429;
  li {
    padding: 2rem 2rem;
    color: #C6AD8F;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #4A3429;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #C6AD8F;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <a href="/nappali"><li>Főoldal</li></a>
      <a href="/nappali/rolunk"><li>Rólunk</li></a>
      <li>Szolgáltatások</li>
      <li>Galéria</li>
      <li>Formanyomtatványok</li>
      <li>Kapcsolat</li>
    </Ul>
  )
}

export default RightNav