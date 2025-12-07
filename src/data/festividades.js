import festividad1 from '../assets/fiesta.jpg';
import festividad2 from '../assets/feria.jpg';
import festividad3 from '../assets/carnaval.jpg';

export const festividades = [
  {
    id: 1,
    nombre: 'Fiesta del Señor de Esquipulas',
    imagen: festividad1,
    fecha: '15 de enero',
    descripcion: 'Celebrada el 15 de enero, esta festividad es una de las más importantes del pueblo y se lleva a cabo en la iglesia principal.',
    ubicacion: 'Iglesia principal de Teapa',
    actividades: [
      'Misa solemne',
      'Procesión religiosa',
      'Danzas tradicionales',
      'Feria gastronómica'
    ]
  },
  {
    id: 2,
    nombre: 'Feria Municipal',
    imagen: festividad2,
    fecha: 'Abril',
    descripcion: 'Durante el mes de abril, la Feria Municipal llena de color y alegría las calles de Teapa, ofreciendo una variedad de actividades y entretenimiento para toda la familia.',
    ubicacion: 'Centro de Teapa',
    actividades: [
      'Juegos mecánicos',
      'Eventos culturales',
      'Antojitos regionales',
      'Bailes populares',
      'Exposiciones artesanales'
    ]
  },
  {
    id: 3,
    nombre: 'Carnaval Teapaneco',
    imagen: festividad3,
    fecha: 'Marzo - Abril',
    descripcion: 'Este evento se celebra en marzo y abril y es una de las festividades principales de Teapa, combinando música, danza y celebraciones.',
    ubicacion: 'Calles del centro',
    actividades: [
      'Desfiles de carrozas',
      'Comparsas y disfraces',
      'Música en vivo',
      'Coronación de reyes',
      'Bailes tradicionales'
    ]
  }
];
