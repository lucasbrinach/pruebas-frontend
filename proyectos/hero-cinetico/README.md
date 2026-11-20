# hero-cinetico

Primer experimento del laboratorio: un hero a pantalla completa donde cuatro sistemas visuales conviven sin librerías.

**Nivel esperado:** `P:3, O:3, I:3, D:3 → global:3`.

## Cómo abrirlo

Abre `index.html` en el navegador o sirve la carpeta con un servidor local simple:

```sh
cd proyectos/hero-cinetico
python3 -m http.server 8000
```

Luego visita `http://localhost:8000`.

## Qué implementa

- Parallax de cuatro capas con scroll pasivo y un único `requestAnimationFrame`.
- Ilustración SVG inline con animaciones CSS independientes (flotación, respiración, parpadeo y anillo).
- Tilt por cursor y touch, con suavizado `lerp`; `deviceorientation` en iOS previo permiso explícito, con fallback a drag.
- Profundidad CSS 3D: `perspective`, `preserve-3d` y `translateZ` por capa (inclinación máxima de ±6°).

## Qué queda fuera a propósito

Sin `<model>`, sin librerías, sin física, sin WebGL/WebGPU y sin fuentes externas. Movimiento reducido, pausa fuera de viewport y foco visible están incluidos.
