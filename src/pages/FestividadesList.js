import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { festividades } from '../data/festividades';
import '../styles/List.css';

const FestividadesList = () => {
  const navigate = useNavigate();

  const navItems = [
    { label: 'Hoteles', path: '/hoteles', icon: '🏨' },
    { label: 'Tours', path: '/tours', icon: '🗺️' },
    { label: 'Historia', path: '/historia', icon: '📜' }
  ];

  return (
    <div className="page-container">
      <Header title="FESTIVIDADES" showBackButton={true} />

      <div className="content-wrapper">
        <div className="cards-container slide-up">
          {festividades.map((festividad) => (
            <div
              key={festividad.id}
              className="card"
              onClick={() => navigate(`/festividad/${festividad.id}`)}
            >
              <div className="card-image">
                <img src={festividad.imagen} alt={festividad.nombre} className="card-img" />
                <div className="image-overlay">{festividad.nombre}</div>
              </div>
              <div className="card-content">
                <h3 className="card-title">{festividad.nombre}</h3>
                <p className="card-description">{festividad.descripcion}</p>
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

export default FestividadesList;
