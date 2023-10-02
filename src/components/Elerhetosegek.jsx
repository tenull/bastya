import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Elerhetosegek = () => {
    return ( 

        <div className="elerhetosegek">
            <div className="otthonunk">
                <div className="icon">
                <LocationOnIcon fontSize='large'/>
                </div>
                <div>
                <h2>Otthonunk</h2>
                <p>4450,Tiszalök, Hősök tere 7/a</p>
                </div>
            </div>
            <div className="telefonszam">
                <div className="icon">
            <PhoneIcon fontSize='large'/>
            </div>
                <h2>Telefonszám</h2>
                <p>Szolgálati telefonszám</p>
                <p>+36-30-162-8381</p>
            </div>
            <div className="ugyfelfogadas">
                <div className="icon">
                <AccessTimeIcon fontSize='large'/>
                </div>
                <h2>Ügyfélfogadás</h2>
                <p>Hétfőtől-Csütörtökig 8-16</p>
                <p>Péntek 8-13:30</p>
            </div>
        </div>

     );
}
 
export default Elerhetosegek;