# Bitácora general

Registro de cambios del repositorio. Cada proyecto tiene su propia sección, identificada como `## Proyecto: <slug>`.

Estructura de ejemplo para cada entrada:

```md
## Proyecto: <slug>
- Fecha:
- Cambio:
- Archivos:
- Notas:
```

## Proyecto: Base del repositorio

- Fecha: 2026-11-20
- Cambio: Creación de la base documental y las directrices operativas; inicialización de la carpeta `proyectos/`. Primer movimiento registrado en la bitácora.
- Archivos: `README.md` (creado), `AGENTS.md` (creado), `BITACORA.md` (creado), `proyectos/` (creada, vacía).
- Notas: Git ya estaba inicializado; no se configuraron remotos ni se hizo push. No se instalaron skills, dependencias ni extensiones. Se conservaron `.gitignore` y `.cpanel.yml` sin cambios. No se crearon proyectos de prueba. Sin información sensible nueva.

### 2026-11-20 — Eje 3D (D) en la escala

- Fecha: 2026-11-20
- Cambio: Ampliación de la escala de complejidad con el eje D (3D), distinguiendo el 3D declarativo nativo del programático; actualización de las directrices de etiquetado y consulta.
- Archivos: `ESCALA.md` (creado; no existía en el repo, pese a la referencia previa), `AGENTS.md` (actualizado), `README.md` (actualizado), `BITACORA.md` (actualizado), `docs/bitacora-sesion.md` (creado).
- Notas: Se verificó el contexto técnico citado (WWDC26 para `<model>`, WebGPU en navegadores principales desde finales de 2025) como información de referencia, sin instalar nada. No se hizo push ni se configuraron remotos. Sin información sensible nueva.

### 2026-11-20 — Escala curada por el humano

- Fecha: 2026-11-20
- Cambio: Sustitución de `ESCALA.md` por el texto exacto entregado por el humano, como fuente de verdad (ECE·4D 0–5); actualización de las referencias en `AGENTS.md` y `README.md`.
- Archivos: `ESCALA.md` (reescrito literalmente), `AGENTS.md` (actualizado), `README.md` (actualizado), `BITACORA.md` (actualizado), `docs/bitacora-sesion.md` (actualizado).
- Notas: El contenido de `ESCALA.md` se copió sin reformular, resumir ni cambiar encabezados. `AGENTS.md` ahora exige etiquetar antes y después y parar/consultar ante niveles 4 o 5 no previstos. No se instaló nada, no se hicieron push ni cambios de remoto. Sin información sensible nueva.

## Proyecto: hero-cinetico

- Fecha: 2026-11-20
- Nivel esperado: `P:3, O:3, I:3, D:3 → global:3`
- Nivel real: `P:3, O:3, I:3, D:3 → global:3` (coincide con lo planeado).
- Cambio: Creación del primer experimento del repo: hero de 100dvh con parallax de cuatro capas, ilustración SVG animada, tilt por cursor/touch y profundidad CSS 3D.
- Archivos: `proyectos/hero-cinetico/index.html` (creado), `proyectos/hero-cinetico/styles.css` (creado), `proyectos/hero-cinetico/app.js` (creado), `proyectos/hero-cinetico/README.md` (creado), `README.md` (actualizado), `BITACORA.md` (actualizado).
- Notas: Sin librerías ni dependencias. Verificación local: `node --check` correcto, cuatro archivos servidos con HTTP 200 por servidor local, prueba con DOM simulado confirmó respuesta a scroll (capas con distinta velocidad) y cursor (tilt con lerp), pausa al ocultar pestaña y estado estático con `prefers-reduced-motion`. Chrome headless abrió la página sin errores de JavaScript de la página (solo avisos GPU propios del entorno headless). FPS: objetivo 60 fps en desktop moderno; no se pudo instrumentar una medición fiable en este entorno (headless sin reloj de frames útil), por lo que se dejó un contador visible en la esquina inferior derecha para medirlo en DevTools. Sin push ni cambios de remoto.
