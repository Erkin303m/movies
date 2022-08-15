import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Aboute from './pages/aboute';
import Home from './pages/home';
import Korzina from './pages/korzina';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboute' element={<Aboute />} />
        <Route path='/korzina' element={<Korzina />} />
      </Routes>
    </Router>
  );
}

export default App;
