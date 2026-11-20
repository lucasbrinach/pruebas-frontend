# Bitácora de sesión

- **Fecha:** 2026-11-20
- **Objetivo:** Documentar el veredicto humano del experimento 2 (`modelo-3d`) y aplicar un parche de iluminación/sombra.
- **Proceso:** Se leyeron los archivos de `proyectos/modelo-3d/`, `BITACORA.md` y la bitácora de sesión. Se creó `proyectos/modelo-3d/VEREDICTO.md` con el feedback humano literal y la conclusión técnica. Se ajustó `<model-viewer>` en `index.html` a `shadow-intensity="1.5"` y `shadow-softness="0.8"` (manteniendo `environment-image="neutral"`). Se añadió en `styles.css` un pseudo-elemento `.hero::before` con degradado inferior como piso visual para hacer legible la sombra proyectada. Se actualizó `BITACORA.md` con el veredicto y el parche.
- **Errores y Correcciones:** No hubo errores de código. El fallo de sombras reportado se abordó como un problema de configuración/entorno (intensidad, suavidad y falta de contraste de "piso"), no de la tecnología.
- **Decisiones de Diseño:** Se mantuvo el `alt` descriptivo, el foco visible y el enfoque declarativo sin JS propio. Se usó `isolation: isolate` y capas de apilamiento para que el "piso" no interfiera con el visor ni con el texto.
- **Iteraciones:** 1 (documentación y parche). No se instalaron dependencias ni se hicieron push/remotos. Verificación visual del parche pendiente en navegador real.