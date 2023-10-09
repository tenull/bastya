import { Container, Row, Col } from "react-bootstrap";
import React, { useRef, useState } from 'react';
import { GoogleMap, useLoadScript, Marker, useJsApiLoader } from '@react-google-maps/api';
import emailjs from 'emailjs-com';
import { useScrollTrigger } from "@mui/material";
import { Breadcrumb } from "react-bootstrap";


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
                    <p className="fs-5 mb-0 mt-5">Bástya Idősotthon</p>
                    <p className="fs-6 mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                    </svg>Tiszalök,4450 Hősök tere 8.</p>
                    <p className="fs-6 mb-0">Telefon: +36 30 3333 444</p>
                    <p className="fs-6">E-mail: asdas@asdasd.com</p>

                </div>
                <div className="kapcs-content">
                    <div className="elso">
                        <p className="m-0">Intézmény vezető</p>
                        <p>Kiss-Csáki Beatrix</p>
                    </div>
                    <div className="masodik">
                        <p className="m-0">Intézmény vezetőhelyettes</p>
                        <p>Pallay Zsófia</p>
                    </div>
                    <div className="harmadik">
                        <p className="m-0">Intézmény ápoló</p>
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