import { imageData } from "../imageData";
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Galeria = () => {
    const [image, setImage] = useState([])
    const [show, setShow] = useState(false);
    const [actualData, setActualData] = useState({});
    const handleClose = () => setShow(false);
    const handleShow = (item) =>{ setActualData(item); setShow(true);}

  
    // useEffect(()=>{
    //     imageData(``).then((res)=>{
    //         setImage(res.images)
    //         console.log(res.images)
    //     })
    // })

    return (
        <div className="galeria-main">
            <div className="galeria-header">
                <h1>Galéria</h1>
            </div>
            <div className="galeria-content">
                <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164} >
                    {imageData.map((item) => (
                        <ImageListItem key={item.title}>
                            <p>{item.date}</p>
                            <img
                                src={`${item.mainimage}?w=164&h=164&fit=crop&auto=format`}
                                onClick={() => handleShow(item)}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>

                <Modal show={show} onHide={handleClose}   backdrop="static"
  keyboard={false}
  size="lg">
  <Modal.Header closeButton>
    <Modal.Title>{actualData.date}</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    
            {actualData.images && Object.keys(actualData.images).map((key) => (
              <img className="img-fluid" style={{maxWidth:'250px',maxHeight:'250px'}} key={key} src={actualData.images[key]} />
            ))}
          </Modal.Body>
 
</Modal>

            </div>
        </div>
    );
}

export default Galeria;