import { Container } from "react-bootstrap";

const Form = () => {
    return ( 

        <div className="form-main">
            <div className="form-header" style={{backgroundImage:'url(../virag3.jpg)',width:'100%',height:'400px',backgroundPosition:'bottom',backgroundSize:'cover'}}>
            <Container> <h1 className="display-2 textshadow pt-5 text-white">Formanyomtatványok</h1> </Container>
            </div>
            <div className="container form-content">
                <h1>Formanyomtatványok</h1>
            </div>
        </div>

     );
}
 
export default Form;