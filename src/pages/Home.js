import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import teapaLogo from '../assets/principal.jpg';
import imagenPrincipal from '../assets/teapalogo.jpg';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container fade-in">
      <div className="home-content">
        <div className="logo-main">
          <img src={teapaLogo} alt="Logo Pueblos Mágicos" className="logo-main-img" />
        </div>

        <h1 className="home-title">
          PUEBLOS<br />MÁGICOS
        </h1>

        <div className="home-subtitle">TEAPA</div>

        <div className="home-image-container">
          <img src={imagenPrincipal} alt="Pueblos Mágicos Teapa" className="home-image" />
        </div>

        <button className="btn-primary" onClick={() => navigate('/hoteles')}>
          Ir a Hoteles
        </button>

        <div className="home-nav-grid">
          <button className="home-nav-btn" onClick={() => navigate('/festividades')}>
            🎉 Festividades
          </button>
          <button className="home-nav-btn" onClick={() => navigate('/tours')}>
            🗺️ Tours
          </button>
          <button className="home-nav-btn" onClick={() => navigate('/famosos')}>
            ⭐ Famosos
          </button>
          <button className="home-nav-btn" onClick={() => navigate('/historia')}>
            📜 Historia
          </button>
          <button className="home-nav-btn" onClick={() => navigate('/platillos')}>
            🍽️ Platillos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
