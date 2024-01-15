import logo from './logo.svg';
import Navbar from './components/Nav/Navbar';
import { BrowserRouter as Router, Route, Routes,Switch } from 'react-router-dom';
import Rolunk from './components/Rolunk';
import RightNav from './components/Nav/RightNav';
import Elerhetosegek from './components/Elerhetosegek';
import Szolgaltatasok from './components/Szolgaltatasok';
import Galeria from './components/Galeria';
import Form from './components/Form';
import Kapcsolat from './components/Kapcsolat';
import Footer from './components/Footer';
import Mainpage from './components/Mainpage';
import Imagelist from './components/Imagelist';
import Egeszsegugyi from './components/Egeszsegugyi';
import Gondozasi from './components/Gondozasi';

function App() {
  return (
    <Router>
 <Navbar/>
    <div className="App">
   
      <Routes>
      <Route path="/" element={<Mainpage/>} ></Route>
      <Route path="/rolunk"element={<Rolunk/>} > </Route>
      <Route path="/szolgaltatasok"element={<Szolgaltatasok/>} > </Route>
      <Route path="/gondozasi"element={<Egeszsegugyi/>} > </Route>
      <Route path="/egeszsegugyi"element={<Gondozasi/>} > </Route>
      <Route path="/galeria"element={<Galeria/>} > </Route>
      <Route path="/galeria/:id"element={<Imagelist/>} > </Route>
      <Route path="/form"element={<Form/>} > </Route>
      <Route path="/kapcsolat"element={<Kapcsolat/>} > </Route>
            
      </Routes>
      <Elerhetosegek/>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
