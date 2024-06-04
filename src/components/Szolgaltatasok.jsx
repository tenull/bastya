import { Container } from "react-bootstrap";
import { Breadcrumb } from "react-bootstrap";
const Szolgaltatasok = () => {
    return ( 

        <div className="szolg-main">
            <div className="szolg-header" style={{backgroundImage:'url(../virag.jpg)',width:'100%',height:'300px',backgroundPosition:'center',backgroundSize:'cover'}}>
                <Container> 
                <div  className="d-flex justify-content-center">
                    <h1 className="display-4 textshadow pt-5 text-white">Szolgáltatások
                    </h1> 
</div>
                
                 </Container>
              
            </div>
            <div className="form-content">
                <Breadcrumb className="container">
                    <div className="bread d-flex flex-wrap">
                    <div className="one">
                        <p className="fs-5 fw-bold m-0 d-none d-md-block  text-black">Szolgáltatások</p>
                    </div>
                    <div className="sec d-flex alig-items-center header-text">
                        <Breadcrumb.Item className="" href="/">Főoldal</Breadcrumb.Item>
                        <Breadcrumb.Item className="" active>Szolgáltatások</Breadcrumb.Item>
                    </div>
                    </div>
                </Breadcrumb>

            </div>
            <div className="szolg-content container">
                
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, velit. Tenetur, molestiae nisi voluptatibus ratione nobis impedit, illum reprehenderit alias expedita dolorum delectus porro fuga nam excepturi odit! Quo, distinctio!
                Dolorum, tempore perferendis. Error natus reprehenderit corrupti ullam, sequi, earum dicta, pariatur minima totam veritatis nemo dignissimos. Tempora, sed obcaecati itaque repellat, veniam quasi repudiandae quidem, cumque pariatur ex aspernatur.
                In ipsam, aliquam iure aspernatur beatae, perspiciatis natus illum nobis veniam sunt enim. Dolorem tempora ipsum neque, sed sunt eaque doloribus deserunt rem mollitia modi soluta nulla. Recusandae, in voluptas!
                Pariatur corporis, at vitae corrupti reiciendis commodi. Qui dolor placeat culpa recusandae, molestias sint nisi quod assumenda officiis, animi expedita nihil natus, ratione beatae consequatur voluptates reiciendis ea nostrum cumque!
                Est, commodi error adipisci earum alias placeat atque, id rerum similique sit sapiente minus asperiores ipsa culpa! Error veniam, autem enim soluta laborum necessitatibus debitis unde. Ullam, harum. Laboriosam, cupiditate!
            </div>
        </div>

     );
}
 
export default Szolgaltatasok;