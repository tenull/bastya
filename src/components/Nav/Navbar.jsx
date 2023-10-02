import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const LogoContainer = styled.div`
  transition: opacity 0.3s ease-in-out;
  opacity: ${({ sticky }) => (sticky ? '1' : '1')};
`;
const Nav = styled.nav`
  position: sticky;
  top: ${({ sticky }) => (sticky ? '0' : '-124px')};
  z-index: 100;
  height: 55px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .logo {
    padding: 15px 0;
  }
`;

const Navbar = () => {
  const [sticky, setSticky] = React.useState(false);
  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  

  return (
    <Nav>
      <div className="logo">
      <LogoContainer sticky={sticky}>
       
        <p className='fs-1 fw-bold mt-4 p-0'>Bástya Idősotthon</p>
        <div className="idezet">
        <p className='fs-6 fw-bold text-center d-none d-lg-block'>" Az igazak segítséget kapnak az Úrtól, <br/> erőt a szükség idején." <br />  (Zsoltárok 37:39)</p>
      </div>
      <div className="idezet2">
        <p className='fs-6 fw-bold text-center d-none d-lg-block'>Szolgálati telefonszám <br /> +3630-162-8381</p>
      </div>
      </LogoContainer>
      </div>
      <Burger />
    </Nav>
  );
};

export default Navbar