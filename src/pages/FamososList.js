import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { famosos } from '../data/famosos';
import '../styles/List.css';

const FamososList = () => {
  const navigate = useNavigate();

  const navItems = [
    { label: 'Festividades', path: '/festividades', icon: '🎉' },
    { label: 'Hoteles', path: '/hoteles', icon: '🏨' },
    { label: 'Historia', path: '/historia', icon: '📜' }
  ];

  return (
    <div className="page-container">
      <Header title="FAMOSOS" showBackButton={true} />

      <div className="content-wrapper">
        <div className="cards-container slide-up">
          {famosos.map((famoso) => (
            <div
              key={famoso.id}
              className="card"
              onClick={() => navigate(`/famoso/${famoso.id}`)}
            >
              <div className="card-image">
                <img src={famoso.imagen} alt={famoso.nombre} className="card-img" />
                <div className="image-overlay">{famoso.nombre}</div>
              </div>
              <div className="card-content">
                <h3 className="card-title">{famoso.nombre}</h3>
                <p className="card-subtitle" style={{fontSize: '14px', color: '#888', marginBottom: '8px'}}>{famoso.profesion}</p>
                <p className="card-description">{famoso.descripcion.substring(0, 120)}...</p>
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

export default FamososList;
