import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from '@mui/icons-material';

const Footer = () => {
    return ( 

        <div className="footer-main">
            <div className="footer-left">
                <p>asdfsdafsdfsafsda</p>
            </div>
            <div className="footer-center">
                <p>hasznos linkek</p>
            </div>
            <div className="footer-right">
                <div className="footer-right-header">
                <p>Elérhetőségek</p>
                </div>
                <div className="footer-right-content">
                <a href="https://www.facebook.com/profile.php?id=100075319150836"><FacebookIcon /></a>
                <InstagramIcon/>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;