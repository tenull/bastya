import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';

const Footer = () => {

    const apiUrl = 'https://reftiszanagyfalu.hu/wp-json/';

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Az adatok feldolgozása
      console.log('API válasz:', data);
  
      // Itt tudod kezelni az adatokat és megjeleníteni az oldalon
      // Például:
      // document.getElementById('myElement').innerText = data.someValue;
    })
    .catch(error => console.error('Hiba történt:', error));

    return (
        <div className="footer">
            <div className="footercontent">
            <div className="footer-main container d-flex flex-wrap">
                <div className="footer-left d-flex flex-column col-lg-4">
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
                    <div className="">
                        <p className='fs-6 fw-bold text-center'>" Az igazak segítséget kapnak az Úrtól, <br /> erőt a szükség idején." <br />  (Zsoltárok 37:39)</p>
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