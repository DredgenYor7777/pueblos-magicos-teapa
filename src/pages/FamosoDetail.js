import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { famosos } from '../data/famosos';
import '../styles/Detail.css';

const FamosoDetail = () => {
  const { id } = useParams();
  const famoso = famosos.find(f => f.id === parseInt(id));

  if (!famoso) {
    return <div>Persona no encontrada</div>;
  }

  const navItems = [
    { label: 'Festividades', path: '/festividades', icon: '🎉' },
    { label: 'Hoteles', path: '/hoteles', icon: '🏨' },
    { label: 'Historia', path: '/historia', icon: '📜' }
  ];

  return (
    <div className="page-container">
      <Header title="FAMOSOS" showBackButton={true} />

      <div className="content-wrapper">
        <div className="detail-container slide-up">
          <div className="detail-image-section">
            <img src={famoso.imagen} alt={famoso.nombre} className="detail-image" />
            <div className="detail-image-caption">{famoso.nombre}</div>
          </div>

          <div className="detail-info">
            <h2 className="detail-title">{famoso.nombre}</h2>
            <p style={{fontSize: '16px', color: '#888', marginBottom: '15px', fontWeight: '600'}}>
              {famoso.profesion}
            </p>
            <p className="detail-description">{famoso.descripcion}</p>

            <div className="detail-section">
              <h3 className="section-title">🏆 Logros Destacados</h3>
              <div className="services-grid">
                {famoso.logros.map((logro, index) => (
                  <div key={index} className="service-tag" style={{gridColumn: '1 / -1'}}>
                    {logro}
                  </div>
                ))}
              </div>
            </div>

            {famoso.añoNacimiento && (
              <div className="detail-section">
                <h3 className="section-title">📅 Año de Nacimiento</h3>
                <p>{famoso.añoNacimiento}</p>
              </div>
            )}
          </div>

          <div className="pagination-dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </div>

      <BottomNav items={navItems} />
    </div>
  );
};

export default FamosoDetail;
