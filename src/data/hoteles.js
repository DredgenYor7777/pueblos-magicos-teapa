import hotel1 from '../assets/hcerros.jpg';
import hotel2 from '../assets/hsultana.jpg';
import hotel3 from '../assets/hquintero.jpg';

export const hoteles = [
  {
    id: 1,
    nombre: 'Hotel entre cerros',
    imagen: hotel1,
    descripcion: 'Hotel ubicado en un entorno natural rodeado de hermosos cerros.',
    direccion: 'Centro de Teapa, Tabasco',
    telefono: '555-1234',
    servicios: ['WiFi', 'Estacionamiento', 'Restaurante', 'Aire acondicionado']
  },
  {
    id: 2,
    nombre: 'Hotel La Sultana',
    imagen: hotel2,
    descripcion: 'Hotel moderno en el corazón de Teapa con excelentes instalaciones.',
    direccion: 'Av. Principal, Teapa',
    telefono: '555-5678',
    servicios: ['WiFi', 'Piscina', 'Gimnasio', 'Desayuno incluido']
  },
  {
    id: 3,
    nombre: 'Hotel Quintero',
    imagen: hotel3,
    descripcion: 'Hotel familiar con arquitectura tradicional y ambiente acogedor.',
    direccion: 'Calle Hidalgo, Teapa',
    telefono: '555-9012',
    servicios: ['WiFi', 'Terraza', 'Bar', 'Servicio a la habitación']
  }
];
