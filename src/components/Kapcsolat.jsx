import { Container, Row, Col } from "react-bootstrap";
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
const Kapcsolat = () => {

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
        <div className="kapcs-main">
            <div className="kapcs-header">
                <h1>kapcsolat</h1>
            </div>
            <div className="contactus-container">
                <Container>
                    <Row>
                        <Col>
                            <div
                                className="row g-3"
                                data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom"
                            >
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
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col>
                            <div
                                className="row g-3"
                                data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom"
                            >
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
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="col-lg-8">
           <Container>
            <Row>
            <textarea
              type="text"
              className="form-control border-bottom rounded-0 p-0 text-white pb-3 mt-2 "
              rows={3}
              placeholder="Üzenet"
              aria-label="Message"
  
            />
              </Row>
            </Container>
            <Container>
                <button>Küldés</button>
            </Container>
          </div>
            </div>
        </div>
    );
}

export default Kapcsolat;