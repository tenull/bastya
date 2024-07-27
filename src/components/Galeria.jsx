import { imageData } from "../imageData";
import { foglalkozasData } from "../foglalkozasData";
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Container } from "react-bootstrap";
import { Breadcrumb } from "react-bootstrap";
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import { Link } from "react-router-dom";
const Galeria = () => {
    const [image, setImage] = useState([])
    const [show, setShow] = useState(false);
    const [actualData, setActualData] = useState({});
    const handleClose = () => setShow(false);
    const handleShow = (item) => { setActualData(item); setShow(true); }
    const [carouselStyle, setCarouselStyle] = useState({});

    useEffect(() => {

        const handleResize = () => {
            const windowWidth = window.innerWidth;
            if (windowWidth < 768) {
                setCarouselStyle({ height: "600px", width: "500px", objectFit:'contain'  });
            } else {
                setCarouselStyle({ height: "500px", width: "800px",objectFit:'contain'  });
            }
        };


        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // useEffect(()=>{
    //     imageData(``).then((res)=>{
    //         setImage(res.images)
    //         console.log(res.images)
    //     })
    // })

    return (
        <div className="galeriatop">
            <div className="galeria-header" style={{ backgroundImage: 'url(../virag2.jpg)', width: '100%', height: '300px', backgroundPosition: '50% 60%', backgroundSize: 'cover' }}>
            <Container className='pt-4'>
                    <div className="d-flex justify-content-center">
                        <h1 className="display-4 pt-5  textshadow text-white " style={{}}>Galéria

                        </h1>
                    </div>
                </Container>

            </div>
            <div className="galeria-main">
                <div className="form-content" style={{maxHeight:'36px'}}>
                    <Breadcrumb className="container">
                        <div className="bread d-flex flex-wrap">
                          
                            <div className="sec d-flex aling-items-end  header-text">
                                <Breadcrumb.Item className="" href="/">
                                <Link to='/'> Főoldal</Link> 
                                </Breadcrumb.Item>
                                <Breadcrumb.Item className="" active>Galéria</Breadcrumb.Item>
                            </div>
                        </div>
                    </Breadcrumb>

                </div>
                <div className="galeria-content">
                    <Container className="rounded  mt-2 pt-2 pb-3 text-center" style={{ backgroundColor: '' }}>
                        <div className="container mainpage-header mt-5">
                            <p className='display-5  foglal m-0 text-center ' style={{ color: '' }}>Programok</p>
                        </div>
                        <Container className="d-flex justify-content-center flex-wrap">
                            {imageData.map((item) => (
                                <div className="col-lg-4 mt-3 d-flex flex-column align-items-center " key={item.title}>
                                    <p className="fs-5 text-center m-0">{item.date}</p>
                                    <p className="fs-5 text-center m-0">{item.title}</p>
                                    <div className="img-container-zoom">
                                        <div className="img-zoom">
                                            <img
                                                src={`${item.mainimage}?w=164&h=164&fit=crop&auto=format`}
                                                onClick={() => handleShow(item)}
                                                alt={item.title}
                                                loading="lazy"
                                                style={{ width: '300px', height: '300px', objectFit: 'cover',objectPosition:'top', cursor: 'pointer' }}
                                                className="img-fluid rounded keep2"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Container>
                    </Container>
                    <div className="fogl-bottom" style={{ backgroundColor: '#EEEEEE' }}>
                        <Container className="rounded  mt-5 pt-3  pb-5 text-center" style={{ backgroundColor: '' }}>
                            <div className="container mainpage-header mt-5">
                                <p className='display-5  foglal m-0 text-center ' style={{ color: '' }}>Foglalkozások</p>
                            </div>
                            <Container className="d-flex justify-content-center flex-wrap">
                                {foglalkozasData.map((item) => (
                                    <div className="col-lg-4 mt-3 d-flex flex-column align-items-center" key={item.title}>
                                        {/* <p className="fs-5 text-center m-0">{item.date}</p> */}
                                        <p className="fs-5 text-center m-0">{item.title}</p>
                                        <div
                                            onClick={() => handleShow(item)}
                                            className="img-container"
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                width: '300px',
                                                height: '300px',
                                            }}
                                        >
                                            <div className="img-container-zoom">
                                                <div className="img-zoom">


                                                    <img
                                                        src={`${item.mainimage}?w=164&h=164&fit=crop&auto=format`}
                                                        alt={item.title}
                                                        loading="lazy"
                                                        style={{ width: '100%', height: '100%', objectFit: 'cover',objectPosition:'top', cursor: 'pointer' }}
                                                        className="img-fluid rounded keep2"
                                                    />     </div>
                                            </div>
                                        </div>

                                    </div>
                                ))}
                            </Container>
                        </Container>
                    </div>
                    <Modal show={show} onHide={handleClose} 
                        // backdrop="static"
                        keyboard={false}
                        size="lg">
                        <Modal.Header className="d-flex flex-column-reverse align-items-center pb-0" closeButton>
                            <Modal.Title className="d-flex flex-column align-items-center fw-bold">{actualData.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="d-flex flex-wrap justify-content-center">

                            <Carousel
                                className="carousel-custom"
                                images={actualData.images && Object.keys(actualData.images).map((key) => ({ src: actualData.images[key] }))}
                                startIndex={0}
                                style={carouselStyle}
                            />
                        </Modal.Body>

                    </Modal>

                </div>
            </div>
        </div>
    );
}

export default Galeria;