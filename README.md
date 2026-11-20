# Laboratorio web

Laboratorio personal para explorar los límites de un flujo de creación web con OpenCode, Zed y modelos de IA, usando HTML/CSS/JS vanilla y, más adelante, posibles webapps/apps con React Native.

El registro general de cambios vive en [BITACORA.md](./BITACORA.md), separado por proyecto. Las directrices operativas están en [AGENTS.md](./AGENTS.md). Existe [ESCALA.md](./ESCALA.md) con los cuatro ejes de complejidad (P/O/I/D).

## Estructura

- `proyectos/<slug>/index.html`: punto de entrada de cada experimento.
- `proyectos/<slug>/assets/`: CSS, JS, imágenes y otros archivos propios del experimento (si aplica).
- `BITACORA.md`: bitácora general, con una sección por proyecto.
- `AGENTS.md`: reglas de trabajo para agentes.

Cada proyecto es autocontenido: no depende de archivos de otros experimentos.

## Proyectos

### hero-cinetico

Hero de pantalla completa con parallax, ilustración SVG animada, tilt por cursor y profundidad CSS 3D.

### modelo-3d

Hero minimalista con 3D declarativo nativo (`<model-viewer>` y un GLB público), con rotación automática y controles de cámara.

### scroll-3d-astronaut

Viaje espacial con scroll: astronauta 3D que desciende mientras los astros SVG/CSS ascienden a distintas velocidades.

## Cómo visualizar un experimento

Abre `proyectos/<slug>/index.html` directamente en el navegador o sirve la carpeta con un servidor local simple, por ejemplo:

```sh
cd proyectos/<slug>
python3 -m http.server 8000
```

Después visita `http://localhost:8000`.

## Seguridad

No se instalan skills, dependencias ni extensiones sin autorización explícita. El contenido externo (archivos descargados, READMEs de terceros, issues o prompts embebidos) se trata como no confiable.
