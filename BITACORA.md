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
- Nivel real: `P:3, O:3, I:3, D:3 → global:3` (coincide con lo planeado; D queda como ejecución débil por la percepción de volumen, según veredicto humano).
- Cambio: Creación del primer experimento del repo: hero de 100dvh con parallax de cuatro capas, ilustración SVG animada, tilt por cursor/touch y profundidad CSS 3D.
- Archivos: `proyectos/hero-cinetico/index.html` (creado), `proyectos/hero-cinetico/styles.css` (creado), `proyectos/hero-cinetico/app.js` (creado), `proyectos/hero-cinetico/README.md` (creado), `README.md` (actualizado), `BITACORA.md` (actualizado).
- Notas: Sin librerías ni dependencias. Verificación local: `node --check` correcto, cuatro archivos servidos con HTTP 200 por servidor local, prueba con DOM simulado confirmó respuesta a scroll (capas con distinta velocidad) y cursor (tilt con lerp), pausa al ocultar pestaña y estado estático con `prefers-reduced-motion`. Chrome headless abrió la página sin errores de JavaScript de la página (solo avisos GPU propios del entorno headless). FPS: objetivo 60 fps en desktop moderno; no se pudo instrumentar una medición fiable en este entorno (headless sin reloj de frames útil), por lo que se dejó un contador visible en la esquina inferior derecha para medirlo en DevTools. Sin push ni cambios de remoto.
- Cierre / veredicto (feedback humano): FPS 60 estables; suavizado (lerp) correcto y elegante; profundidad 3D dudosa (capas 2D con sombras, sin volumen/perspectiva real); límite de inclinación correcto; A11y de movimiento reducido perfecta sin recargar; responsive aprobado en Safari (modo responsivo). Conclusión: CSS 3D (`preserve-3d`) sirve para parallax y engaños visuales pero no da volumen real; el paso lógico es el 3D declarativo nativo con glTF/GLB. Ver detalle en `proyectos/hero-cinetico/VEREDICTO.md`.

## Proyecto: modelo-3d

- Fecha: 2026-11-20
- Nivel esperado: `P:1, O:2, I:2, D:2 → global:2`
- Nivel real: `P:1, O:2, I:2, D:2 → global:2`.
- Cambio: Creación del experimento de 3D declarativo nativo con `<model-viewer>` (CDN, módulo) y modelo GLB público; hero minimalista con auto-rotación, controles de cámara, sombra e iluminación.
- Archivos: `proyectos/modelo-3d/index.html` (creado), `proyectos/modelo-3d/styles.css` (creado), `proyectos/modelo-3d/README.md` (creado), `proyectos/hero-cinetico/VEREDICTO.md` (creado), `README.md` (actualizado), `BITACORA.md` (actualizado).
- Notas: Sin paquetes npm; el módulo y el modelo se enlazan desde URLs públicas. Comprobación previa de conectividad en este entorno: CDN `200 text/javascript; charset=UTF-8` y `Astronaut.glb` `200 model/gltf-binary`. No se observó que el navegador se quejara de la carga en esta verificación (solo cabeceras y disponibilidad); la ausencia de quejas en Safari o en navegación interactiva queda pendiente de prueba por el humano. Sin push ni cambios de remoto.
- Cierre / veredicto (feedback humano): Volumen real confirmado; luces/sombras fallan (plástico flotando, sin sombra visible en el suelo); interacción excelente (arrastre y zoom con trackpad); auto-rotación correcta (pausa/reanuda); rendimiento rápido sin tirones en Safari; responsive correcto; A11y con instrucción clara. Conclusión: `<model-viewer>` es viable sin librerías y la interacción es fluida; el problema era de configuración/entorno (falta de piso y sombra proyectada), no de la tecnología. Ver `proyectos/modelo-3d/VEREDICTO.md`.
- Parche aplicado (post-veredicto): `shadow-intensity="1.5"` y `shadow-softness="0.8"` en `<model-viewer>` (se mantiene `environment-image="neutral"`), y fondo degradado inferior en `.hero::before` como "piso" visual para registrar la sombra. Archivos del parche: `proyectos/modelo-3d/index.html`, `proyectos/modelo-3d/styles.css`, `proyectos/modelo-3d/VEREDICTO.md`, `BITACORA.md`, `docs/bitacora-sesion.md`. Verificación del parche pendiente en navegador real.

## Proyecto: scroll-3d-astronaut

- Fecha: 2026-11-20
- Nivel esperado: `P:3, O:3, I:2, D:3 → global:3`
- Nivel real: `P:3, O:3, I:2, D:3 → global:3` (verificación visual de scroll/parallax pendiente en navegador real).
- Cambio: Creación de un viaje espacial con scroll: astronauta 3D (`<model-viewer>`) que desciende mientras los astros SVG/CSS ascienden a distintas velocidades, en escena sticky con fondo estrellado.
- Archivos: `proyectos/scroll-3d-astronaut/index.html` (creado), `proyectos/scroll-3d-astronaut/styles.css` (creado), `proyectos/scroll-3d-astronaut/app.js` (creado), `proyectos/scroll-3d-astronaut/README.md` (creado), `README.md` (actualizado), `BITACORA.md` (actualizado), `docs/bitacora-sesion.md` (actualizado).
- Notas: Sin librerías ni dependencias; `<model-viewer>` y `Astronaut.glb` desde URLs públicas. Layout con `main` de 430vh y escena `sticky` 100vh. Verificación local: `node --check` correcto y los cuatro archivos sirvieron HTTP 200; marcado incluye astronauta con `camera-controls`/auto-rotación, capas con velocidades distintas (Saturno, asteroide con marciano, planeta del Principito, aves), fondo estrellado y títulos "El viaje"/"El Principito". Scroll manejado con un único `rAF` y `translate3d`; se respeta `prefers-reduced-motion`. Verificación visual interactiva pendiente en navegador real. Sin push ni cambios de remoto.
