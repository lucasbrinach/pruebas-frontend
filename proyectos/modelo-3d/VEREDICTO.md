# Veredicto — modelo-3d

## Etiquetas

- Nivel esperado: `P:1, O:2, I:2, D:2 → global:2`
- Nivel real: `P:1, O:2, I:2, D:2 → global:2`

## Feedback del Humano

- Volumen: Sí, es un objeto 3D real y con volumen (resuelve la duda del Exp 1).
- Luces/Sombras: Falla. Se ve como plástico flotando, sin proyección de sombra en el suelo.
- Interacción: Excelente. Arrastre fluido y zoom con trackpad.
- Auto-rotación: Funciona perfectamente (pausa al interactuar, reanuda después).
- Rendimiento: Carga rápida, sin tirones en Safari.
- Responsive: Correcto en modo diseño responsivo.
- A11y: Instrucción clara.

## Conclusión técnica

`<model-viewer>` demuestra que el 3D nativo es viable sin librerías. La interacción es fluida. El problema visual es de configuración del entorno (falta de piso y sombra proyectada), no de la tecnología.
