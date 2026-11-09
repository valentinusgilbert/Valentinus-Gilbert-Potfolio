<template>
  <div ref="root" class="bgfx" aria-hidden="true">
    <div class="bgfx__blob bgfx__blob--1" />
    <div class="bgfx__blob bgfx__blob--2" />
    <div class="bgfx__blob bgfx__blob--3" />
    <div class="bgfx__grid" />
    <canvas ref="canvas" class="bgfx__canvas" />
    <div class="bgfx__spot" />
    <div class="bgfx__vignette" />
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

const root = ref(null);
const canvas = ref(null);

/* Pointer state: `target` is where the mouse is, `eased` is what we render, so
   the spotlight and parallax glide instead of snapping. */
const target = { x: 0, y: 0 };
const eased = { x: 0, y: 0 };

let ctx = null;
let particles = [];
let frame = null;
let width = 0;
let height = 0;
let dpr = 1;
let reduceMotion = false;

const COLORS = [
  [255, 113, 91], // accent coral
  [95, 208, 197], // teal
  [175, 198, 216], // cool grey
];

const buildParticles = () => {
  const count = Math.min(80, Math.max(22, Math.round((width * height) / 26000)));
  particles = Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.16,
    vy: (Math.random() - 0.5) * 0.16,
    size: Math.random() < 0.8 ? 2 : 3, // whole pixels keep the retro feel
    alpha: Math.random() * 0.3 + 0.12,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
  }));
};

const resize = () => {
  if (!canvas.value) return;
  dpr = Math.min(window.devicePixelRatio || 1, 2);
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.value.width = Math.floor(width * dpr);
  canvas.value.height = Math.floor(height * dpr);
  canvas.value.style.width = `${width}px`;
  canvas.value.style.height = `${height}px`;
  ctx = canvas.value.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  buildParticles();
  if (reduceMotion) drawParticles();
};

const drawParticles = () => {
  if (!ctx) return;
  ctx.clearRect(0, 0, width, height);

  for (const p of particles) {
    const [r, g, b] = p.color;
    // soft halo
    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${p.alpha * 0.28})`;
    ctx.fillRect(p.x - p.size, p.y - p.size, p.size * 3, p.size * 3);
    // crisp pixel core
    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${p.alpha})`;
    ctx.fillRect(p.x, p.y, p.size, p.size);
  }
};

const REPEL_RADIUS = 140;

const step = () => {
  // ease the pointer for the CSS-driven spotlight + grid parallax
  eased.x += (target.x - eased.x) * 0.08;
  eased.y += (target.y - eased.y) * 0.08;

  if (root.value) {
    root.value.style.setProperty('--mx', `${eased.x.toFixed(1)}px`);
    root.value.style.setProperty('--my', `${eased.y.toFixed(1)}px`);
    root.value.style.setProperty(
      '--px',
      `${((eased.x / Math.max(width, 1)) - 0.5) * 16}px`,
    );
    root.value.style.setProperty(
      '--py',
      `${((eased.y / Math.max(height, 1)) - 0.5) * 16}px`,
    );
  }

  for (const p of particles) {
    p.x += p.vx;
    p.y += p.vy;

    // gently push particles away from the cursor
    const dx = p.x - target.x;
    const dy = p.y - target.y;
    const dist2 = dx * dx + dy * dy;
    if (dist2 < REPEL_RADIUS * REPEL_RADIUS && dist2 > 0.5) {
      const dist = Math.sqrt(dist2);
      const force = (1 - dist / REPEL_RADIUS) * 1.1;
      p.x += (dx / dist) * force;
      p.y += (dy / dist) * force;
    }

    // wrap around the viewport edges
    if (p.x < -6) p.x = width + 6;
    else if (p.x > width + 6) p.x = -6;
    if (p.y < -6) p.y = height + 6;
    else if (p.y > height + 6) p.y = -6;
  }

  drawParticles();
  frame = requestAnimationFrame(step);
};

const onPointerMove = (event) => {
  target.x = event.clientX;
  target.y = event.clientY;
};

const start = () => {
  if (frame === null && !reduceMotion) frame = requestAnimationFrame(step);
};

const stop = () => {
  if (frame !== null) {
    cancelAnimationFrame(frame);
    frame = null;
  }
};

const onVisibilityChange = () => (document.hidden ? stop() : start());

onMounted(() => {
  reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  target.x = eased.x = window.innerWidth / 2;
  target.y = eased.y = window.innerHeight / 2;

  resize();
  window.addEventListener('resize', resize);
  window.addEventListener('pointermove', onPointerMove, { passive: true });
  document.addEventListener('visibilitychange', onVisibilityChange);
  start();
});

onBeforeUnmount(() => {
  stop();
  window.removeEventListener('resize', resize);
  window.removeEventListener('pointermove', onPointerMove);
  document.removeEventListener('visibilitychange', onVisibilityChange);
});
</script>

<style lang="scss" scoped>
.bgfx {
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  overflow: hidden;
  --mx: 50vw;
  --my: 50vh;
  --px: 0px;
  --py: 0px;
}

/* Slowly drifting aurora blobs ---------------------------------------- */
.bgfx__blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.55;
  will-change: transform;

  &--1 {
    width: 46rem;
    height: 30rem;
    top: -12rem;
    left: -10rem;
    background: radial-gradient(circle, rgba(255, 113, 91, 0.4), transparent 68%);
    animation: drift-a 26s ease-in-out infinite alternate;
  }

  &--2 {
    width: 38rem;
    height: 28rem;
    top: -6rem;
    right: -8rem;
    background: radial-gradient(circle, rgba(95, 208, 197, 0.3), transparent 68%);
    animation: drift-b 32s ease-in-out infinite alternate;
  }

  &--3 {
    width: 44rem;
    height: 34rem;
    bottom: -16rem;
    left: 30%;
    background: radial-gradient(circle, rgba(88, 122, 168, 0.38), transparent 68%);
    animation: drift-c 38s ease-in-out infinite alternate;
  }
}

/* Grid that parallaxes with the pointer -------------------------------- */
.bgfx__grid {
  position: absolute;
  inset: -60px;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.028) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.028) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: radial-gradient(circle at 50% 18%, #000 0%, transparent 78%);
  -webkit-mask-image: radial-gradient(circle at 50% 18%, #000 0%, transparent 78%);
  transform: translate3d(var(--px), var(--py), 0);
  will-change: transform;
}

.bgfx__canvas {
  position: absolute;
  inset: 0;
  display: block;
}

/* Glow that trails the cursor ----------------------------------------- */
.bgfx__spot {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    22rem 22rem at var(--mx) var(--my),
    rgba(255, 113, 91, 0.13),
    rgba(95, 208, 197, 0.05) 45%,
    transparent 70%
  );
}

.bgfx__vignette {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at 50% 40%,
    transparent 40%,
    rgba(6, 11, 16, 0.55) 100%
  );
}

@keyframes drift-a {
  from {
    transform: translate3d(0, 0, 0) scale(1);
  }
  to {
    transform: translate3d(9rem, 5rem, 0) scale(1.16);
  }
}

@keyframes drift-b {
  from {
    transform: translate3d(0, 0, 0) scale(1.1);
  }
  to {
    transform: translate3d(-7rem, 7rem, 0) scale(0.92);
  }
}

@keyframes drift-c {
  from {
    transform: translate3d(0, 0, 0) scale(0.95);
  }
  to {
    transform: translate3d(-8rem, -6rem, 0) scale(1.18);
  }
}

@media (prefers-reduced-motion: reduce) {
  .bgfx__blob {
    animation: none;
  }

  .bgfx__spot {
    display: none;
  }
}
</style>
