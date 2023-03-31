// import logo from './logo.svg';
import "./App.css";
import Navbar from "./utilities/Navbar";
import Profile from "./utilities/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Map from "./utilities/Map";
import { Row, Col } from "react-bootstrap";
import ProfileCard from "./utilities/ProfileCards";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/Home" element={<Map />} />
          <Route path="/ProfilePage" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
