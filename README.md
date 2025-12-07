# Pueblos Mágicos - Teapa

Una aplicación web móvil desarrollada en React que presenta información turística sobre Teapa, Tabasco, Pueblo Mágico de México.

## Características

- **Diseño móvil optimizado** - Interfaz responsive diseñada específicamente para dispositivos móviles
- **Navegación intuitiva** - Sistema de navegación fluido entre secciones
- **Múltiples secciones**:
  - 🏨 **Hoteles** - Información de alojamiento en Teapa
  - 🎉 **Festividades** - Eventos y celebraciones tradicionales
  - 🗺️ **Tours** - Recorridos turísticos y actividades
  - ⭐ **Famosos** - Personajes ilustres de Teapa
  - 📜 **Historia** - Contexto histórico de la región
  - 📖 **Hechos Históricos** - Eventos importantes
  - 🍽️ **Platillos Típicos** - Gastronomía tradicional

## Tecnologías

- React 18
- React Router DOM 6
- CSS3 con animaciones
- Diseño responsive mobile-first

## Instalación

```bash
# Navegar al directorio del proyecto
cd pueblos-magicos-app

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start
```

La aplicación se abrirá en [http://localhost:3000](http://localhost:3000)

## Scripts Disponibles

- `npm start` - Inicia el servidor de desarrollo
- `npm build` - Crea la versión de producción
- `npm test` - Ejecuta las pruebas
- `npm eject` - Expone la configuración (irreversible)

## Estructura del Proyecto

```
pueblos-magicos-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   └── BottomNav.js
│   ├── data/
│   │   ├── hoteles.js
│   │   ├── festividades.js
│   │   ├── tours.js
│   │   ├── famosos.js
│   │   ├── hechos.js
│   │   └── platillos.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── HotelesList.js
│   │   ├── HotelDetail.js
│   │   ├── FestividadesList.js
│   │   ├── FestividadDetail.js
│   │   ├── ToursList.js
│   │   ├── TourDetail.js
│   │   ├── FamososList.js
│   │   ├── FamosoDetail.js
│   │   ├── Historia.js
│   │   ├── HechosList.js
│   │   ├── HechoDetail.js
│   │   ├── PlatillosList.js
│   │   └── PlatilloDetail.js
│   ├── styles/
│   │   ├── index.css
│   │   ├── App.css
│   │   ├── Header.css
│   │   ├── BottomNav.css
│   │   ├── Home.css
│   │   ├── List.css
│   │   └── Detail.css
│   ├── App.js
│   └── index.js
└── package.json
```

## Características de Diseño

### Logo Animado
El logo de Pueblos Mágicos cuenta con una animación de rotación en espiral con 8 pétalos de colores vibrantes.

### Paleta de Colores
- Primario: Azul (#2962ff)
- Gradientes: Múltiples gradientes para diferentes secciones
- Fondos: Blanco y tonos grises claros

### Animaciones
- Fade in al cargar páginas
- Slide up para contenido
- Hover effects en botones y tarjetas
- Transiciones suaves

## Personalización

Para agregar contenido nuevo:

1. **Agregar datos**: Edita los archivos en `src/data/`
2. **Agregar imágenes**: Reemplaza los emojis por rutas de imágenes reales
3. **Modificar estilos**: Edita los archivos CSS en `src/styles/`

## Mejoras Implementadas

Comparado con el diseño original:

- ✅ Navegación mejorada con React Router
- ✅ Componentes reutilizables
- ✅ Animaciones y transiciones suaves
- ✅ Mejor organización del código
- ✅ Diseño responsive optimizado
- ✅ Sistema de navegación contextual
- ✅ Tarjetas con hover effects
- ✅ Logo animado personalizado

## Próximas Mejoras Sugeridas

- [ ] Agregar imágenes reales
- [ ] Implementar lazy loading
- [ ] Agregar sistema de búsqueda
- [ ] Integrar mapa interactivo
- [ ] Modo oscuro
- [ ] Compartir en redes sociales
- [ ] PWA (Progressive Web App)
- [ ] Backend para contenido dinámico

## Licencia

Este proyecto fue creado para fines educativos y de demostración.

## Autor

Desarrollado con React para Pueblos Mágicos - Teapa, Tabasco.
