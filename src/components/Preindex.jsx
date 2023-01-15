import { useNavigate } from 'react-router-dom';


const Preindex = () => {

    return ( 
        <>
        <div className="header">
        <h1> Bástya Református Szociális Szolgáltató Központ</h1>
      </div>
      <div className="main">
       
    <div className="container-circle">
        <div className="circle" >
            <a href="/nappali">
          <img src="./bastya1.jpg" alt=""  />
</a>
          </div>
          <p>Nappali Ház</p>
        </div>
        
        {/* <div className="bastya">
    <img src="./pngegg.png" alt="" />
    </div> */}
    <div className="container-circle">
        <div className="circle">
            <a href="/idosek">
          <img src="./bástya2.jpg" alt="" />
          </a>
          </div>
          <p>Idősek otthona</p>
        </div>
      </div>

      <div className="footer">
        <p>" Az igazak segítséget kapnak az Úrtól, <br/> erőt a szükség idején." <br />  (Zsoltárok 37:39)</p>
      </div>
</>
     );
}
 
export default Preindex;