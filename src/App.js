import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HotelesList from './pages/HotelesList';
import HotelDetail from './pages/HotelDetail';
import FestividadesList from './pages/FestividadesList';
import FestividadDetail from './pages/FestividadDetail';
import ToursList from './pages/ToursList';
import TourDetail from './pages/TourDetail';
import FamososList from './pages/FamososList';
import FamosoDetail from './pages/FamosoDetail';
import Historia from './pages/Historia';
import HechosList from './pages/HechosList';
import HechoDetail from './pages/HechoDetail';
import PlatillosList from './pages/PlatillosList';
import PlatilloDetail from './pages/PlatilloDetail';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hoteles" element={<HotelesList />} />
          <Route path="/hotel/:id" element={<HotelDetail />} />
          <Route path="/festividades" element={<FestividadesList />} />
          <Route path="/festividad/:id" element={<FestividadDetail />} />
          <Route path="/tours" element={<ToursList />} />
          <Route path="/tour/:id" element={<TourDetail />} />
          <Route path="/famosos" element={<FamososList />} />
          <Route path="/famoso/:id" element={<FamosoDetail />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/hechos" element={<HechosList />} />
          <Route path="/hecho/:id" element={<HechoDetail />} />
          <Route path="/platillos" element={<PlatillosList />} />
          <Route path="/platillo/:id" element={<PlatilloDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
