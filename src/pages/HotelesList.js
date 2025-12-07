import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { hoteles } from '../data/hoteles';
import '../styles/List.css';

const HotelesList = () => {
  const navigate = useNavigate();

  const navItems = [
    { label: 'Festividades', path: '/festividades', icon: '🎉' },
    { label: 'Tours', path: '/tours', icon: '🗺️' },
    { label: 'Artesanías', path: '/artesanias', icon: '🎨' }
  ];

  return (
    <div className="page-container">
      <Header title="HOTELES" showBackButton={true} />

      <div className="content-wrapper">
        <div className="cards-container slide-up">
          {hoteles.map((hotel) => (
            <div
              key={hotel.id}
              className="card"
              onClick={() => navigate(`/hotel/${hotel.id}`)}
            >
              <div className="card-image">
                <img src={hotel.imagen} alt={hotel.nombre} className="card-img" />
                <div className="image-overlay">{hotel.nombre}</div>
              </div>
              <div className="card-content">
                <h3 className="card-title">{hotel.nombre}</h3>
                <p className="card-description">{hotel.descripcion}</p>
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

export default HotelesList;
