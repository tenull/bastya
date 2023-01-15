import React from 'react';
import styled from 'styled-components';
import Burger from './Nappali/Burger';
import Rolunk from './Nappali/Rolunk';
import { Route,Routes,Router } from 'react-router-dom';


const Nav = styled.nav`
width: 100%;
height: 55px;
border-bottom: 2px solid #f1f1f1;
padding: 0 20px;
display: flex;
flex-direction:column;
align-items:center;
.logo {
  padding: 15px 0;
}
`


const Nappali = () => {
    return (
      <>
    <Routes>
        <Nav>
      <div className="logo">
        <h1>Bástya Nappaliház</h1>
       
      </div>
      <Burger />
    </Nav>
   
       
            
    </Routes>  
   

   </>
   );
}
 
export default Nappali;