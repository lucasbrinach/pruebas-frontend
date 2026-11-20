# Escala de Complejidad de Experimentos — ECE‑4D 0–5

Cuatro ejes independientes: **P** (parallax/scroll), **O** (objetos animados), **I** (interacción) y **D** (3D). El nivel global es el máximo de los cuatro.

Etiqueta: `P:x, O:y, I:z, D:w → global:n`.

## Niveles

### 0 Reposo

- Descripción breve: contenido estático, sin movimiento ni 3D.
- Ejemplos: página solo HTML/CSS; galería de imágenes; texto con estilos. Sin 3D (`D:0`).
- Técnicas: HTML semántico, CSS basic.
- Riesgos: casi ninguno; eventual sobrecarga visual por exceso de contenido.
- ¿Pide skill?: No.

### 1 Declarativa

- Descripción breve: el navegador hace el trabajo; el 3D es estático (`D:1` = `<model>` o `<model-viewer>` sin interacción).
- Ejemplos: modelo USDZ/GLB mostrado como una imagen más; `<model src="pieza.usdz">` con `<img>` de fallback; ficha de producto con modelo fijo.
- Técnicas: elemento nativo `<model>`, Web Component `<model-viewer>`, `<source>` por MIME type, fallback `<img>`.
- Riesgos: peso del asset, soporte desigual entre navegadores, necesidad de fallback.
- ¿Pide skill?: No.

### 2 Imperativa simple

- Descripción breve: un poco de JavaScript para controlar lo que el componente ya sabe hacer (`D:2` = `<model>` con órbita/zoom/play de animación pregrabada).
- Ejemplos: visor con `stagemode="orbit"`; botón de play/reverse de una animación horneada en el USDZ; zoom acotado con API nativa.
- Técnicas: atributos del elemento (`stagemode`), `model.play()`, `playbackRate`, `ready`, transformaciones simples vía `entityTransform`.
- Riesgos: recorte de geometría al rotar, APIs aún cambiantes, assets pesados.
- ¿Pide skill?: No.

### 3 Scroll/cursor

- Descripción breve: movimiento ligado al scroll o al cursor, sin motores externos (`D:3` = 3D declarativo animado por scroll/interacción; CSS 3D con `preserve-3d` y `perspective`).
- Ejemplos: tarjetas con `rotateX`/`rotateY` según scroll; `<model>` cuyo `entityTransform` sigue al puntero; parallax en capas 3D.
- Técnicas: `requestAnimationFrame`, `IntersectionObserver`, CSS `transform-style: preserve-3d`, `perspective`, `DOMMatrix`.
- Riesgos: jank, mareo por movimiento, fallback en dispositivos sin soporte 3D.
- ¿Pide skill?: No.

### 4 Física/estado

- Descripción breve: gráficos por código, sin frameworks (`D:4` = WebGL/WebGPU vanilla, shaders simples, raycasting manual; sin Three.js).
- Ejemplos: partículas en WebGPU; shader de gradiente/ondas; picking por raycasting escrito a mano.
- Técnicas: WebGL2/WebGPU, GLSL/WGSL básico, buffers y matrices, hit-testing manual.
- Riesgos: costo de implementación, depuración, compatibilidad entre plataformas.
- ¿Pide skill?: No, pero es caro; si crece, parar y consultar.

### 5 Sistemas acoplados

- Descripción breve: varias piezas complejas coordinadas (`D:5` = Three.js, shaders avanzados, GLSL, postprocesado, 3D + física/audio).
- Ejemplos: escena con sombras y postprocesado reactivo a audio; 3D + motor de física; pipeline de render complejo.
- Técnicas: Three.js, GLSL avanzado, postprocesado, motores de física/audio.
- Riesgos: dependencias externas, tamaño del bundle, mantenimiento; requiere autorización explícita.
- ¿Pide skill?: Sí: evaluar skill o librería con autorización previa.

## Aclaración sobre el eje D

El 3D declarativo nativo **BAJA** el nivel: una etiqueta puede ser nivel 1–2 (`<model>` / `<model-viewer>` estático u órbita simple). El 3D programático **SUBE** el nivel: WebGL/WebGPU a mano es nivel 4 y Three.js es nivel 5.

## Tabla resumen

| Nivel | Nombre | 3D típico | Librería/Skill |
| --- | --- | --- | --- |
| 0 | Reposo | Sin 3D (`D:0`) | Ninguna |
| 1 | Declarativa | `<model>` / `<model-viewer>` estático | Ninguna (Web Component) |
| 2 | Imperativa simple | Órbita, zoom, play de animación pregrabada | Ninguna (API nativa) |
| 3 | Scroll/cursor | 3D declarativo animado; CSS 3D `preserve-3d` | Ninguna |
| 4 | Física/estado | WebGL/WebGPU vanilla, shaders simples | Ninguna (código propio) |
| 5 | Sistemas acoplados | Three.js, GLSL avanzado, postprocesado | Evaluar skill o librería |

## Borde sin skills

El nivel 3 es el techo cómodo del stack actual; ahora incluye 3D declarativo animado por scroll/interacción. El nivel 4 es posible pero caro. El nivel 5 justifica evaluar skill o librería.

## Nota sobre el 3D nativo

`<model>` es un elemento HTML nativo emergente: Apple lo presentó en WWDC26 para iOS, iPadOS, macOS y visionOS ([sesión de Apple](https://developer.apple.com/videos/play/wwdc2026/215/)). `<model-viewer>` es el Web Component actual para 3D sin Three.js. WebGPU ya es estable en los navegadores principales desde finales de 2025. Esto es contexto técnico, no una recomendación de instalar nada.
