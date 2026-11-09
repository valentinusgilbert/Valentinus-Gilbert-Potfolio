<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue';

const root = ref(null);
const route = ref(null);
const apple = ref(null);
const segmentCount = ref(4);
const path = ref('');
const segments = [];

let routeLength = 0;
let head = 0;
let body = 4;
let maxBody = 8;
let spacing = 10;
let speed = 0.05;
let appleDistance = null;
let respawnAt = 0;
let previousTime;
let frame;
let resizeFrame;
let measureToken = 0;
let observer;
let chaseObserver;
let visibilityObserver;
let visible = true;
let motionPreference;

const setSegment = (element, index) => { segments[index] = element; };

const place = (element, distance, rotate = false) => {
  if (!element || !route.value || !routeLength) return;
  const at = ((distance % routeLength) + routeLength) % routeLength;
  const point = route.value.getPointAtLength(at);
  const next = route.value.getPointAtLength((at + 1) % routeLength);
  const size = element.offsetWidth || spacing;
  const angle = Math.atan2(next.y - point.y, next.x - point.x) * 180 / Math.PI;
  element.style.transform = `translate(${point.x - size / 2}px, ${point.y - size / 2}px)${rotate ? ` rotate(${angle}deg)` : ''}`;
};

const paint = () => {
  if (!routeLength) return;
  for (let index = 0; index < body; index++) place(segments[index], head - index * spacing, index === 0);
  if (!apple.value) return;
  apple.value.style.opacity = appleDistance === null ? '0' : '1';
  if (appleDistance !== null) place(apple.value, appleDistance);
};

const spawnApple = () => {
  if (!routeLength) return;
  const forward = body * spacing + spacing * 5;
  const room = Math.max(spacing * 4, routeLength - forward - spacing * 5);
  const ahead = forward + Math.random() * Math.min(room, routeLength * 0.45);
  appleDistance = (head + ahead) % routeLength;
};

const eat = (time) => {
  appleDistance = null;
  respawnAt = time + 450;
  body = body >= maxBody ? 4 : body + 1;
  segmentCount.value = body;
};

const advance = (step, time) => {
  if (appleDistance !== null) {
    const delta = (appleDistance - head + routeLength) % routeLength;
    if (delta <= step) eat(time);
  } else if (time >= respawnAt) {
    spawnApple();
  }
  head = (head + step) % routeLength;
};

const animate = (time) => {
  if (previousTime !== undefined) advance((time - previousTime) * speed, time);
  previousTime = time;
  paint();
  frame = requestAnimationFrame(animate);
};

const syncAnimation = () => {
  cancelAnimationFrame(frame);
  previousTime = undefined;
  if (routeLength && !motionPreference.matches && !document.hidden && visible) frame = requestAnimationFrame(animate);
  else paint();
};

const markText = (grid, cols, rows, origin, cell, element, padding) => {
  if (!element) return;
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    if (!node.textContent.trim()) continue;
    const range = document.createRange();
    range.selectNodeContents(node);
    for (const rect of range.getClientRects()) markRect(grid, cols, rows, origin, cell, rect, padding);
  }
};

const markRect = (grid, cols, rows, origin, cell, rect, padding) => {
  const left = Math.floor((rect.left - origin.left - padding) / cell);
  const right = Math.ceil((rect.right - origin.left + padding) / cell);
  const top = Math.floor((rect.top - origin.top - padding) / cell);
  const bottom = Math.ceil((rect.bottom - origin.top + padding) / cell);
  for (let y = Math.max(0, top); y < Math.min(rows, bottom); y++) {
    for (let x = Math.max(0, left); x < Math.min(cols, right); x++) grid[y][x] = 1;
  }
};

const largestRectangle = (grid, cols, rows, cell, minWidth, minHeight) => {
  const heights = new Int32Array(cols);
  let best = null;
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) heights[x] = grid[y][x] ? 0 : heights[x] + 1;
    const stack = [];
    for (let x = 0; x <= cols; x++) {
      const height = x < cols ? heights[x] : 0;
      while (stack.length && heights[stack[stack.length - 1]] >= height) {
        const barHeight = heights[stack.pop()];
        const left = stack.length ? stack[stack.length - 1] + 1 : 0;
        const width = x - left;
        const area = barHeight * width;
        if (barHeight * cell >= minHeight && width * cell >= minWidth && (!best || area > best.area)) {
          best = { area, x: left, y: y - barHeight + 1, width, height: barHeight };
        }
      }
      stack.push(x);
    }
  }
  return best;
};

const measure = async () => {
  const token = ++measureToken;
  await nextTick();
  if (!root.value || token !== measureToken) return;
  const layout = root.value.parentElement;
  const origin = root.value.getBoundingClientRect();
  if (!origin.width || !origin.height) return;

  const mobile = window.matchMedia('(max-width: 650px)').matches;
  spacing = mobile ? 7 : 10;
  speed = mobile ? 0.036 : 0.05;
  const cell = mobile ? 8 : 12;
  const padding = mobile ? 4 : 6;
  const clearance = mobile ? 18 : 24;
  const cols = Math.max(1, Math.floor(origin.width / cell));
  const rows = Math.max(1, Math.floor(origin.height / cell));
  const grid = Array.from({ length: rows }, () => new Uint8Array(cols));

  markText(grid, cols, rows, origin, cell, layout.querySelector('.greeting-text'), padding);
  markText(grid, cols, rows, origin, cell, layout.querySelector('h1'), padding);
  markText(grid, cols, rows, origin, cell, layout.querySelector('.hero-summary'), padding);
  markText(grid, cols, rows, origin, cell, layout.querySelector('.hero-portrait figcaption'), padding);
  layout.querySelectorAll('.hero-tabs button, .hero-actions a, .hero-status, .hero-socials a, .hero-portrait, .walking-pets').forEach(element => {
    markRect(grid, cols, rows, origin, cell, element.getBoundingClientRect(), padding);
  });

  const chase = layout.querySelector('.hero-chase');
  const chasePath = layout.querySelector('.chase-path path');
  if (chase && chasePath && chasePath.getAttribute('d')) {
    const chaseOrigin = chase.getBoundingClientRect();
    const total = chasePath.getTotalLength();
    for (let distance = 0; distance < total; distance += 6) {
      const point = chasePath.getPointAtLength(distance);
      markRect(grid, cols, rows, origin, cell, {
        left: chaseOrigin.left + point.x, top: chaseOrigin.top + point.y, width: 0, height: 0,
        right: chaseOrigin.left + point.x, bottom: chaseOrigin.top + point.y,
      }, clearance);
    }
  }

  const best = largestRectangle(grid, cols, rows, cell, mobile ? 64 : 120, mobile ? 56 : 80);
  if (!best) {
    path.value = '';
    routeLength = 0;
    if (root.value) root.value.style.visibility = 'hidden';
    return;
  }
  if (root.value) root.value.style.visibility = 'visible';

  const inset = mobile ? 6 : 8;
  const left = best.x * cell + inset;
  const right = (best.x + best.width) * cell - inset;
  const top = best.y * cell + inset;
  const bottom = (best.y + best.height) * cell - inset;
  const radius = Math.min(24, (right - left) / 3, (bottom - top) / 3);
  path.value = [
    `M ${left + radius} ${top}`,
    `L ${right - radius} ${top}`, `Q ${right} ${top} ${right} ${top + radius}`,
    `L ${right} ${bottom - radius}`, `Q ${right} ${bottom} ${right - radius} ${bottom}`,
    `L ${left + radius} ${bottom}`, `Q ${left} ${bottom} ${left} ${bottom - radius}`,
    `L ${left} ${top + radius}`, `Q ${left} ${top} ${left + radius} ${top}`, 'Z',
  ].join(' ');
  await nextTick();
  if (!route.value || token !== measureToken) return;
  routeLength = route.value.getTotalLength();
  maxBody = Math.max(4, Math.min(mobile ? 12 : 22, Math.floor(routeLength / spacing * 0.5)));
  body = 4;
  head = 0;
  appleDistance = null;
  respawnAt = 0;
  segmentCount.value = body;
  spawnApple();
  await nextTick();
  paint();
  syncAnimation();
};

const scheduleMeasure = () => {
  cancelAnimationFrame(resizeFrame);
  resizeFrame = requestAnimationFrame(measure);
};

onMounted(() => {
  motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  motionPreference.addEventListener('change', syncAnimation);
  document.addEventListener('visibilitychange', syncAnimation);
  observer = new ResizeObserver(scheduleMeasure);
  observer.observe(root.value.parentElement);
  visibilityObserver = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; syncAnimation(); });
  visibilityObserver.observe(root.value);
  const chasePath = root.value.parentElement.querySelector('.chase-path path');
  if (chasePath) {
    chaseObserver = new MutationObserver(scheduleMeasure);
    chaseObserver.observe(chasePath, { attributes: true, attributeFilter: ['d'] });
  }
  document.fonts.ready.then(() => { if (root.value) scheduleMeasure(); });
  scheduleMeasure();
});
onBeforeUnmount(() => {
  cancelAnimationFrame(frame);
  cancelAnimationFrame(resizeFrame);
  observer?.disconnect();
  chaseObserver?.disconnect();
  visibilityObserver?.disconnect();
  motionPreference?.removeEventListener('change', syncAnimation);
  document.removeEventListener('visibilitychange', syncAnimation);
});
</script>

<template>
  <div ref="root" class="hero-snake" aria-hidden="true">
    <svg class="snake-route" width="100%" height="100%" focusable="false">
      <path ref="route" :d="path" fill="none" />
    </svg>
    <span ref="apple" class="snake-apple" />
    <span v-for="index in segmentCount" :key="index" :ref="element => setSegment(element, index - 1)" class="snake-segment" :class="{ 'snake-head': index === 1 }"><i></i><i></i></span>
  </div>
</template>

<style scoped>
.hero-snake { --segment: 10px; position: absolute; inset: 0; z-index: -1; overflow: visible; pointer-events: none; }
.snake-route { position: absolute; inset: 0; overflow: visible; }
.snake-segment { position: absolute; top: 0; left: 0; width: var(--segment); height: var(--segment); border-radius: 32%; background: #4e9f63; }
.snake-segment:nth-child(3n) { background: #5cad71; }
.snake-segment.snake-head { display: flex; align-items: center; justify-content: center; gap: 18%; border-radius: 50%; background: #3c8553; }
.snake-head i { width: 18%; height: 18%; border-radius: 50%; background: #f4f7ef; }
.snake-apple { position: absolute; top: 0; left: 0; width: calc(var(--segment) * 1.4); height: calc(var(--segment) * 1.4); opacity: 0; transition: opacity 200ms; }
.snake-apple::before { content: ''; position: absolute; inset: 18% 8% 6%; border-radius: 48% 48% 50% 50%; background: #dc5a3c; }
.snake-apple::after { content: ''; position: absolute; left: 58%; top: 0; width: 34%; height: 34%; border-radius: 0 100% 0 100%; background: #3c8553; }
@media (max-width: 650px) { .hero-snake { --segment: 7px; } }
</style>
