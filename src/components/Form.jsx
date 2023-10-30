import { Container } from "react-bootstrap";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const Form = () => {
    const downLoad = '../../Kérelem.pdf'
    const downLoad2 = '../../EGÉSZSÉGI_ÁLLAPOTRA_VONATKOZÓ_IGAZOLÁS.pdf'
    const downLoad3 = '../../Értékelő_adatlap.pdf'
    const downLoad4 = '../../Megállapodás.docx'
    return (

        <div className="form-main">
            <div className="form-header" style={{ backgroundImage: 'url(../virag3.jpg)', width: '100%', height: '400px', backgroundPosition: '50% 73%', backgroundSize: 'cover' }}>
                <Container>
                    <div className="d-flex justify-content-center">
                        <h1 className="display-4 textshadow pt-5 text-white">Formanyomtatványok
                        </h1>
                    </div>
                </Container>
            </div>
            <div className="form-content">
                <Breadcrumb className="container">
                    <div className="bread d-flex flex-wrap">
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
                Kérelem az idősek otthona, mint a személyes gondozást nyújtó szociális ellátás igénybevételéhez
                <a href={downLoad} target="_blank"><PictureAsPdfIcon></PictureAsPdfIcon></a>

            </div>
            <div className="container mt-5 mb-5 form-container">
           Egészségi állapotra vonatkozó igazolás
                <a href={downLoad2} target="_blank"><PictureAsPdfIcon></PictureAsPdfIcon></a>

            </div>
            <div className="container mt-5 mb-5 form-container">
            Értékelő adatlap
                <a href={downLoad3} target="_blank"><PictureAsPdfIcon></PictureAsPdfIcon></a>

            </div>
            <div className="container mt-5 mb-5 form-container">
                Megállapodás
                <p className="fs-6">A Magyarországi Református Egyház missziójának egyik alapvető lényegi eleme a szenvedő embertárs segítése, melynek eszköze a szeretetszolgálat. Ennek jegyében fő feladatunknak tartjuk a rászoruló ember humanitárius segítését, ellátását. Az alábbi megállapodás ebben a szellemben kerül megkötésre.</p>
                <a href={downLoad4} target="_blank"><PictureAsPdfIcon></PictureAsPdfIcon></a>

            </div>
        </div>

    );
}

export default Form;