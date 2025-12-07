import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { hoteles } from '../data/hoteles';
import '../styles/Detail.css';

const HotelDetail = () => {
  const { id } = useParams();
  const hotel = hoteles.find(h => h.id === parseInt(id));

  if (!hotel) {
    return <div>Hotel no encontrado</div>;
  }

  const navItems = [
    { label: 'Festividades', path: '/festividades', icon: '🎉' },
    { label: 'Tours', path: '/tours', icon: '🗺️' }
  ];

  return (
    <div className="page-container">
      <Header title="HOTELES" showBackButton={true} />

      <div className="content-wrapper">
        <div className="detail-container slide-up">
          <div className="detail-image-section">
            <img src={hotel.imagen} alt={hotel.nombre} className="detail-image" />
            <div className="detail-image-caption">{hotel.nombre}</div>
          </div>

          <div className="detail-info">
            <h2 className="detail-title">{hotel.nombre}</h2>
            <p className="detail-description">{hotel.descripcion}</p>

            <div className="detail-section">
              <h3 className="section-title">📍 Ubicación</h3>
              <p>{hotel.direccion}</p>
            </div>

            <div className="detail-section">
              <h3 className="section-title">📞 Contacto</h3>
              <p>{hotel.telefono}</p>
            </div>

            <div className="detail-section">
              <h3 className="section-title">✨ Servicios</h3>
              <div className="services-grid">
                {hotel.servicios.map((servicio, index) => (
                  <div key={index} className="service-tag">
                    {servicio}
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

export default HotelDetail;
