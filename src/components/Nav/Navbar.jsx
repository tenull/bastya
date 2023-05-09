import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`

  height: 55px;
  padding: 0 20px;
  display: flex;
  flex-direction:column;
  align-items:center;
  .logo {
    padding: 15px 0;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <p>Bástya Idősotthon</p>
        
       
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar