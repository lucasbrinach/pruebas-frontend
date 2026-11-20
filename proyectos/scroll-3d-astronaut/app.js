/* Scroll-driven parallax inverso: un solo rAF, lectura pasiva del scroll. */
(() => {
  'use strict';

  const space = document.getElementById('scroll-space');
  const stage = document.getElementById('stage');
  const astronaut = document.getElementById('astronaut');
  const upLayers = Array.from(document.querySelectorAll('[data-speed-up]'));
  const titles = Array.from(document.querySelectorAll('.title'));

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) return;

  let ticking = false;

  function clamp(v, min, max) {
    return Math.min(max, Math.max(min, v));
  }

  function update() {
    const rect = space.getBoundingClientRect();
    const maxScroll = Math.max(space.offsetHeight - window.innerHeight, 1);
    const progress = clamp(-rect.top / maxScroll, 0, 1);
    const vh = window.innerHeight / 100;

    const down = progress * (Number(astronaut.dataset.speedDown) || 0) * vh;
    astronaut.style.transform = `translate3d(0, ${down.toFixed(1)}px, 0)`;

    upLayers.forEach((layer) => {
      const up = progress * (Number(layer.dataset.speedUp) || 0) * vh;
      layer.style.transform = `translate3d(0, ${(-up).toFixed(1)}px, 0)`;
    });

    titles.forEach((title) => {
      const start = Number(title.dataset.showStart) || 0;
      const end = Number(title.dataset.showEnd) || 1;
      const mid = (start + end) / 2;
      const half = Math.max((end - start) / 2, 0.001);
      const fade = 1 - clamp(Math.abs(progress - mid) / half, 0, 1);
      title.style.opacity = fade.toFixed(2);
      title.style.transform = `translate3d(0, ${(20 - fade * 20).toFixed(1)}px, 0)`;
    });

    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  update();
})();
