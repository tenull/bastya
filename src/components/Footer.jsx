import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';

const Footer = () => {
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
                    <a href="https://www.facebook.com/profile.php?id=100075319150836"><FacebookIcon style={{ textDecoration: 'none', color: '#C6AD8F' }} className='fs-1' /></a>
                    <InstagramIcon className='fs-1 ms-4' />
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
                <div className='container pt-4 pb-3'>
                    <p className='fs-6'>Tiszalöki Bástya idősotthon © 2023 Minden jog fenntartva</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;