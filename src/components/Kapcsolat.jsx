import { Container, Row } from 'react-bootstrap';
import React, { useRef, useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Breadcrumb } from 'react-bootstrap';
import Phone from '@mui/icons-material/Phone';
import { Mail } from '@mui/icons-material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Kapcsolat = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitFailed, setSubmitFailed] = useState(false);
  const [submitSuccessful, setSubmitSuccessful] = useState(false);

  const [firstNameIsInvalid, setFirstNameIsInvalid] = useState(false);
  const [lastNameIsInvalid, setLastNameIsInvalid] = useState(false);
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);
  const [phoneIsInvalid, setPhoneIsInvalid] = useState(false);
  const [messageIsInvalid, setMessageIsInvalid] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);
  const [error, setError] = useState('');
  const emailRegex = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  const isValid = () => {
    if (firstName.length < 2) {
      setFirstNameIsInvalid(true);
    } else {
      setFirstNameIsInvalid(false);
    }
    if (lastName.length < 2) {
      setLastNameIsInvalid(true);
    } else {
      setLastNameIsInvalid(false);
    }
    if (phone.length < 6) {
      setPhoneIsInvalid(true);
    } else {
      setPhoneIsInvalid(false);
    }

    if (!emailRegex.test(email)) {
      setEmailIsInvalid(true);
    } else {
      setEmailIsInvalid(false);
    }
    if (message.length < 2 || message.length > 100) {
      setMessageIsInvalid(true);
    } else {
      setMessageIsInvalid(false);
    }
    if (
      firstName.length > 1 &&
      lastName.length > 1 &&
      emailRegex.test(email) &&
      message.length < 101
    ) {
      return true;
    }
    return false;
  };

  const handeSubmit = async (e) => {
    if (isValid()) {
      e.preventDefault();
      const serviceId = 'service_ew9u6jk';
      const templateId = 'template_8ittt7h';
      const publicKey = 'i0azR18OoPweD9NWR';

      const data = {
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          from_lastname: lastName,
          from_firstname: firstName,
          from_email: email,
          from_phone: phone,
          to_name: 'Bástya Idősotthon',
          message: message,
        },
      };
      try {
        const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        console.log(res.data);
        setFirstName('');
        setLastName('');
        setPhone('');
        setEmail('');
        setMessage('');
        setFirstNameIsInvalid(false);
        setLastNameIsInvalid(false);
        setEmailIsInvalid(false);
        setMessageIsInvalid(false);
        setIsAccepted(false);
        setSubmitSuccessful(true);
        setSubmitFailed(false);
      } catch (error) {
        console.error(error);
      }
    } else {
      setSubmitFailed(true);
    }
  };

  const mapContainerStyle = {
    width: '90%',
    height: '700px',
  };
  const mapContainerStyleMobile = {
    width: '200px',
    height: '200px',
  };

  const center = {
    lat: 48.02184,
    lng: 21.38115,
  };

  const [map, setMap] = React.useState(null);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyB8ZVOSmtLY1o_dL6GAwku8uIT1JrzshuA',
  });

  const onLoad = React.useCallback(function callback(map) {
    
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const apiKey = '2c7e66d9c164416cbd9771519b1c4f00';
  const apiURL =
    'https://emailvalidation.abstractapi.com/v1/?api_key=' + apiKey;
  const sendEmailValidationRequest = async (email) => {
    try {
      const response = await fetch(apiURL + '&email=' + email);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      throw error;
    }
  };
  const EmailContactForm = () => {
    const form = useRef();
    const [emailError, setEmailError] = useState('');

    const validateEmail = (email) => {
      if (email === '') {
        setEmailError('Az e-mail mező kitöltése kötelező.');
        return false;
      } else {
        setEmailError('');
        sendEmailValidationRequest(email);
        return true;
      }
    };
  };

  return (
    <div className="kapcs-container">
      <div
        className="about-header"
        style={{
          backgroundImage: 'url(../virag.jpg)',
          width: '100%',
          height: '300px',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <Container>
          <div className="d-flex justify-content-center">
            <h1 className="display-4 textshadow pt-5 text-white">Kapcsolat</h1>
          </div>
        </Container>
      </div>
      <div className="form-content">
        <Breadcrumb className="container">
          <div className="bread d-flex flex-wrap">
            <div className="one">
              <p className="fs-5 fw-bold m-0 d-none d-md-block  text-black">Kapcsolat</p>
            </div>
            <div className="sec d-flex alig-items-center header-text">
              <Breadcrumb.Item className="d-flex align-items-center" href="/">
                Főoldal
              </Breadcrumb.Item>
              <Breadcrumb.Item className="d-flex align-items-center" active>
                Kapcsolat
              </Breadcrumb.Item>
            </div>
          </div>
        </Breadcrumb>
      </div>
      <div className="container kapcs-main p-5 mt-5">
        <div className="kapcs-header">
          <h1 className="display-3 ">Kapcsolat</h1>
        </div>
        <div className="kapcs-header-bottom">
          <p>
            Otthonaink szolgáltatásai, illetve elhelyezési lehetőségek kapcsán
            felmerülő kérdéseire szívesen válaszolunk! +36 30 162 8381
          </p>
          <p className="fs-3 mb-3 mt-5">Bástya Idősotthon</p>
          <p className="fs-6 mb-1">
            {' '}
            <LocationOnIcon></LocationOnIcon> Tiszalök,4450 Hősök tere 7/a.
          </p>
          <p className="fs-6 mb-1">
            {' '}
            <Phone></Phone> +36 30 162 8381
          </p>
          <p className="fs-6">
            <Mail></Mail> bastyaidosotthon@gmail.com
          </p>
        </div>
        <div className="kapcs-conten mb-5 mt-5 d-flex flex-wrap justify-content-evenly">
          <div className="elso">
            <p className="fs-4 m-0">Intézményvezető</p>
            <p className='text-center'>Kiss-Csáki Beatrix</p>
          </div>
          <div className="masodik">
            <p className="fs-4 m-0">Intézményvezető-helyettes</p>
            <p className='text-center'>Pallay Zsófia</p>
          </div>
          <div className="harmadik">
            <p className="fs-4 m-0">Intézmény ápoló</p>
            <p className='text-center'>Koleszár Ferenc</p>
          </div>
        </div>
        {isLoaded ? (
          <div className="d-flex justify-content-center">
            <GoogleMap
              mapContainerStyle={
                window.innerWidth <= 768
                  ? mapContainerStyleMobile
                  : mapContainerStyle
              }
              center={center}
              zoom={17}
              onLoad={onLoad}
              onUnmount={onUnmount}
            >
              <></>
            </GoogleMap>
          </div>
        ) : null}
        <div className="contactus-container col-lg-12 pt-5 pb-5 ">
          <form onSubmit={handeSubmit}>
            <Container>
              <p className="text-center fs-4 mb-4">
                Amennyiben bármilyen kérdése van, vegye fel velünk a
                kapcsolatot!
              </p>
              <Row className="d-flex justify-content-center">
                {submitSuccessful ? (
                  <Row className="d-flex justify-content-center">
                    <div className="alert alert-success col-lg-6 d-flex justify-content-center ">
                      Az üzenetét elküldtük!
                    </div>
                  </Row>
                ) : (
                  error && (
                    <Row className="d-flex justify-content-center">
                      <div className="alert col-lg-6 alert-danger">
                        Az üzenetét nem tudtuk elküldeni!
                      </div>
                    </Row>
                  )
                )}

                <div className="col-lg-4">
                  {lastNameIsInvalid && (
                    <small style={{ color: 'red' }}>
                      *Legalább két karaktert
                    </small>
                  )}
                  <input
                    type="text"
                    className="form-control border-bottom rounded-0 p-0 text-white pb-3 pt-3"
                    placeholder="Vezetéknév*"
                    aria-label="Last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="col-lg-4">
                  {lastNameIsInvalid && (
                    <small style={{ color: 'red' }}>
                      *Legalább két karaktert
                    </small>
                  )}
                  <input
                    type="text"
                    className="form-control border-bottom rounded-0 p-0 text-white pb-3 pt-3"
                    placeholder="Keresztnév*"
                    aria-label="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
              </Row>
            </Container>
            <Container>
              <Row className="d-flex justify-content-center">
                <div className="col-lg-4">
                  {emailIsInvalid && (
                    <small style={{ color: 'red' }}>
                      *Rossz e-mail formátum
                    </small>
                  )}
                  <input
                    type="text"
                    className="form-control border-bottom rounded-0 p-0 text-white pb-3 pt-3"
                    placeholder="E-mail cím*"
                    aria-label="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="col-lg-4">
                  {phoneIsInvalid && (
                    <small style={{ color: 'red' }}>
                      *Minimum 6 maximum 20 szám
                    </small>
                  )}
                  <input
                    type="text"
                    className="form-control border-bottom rounded-0 p-0 text-white pb-3 pt-3"
                    placeholder="Telefonszám*"
                    aria-label="telephone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </Row>
            </Container>
            <Container className="d-flex justify-content-center">
              <div className="col-lg-8">
                {messageIsInvalid && (
                  <small style={{ color: 'red' }}>
                    *Legalább 2 maximum 100 karakter
                  </small>
                )}
                <textarea
                  type="text"
                  className="form-control border-bottom rounded-0 p-0 text-white pb-3 pt-3 mt-2 "
                  rows={10}
                  placeholder="Üzenet"
                  aria-label="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
            </Container>
            <Container className="d-flex justify-content-center mt-3">
              <button className="button-kapcs">Küldés</button>
            </Container>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Kapcsolat;
