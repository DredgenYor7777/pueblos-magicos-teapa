import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { hechos } from '../data/hechos';
import '../styles/List.css';

const HechosList = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <Header title="HECHOS HISTÓRICOS" showBackButton={true} showHomeButton={true} />

      <div className="content-wrapper">
        <div className="cards-container slide-up">
          {hechos.map((hecho) => (
            <div
              key={hecho.id}
              className="card"
              onClick={() => navigate(`/hecho/${hecho.id}`)}
            >
              <div className="card-image">
                <img src={hecho.imagen} alt={hecho.nombre} className="card-img" />
                <div className="image-overlay">{hecho.año}</div>
              </div>
              <div className="card-content">
                <h3 className="card-title">{hecho.nombre}</h3>
                <p className="card-description">{hecho.descripcion.substring(0, 100)}...</p>
                <div style={{marginTop: '10px'}}>
                  <span style={{
                    background: '#ffd700',
                    color: '#333',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: '600'
                  }}>
                    {hecho.categoria}
                  </span>
                </div>
                <div className="pagination-dots">
                  <span className="dot active"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="simple-nav">
        <button className="simple-nav-btn" onClick={() => navigate('/')}>
          🏠
        </button>
        <button className="simple-nav-btn" onClick={() => navigate('/historia')}>
          📜
        </button>
      </div>
    </div>
  );
};

export default HechosList;
