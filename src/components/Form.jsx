import { Container } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import DownloadIcon from '@mui/icons-material/Download';

const Form = () => {
  const downLoad = '../../Kérelem.pdf';
  const downLoad2 = '../../EGÉSZSÉGI_ÁLLAPOTRA_VONATKOZÓ_IGAZOLÁS.pdf';
  const downLoad3 = '../../Értékelő_adatlap.pdf';
  const downLoad4 = '../../Megállapodás.docx';
  return (
    <div className="form-main">
      <div
        className="form-header"
        style={{
          backgroundImage: 'url(../virag3.jpg)',
          width: '100%',
          height: '300px',
          backgroundPosition: '50% 73%',
          backgroundSize: 'cover',
        }}
      >
        <Container>
          <div className="d-flex justify-content-center">
            <h1 className="display-4 textshadow pt-5 text-white">
              Formanyomtatványok
            </h1>
          </div>
        </Container>
      </div>
      <div className="form-content">
        <Breadcrumb className="container">
          <div className="bread d-flex flex-wrap">
            <div className="one">
              <p className="fs-5 fw-bold m-0 d-none d-md-block  text-black">Formanyomtatványok</p>
            </div>
            <div className="sec d-flex alig-items-center header-text">
              <Breadcrumb.Item className="d-flex align-items-center" href="/">
                Főoldal
              </Breadcrumb.Item>
              <Breadcrumb.Item className="d-flex align-items-center" active>
                Formanyomtatványok
              </Breadcrumb.Item>
            </div>
          </div>
        </Breadcrumb>
      </div>
      <div className="container form-cont mt-5 mb-5 pb-5 form-container d-flex flex-wrap border-bottom">
        <div className="col-lg-6">
          <p className="fs-5 fw-bold"> Kérelem</p>
          <p className="fs-6">
            {' '}
            az idősek otthona, mint a személyes gondozást nyújtó szociális
            ellátás igénybevételéhez
          </p>
        </div>
        <div className="col-lg-6 d-flex justify-content-center align-items-center ">
          {' '}
          <a href={downLoad} target="_blank" rel="noreferrer">
            <DownloadIcon style={{ fontSize: '40px', color: 'black' }} />
          </a>
        </div>
      </div>
      <div className="container form-cont mt-5 mb-5 pb-5 form-container d-flex flex-wrap border-bottom">
        <div className="col-lg-6">
          <p className="fs-5 fw-bold"> Egészségi állapotra vonatkozó igazolás</p>
          <p className="fs-6">
            (a háziorvos, kezelőorvos, vagy kórházi kezelés esetén a kórházi
            osztályos orvos tölti ki)
          </p>
        </div>
        <div className="col-lg-6 form-cont d-flex justify-content-center align-items-center">
          {' '}
          <a href={downLoad2} target="_blank" rel="noreferrer">
            <DownloadIcon style={{ fontSize: '40px', color: 'black' }} />
          </a>
        </div>
      </div>
      <div className="container form-cont mt-5 mb-5 pb-5 form-container d-flex flex-wrap border-bottom">
        <div className="col-lg-6">
          <p className="fs-5 fw-bold"> Értékelő adatlap</p>
        </div>
        <div className="col-lg-6 d-flex justify-content-center align-items-center">
          {' '}
          <a href={downLoad3} target="_blank" rel="noreferrer">
            <DownloadIcon style={{ fontSize: '40px', color: 'black' }} />
          </a>
        </div>
      </div>
      <div className="container form-cont mt-5 mb-5  form-container d-flex flex-wrap ">
        <div className="col-lg-6">
          <p className="fs-5 fw-bold"> Megállapodás</p>
          <p className="fs-6">
            A Magyarországi Református Egyház missziójának egyik alapvető
            lényegi eleme a szenvedő embertárs segítése, melynek eszköze a
            szeretetszolgálat. Ennek jegyében fő feladatunknak tartjuk a
            rászoruló ember humanitárius segítését, ellátását. Az alábbi
            megállapodás ebben a szellemben kerül megkötésre.
          </p>
        </div>
        <div className="col-lg-6 d-flex justify-content-center align-items-center">
          {' '}
          <a href={downLoad4} target="_blank" rel="noreferrer">
            <DownloadIcon style={{ fontSize: '40px', color: 'black' }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Form;
