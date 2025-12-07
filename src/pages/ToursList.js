import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { tours } from '../data/tours';
import '../styles/List.css';

const ToursList = () => {
  const navigate = useNavigate();

  const navItems = [
    { label: 'Festividades', path: '/festividades', icon: '🎉' },
    { label: 'Hoteles', path: '/hoteles', icon: '🏨' }
  ];

  return (
    <div className="page-container">
      <Header title="TOURS" showBackButton={true} />

      <div className="content-wrapper">
        <div className="cards-container slide-up">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="card"
              onClick={() => navigate(`/tour/${tour.id}`)}
            >
              <div className="card-image">
                <img src={tour.imagen} alt={tour.nombre} className="card-img" />
                <div className="image-overlay">{tour.nombre}</div>
              </div>
              <div className="card-content">
                <h3 className="card-title">{tour.nombre}</h3>
                <p className="card-description">{tour.descripcion.substring(0, 100)}...</p>
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

      <BottomNav items={navItems} />
    </div>
  );
};

export default ToursList;
