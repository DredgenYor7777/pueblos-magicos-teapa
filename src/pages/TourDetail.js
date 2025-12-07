import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { tours } from '../data/tours';
import '../styles/Detail.css';

const TourDetail = () => {
  const { id } = useParams();
  const tour = tours.find(t => t.id === parseInt(id));

  if (!tour) {
    return <div>Tour no encontrado</div>;
  }

  const navItems = [
    { label: 'Festividades', path: '/festividades', icon: '🎉' },
    { label: 'Hoteles', path: '/hoteles', icon: '🏨' },
    { label: 'Artesanías', path: '/artesanias', icon: '🎨' }
  ];

  return (
    <div className="page-container">
      <Header title="TOURS" showBackButton={true} />

      <div className="content-wrapper">
        <div className="detail-container slide-up">
          <div className="detail-image-section">
            <img src={tour.imagen} alt={tour.nombre} className="detail-image" />
            <div className="detail-image-caption">{tour.nombre}</div>
          </div>

          <div className="detail-info">
            <h2 className="detail-title">{tour.nombre}</h2>
            <p className="detail-description">{tour.descripcion}</p>

            <div className="detail-section">
              <h3 className="section-title">⏱️ Duración</h3>
              <p>{tour.duracion}</p>
            </div>

            <div className="detail-section">
              <h3 className="section-title">📊 Dificultad</h3>
              <p>{tour.dificultad}</p>
            </div>

            <div className="detail-section">
              <h3 className="section-title">✅ Incluye</h3>
              <div className="services-grid">
                {tour.incluye.map((item, index) => (
                  <div key={index} className="service-tag">
                    {item}
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

export default TourDetail;
