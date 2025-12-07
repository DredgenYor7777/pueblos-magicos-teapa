import platillo1 from '../assets/mone.jpg';
import platillo2 from '../assets/puchero.jpg';
import platillo3 from '../assets/tamales.jpg';

export const platillos = [
  {
    id: 1,
    nombre: 'Mone Teapaneco',
    imagen: platillo1,
    tipo: 'Platillo Principal',
    descripcion: 'Mone teapaneco, característica diferencia cultural de Teapa, combinando proteínas locales con la hoja para (momo), una planta aromática fundamental en la cocina.',
    ingredientes: [
      'Carne de cerdo o pollo',
      'Hoja de plátano',
      'Especias locales',
      'Masa de maíz',
      'Salsa tradicional'
    ],
    tiempoPreparacion: '2 horas',
    nivel: 'Tradicional'
  },
  {
    id: 2,
    nombre: 'Puchero Teapaneco',
    imagen: platillo2,
    tipo: 'Platillo Principal',
    descripcion: 'El puchero tabasqueño, que es un tipo de cocido de res, hecho con la variedad que en Teapa se pone al punto el caldo con especias, carnes, verduras, garbanzos y otras que se acompañan al plato de sopa, fiambre y naranja.',
    ingredientes: [
      'Carne de res',
      'Verduras variadas (calabaza, chayote, elote)',
      'Garbanzos',
      'Especias regionales',
      'Plátano macho'
    ],
    tiempoPreparacion: '3 horas',
    nivel: 'Tradicional'
  },
  {
    id: 3,
    nombre: 'Tamales de Chipilín Serranos',
    imagen: platillo3,
    tipo: 'Antojito',
    descripcion: 'En Teapa, estos tamales adquieren características especiales por el clima serrano que hace que el chipilín (una planta comestible) se cultive con un sabor único.',
    ingredientes: [
      'Masa de maíz',
      'Hojas de chipilín fresco',
      'Manteca de cerdo',
      'Sal',
      'Hoja de plátano'
    ],
    tiempoPreparacion: '1.5 horas',
    nivel: 'Tradicional'
  }
];
