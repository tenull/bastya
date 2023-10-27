import { Container, Row, Col } from "react-bootstrap";
import React, { useRef, useState } from 'react';
import { GoogleMap, useLoadScript, Marker, useJsApiLoader } from '@react-google-maps/api';
import emailjs from 'emailjs-com';
import { useScrollTrigger } from "@mui/material";
import { Breadcrumb } from "react-bootstrap";
import Phone from "@mui/icons-material/Phone";
import { Email, Mail } from "@mui/icons-material";
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Kapcsolat = () => {

    const containerStyle = {
        width: '100%',
        height: '700px'
    };

    const center = {
        lat: 48.02184,
        lng: 21.38115
    };

    const [map, setMap] = React.useState(null)
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyB8ZVOSmtLY1o_dL6GAwku8uIT1JrzshuA"
    })


    const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    const apiKey = '2c7e66d9c164416cbd9771519b1c4f00';
    const apiURL = 'https://emailvalidation.abstractapi.com/v1/?api_key=' + apiKey
    const sendEmailValidationRequest = async (email) => {
        try {
            const response = await fetch(apiURL + '&email=' + email);
            const data = await response.json();
            console.log(data);
        } catch (error) {
            throw error;
        }
    }
    const EmailContactForm = () => {
        const form = useRef();
        const [emailError, setEmailError] = useState("");

        const validateEmail = (email) => {
            if (email === "") {
                setEmailError("Az e-mail mező kitöltése kötelező.");
                return false;
            } else {
                setEmailError("");
                sendEmailValidationRequest(email);
                return true;
            }
        }
    }


    return (
        <div className="kapcs-container">

            <div className="about-header" style={{ backgroundImage: 'url(../virag.jpg)', width: '100%', height: '300px', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                <Container>
                <div   className="d-flex justify-content-center">
                    <h1 className="display-4 textshadow pt-5 text-white">Kapcsolat
                    </h1> 
</div>
                      </Container>
            </div>
            <div className="form-content">
                <Breadcrumb className="container">
                    <div className="bread">
                    <div className="one">
                        <p className="fs-5 fw-bold m-0 pt-2">Kapcsolat</p>
                    </div>
                    <div className="sec d-flex alig-items-center header-text">
                        <Breadcrumb.Item className="d-flex align-items-center" href="#">Főoldal</Breadcrumb.Item>
                        <Breadcrumb.Item className="d-flex align-items-center" active>Kapcsolat</Breadcrumb.Item>
                    </div>
                    </div>
                </Breadcrumb>

            </div>
            <div className="container kapcs-main p-5 mt-5">

                <div className="kapcs-header">
                    <h1 className="display-3 ">Kapcsolat</h1>
                </div>
                <div className="kapcs-header-bottom">
                    <p>Otthonaink szolgáltatásai, illetve elhelyezési lehetőségek kapcsán felmerülő kérdéseire szívesen válaszolunk!
                        +36 30 3333 444</p>
                    <p className="fs-3 mb-3 mt-5">Bástya Idősotthon</p>
                    <p className="fs-6 mb-1"> <LocationOnIcon></LocationOnIcon> Tiszalök,4450 Hősök tere 8.</p>
                    <p className="fs-6 mb-1"> <Phone></Phone> Telefon: +36 30 3333 444</p>
                    <p className="fs-6"><Mail></Mail> E-mail: asdas@asdasd.com</p>

                </div>
                <div className="kapcs-conten mb-5 mt-5 d-flex flex-wrap justify-content-evenly">
                    <div className="elso">
                        <p className="fs-4 m-0">Intézmény vezető</p>
                        <p>Kiss-Csáki Beatrix</p>
                    </div>
                    <div className="masodik">
                        <p className="fs-4 m-0">Intézmény vezetőhelyettes</p>
                        <p>Pallay Zsófia</p>
                    </div>
                    <div className="harmadik">
                        <p className="fs-4 m-0">Intézmény ápoló</p>
                        <p>G</p>
                    </div>
                </div>
                {isLoaded ? (
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={18}
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                
                    >

                        <></>
                    </GoogleMap>
                ) : null}
                <div className="contactus-container col-lg-12 p-5 ">
                    <Container>
                        <p className="text-center fs-4 mb-4">Amennyiben bármilyen kérdése van, vegye fel velünk a kapcsolatot!</p>
                        <Row className="d-flex justify-content-center">


                            <div className="col-lg-4">
                                <input
                                    type="text"
                                    className="form-control border-bottom rounded-0 p-0 text-white pb-3 "
                                    placeholder="Vezetéknév*"
                                    aria-label="Last name"
                                />
                            </div>
                            <div className="col-lg-4">
                                <input
                                    type="text"
                                    className="form-control border-bottom rounded-0 p-0 text-white pb-3"
                                    placeholder="Keresztnév*"
                                    aria-label="First name"
                                />
                            </div>

                        </Row>
                    </Container>
                    <Container>
                        
                        <Row className="d-flex justify-content-center">


                            <div className="col-lg-4">

                                <input
                                    type="text"
                                    className="form-control border-bottom rounded-0 p-0 text-white pb-3 "
                                    placeholder="E-mail cím*"
                                    aria-label="email"
                                />
                            </div>
                            <div className="col-lg-4">
                                <input
                                    type="text"
                                    className="form-control border-bottom rounded-0 p-0 text-white pb-3"
                                    placeholder="Telefonszám*"
                                    aria-label="telephone"
                                />
                            </div>


                        </Row>
                    </Container>
                    <Container className="d-flex justify-content-center">
                        <div className="col-lg-8">
                            <textarea
                                type="text"
                                className="form-control border-bottom rounded-0 p-0 text-white pb-3 mt-2 "
                                rows={3}
                                placeholder="Üzenet"
                                aria-label="Message"

                            />
                        </div>
                    </Container>
                    <Container className="d-flex justify-content-center mt-3">
                        <button className="button-kapcs">Küldés</button>
                    </Container>
                </div>
            </div>
        </div>
    );
}

export default Kapcsolat;