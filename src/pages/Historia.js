import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { historiaTeapa } from '../data/hechos';
import '../styles/Detail.css';
import historiaImagen from '../assets/historia.jpg';

const Historia = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <Header title="HISTORIA" showBackButton={false} showHomeButton={true} />

      <div className="content-wrapper">
        <div className="detail-container slide-up">
          <div className="circular-image-container">
            <img src={historiaImagen} alt="Historia de Teapa" className="circular-image" />
          </div>

          <div className="detail-info">
            <h2 className="detail-title" style={{textAlign: 'center'}}>
              {historiaTeapa.titulo}
            </h2>
            <p className="detail-description" style={{textAlign: 'justify'}}>
              {historiaTeapa.introduccion}
            </p>

            <div className="detail-section">
              <h3 className="section-title">📜 Períodos Históricos</h3>
              {historiaTeapa.periodos.map((periodo, index) => (
                <div key={index} style={{
                  background: '#f8f9fa',
                  padding: '15px',
                  borderRadius: '10px',
                  marginBottom: '12px',
                  borderLeft: '4px solid #2962ff'
                }}>
                  <h4 style={{margin: '0 0 8px 0', fontSize: '15px', fontWeight: '700', color: '#333'}}>
                    {periodo.nombre} ({periodo.años})
                  </h4>
                  <p style={{margin: 0, fontSize: '14px', color: '#666'}}>
                    {periodo.descripcion}
                  </p>
                </div>
              ))}
            </div>

            <div style={{marginTop: '30px', display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
              <button
                className="service-tag"
                onClick={() => navigate('/hechos')}
                style={{cursor: 'pointer', flex: 1, minWidth: '150px'}}
              >
                📖 Ver Hechos Históricos
              </button>
              <button
                className="service-tag"
                onClick={() => navigate('/famosos')}
                style={{cursor: 'pointer', flex: 1, minWidth: '150px'}}
              >
                ⭐ Personajes Famosos
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="simple-nav">
        <button className="simple-nav-btn" onClick={() => navigate('/')}>
          🏠
        </button>
        <button className="simple-nav-btn" onClick={() => navigate('/hechos')}>
          📖
        </button>
      </div>
    </div>
  );
};

export default Historia;
