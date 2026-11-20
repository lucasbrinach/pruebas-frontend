# Veredicto — hero-cinetico

## Etiquetas

- Nivel esperado: `P:3, O:3, I:3, D:3 → global:3`
- Nivel real: `P:3, O:3, I:3, D:3 → global:3`
- Nota: D se mantiene en 3 por las técnicas empleadas (`perspective`, `preserve-3d`, `translateZ`), aunque el feedback humano califica la profundidad percibida como dudosa. Es una ejecución débil dentro del nivel, no un cambio de etiqueta.

## Feedback del Humano

- FPS (contador visible): Mantiene 60 FPS estables.
- Suavizado (lerp): El delay se siente correcto y elegante.
- Profundidad 3D: Dudosa. Se siente como capas 2D con sombras, carece de volumen y perspectiva real.
- Límite de inclinación: Los ángulos están bien.
- Reducción de movimiento (A11y): Funciona a la perfección, el movimiento cesa al activarlo, sin necesidad de recargar.
- Responsive: Aprobado, probado en Safari en modo de diseño responsivo.

## Conclusión técnica

El CSS 3D (preserve-3d) es excelente para parallax y engaños visuales, pero no otorga volumen real. El siguiente paso lógico es el 3D declarativo nativo con modelos reales (glTF/GLB) para evaluar si la IA puede generar este tipo de integraciones sin librerías pesadas.
