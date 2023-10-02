import { imageData } from "../imageData";
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Container } from "react-bootstrap";

const Galeria = () => {
    const [image, setImage] = useState([])
    const [show, setShow] = useState(false);
    const [actualData, setActualData] = useState({});
    const handleClose = () => setShow(false);
    const handleShow = (item) => { setActualData(item); setShow(true); }


    // useEffect(()=>{
    //     imageData(``).then((res)=>{
    //         setImage(res.images)
    //         console.log(res.images)
    //     })
    // })

    return (
        <div className="galeriatop">
             <div className="galeria-header" style={{backgroundImage:'url(../virag2.jpg)',width:'100%',height:'300px',backgroundPosition:'center'}}>
                   
                </div>
            <div className="container galeria-main">
            <h1 className="display-2">Galéria</h1>
                <div className="galeria-content">
                  <Container className="d-flex justify-content-center flex-wrap">
                        {imageData.map((item) => (
                            <div className="col-lg-4 d-flex flex-column align-items-center" key={item.title}>
                                <p className="fs-5 text-center m-0">{item.date}</p>
                                <img
                                    src={`${item.mainimage}?w=164&h=164&fit=crop&auto=format`}
                                    onClick={() => handleShow(item)}
                                    alt={item.title}
                                    loading="lazy"
                                    style={{minWidth:'200px', minHeight:'200px',maxWidth:'300px',maxHeight:'300px'}}
                                    className="img-fluid"
                                />
                            </div>
                        ))}
                   </Container>

                    <Modal show={show} onHide={handleClose} backdrop="static"
                        keyboard={false}
                        size="lg">
                        <Modal.Header closeButton>
                            <Modal.Title>{actualData.date}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                            {actualData.images && Object.keys(actualData.images).map((key) => (
                                <img className="img-fluid" style={{ maxWidth: '250px', maxHeight: '250px', cursor: 'pointer'  }} key={key} src={actualData.images[key]}  onClick={() => window.open(actualData.images[key], '_blank')} />
                            ))}
                        </Modal.Body>

                    </Modal>

                </div>
            </div>
            </div>
    );
}

export default Galeria;