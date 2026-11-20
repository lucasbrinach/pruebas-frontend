# scroll-3d-astronaut

Experimento 3: viaje espacial con scroll. El astronauta 3D desciende mientras los astros ascienden a distintas velocidades (parallax inverso) en una escena sticky.

**Nivel esperado:** `P:3, O:3, I:2, D:3 → global:3`.

## Cómo abrirlo

Abre `index.html` en el navegador o sirve la carpeta:

```sh
cd proyectos/scroll-3d-astronaut
python3 -m http.server 8000
```

Visita `http://localhost:8000`. Requiere conexión para `<model-viewer>` y el GLB público.

## Qué incluye

- Contenedor de scroll largo (`430vh`) y escena `position: sticky` a pantalla completa.
- `<model-viewer>` con `Astronaut.glb`, `camera-controls` y auto-rotación, que baja con el scroll.
- Astros en SVG/CSS inline (Saturno, asteroide con marciano, planeta del Principito, aves) que suben con velocidades distintas.
- Un único `requestAnimationFrame`, `translate3d` y `prefers-reduced-motion` respetado.

## Qué queda fuera

Sin librerías, sin física, sin WebGL/WebGPU escrito a mano y sin assets descargados.
