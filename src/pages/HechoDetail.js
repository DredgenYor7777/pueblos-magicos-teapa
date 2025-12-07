import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { hechos } from '../data/hechos';
import '../styles/Detail.css';

const HechoDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const hecho = hechos.find(h => h.id === parseInt(id));

  if (!hecho) {
    return <div>Hecho histórico no encontrado</div>;
  }

  return (
    <div className="page-container">
      <Header title="HECHOS" showBackButton={true} />

      <div className="content-wrapper">
        <div className="detail-container slide-up">
          <div className="detail-image-section">
            <img src={hecho.imagen} alt={hecho.nombre} className="detail-image" />
            <div className="detail-image-caption">{hecho.nombre}</div>
          </div>

          <div className="detail-info">
            <h2 className="detail-title">{hecho.nombre}</h2>

            <div style={{display: 'flex', gap: '10px', marginBottom: '15px'}}>
              <span style={{
                background: '#ffd700',
                color: '#333',
                padding: '6px 15px',
                borderRadius: '15px',
                fontSize: '13px',
                fontWeight: '600'
              }}>
                📅 {hecho.año}
              </span>
              <span style={{
                background: '#e3f2fd',
                color: '#1976d2',
                padding: '6px 15px',
                borderRadius: '15px',
                fontSize: '13px',
                fontWeight: '600'
              }}>
                {hecho.categoria}
              </span>
            </div>

            <p className="detail-description">{hecho.descripcion}</p>

            <div className="detail-section">
              <h3 className="section-title">⭐ Importancia Histórica</h3>
              <p style={{
                background: '#f8f9fa',
                padding: '12px',
                borderRadius: '8px',
                fontWeight: '600',
                color: '#333'
              }}>
                {hecho.importancia}
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
        <button className="simple-nav-btn" onClick={() => navigate('/historia')}>
          📜
        </button>
      </div>
    </div>
  );
};

export default HechoDetail;
