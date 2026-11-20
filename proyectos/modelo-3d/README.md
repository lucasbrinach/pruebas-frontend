# modelo-3d

Experimento 2: 3D declarativo nativo con el Web Component `<model-viewer>` y un modelo GLB real. Sin paquetes npm ni assets descargados al repo.

**Nivel esperado:** `P:1, O:2, I:2, D:2 → global:2`.

## Cómo abrirlo

Abre `index.html` en el navegador o sirve la carpeta:

```sh
cd proyectos/modelo-3d
python3 -m http.server 8000
```

Luego visita `http://localhost:8000`. Se necesita conexión: el componente y el modelo se cargan desde URLs públicas.

## Qué incluye

- `<model-viewer>` cargado como módulo desde el CDN de Google.
- Modelo público `Astronaut.glb` enlazado directamente desde modelviewer.dev.
- `camera-controls` para rotar y hacer zoom con mouse o touch; `auto-rotate`, sombra e iluminación neutras.
- `alt` descriptivo, foco visible y entrada declarativa sin JavaScript propio.

## Qué queda fuera

Sin scroll-linked motion, sin lerp propio, sin Three.js, sin física y sin WebGL/WebGPU escritos a mano.
