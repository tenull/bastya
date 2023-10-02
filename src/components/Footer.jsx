import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from '@mui/icons-material';

const Footer = () => {
    return ( 
        <div className="footer">
        <div className="footer-main">
            <div className="footer-left">
                <p>Rólunk</p>
                <p>Szolgáltatások</p>
                <p>Galéria</p>
                <p>Formanyomtatványok</p>
                <p>Kapcsolat</p>
            </div>
            <div className="footer-center">
            <a href="https://www.facebook.com/profile.php?id=100075319150836"><FacebookIcon style={{textDecoration:'none',color:'#C6AD8F'}} className='fs-1' /></a>
                <InstagramIcon className='fs-1 ms-4'/>
            </div>
            <div className="footer-right position-relative">
            <div className="">
        <p className='fs-6 fw-bold text-center d-none d-lg-block'>" Az igazak segítséget kapnak az Úrtól, <br/> erőt a szükség idején." <br />  (Zsoltárok 37:39)</p>
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
        <div className='container'>Tiszalöki Bástya idősotthon.  Minden jog fenntartva</div>
        </div>
     );
}
 
export default Footer;