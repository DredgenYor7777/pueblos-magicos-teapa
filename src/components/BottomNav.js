import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/BottomNav.css';

const BottomNav = ({ items }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const defaultItems = [
    { label: 'Festividades', path: '/festividades', icon: '🎉' },
    { label: 'Hoteles', path: '/hoteles', icon: '🏨' }
  ];

  const navItems = items || defaultItems;

  return (
    <nav className="bottom-nav">
      <div className="bottom-nav-container">
        {navItems.map((item, index) => (
          <button
            key={index}
            className={`nav-item ${location.pathname.includes(item.path) ? 'active' : ''}`}
            onClick={() => navigate(item.path)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
