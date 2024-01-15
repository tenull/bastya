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
                setCarouselStyle({ height: "600px", width: "500px" });
            } else {
                setCarouselStyle({ height: "500px", width: "800px" });
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
            <div className="galeria-header" style={{ backgroundImage: 'url(../virag2.jpg)', width: '100%', height: '300px', backgroundPosition: '50% 60%',backgroundSize: 'cover' }}>
                <Container>
                    <div className="d-flex justify-content-center">
                        <h1 className="display-4 pt-5  textshadow text-white " style={{}}>Galéria

                        </h1>
                    </div>
                </Container>

            </div>
            <div className="galeria-main">
                <div className="form-content">
                    <Breadcrumb className="container">
                        <div className="bread d-flex flex-wrap">
                            <div className="one">
                                <p className="fs-5 fw-bold m-0 pt-2 text-black">Galéria</p>
                            </div>
                            <div className="sec d-flex alig-items-center header-text">
                                <Breadcrumb.Item className="d-flex align-items-center" href="/">Főoldal</Breadcrumb.Item>
                                <Breadcrumb.Item className="d-flex align-items-center" active>Galéria</Breadcrumb.Item>
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

                                    <img
                                        src={`${item.mainimage}?w=164&h=164&fit=crop&auto=format`}
                                        onClick={() => handleShow(item)}
                                        alt={item.title}
                                        loading="lazy"
                                        // style={{ minWidth: '200px', minHeight: '200px', maxWidth: '300px', maxHeight: '200px', cursor: 'pointer' }}
                                        style={{ width: '300px', height: '300px',objectFit: 'cover', cursor: 'pointer' }}
                                        className="img-fluid rounded keep2"
                                    />

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
    <img
        src={`${item.mainimage}?w=164&h=164&fit=crop&auto=format`}
        alt={item.title}
        loading="lazy"
        style={{ width: '100%', height: '100%',objectFit: 'cover', cursor: 'pointer' }}
        className="img-fluid rounded keep2"
    />
</div>

                                    </div>
                                ))}
                            </Container>
                        </Container>
                    </div>
                    <Modal show={show} onHide={handleClose} backdrop="static"
                        keyboard={false}
                        size="lg">
                        <Modal.Header closeButton>
                            <Modal.Title className="d-flex justify-content-center ps-5">{actualData.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="d-flex flex-wrap justify-content-center">

                            <Carousel
                                images={actualData.images && Object.keys(actualData.images).map((key) => ({ src: actualData.images[key] }))}
                                startIndex={0} // Kezdeti kép index
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