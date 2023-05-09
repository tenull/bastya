import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import Dropdown from 'react-dropdown';


const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  background-color: #4A3429;
  margin:0;
    padding: 2rem 4rem;

    gap: 3rem;
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
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {


  return (
    <div className="rightnav">
      <Ul open={open}>

        <Link to="/" style={{ textDecoration: 'none', color: '#C6AD8F' }}>Főoldal</Link>
        <Link to="/rolunk" style={{ textDecoration: 'none', color: '#C6AD8F' }}>Rólunk</Link>
        <div className='dropdown'> <Link to="/szolgaltatasok" style={{ textDecoration: 'none', color: '#C6AD8F' }}> Szolgáltatások
          <div className="dropdown-content">
            <div className="dropdown-test">
              <Link to="/galeria" style={{ textDecoration: 'none', color: '#C6AD8F' }}>Galéria</Link>
              <Link to="/form" style={{ textDecoration: 'none', color: '#C6AD8F' }}>Formanyomtatványok</Link>
              <Link to="/kapcsolat" style={{ textDecoration: 'none', color: '#C6AD8F' }}>Kapcsolat</Link>
            </div>
          </div>
        </Link>
        </div>
        <Link to="/galeria" style={{ textDecoration: 'none', color: '#C6AD8F' }}>Galéria</Link>
        <Link to="/form" style={{ textDecoration: 'none', color: '#C6AD8F' }}>Formanyomtatványok</Link>
        <Link to="/kapcsolat" style={{ textDecoration: 'none', color: '#C6AD8F' }}>Kapcsolat</Link>

      </Ul>
    </div>
  )
}

export default RightNav