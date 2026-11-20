/* Un único rAF para scroll + cursor. Los listeners solo actualizan estado. */
(() => {
  'use strict';

  const hero = document.getElementById('hero');
  const scene = document.getElementById('scene');
  const layers = Array.from(document.querySelectorAll('.layer'));
  const fpsOutput = document.getElementById('fps');
  const cta = document.getElementById('cta');
  const motionButton = document.getElementById('motion-toggle');

  const MAX_TILT = 6;
  const POINTER_EASE = 0.08;
  const SCROLL_EASE = 0.12;
  const Z_TO_SHIFT = 0.06;

  const reducedQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  let reduced = reducedQuery.matches;
  let inView = true;
  let visible = !document.hidden;
  let orientationActive = false;
  let rafId = 0;

  const target = { x: 0, y: 0 };
  const current = { x: 0, y: 0 };
  let scrollTarget = window.scrollY || 0;
  let scrollCurrent = scrollTarget;

  let fpsFrames = 0;
  let fpsStart = 0;

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

  function onScroll() {
    scrollTarget = window.scrollY || 0;
  }

  function onPointerMove(event) {
    if (reduced || orientationActive) return;
    const rect = hero.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    target.x = clamp(((event.clientX - rect.left) / rect.width - 0.5) * 2, -1, 1);
    target.y = clamp(((event.clientY - rect.top) / rect.height - 0.5) * 2, -1, 1);
  }

  function onPointerOut() {
    target.x = 0;
    target.y = 0;
  }

  function onOrientation(event) {
    if (reduced || event.gamma == null || event.beta == null) return;
    orientationActive = true;
    target.x = clamp(event.gamma / 30, -1, 1);
    target.y = clamp(event.beta / 45, -1, 1);
  }

  function resetTransforms() {
    scene.style.transform = '';
    layers.forEach((layer) => { layer.style.transform = ''; });
  }

  function frame(now) {
    rafId = window.requestAnimationFrame(frame);

    fpsFrames += 1;
    if (!fpsStart) fpsStart = now;
    if (now - fpsStart >= 1000) {
      fpsOutput.textContent = `${Math.round((fpsFrames * 1000) / (now - fpsStart))} fps`;
      fpsFrames = 0;
      fpsStart = now;
    }

    current.x += (target.x - current.x) * POINTER_EASE;
    current.y += (target.y - current.y) * POINTER_EASE;
    scrollCurrent += (scrollTarget - scrollCurrent) * SCROLL_EASE;

    const tiltX = (-current.y * MAX_TILT).toFixed(2);
    const tiltY = (current.x * MAX_TILT).toFixed(2);
    scene.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;

    layers.forEach((layer) => {
      const speed = Number(layer.dataset.speed) || 0;
      const z = Number(layer.dataset.z) || 0;
      const dx = current.x * z * Z_TO_SHIFT;
      const dy = current.y * z * Z_TO_SHIFT - scrollCurrent * speed;
      layer.style.transform = `translate3d(${dx.toFixed(1)}px, ${dy.toFixed(1)}px, ${z}px)`;
    });
  }

  function shouldRun() {
    return !reduced && inView && visible;
  }

  function sync() {
    hero.classList.toggle('is-paused', !inView || !visible);
    if (shouldRun()) {
      if (!rafId) {
        fpsFrames = 0;
        fpsStart = 0;
        rafId = window.requestAnimationFrame(frame);
      }
    } else {
      if (rafId) window.cancelAnimationFrame(rafId);
      rafId = 0;
      target.x = 0;
      target.y = 0;
      current.x = 0;
      current.y = 0;
      resetTransforms();
      fpsOutput.textContent = '— fps';
    }
  }

  function initMotionRequest() {
    const DeviceOrientation = window.DeviceOrientationEvent;
    if (!DeviceOrientation) return;

    if (typeof DeviceOrientation.requestPermission === 'function') {
      // iOS exige gesto del usuario para otorgar permiso.
      motionButton.hidden = false;
      motionButton.addEventListener('click', async () => {
        try {
          const result = await DeviceOrientation.requestPermission();
          if (result === 'granted') {
            window.addEventListener('deviceorientation', onOrientation, { passive: true });
            orientationActive = true;
          }
        } catch (_) {
          // Sin permiso: seguimos con puntero o drag táctil.
        }
        motionButton.hidden = true;
      });
    } else {
      window.addEventListener('deviceorientation', onOrientation, { passive: true });
    }
  }

  function init() {
    window.addEventListener('scroll', onScroll, { passive: true });
    hero.addEventListener('pointermove', onPointerMove, { passive: true });
    hero.addEventListener('pointerleave', onPointerOut, { passive: true });
    hero.addEventListener('pointercancel', onPointerOut, { passive: true });

    cta.addEventListener('click', () => {
      document.getElementById('siguiente').scrollIntoView({
        behavior: reduced ? 'auto' : 'smooth',
        block: 'start'
      });
    });

    initMotionRequest();

    if ('IntersectionObserver' in window) {
      const observer = new window.IntersectionObserver((entries) => {
        inView = entries[0].isIntersecting;
        sync();
      }, { threshold: 0.01 });
      observer.observe(hero);
    }

    document.addEventListener('visibilitychange', () => {
      visible = !document.hidden;
      sync();
    });

    if (typeof reducedQuery.addEventListener === 'function') {
      reducedQuery.addEventListener('change', (event) => {
        reduced = event.matches;
        sync();
      });
    }

    sync();
  }

  init();
})();
