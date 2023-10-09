import { Container } from "react-bootstrap";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const Form = () => {
    const downLoad = '../../Nagy-Tamás-Róbert-CV (1).pdf'
    return (

        <div className="form-main">
            <div className="form-header" style={{ backgroundImage: 'url(../virag3.jpg)', width: '100%', height: '400px', backgroundPosition: 'bottom', backgroundSize: 'cover' }}>
                <Container>
                    <div  className="d-flex justify-content-center">
                    <h1 className="display-4 textshadow pt-5 text-white">Formanyomtatványok
                    </h1> 
</div>
                    </Container>
            </div>
            <div className="form-content">
                <Breadcrumb className="container">
                    <div className="bread">
                    <div className="one">
                        <p className="fs-5 fw-bold m-0 pt-2">Formanyomtatványok</p>
                    </div>
                    <div className="sec d-flex alig-items-center header-text">
                        <Breadcrumb.Item className="d-flex align-items-center" href="/">Főoldal</Breadcrumb.Item>
                        <Breadcrumb.Item className="d-flex align-items-center" active>Formanyomtatványok</Breadcrumb.Item>
                    </div>
                    </div>
                </Breadcrumb>
            </div>
            <div className="container mt-5 mb-5 form-container">
            Letölthető formanyomtványok
            <a href={downLoad} target="_blank"><PictureAsPdfIcon></PictureAsPdfIcon></a>
            
        </div>
        </div>

    );
}

export default Form;