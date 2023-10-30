import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ScrollToTop from 'react-scroll-up';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/navigation";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Zoom } from 'swiper';
import 'swiper/css';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { foglalkozasData } from '../foglalkozasData';
import image3 from '../images/kep1.jpg';


console.log(foglalkozasData)
const Mainpage = () => {
  const imageUrl = '../../kep1.jpg'

  return (
    <div className="mainpage">

      <Swiper navigation={true}
        modules={[Navigation, Autoplay, Zoom]}
        autoplay={{
          pauseOnMouseEnter: true,
          disableOnInteraction: true,
          reverseDirection: false,
        }}
        loop={true}
        speed={800}
        zoom={true}
        className="mySwiper d-flex justify-content-center text-white">

        <SwiperSlide className='img-fluid swiper-image' style={{ backgroundImage: 'url(../kep2.jpg)', height: '650px', backgroundSize: 'cover', color: 'white',backgroundPosition:'50% 15%' }}>

          <div className='swiper-container'>
            <Container>
              <p className='display-1'></p>
            </Container>
          </div>

        </SwiperSlide>
        <SwiperSlide className='img-fluid swiper-image' style={{ backgroundImage: 'url(../mulatozas.jpg)', height: '650px', backgroundSize: '100%', backgroundPosition: '50% 15%' }}>
          <Container>
            <div className='swiper-container'>
              <Container>
                <div data-aos="zoom-in"><p className='textshadow2 display-4'> 2023</p></div>
              </Container>
            </div>
          </Container>
        </SwiperSlide>
        <SwiperSlide className='img-fluid swiper-image' style={{ backgroundImage: 'url(../agytorna6.jpg)', height: '650px', backgroundSize: '100%', backgroundPosition: 'center' }}>
          <Container>
            <div className='swiper-container'>
              <Container>
                <div data-aos="zoom-in"><p className='textshadow2 display-4'>Játék</p></div>
              </Container>
            </div>
          </Container>
        </SwiperSlide>
        <SwiperSlide className='img-fluid swiper-image' style={{ backgroundImage: 'url(../tornazas.jpg)', height: '650px', backgroundSize: 'cover', backgroundPosition: '50% 15%' }}>
          <Container>
            <div className='swiper-container'>
              <Container>
                <p className='textshadow2 display-4'>Tornázás</p>
              </Container>
            </div>
          </Container>
        </SwiperSlide>
        <SwiperSlide className='img-fluid swiper-image' style={{ backgroundImage: 'url(../allatkert.jpg)', height: '650px', backgroundSize: 'cover' }}>
          <Container>
            <div className='swiper-container'>
              <Container>
                <p className='textshadow2 display-4'>Kirándulás az állatkertbe 2023</p>
              </Container>
            </div>
          </Container>
        </SwiperSlide>

      </Swiper>

      <ScrollToTop
        sx={{
          position: 'fixed',
          bottom: 50,
          right: 30,
          cursor: 'pointer',
          transitionDuration: '0.1s',
          transitionTimingFunction: 'linear',
          transitionDelay: '0s',

        }}
        showUnder={150}>
        <div className='test' style={{ zIndex: '100' }}>
          <span className='test' style={{ zIndex: '100' }}><ArrowUpwardIcon style={{ zIndex: '1000000' }} /></span></div>
      </ScrollToTop>
      <div data-aos="zoom-in" className="idezet-mainpage  pt-5 ">
        <p className='display-3 fw-bold text-center '>" Az igazak segítséget kapnak az Úrtól, <br /> erőt a szükség idején." <br />  (Zsoltárok 37:39)</p>
      </div>

      <div className="container mainpage-header mt-5">
        <p className='display-5 foglal m-0 text-center'>Foglalkozások</p>
      </div>
      <div className="mainpage-container container mt-5 mb-5 d-flex flex-wrap">
        {foglalkozasData.map((data, index) => (
          <div key={index} className="mainpage-container">
            <div className="card1 d-flex">
              <Card sx={{ Width: 300, maxWidth: 300, height: 460, backgroundColor: '#285531' }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="400"
                    image={data['mainimage']}
                    alt="green iguana"
                  />
                  <CardContent sx={{ color: 'white' }}>
                    {/* <Typography gutterBottom variant="h5" component="div">
                      {data.date}
                    </Typography> */}
                    <Typography className='d-flex justify-content-center fs-4' sx={{ color: 'white' }} variant="body2" color="text.secondary">
                      {data.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                {/* <CardActions>
         <Button sx={{color:'#C6AD8F'}} size="small" color="primary">
         <Link to="/galeria" style={{ textDecoration:'none', color:'#C6AD8F' }}>Tovább</Link>
         </Button>
     </CardActions> */}
              </Card>
            </div>

          </div>
        ))}
      </div>



      {/* <div className=' pb-5 mainpage-contentmain'>
        <div className="mainpage-content container">
          <div className="container mainpage-header">
            <p className='display-5 mt-5 foglal m-0 text-center'>Szolgáltatások</p>
          </div>
          <div className="mainpage-content-center mt-5 d-flex flex-wrap justify-content-evenly">
            <Card className='mb-3' sx={{ Width: 500, maxWidth: 300, height: 500, backgroundColor: '#285531' }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="350"
                  image={imageUrl}
                  alt="green iguana"
                />
                <CardContent sx={{ color: 'white' }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Gondozási Szolgáltatások
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button sx={{ color: 'white' }} size="small" color="primary">
                  <Link to="/galeria" style={{ textDecoration: 'none', color: 'white' }}>Tovább</Link>
                </Button>
              </CardActions>
            </Card>

            <Card className='mb-3' sx={{ Width: 500, maxWidth: 300, height: 500, backgroundColor: '#285531' }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="350"
                  image={imageUrl}
                  alt="green iguana"
                />
                <CardContent sx={{ color: 'white' }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Egészségügyi Szolgáltatások
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button sx={{ color: '#C6AD8F' }} size="small" color="primary">
                  <Link to="/galeria" style={{ textDecoration: 'none', color: 'white' }}>Tovább</Link>
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Mainpage;