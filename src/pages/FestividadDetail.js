import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { festividades } from '../data/festividades';
import '../styles/Detail.css';

const FestividadDetail = () => {
  const { id } = useParams();
  const festividad = festividades.find(f => f.id === parseInt(id));

  if (!festividad) {
    return <div>Festividad no encontrada</div>;
  }

  const navItems = [
    { label: 'Hoteles', path: '/hoteles', icon: '🏨' },
    { label: 'Tours', path: '/tours', icon: '🗺️' },
    { label: 'Historia', path: '/historia', icon: '📜' }
  ];

  return (
    <div className="page-container">
      <Header title="FESTIVIDADES" showBackButton={true} />

      <div className="content-wrapper">
        <div className="detail-container slide-up">
          <div className="detail-image-section">
            <img src={festividad.imagen} alt={festividad.nombre} className="detail-image" />
            <div className="detail-image-caption">{festividad.nombre}</div>
          </div>

          <div className="detail-info">
            <h2 className="detail-title">{festividad.nombre}</h2>
            <p className="detail-description">{festividad.descripcion}</p>

            <div className="detail-section">
              <h3 className="section-title">📅 Fecha</h3>
              <p>{festividad.fecha}</p>
            </div>

            <div className="detail-section">
              <h3 className="section-title">📍 Ubicación</h3>
              <p>{festividad.ubicacion}</p>
            </div>

            <div className="detail-section">
              <h3 className="section-title">🎯 Actividades</h3>
              <div className="services-grid">
                {festividad.actividades.map((actividad, index) => (
                  <div key={index} className="service-tag">
                    {actividad}
                  </div>
                ))}
              </div>
            </div>
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

export default FestividadDetail;
