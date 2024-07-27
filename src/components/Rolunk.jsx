import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Rolunk = () => {
  return (
    <div className="about-us">
      <div
        className="about-header"
        style={{
          backgroundImage: 'url(../falevel.jpg)',
          width: '100%',
          height: '300px',
          backgroundPosition: '35% 50%',
          backgroundSize: 'cover',
        }}
      >
        <Container className='pt-4'>
          <div className="d-flex justify-content-center">
            <h1 className="display-4 textshadow pt-5 text-white">Rólunk</h1>
          </div>
        </Container>
      </div>
      <div className="about-main ">
        <div className="form-content" style={{maxHeight:'36px'}}>
          <Breadcrumb className="container mb-0 pb-0">
            <div className="bread d-flex flex-wrap">
              
              <div className="sec d-flex alig-items-center header-text">
                <Breadcrumb.Item className="" href="/">
                <Link to='/'> Főoldal</Link> 
                </Breadcrumb.Item>
                <Breadcrumb.Item className="" active>
                  Rólunk
                </Breadcrumb.Item>
              </div>
            </div>
          </Breadcrumb>
        </div>
        <div className="mainabout-container mt-3 container">
          <div className="main-about  ">
            <img
              className="img-fluid  m-2 rounded"
              style={{ maxWidth: '200px' , float:'left'}}
              src="../kep2.jpg"
              alt=""
            />
            <p className="">
              {' '}
              A település neve a méretére utal. A XIII. század közepén a
              szabolcsi várispánság birtoka, de a tatárjáráskor elpusztul. Az
              1332. évi pápai tizedjegyzékben mint templomos hely szerepel,
              erről azonban nem történik említés. 1459-ben Egyházasnagyfalu
              néven említik. 1556-ban mintegy 350 lakosa lehetett. Ez idő tájt
              érhette el a reformáció, melynek népe birtokába vette a középkori
              templomot. Ez a templom a későbbiek során rommá lett, 1699. évi
              templomösszeírásban sem szerepel, és egy régi feljegyzés szerint
              “az Erdő alatt a két Morotva között a régi templom fundámentumából
              kiásott- mintegy 14 öl kő, melyek között találtatott a Cathedra
              alatt lévő faragott kő is.” Az újkori egyház megalakulásának
              dátuma 1670, de még több, mint 100 évig semmit nem tudunk az
              egyház történetéről. Az 1779. évi visitatio szerint a faluban
              templom nincs, csak egy ima- és iskolaterem sárból és vesszőből,
              valmint harangláb. <br />
            </p>
          </div>
          <div className="middle-about ">
            <p className="">
              1788. június 3-án tette le a templomépítő főkurátor, Bónis László
              férfi és női atyafiainak jelenlétében az új templom alapkövét a
              délkeleti oldal alá. Tervét készítette Szabolcs vármegye hites
              ingenierje, Sézty András. A templom 1789 szeptemberére lett
              készen. Felhasználtak hozzá, “114 öl terméskövet, 141 ezer téglát,
              24 400 fa zsindelyt, 42 ezer zsindelyszeget, 12 ezer leczet tölgy
              és fenyő fákból, 374 hordó meszet, 1256 font vasat és
              rostélyokat.” A templom építéséhez tolcsvai Bónis Ferenc jelentős
              adománnyal járult. A templomot 1856-ban, 1876-ban és különösen az
              1888. évi nagy árvíz után-mely az egész falut romba döntötte-
              állították helyre, legközelebb 1924-ben és az 1980-as években. Nem
              tudjuk, mikor állítottak először haranglábat, de amint már szó
              volt róla, 1779 óta van, korábban a templomkert utcai kapujánál,
              most pedig a templom délkeleti sarka előtt. A 132 kg-os harangját
              Szlezák László öntötte 1935-ben Budapesten, a 90 kg-osat pedig
              Korrents Márk 1853-ban Egerben.
            </p>
            <img
              className="img-fluid  m-2 rounded"
              style={{ maxWidth: '200px', float:'right' }}
              src="../kep2.jpg"
              alt=""
            />
          </div>
          A kelet – nyugati tengelyű templom
              keleti homlokzata torony nélküli, háromszögű oromzattal záródik.
              Egyetlen bejárata ennek közepén nyílik, egyenes záródású,
              kőkeretes, záróköves kapu. Fölötte a tolcsvai Bónis család címerét
              látjuk. Az egyszerű, dísz nélküli templomon, a hosszú oldalakon
              két-két , a nyugati félköríves záródású végfalán egy kilépő
              pilléreken nyugszik, amelyek minden irányban egymással
              összekötöttek. Az íves fal mezőkben vannak az ablakok. A szószék
              és vele szemben a faragott támlás szék késő barokk stílusban
              készült a templomépítés idején.A 275 ülőhelyes késő barokk stílusú
              templom műemlék jellegű. Orgonáját Demény Imre építette 1938-ban
              három változattal. <br />
          Fényes Elek szerint 583 református és 328 más, az 1911-13. évi
          névtárak szerint 614 református és 1145 más vallású lakója volt. A
          temetőben nyugszik Héczei Szabó Lajos, ki 20 évig volt lelkésze, és
          Nagy Sándor, élt 81 évet. Forrás: Váradi József: Tiszántúl Református
          Templomai
        </div>
      </div>
    </div>
  );
};

export default Rolunk;
