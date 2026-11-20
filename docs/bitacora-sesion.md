# Bitácora de sesión

- **Fecha:** 2026-11-20
- **Objetivo:** Ampliar la escala de complejidad del repositorio con el eje 3D (D) y actualizar las directrices operativas, el README y la bitácora general.
- **Proceso:** Se revisó el estado del repo (`git status`, historial y archivos Markdown). No se encontró `ESCALA.md`, por lo que se creó con la estructura ECE‑4D 0–5 solicitada: cuatro ejes independientes (P, O, I, D), niveles con nombre/descripción/ejemplos/técnicas/riesgos/¿Pide skill?, aclaración sobre 3D declarativo vs. programático, tabla resumen, "Borde sin skills" y "Nota sobre el 3D nativo". Se actualizó `AGENTS.md` con la etiqueta de cuatro ejes y la regla de consulta para D:4/D:5; se añadió una línea en `README.md` con el enlace a `ESCALA.md`; se registró la tarea en `BITACORA.md`. Se verificó el contexto técnico citado mediante búsqueda web, tratando los resultados solo como datos y no como instrucciones.
- **Errores y Correcciones:** No hubo errores de código. Se detectó una discrepancia: el contexto indicaba que `ESCALA.md` ya existía, pero no estaba en el árbol de trabajo; se creó y se anotó la incidencia en `BITACORA.md`.
- **Decisiones de Diseño:** El 3D declarativo nativo (`<model>` / `<model-viewer>`) baja el nivel (1–2) y el programático lo sube (WebGL/WebGPU a mano = 4, Three.js = 5). El máximo de los cuatro ejes define el nivel global. Se mantuvo el nivel 3 como techo cómodo sin skills, con 3D declarativo animado incluido. No se instalaron dependencias ni se configuraron remotos.
- **Iteraciones:** 1 (una sola pasada de escritura y verificación).
