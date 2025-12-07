import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Header.css';
import teapaLogo from '../assets/teapalogo.jpg';

const Header = ({ title, showBackButton = true, showHomeButton = false }) => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-content">
        {showBackButton && (
          <button className="back-button" onClick={() => navigate(-1)}>
            ← Inicio
          </button>
        )}

        <div className="header-logo-section">
          <div className="logo-container">
            <img src={teapaLogo} alt="Logo Pueblos Mágicos Teapa" className="header-logo-img" />
          </div>
          <div className="header-text">
            <span className="header-pueblos">PUEBLOS<br/>MÁGICOS</span>
            <span className="header-teapa">TEAPA</span>
          </div>
        </div>

        {title && <h1 className="header-title">{title}</h1>}

        {showHomeButton && (
          <button className="home-button" onClick={() => navigate('/')}>
            🏠
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
