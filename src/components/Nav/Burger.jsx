import React, { useState } from 'react';
import styled from 'styled-components';
import RightNav from './RightNav';

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 18px;
  right: 33px;
  z-index: 20;
  display: none;
  @media (max-width: 768px) {
    z-index: 2000;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#ccc' : 'white'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false)

  const handleMenuItemClick = () => {
    setOpen(false);
    window.scrollTo(0, 0);
  };
  
  return (
    <>
      <StyledBurger className='burger' open={open} onClick={() => setOpen(!open)}>
        <div  />
        <div />
        <div />
      </StyledBurger>
      
      <RightNav open={open} closeMenu={handleMenuItemClick}/>
    </>
  )
}

export default Burger