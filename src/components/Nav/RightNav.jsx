import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Ul = styled.ul`
  position: sticky;
  position: -webkit-sticky !important;
  top: 0;
  border-radius: 3px;
  list-style: none !important;
  display: flex;
  flex-flow: row nowrap;
  background-color: #b89b5e;
  margin: 0;
  padding: 2rem 4rem;
  gap: 4rem;

  a {
    color: white;
    list-style: none !important;
    text-decoration: none;
    transition: color 0.3s ease-in-out;
    font-weight: bold;
  }
  a:hover {
    color: #285531;
    // text-decoration:underline;
  }
  @media (min-width: 768px) {
  }

  @media (max-width: 768px) {
    z-index: 10;
    flex-flow: column nowrap;
    background-color: #285531;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    a:hover {
      color: #b89b5e;
      // text-decoration:underline;
    }
    li {
      color: #c6ad8f;
    }
  }
`;

const RightNav = ({ open, closeMenu }) => {
  return (
    <div className="rightnav-container">
      <div className="rightnav">
        <Ul open={open}>
          <Link to="/" style={{}} onClick={closeMenu}>
            Főoldal
          </Link>
          <Link to="/rolunk" style={{}} onClick={closeMenu}>
            Rólunk
          </Link>
          <div className="dropdown">
            <Link
              to="/szolgaltatasok"
              style={{ paddingBottom: '2.2rem' }}
              onClick={closeMenu}
            >
              {' '}
              Szolgáltatások
            </Link>
            {/* <div className="dropdown-content">
              <div className="dropdown-test">
                <Link to="/gondozasi" style={{}} onClick={closeMenu}>
                  Gondozási Szolgáltatások
                </Link>
                <Link to="/egeszsegugyi" style={{}} onClick={closeMenu}>
                  Egészségügyi Szolgáltatások
                </Link>
                
              </div>
            </div> */}
          </div>

          <Link to="/galeria" style={{}} onClick={closeMenu}>
            Galéria
          </Link>
          <Link to="/form" style={{}} onClick={closeMenu}>
            Formanyomtatványok
          </Link>
          <Link to="/kapcsolat" style={{}} onClick={closeMenu}>
            Kapcsolat
          </Link>
        </Ul>
      </div>
    </div>
  );
};

export default RightNav;
