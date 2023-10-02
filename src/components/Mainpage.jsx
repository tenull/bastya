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
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import Container from 'react-bootstrap/Container';
import { imageData } from '../imageData';
console.log(imageData)
const Mainpage = () => {
    return (
        <div className="mainpage">
     
  <Swiper navigation={true} modules={[Navigation,Autoplay]} autoplay={{

pauseOnMouseEnter: true,
disableOnInteraction: true,
reverseDirection: false,

}} loop={true} speed={800}
className="mySwiper d-flex justify-content-center text-white">
 
        <SwiperSlide className='img-fluid ' style={{backgroundImage:'url(../kep2.jpg)',height:'800px',backgroundSize:'cover', color:'white' }}>
         
          <div className='swiper-container'>
            <Container>
          <p className='display-1'></p>
          </Container>
          </div>
         
          </SwiperSlide>
          <SwiperSlide className='img-fluid' style={{backgroundImage:'url(../városnap.jpg)',height:'800px',backgroundSize:'100%',backgroundPosition:'center' }}>
          <Container>
          <div className='swiper-container'>
            <Container>
          <p className='textshadow display-4'>Városnap 2023</p>
          </Container>
          </div>
          </Container>
          </SwiperSlide>
          <SwiperSlide className='img-fluid' style={{backgroundImage:'url(../karacsony.jpg)',height:'800px',backgroundSize:'cover',backgroundPosition:'center' }}>
          <Container>
          <div className='swiper-container'>
            <Container>
          <p className='textshadow display-4'>Karácsony 2022</p>
          </Container>
          </div>
          </Container>
          </SwiperSlide>
          <SwiperSlide className='img-fluid' style={{backgroundImage:'url(../allatkert.jpg)',height:'800px',backgroundSize:'cover' }}>
          <Container>
          <div className='swiper-container'>
            <Container>
          <p className='textshadow display-4'>Kirándulás az állatkertbe 2023</p>
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
    transitionDuration: '0.3s',
    transitionTimingFunction: 'linear',
    transitionDelay: '0s'
  }}
showUnder={160}>
    <div className='test'>
  <span className='test'><ArrowUpwardIcon/></span></div>
</ScrollToTop>

            <div className="container mainpage-header mt-5">
                <p className='display-3 text-center'>Üdvözöljük a Tiszalöki Bástya Idősotthon oldalán</p>
            </div>
            {/* <div className="mainpage-container d-flex flex-wrap">
{imageData.map((data,index)=>(
 <div key={index} className="mainpage-container">
 <div className="card1 d-flex">
 <Card sx={{ maxWidth: 345 , backgroundColor:'#4A3429'}}>
     <CardActionArea>
         <CardMedia
             component="img"
             height="140"
             image={data['mainimage']}
             alt="green iguana"
         />
         <CardContent sx={{color:'#C6AD8F'}}>
             <Typography  gutterBottom variant="h5" component="div">
                 {data.date}
             </Typography>
             <Typography sx={{color:'#C6AD8F'}} variant="body2" color="text.secondary">
                {data.title} 
             </Typography>
         </CardContent>
     </CardActionArea>
     <CardActions>
         <Button sx={{color:'#C6AD8F'}} size="small" color="primary">
            Tovább
         </Button>
     </CardActions>
 </Card>
 </div>

</div>
))}
           </div> */}

 <Container className='mt-5 mb-5'>
            <div className="mainpage-content">
                <p className='fs-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam at magni minus incidunt vero necessitatibus. Inventore, magnam perferendis. Deleniti cumque voluptatibus pariatur quasi voluptatem repellat numquam labore minima aperiam in!
                    Fugiat rerum quas maxime dolor esse voluptatem, necessitatibus quam, soluta saepe odio perspiciatis, iste quos accusamus quae. Ipsam tenetur fugit dolorum asperiores? Illum magnam blanditiis nesciunt explicabo sapiente eligendi asperiores?
                    Dolores animi nihil dicta minus. Veritatis repellat voluptatem deserunt cupiditate odit perspiciatis cum ut, eos laudantium reprehenderit magnam magni inventore ullam facere, nihil in aspernatur iste. Officiis itaque quam minima!
                    Cupiditate quaerat, eius corrupti distinctio architecto laudantium nostrum natus exercitationem dolor autem tenetur, aliquam facilis saepe, explicabo veritatis odio repudiandae suscipit repellendus veniam excepturi ducimus earum adipisci numquam eveniet? Dicta.
                    Illo quis alias quas unde consequuntur? Ratione facere molestiae consequatur cum nam excepturi facilis in, illum qui explicabo, deleniti optio! Quas unde ut molestias animi fugiat quasi repellendus ex molestiae?</p>
            </div>
            </Container>
        </div>
    );
}

export default Mainpage;