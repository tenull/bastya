import './App.css';
import Nappali from './components/Nappali';
import { BrowserRouter as Router, Routes, 
  Route, Redirect,} from "react-router-dom";
import { Link } from 'react-router-dom';
import Preindex from './components/Preindex';
import Idosek from './components/Idosek';
import Rolunk from './components/Nappali/Rolunk';

function App() {
  return (

    <div className="App">
     <Routes>
      <Route path='/' element={<Preindex/>} />
      <Route path='/nappali' element={<Nappali/>} />
      <Route path='/idosek' element={<Idosek/>} />
      <Route path='/nappali/Rolunk' element={<Rolunk/>} />
     </Routes>
    </div>
  );
}

export default App;
