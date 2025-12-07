import tour1 from '../assets/cascadas1.jpg';
import tour2 from '../assets/grutas.jpg';
import tour3 from '../assets/cascadas2.jpg';

export const tours = [
  {
    id: 1,
    nombre: 'Cascadas, ríos y aguas termales',
    imagen: tour1,
    descripcion: 'Conoce básico en el centro tendrás un viaje lleno de aventura acompañado de cascadas de Teapa, podrás bañarte y realizar otras actividades luchan tabasqueño.\n\nVisita a Las Cascadas de la Sierra (como Salto de Agua secado Escondida), ideal para nadar y tomar fotos.',
    duracion: 'Día completo',
    dificultad: 'Media',
    incluye: [
      'Transporte',
      'Guía turístico',
      'Entrada a cascadas',
      'Comida típica'
    ]
  },
  {
    id: 2,
    nombre: 'Grutas, historia y chocolate',
    imagen: tour2,
    descripcion: 'Visita a las Grutas de Coconá (a pocos minutos del centro). Recorrido por sus impresionantes formaciones de estalactitas y estalagmitas.\n\nSi te gusta la aventura, pregunta por las cuevas cercanas al río Teapa.',
    duracion: '5 horas',
    dificultad: 'Baja',
    incluye: [
      'Guía especializado',
      'Entrada a grutas',
      'Degustación de chocolate',
      'Tour histórico'
    ]
  },
  {
    id: 3,
    nombre: 'Ecoturismo y comunidades rurales',
    imagen: tour3,
    descripcion: 'Excursión a Pueblo Nuevo de los Ríos (salida a la sierra de Teapa) por su entorno. Áreas de avistamiento de aves y contacto con comunidades locales.\n\nSi prefieres agua: paseo en balsa o kayak en el río Teapa o Río Puyacatengo.',
    duracion: 'Día completo',
    dificultad: 'Baja-Media',
    incluye: [
      'Transporte 4x4',
      'Guía naturalista',
      'Actividades de ecoturismo',
      'Interacción con comunidades'
    ]
  }
];
