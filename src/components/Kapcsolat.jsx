import { Container, Row, Col } from "react-bootstrap";
import React, { useRef, useState } from 'react';
import { GoogleMap, useLoadScript, Marker, useJsApiLoader } from '@react-google-maps/api';
import emailjs from 'emailjs-com';
import { useScrollTrigger } from "@mui/material";



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

        <div className="container kapcs-main p-5">
            <div className="kapcs-header">
                <h1 className="display-3 ">Kapcsolat</h1>
            </div>
            <div className="kapcs-header-bottom">
                <p className="fs-5 mb-0 mt-5">Tiszalöki Bástya Idősotthon</p>
                <p className="fs-6 mb-0">Tiszalök,4450 Hősök tere 8.</p>
                <p className="fs-6 mb-0">Telefon: +36 30 3333 444</p>
                <p className="fs-6">E-mail: asdas@asdasd.com</p>

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
    );
}

export default Kapcsolat;