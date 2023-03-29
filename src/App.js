import logo from './logo.svg';
import './App.css';
import Navbar from './utilities/Navbar'
import Map from './utilities/Map'
import {
  Row,
  Col
} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container" >
        <Map />
      </div>
    </div>
  );
}

export default App;
