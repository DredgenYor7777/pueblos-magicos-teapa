import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { platillos } from '../data/platillos';
import '../styles/List.css';

const PlatillosList = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <Header title="PLATILLOS TÍPICOS" showBackButton={true} />

      <div className="content-wrapper">
        <div className="cards-container slide-up">
          {platillos.map((platillo) => (
            <div
              key={platillo.id}
              className="card"
              onClick={() => navigate(`/platillo/${platillo.id}`)}
            >
              <div className="card-image">
                <img src={platillo.imagen} alt={platillo.nombre} className="card-img" />
                <div className="image-overlay">{platillo.nombre}</div>
              </div>
              <div className="card-content">
                <h3 className="card-title">{platillo.nombre}</h3>
                <p style={{fontSize: '13px', color: '#888', marginBottom: '8px', fontWeight: '600'}}>
                  {platillo.tipo}
                </p>
                <p className="card-description">{platillo.descripcion.substring(0, 100)}...</p>
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
      </div>
    </div>
  );
};

export default PlatillosList;
