import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { platillos } from '../data/platillos';
import '../styles/Detail.css';

const PlatilloDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const platillo = platillos.find(p => p.id === parseInt(id));

  if (!platillo) {
    return <div>Platillo no encontrado</div>;
  }

  return (
    <div className="page-container">
      <Header title="PLATILLOS TÍPICOS" showBackButton={true} />

      <div className="content-wrapper">
        <div className="detail-container slide-up">
          <div className="detail-image-section">
            <img src={platillo.imagen} alt={platillo.nombre} className="detail-image" />
            <div className="detail-image-caption">{platillo.nombre}</div>
          </div>

          <div className="detail-info">
            <h2 className="detail-title">{platillo.nombre}</h2>
            <p style={{fontSize: '15px', color: '#888', marginBottom: '15px', fontWeight: '600'}}>
              {platillo.tipo} • {platillo.nivel}
            </p>
            <p className="detail-description">{platillo.descripcion}</p>

            <div className="detail-section">
              <h3 className="section-title">🥘 Ingredientes</h3>
              <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                {platillo.ingredientes.map((ingrediente, index) => (
                  <div key={index} style={{
                    background: '#f8f9fa',
                    padding: '10px 15px',
                    borderRadius: '8px',
                    fontSize: '14px',
                    color: '#333'
                  }}>
                    • {ingrediente}
                  </div>
                ))}
              </div>
            </div>

            <div className="detail-section">
              <h3 className="section-title">⏱️ Tiempo de Preparación</h3>
              <p style={{
                background: '#e3f2fd',
                color: '#1976d2',
                padding: '12px',
                borderRadius: '8px',
                fontWeight: '600',
                textAlign: 'center'
              }}>
                {platillo.tiempoPreparacion}
              </p>
            </div>
          </div>

          <div className="pagination-dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
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

export default PlatilloDetail;
