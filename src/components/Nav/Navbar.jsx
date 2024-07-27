import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';
const LogoContainer = styled.div`
  transition: opacity 0.3s ease-in-out;
  opacity: ${({ sticky }) => (sticky ? '1' : '1')};
`;
const Nav = styled.nav`
  position: sticky;
  top: ${({ sticky }) => (sticky ? '0' : '-128px')};
  z-index: 100;
  height: 55px;
  // padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .logo {
    padding: 0px 0;
  }
  @media (max-width: 991px) {
    top: ${({ sticky }) => (sticky ? '0' : '-81px')};
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
      <div className="d-none d-lg-block bottom-footer w-100 p-0 m-0">
        <div className="d-flex justify-content-evenly header-contact">
          <div className="d-flex align-items-center ">
            <p className="fs-6 fw-bold me-5 m-0 p-2 ps-5">
             <a style={{textDecoration:'none', color:'white'}}href="tel:+36301628381"> <CallIcon/> +36 30-162-8381</a>
            </p>
            <p className="fs-6 fw-bold m-0 d">
              <a style={{textDecoration:'none', color:'white'}}href="mailto:bastyaidosotthon@gmail.com"><MailIcon/>bastyaidosotthon@gmail.com</a>
            </p>
          </div>
          <div className="d-flex align-items-center">
            <a href="https://www.facebook.com/bastyaidosotthon" target="blank">
              <FacebookIcon
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  width: '30px',
                }}
                className="fs-1"
              />
            </a>
            <a
              href="https://www.youtube.com/watch?v=2ixYV8p_GT4&ab_channel=Tiszavasv%C3%A1riTV"
              target="blank"
            >
              <YouTubeIcon
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  width: '30px',
                }}
                className="fs-1 ms-4"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="logo">
        <LogoContainer sticky={sticky}>
        <Link
              className=""
              to="/"
              href="/"
              style={{ textDecoration: 'none', color: 'black' }}
            >
          <p className="display-5 d-none d-md-block fw-bold mt-4 p-0">
            Bástya Idősotthon
          </p>
          </Link>
          <div className="logo-content">
            <Link
              className=""
              to="/"
              href="/"
              style={{ textDecoration: 'none', color: 'white',}}
            >
              <p className="fs-4 d-block d-md-none fw-bold mt-3 pt-2 pb-2 ps-5">
                Bástya Idősotthon
              </p>
            </Link>
          </div>
        </LogoContainer>
      </div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
