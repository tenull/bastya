import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Elerhetosegek = () => {
    return (

        <div className="elerhetosegek">
            <div className="elerhetosegek-container pb-3 container d-flex flex-wrap">
    
                    <div className="otthonunk col-lg-4 text-center" data-aos="zoom-out-up"
                    data-aos-delay="100"
                    data-aos-offset="0">
                        <div className="icon">
                            <LocationOnIcon fontSize='large' />
                        </div>
                        <div>
                            <h2 className='mb-3'>Otthonunk</h2>
                            <p>4450,Tiszalök, Hősök tere 7/a</p>
                        </div>
                 

                </div>
  

                    <div className="telefonszam col-lg-4 text-center" data-aos="zoom-out-up"
                    data-aos-delay="200"
                    data-aos-offset="0">
                        <div className="icon">
                            <PhoneIcon fontSize='large' />
                        </div>
                        <h2 className='mb-3'>Telefonszám</h2>
                        <p className='mb-0 pb-0'>Szolgálati telefonszám</p>
                        <p>+36-30-162-8381</p>
                    </div>
            

                <div className="ugyfelfogadas col-lg-4 text-center" data-aos="zoom-out-up"
                    data-aos-delay="300"
                    data-aos-offset="0">
                    <div className="icon">
                        <AccessTimeIcon fontSize='large' />
                    </div>
                    <h2 className='mb-3'>Ügyfélfogadás</h2>
                    <p className='mb-0'>Hétfőtől-Csütörtökig 9-15</p>
                    <p>Péntek 9-13:30</p>
                </div>
            </div>
        </div>

    );
}

export default Elerhetosegek;