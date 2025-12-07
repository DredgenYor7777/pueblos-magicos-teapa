# Instrucciones para Ejecutar la App

## Paso 1: Abrir terminal en el directorio del proyecto

Abre una terminal (CMD, PowerShell o Git Bash) y navega al directorio del proyecto:

```bash
cd C:\Users\Dell\Documents\APPOSIAS\pueblos-magicos-app
```

## Paso 2: Las dependencias ya están instaladas

Las dependencias de npm ya fueron instaladas. Si necesitas reinstalarlas en el futuro, ejecuta:

```bash
npm install
```

## Paso 3: Iniciar la aplicación

Ejecuta el siguiente comando:

```bash
npm start
```

## Paso 4: Abrir en el navegador

La aplicación se abrirá automáticamente en tu navegador en:

```
http://localhost:3000
```

Si no se abre automáticamente, copia y pega esa URL en tu navegador.

## Funcionalidades de la App

### Pantalla de Inicio
- Logo animado de Pueblos Mágicos
- Botón principal "Ir a Hoteles"
- Navegación rápida a todas las secciones

### Secciones Disponibles

1. **Hoteles** 🏨
   - Lista de 3 hoteles en Teapa
   - Detalles de cada hotel con servicios

2. **Festividades** 🎉
   - Fiesta del Señor de Esquipulas
   - Feria Municipal
   - Carnaval Teapaneco

3. **Tours** 🗺️
   - Cascadas, ríos y aguas termales
   - Grutas, historia y chocolate
   - Ecoturismo y comunidades rurales

4. **Famosos** ⭐
   - Fátima Bosch (Miss Universe 2025)
   - Rómulo O'Farril (Empresario)
   - Elizabeth Dupeyrón (Actriz)

5. **Historia** 📜
   - Contexto histórico de Teapa
   - Períodos históricos importantes
   - Enlaces a hechos históricos

6. **Hechos Históricos** 📖
   - Fundación Colonial (1532)
   - Desarrollo del Ferrocarril
   - Nombramiento Pueblo Mágico (2023)

7. **Platillos Típicos** 🍽️
   - Mone Teapaneco
   - Puchero Teapaneco
   - Tamales de Chipilín Serranos

## Navegación

- **Botón Atrás**: En la parte superior izquierda (← Inicio)
- **Navegación Inferior**: Botones azules para cambiar de sección
- **Botón Home**: 🏠 en algunas pantallas para volver al inicio
- **Tarjetas**: Haz clic en cualquier tarjeta para ver más detalles

## Características de Diseño

- ✨ Logo animado giratorio con 8 pétalos de colores
- 🎨 Gradientes vibrantes en las imágenes
- 📱 Diseño optimizado para móvil
- 💫 Animaciones suaves al cambiar de pantalla
- 🔘 Indicadores de paginación (dots)
- 🎯 Navegación contextual según la sección

## Detener la Aplicación

Para detener el servidor de desarrollo, presiona:

```
Ctrl + C
```

en la terminal donde está corriendo.

## Crear Versión de Producción

Para crear una versión optimizada para producción:

```bash
npm run build
```

Esto creará una carpeta `build/` con los archivos listos para desplegar.

## Problemas Comunes

### La app no inicia
- Verifica que estés en el directorio correcto
- Asegúrate de que las dependencias estén instaladas (`npm install`)
- Verifica que el puerto 3000 no esté ocupado

### Errores en el navegador
- Limpia el caché del navegador (Ctrl + Shift + R)
- Verifica la consola del navegador (F12) para ver errores

### Cambios no se reflejan
- Guarda todos los archivos
- El servidor se recarga automáticamente con los cambios
- Si no funciona, detén el servidor (Ctrl+C) y vuelve a iniciar (`npm start`)

## Personalización

Para agregar tus propias imágenes:

1. Coloca las imágenes en la carpeta `public/images/`
2. Edita los archivos de datos en `src/data/`
3. Reemplaza los emojis por rutas de imagen, ejemplo:
   ```javascript
   imagen: '/images/hotel1.jpg'
   ```

## Soporte

Si tienes problemas, verifica:
- Que Node.js esté instalado (`node --version`)
- Que npm esté instalado (`npm --version`)
- Que tengas permisos de lectura/escritura en el directorio
