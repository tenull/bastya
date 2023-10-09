import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import Dropdown from 'react-dropdown';


const Ul = styled.ul`
  position: sticky;
  top: 0;
  border-radius: 3px;
  list-style: none!important;
  display: flex;
  flex-flow: row nowrap;
  background-color: #4A3429;
  margin:0;
  padding: 2rem 4rem;
  gap: 4rem;
  
  a {
    color: #C6AD8F;
    list-style: none!important;
    text-decoration:none;
    transition: color 0.3s ease-in-out;
  }
  a:hover{
    color:#B89B5E;
    // text-decoration:underline;
    
    
  }
  
  @media (max-width: 768px) {
    z-index:10;
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
    li:hover{
      color:red;
    }
  }
`;

const RightNav = ({ open }) => {


  return (
    <div className="rightnav-container">
    <div className="rightnav">
      <Ul open={open}>

        <Link to="/" style={{ }}>Főoldal</Link>
        <Link to="/rolunk" style={{ }}>Rólunk</Link>
        <div className='dropdown'> <Link to="/szolgaltatasok" style={{ }}> Szolgáltatások
          <div className="dropdown-content">
            <div className="dropdown-test">
              <Link to="/galeria" style={{ }}>Gondozási Szolgáltatások</Link>
              <Link to="/form" style={{ }}>Egészségügyi Szolgáltatások</Link>
              {/* <Link to="/kapcsolat" style={{ }}>Kapcsolat</Link> */}
            </div>
          </div>
        </Link>
        </div>
        <Link to="/galeria" style={{ }}>Galéria</Link>
        <Link to="/form" style={{ }}>Formanyomtatványok</Link>
        <Link to="/kapcsolat" style={{ }}>Kapcsolat</Link>

      </Ul>
    </div>
    </div>
  )
}

export default RightNav