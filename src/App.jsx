import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import './App.css'
import './Style.css'
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home/Home";
import Investigacion from "./components/Investigaciones/Investigacion";
import Interaccion from "./components/Interaccion/Interaccion";
import Caso from "./components/Casos/Caso";

import ScrollToTop from "./components/ScrollToTop";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {

  return (
    <>
      <Router>
        <div className="App">
          <NavBar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/investigacion" element={<Investigacion />} />
            <Route path="/interaccion" element={<Interaccion />} />
            <Route path="/Caso" element={<Caso />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
