import hecho1 from '../assets/fundacion.jpg';
import hecho2 from '../assets/tren.jpg';
import hecho3 from '../assets/nombramiento.jpg';

export const hechos = [
  {
    id: 1,
    nombre: 'Fundación Colonial por Bernal Díaz del Castillo (1532)',
    imagen: hecho1,
    año: '1532',
    descripcion: 'Bernal Díaz del Castillo, el famoso conquistador y cronista de la conquista de México, fundó formalmente el pueblo de Teapa. Su legado histórico convirtió a Teapa en uno de los puntos clave de la conquista y colonización española en la región.',
    importancia: 'Alta',
    categoria: 'Fundación'
  },
  {
    id: 2,
    nombre: 'Desarrollo del Ferrocarril del Sureste y Auge Platanero (Siglo XX)',
    imagen: hecho2,
    año: 'Siglo XX',
    descripcion: 'En el siglo XX, el Ferrocarril del Sureste desarrolló su estación en Teapa, lo que impulsó significativamente el comercio local. Durante esta época el pueblo vivió un auge platanero que transformó su economía, facilitando la exportación de su producción.',
    importancia: 'Alta',
    categoria: 'Desarrollo económico'
  },
  {
    id: 3,
    nombre: 'Nombramiento Oficial como Pueblo Mágico (2023)',
    imagen: hecho3,
    año: '2023',
    descripcion: 'Teapa se colocó en el mapa turístico nacional e internacional, al recibir el sello el 30 de julio de 2023 tras su nominación. Se convirtió en Territorio del Gobierno de México (Sectur).',
    importancia: 'Muy Alta',
    categoria: 'Reconocimiento turístico'
  }
];

export const historiaTeapa = {
  titulo: 'Historia de Teapa',
  introduccion: 'Los primeros habitantes de Teapa fueron zoques de Chiapas y olmeca tes. IX y X. Durante la época colonial se le dió el nombre de villa agrícola y ganadera, la ciudad se fundó en 1532 por Bernal Díaz del Castillo.',
  periodos: [
    {
      nombre: 'Época Prehispánica',
      descripcion: 'Habitada por zoques de Chiapas y olmecas',
      años: 'Siglos IX-X'
    },
    {
      nombre: 'Fundación Colonial',
      descripcion: 'Fundada por Bernal Díaz del Castillo',
      años: '1532'
    },
    {
      nombre: 'Época del Ferrocarril',
      descripcion: 'Auge económico por el ferrocarril',
      años: 'Siglo XX'
    },
    {
      nombre: 'Pueblo Mágico',
      descripcion: 'Nombramiento como Pueblo Mágico',
      años: '2023'
    }
  ]
};
