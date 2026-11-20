# Escala de Complejidad de Experimentos — ECE·4D 0–5

Esta escala define **cómo medimos la complejidad** de cada experimento del repo
y **cuándo conviene parar y evaluar una skill o librería nueva**.

Es la base de nuestro conocimiento: antes de empezar un experimento, el agente
declara el nivel esperado. Al terminarlo, declara el nivel real. Si se desvía,
se anota en la bitácora y se explica por qué.

---

## Los cuatro ejes

Cada experimento se evalúa en cuatro ejes independientes. El **nivel global**
es el máximo de los cuatro (no el promedio: el eje más exigente manda).

| Eje | Qué mide | Rango |
|-----|----------|-------|
| **P** | Parallax y animaciones ligadas al scroll | 0–5 |
| **O** | Objetos animados (ilustraciones, sprites, elementos que se mueven solos) | 0–5 |
| **I** | Interacción (mouse, touch, teclado, gestos) | 0–5 |
| **D** | 3D (modelos, escenas, shaders) | 0–5 |

**Etiqueta de un experimento:**
P:3, O:2, I:3, D:0 → global:3

Se anota **antes de empezar** (nivel esperado) y **al terminar** (nivel real)
en `BITACORA.md`.

---

## Los seis niveles

### Nivel 0 — Reposo

Estático. Solo HTML/CSS de presentación. Sin JS de comportamiento, sin 3D.

- **Ejemplos:** landing, hero estático, grillas, tarjetas, tipografía.
- **Técnicas:** layout, tipografía, color, semántica.
- **Riesgos:** bajos.
- **¿Pide skill?** No.

---

### Nivel 1 — Declarativa

CSS `transition` y `@keyframes`. JS solo para togglear clases o estados
simples. Primer contacto con 3D declarativo.

- **Ejemplos (P/O/I):** hover en botones, fade-in al cargar, slide de menú,
  spinner, shake.
- **Ejemplos (D):** un modelo 3D incrustado con `<model>` o `<model-viewer>`
  **sin interacción**: se muestra, gira solo o queda fijo. El navegador
  o el Web Component hacen todo el trabajo.
- **Técnicas:** `transform`, `opacity`, `@keyframes`,
  `transition-timing-function`, `<model>`, `<model-viewer>`.
- **Riesgos:** animar `width/height/top/left` (jank). Usar `transform`
  y `opacity`.
- **¿Pide skill?** No.

---

### Nivel 2 — Imperativa simple

JS con `requestAnimationFrame` o eventos, **un solo sistema** en juego.
3D declarativo ya con interacción básica.

- **Ejemplos (P/O/I):** un objeto que sigue al cursor con `lerp`, contador
  animado, toggle con estado.
- **Ejemplos (D):** visor 3D con `<model-viewer>` y controles de órbita/zoom,
  o botón de *play* para reproducir la animación pregrabada del modelo.
- **Técnicas:** `rAF`, `addEventListener`, estado local, `lerp`, easing,
  `camera-controls` de `<model-viewer>`.
- **Riesgos:** listeners y timers sin limpiar (memory leaks).
- **¿Pide skill?** No.

---

### Nivel 3 — Scroll, cursor y 3D declarativo animado

**Este es el borde cómodo de nuestro stack actual.**

Múltiples capas coordinadas, tracking suavizado, scroll-linked real. 3D
declarativo disparado por scroll o interacción. CSS 3D puro.

- **Ejemplos (P/O/I):** hero parallax de 3–4 capas, ilustración que sigue
  al mouse con inercia, secciones que se revelan al scroll, mouse-trail.
- **Ejemplos (D):** modelo 3D que se “abre” al hacer scroll, varios visores
  3D coordinados, escena de cubos 3D en CSS con `transform-style: preserve-3d`
  y `perspective`.
- **Técnicas:** `IntersectionObserver`, `scroll` pasivo, `translate3d`,
  `will-change`, `clamp`, unificar `pointer` y `touch`, respetar
  `prefers-reduced-motion`, `preserve-3d`, `perspective`.
- **Riesgos:** jank en scroll, listeners no pasivos, accesibilidad
  (reduced-motion, teclado).
- **¿Pide skill?** **No. Aquí termina lo que se hace cómodo sin instalar nada.**

---

### Nivel 4 — Física, estado y 3D programático vanilla

Máquinas de estado, física simple (resortes, damping, momentum), múltiples
objetos interactuando, canvas 2D o SVG animado. 3D con WebGL/WebGPU
**sin librería**.

- **Ejemplos (P/O/I):** cards que se doblan con física al arrastrar,
  partículas que huyen del cursor, drag con inercia, botones magnéticos,
  física de resortes en menús.
- **Ejemplos (D):** shaders simples a mano en GLSL, cámara controlada
  por código, raycasting manual sobre un modelo, partículas 3D,
  postprocesado básico. Sin Three.js.
- **Técnicas:** springs (Hooke), integración de Euler/Verlet,
  máquinas de estado, `<canvas>` 2D, loop robusto, `resize` /
  `orientationchange` / `visibilitychange`, WebGL crudo, WebGPU crudo,
  shaders GLSL.
- **Riesgos:** complejidad exponencial, performance, accesibilidad seria
  (teclado, fallback sin animación).
- **¿Pide skill?** **Probablemente no, pero duele.** Aquí empieza a tener
  sentido preguntarse si conviene una mini-librería o seguir vanilla.

---

### Nivel 5 — Sistemas acoplados

Múltiples sistemas interactuando: parallax + física + partículas + audio
+ estado + 3D complejo. Performance crítica.

- **Ejemplos:** escena 3D con Three.js, shader de distorsión avanzado,
  partículas con colisiones, experiencia inmersiva full-screen con audio
  reactivo, postprocesado.
- **Técnicas:** Three.js (o similar), GLSL avanzado, `Web Audio`,
  optimización de GPU, `InstancedMesh`, render targets.
- **Riesgos:** accesibilidad casi imposible sin fallbacks, peso,
  compatibilidad, mantenibilidad.
- **¿Pide skill?** **Sí, evaluar explícitamente.**

---

## Tabla resumen

| Nivel | Nombre | JS | Librería | 3D típico | Skill nueva | Ejemplo |
|-------|--------|----|----------|-----------|-------------|---------|
| 0 | Reposo | No | No | — | No | Landing estática |
| 1 | Declarativa | Poco | No | `<model>` estático | No | Hover, fade-in, ficha 3D |
| 2 | Imperativa simple | Sí | No | `<model>` con órbita/play | No | Cursor follower, visor 3D |
| 3 | Scroll/cursor | Sí | No | 3D declarativo por scroll, CSS 3D | **No (borde)** | Parallax multi-capa |
| 4 | Física/estado | Sí | No (duele) | WebGL/WebGPU vanilla, shaders | Evaluar | Drag con inercia, shader simple |
| 5 | Sistemas acoplados | Sí | Probable | Three.js, GLSL avanzado | **Sí, evaluar** | Experiencia inmersiva |

---

## Nota sobre el 3D nativo

Hay dos familias de 3D y no conviene confundirlas:

- **3D declarativo nativo.** El elemento `<model>` es una etiqueta HTML
  emergente presentada por Apple en 2026 para iOS, iPadOS, macOS y
  visionOS. Renderiza modelos (USDZ en Apple, glTF/GLB en el resto) como
  una imagen, sin dependencias de JS. Hoy la opción utilizable en la
  mayoría de navegadores es el Web Component `<model-viewer>`, que
  también evita Three.js. **Esta familia mantiene el nivel bajo: 1–2–3.**

- **3D programático.** WebGL y WebGPU a mano, o con librerías como
  Three.js. WebGPU ya es estable en Chrome, Edge, Firefox y Safari
  desde finales de 2025. **Esta familia sube el nivel: 4 con WebGL
  vanilla, 5 con Three.js o shaders complejos.**

Regla mental: **etiqueta → nivel bajo; código de graphics → nivel alto.**

---

## Reglas de uso

1. **Declarar nivel esperado** por eje y global **antes de empezar**, y
   anotarlo en `BITACORA.md`.
2. **Parar y consultar** si en el camino se necesita nivel 4 o 5 no
   previsto. No instalar librerías por cuenta propia.
3. **Registrar el nivel real** (no el planeado) **al terminar**.
4. **Regla de parada:** si el experimento pide nivel 5 y no hay skill
   instalada → declarar “fuera de alcance” o proponer una skill.
5. **Accesibilidad:** desde nivel 3 respetar `prefers-reduced-motion`.
   Desde nivel 4 ofrecer fallback estático y control por teclado.
6. **Performance:** desde nivel 3 medir FPS en DevTools y anotarlo.
7. **Honestidad:** reportar si el nivel real difiere del planeado, en
   cualquier dirección. Un experimento que salió nivel 2 cuando se
   planeó 4 es una buena noticia; al revés, una señal de alarma.

---

## El borde sin skills, en una línea

> **Nivel 3 es el techo cómodo con el stack actual.**
> Incluye 3D declarativo animado con `<model>`/`<model-viewer>` y
> CSS 3D. Nivel 4 es posible pero caro (más código, más bugs, más
> accesibilidad pendiente). Nivel 5 ya justifica evaluar una skill o
> librería —por eso lo dejamos como frontera explícita, no como
> “a ver qué pasa”.
