import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';
import React, { useRef, useState } from 'react';
import { GoogleMap, useLoadScript, Marker, useJsApiLoader } from '@react-google-maps/api';
const Footer = () => {

    const mapContainerStyle  = {
        width: '450px',
        height: '350px'
    };
    const mapContainerStyleMobile = {
        width: '200px',
        height: '200px',
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



    return (
        <div className="footer">
            <div className="footercontent">
            <div className="footer-main container d-flex flex-wrap">
                <div className="footer-left d-flex flex-column col-lg-3">
                <Link to="/rolunk" style={{ }}>Rólunk</Link>
                <Link to="/szolgaltatasok" style={{ }}> Szolgáltatások</Link>
                <Link to="/galeria" style={{ }}>Galéria</Link>
                <Link to="/form" style={{ }}>Formanyomtatványok</Link>
                <Link to="/kapcsolat" style={{ }}>Kapcsolat</Link>
                </div>
                <div className="footer-center d-flex justify-content-center col-lg-4">
                    <a href="https://www.facebook.com/bastyaidosotthon" target='blank'><FacebookIcon style={{ textDecoration: 'none', color: 'white' }} className='fs-1' /></a>
                   <a href="https://www.youtube.com/watch?v=2ixYV8p_GT4&ab_channel=Tiszavasv%C3%A1riTV" target='blank'><YouTubeIcon style={{ textDecoration: 'none', color: 'white' }} className='fs-1 ms-4' /></a> 
                </div>
                <div className="footer-right position-relative col-lg-4">
                    <div className="footer-map">
                    {isLoaded ? (
                    <GoogleMap
                    mapContainerStyle={window.innerWidth <= 768 ? mapContainerStyleMobile : mapContainerStyle}
                        center={center}
                        zoom={18}
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                       
                    >

                        <></>
                    </GoogleMap>
                ) : null}
                <p>4450,Tiszalök, Hősök tere 7/a</p>
                    </div>
                    {/* <div className="footer-right-header">
                <p>Elérhetőségek</p>
                </div>
                <div className="footer-right-content">
                <a href="https://www.facebook.com/profile.php?id=100075319150836"><FacebookIcon /></a>
                <InstagramIcon/>
                </div> */}
                </div>
</div>
            </div>
            <div className='bottom-footer'>
                <div className='container pt-4 pb-1'>
                    <p className='fs-6'>Tiszalöki Bástya idősotthon © 2023 Minden jog fenntartva</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;