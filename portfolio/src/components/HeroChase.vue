<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue';

const root = ref(null);
const route = ref(null);
const pacman = ref(null);
const pink = ref(null);
const blue = ref(null);
const path = ref('');
const pellets = ref([]);
const dots = [];
let length = 0;
let travelled = 0;
let previousTime;
let eaten = -1;
let frame;
let resizeFrame;
let observer;
let visibilityObserver;
let visible = true;
let motionPreference;

const placeActor = (element, distance, turn = false) => {
  const at = ((distance % length) + length) % length;
  const point = route.value.getPointAtLength(at);
  const next = route.value.getPointAtLength((at + 1) % length);
  const half = element.offsetWidth / 2;
  const angle = Math.atan2(next.y - point.y, next.x - point.x) * 180 / Math.PI;
  element.style.transform = `translate(${point.x - half}px, ${point.y - half}px)`;
  element.firstElementChild.style.transform = turn ? `rotate(${angle}deg)` : `scaleX(${next.x < point.x ? -1 : 1})`;
};
const paint = () => {
  if (!length) return;
  const spacing = (pacman.value?.offsetWidth || 24) * 1.8;
  placeActor(pacman.value, travelled, true);
  placeActor(blue.value, travelled - spacing);
  placeActor(pink.value, travelled - spacing * 1.9);
  const index = Math.floor(travelled / length * pellets.value.length);
  for (let i = eaten + 1; i <= index && i < pellets.value.length; i++) dots[i]?.setAttribute('opacity', '0');
  eaten = index;
};
const animate = (time) => {
  if (previousTime !== undefined) travelled += (time - previousTime) * 0.075;
  previousTime = time;
  if (travelled >= length && length) {
    travelled %= length;
    dots.forEach(dot => dot?.setAttribute('opacity', '1'));
    eaten = -1;
  }
  paint();
  frame = requestAnimationFrame(animate);
};
const syncAnimation = () => {
  cancelAnimationFrame(frame);
  previousTime = undefined;
  if (length && !motionPreference.matches && !document.hidden && visible) frame = requestAnimationFrame(animate);
};
const textBounds = (element) => {
  const range = document.createRange();
  range.selectNodeContents(element);
  return range.getBoundingClientRect();
};
const measure = async () => {
  if (!root.value) return;
  const layout = root.value.parentElement;
  const bounds = root.value.getBoundingClientRect();
  const greeting = layout.querySelector('.greeting-text').getBoundingClientRect();
  const name = textBounds(layout.querySelector('h1 > span'));
  const heading = layout.querySelector('h1').getBoundingClientRect();
  const portrait = layout.querySelector('.hero-portrait').getBoundingClientRect();
  const mobile = window.matchMedia('(max-width: 650px)').matches;
  const half = (pacman.value?.offsetWidth || 24) / 2;
  const x = value => Math.round(value - bounds.left);
  const y = value => Math.round(value - bounds.top);
  let points;
  if (mobile) {
    const gap = 4;
    const left = x(portrait.left - half - gap);
    const right = x(Math.min(window.innerWidth - half - 2, portrait.right + half + gap));
    const top = y(portrait.top - half - gap);
    const bottom = y(portrait.bottom + half + gap);
    points = [[left, top], [right, top], [right, bottom], [left, bottom]];
  } else {
    const lane = x(portrait.left - 32);
    const start = Math.min(x(greeting.right + 24), lane - 24);
    const top = 12;
    const greetingY = y(greeting.top + greeting.height / 2);
    const bottom = y(portrait.bottom + 24);
    const nameSide = Math.min(x(name.right + 28), lane);
    const headingTop = y(heading.top - 12);
    const headingBottom = y(heading.bottom + 12);
    const right = x(Math.min(window.innerWidth - half - 4, portrait.right + half + 4));
    points = [
      [start, greetingY], [lane, greetingY], [lane, top], [right, top],
      [right, bottom], [lane, bottom],
      [lane, headingBottom], [nameSide, headingBottom],
      [nameSide, headingTop], [start, headingTop],
    ];
  }
  path.value = points.map(([px, py], index) => `${index ? 'L' : 'M'} ${px} ${py}`).join(' ') + ' Z';
  await nextTick();
  if (!route.value) return;
  length = route.value.getTotalLength();
  const count = Math.max(1, Math.floor(length / 24));
  pellets.value = Array.from({ length: count }, (_, index) => {
    const point = route.value.getPointAtLength(index / count * length);
    return { x: point.x, y: point.y };
  });
  await nextTick();
  if (!root.value || !route.value) return;
  travelled = 0;
  eaten = -1;
  dots.forEach(dot => dot?.setAttribute('opacity', '1'));
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
  root.value.parentElement.addEventListener('animationend', scheduleMeasure);
  document.fonts.ready.then(() => { if (root.value) scheduleMeasure(); });
});
onBeforeUnmount(() => {
  cancelAnimationFrame(frame);
  cancelAnimationFrame(resizeFrame);
  observer?.disconnect();
  visibilityObserver?.disconnect();
  motionPreference?.removeEventListener('change', syncAnimation);
  document.removeEventListener('visibilitychange', syncAnimation);
  root.value?.parentElement.removeEventListener('animationend', scheduleMeasure);
});
</script>

<template>
  <div ref="root" class="hero-chase" aria-hidden="true">
    <svg class="chase-path" width="100%" height="100%" focusable="false">
      <path ref="route" :d="path" fill="none" />
      <circle v-for="(pellet, index) in pellets" :key="index" :ref="element => dots[index] = element" class="chase-pellet" :cx="pellet.x" :cy="pellet.y" r="2" />
    </svg>
    <span ref="pink" class="chase-actor"><span class="ghost ghost--pink"><i></i><i></i></span></span>
    <span ref="blue" class="chase-actor"><span class="ghost ghost--blue"><i></i><i></i></span></span>
    <span ref="pacman" class="chase-actor"><span class="pacman"><i class="jaw jaw--top"></i><i class="jaw jaw--bottom"></i></span></span>
  </div>
</template>

<style scoped>
.hero-chase { --actor-size: clamp(16px, 2.1vw, 24px); position: absolute; inset: -32px -16px -24px; z-index: -1; pointer-events: none; }
.chase-path { position: absolute; inset: 0; overflow: visible; }
.chase-pellet { fill: #c6cbde; }
.chase-actor { position: absolute; top: 0; left: 0; width: var(--actor-size); height: var(--actor-size); }
.ghost { position: relative; display: flex; align-items: flex-start; justify-content: center; gap: 12%; width: 100%; height: 100%; padding-top: 25%; border-radius: 50% 50% 0 0; clip-path: polygon(0 0,100% 0,100% 100%,83% 86%,66% 100%,50% 86%,33% 100%,16% 86%,0 100%); }
.ghost--pink { background: #ee809d; }
.ghost--blue { background: #6abed2; }
.ghost i { position: relative; width: 29%; height: 37.5%; border-radius: 50%; background: #fff; }
.ghost i::after { content: ''; position: absolute; right: 0; top: 33%; width: 43%; height: 45%; border-radius: 50%; background: #24335d; }
.pacman { position: relative; display: block; width: 100%; height: 100%; }
.jaw { position: absolute; left: 0; width: 100%; height: 50%; background: #f5bd29; animation: pacman-chomp 180ms ease-in-out infinite alternate; }
.jaw--top { top: 0; border-radius: 999px 999px 0 0; transform-origin: center bottom; --open: -32deg; }
.jaw--bottom { bottom: 0; border-radius: 0 0 999px 999px; transform-origin: center top; --open: 32deg; }
.pacman::after { content: ''; position: absolute; left: 50%; top: 16.7%; width: 12.5%; height: 12.5%; border-radius: 50%; background: #393023; }
@keyframes pacman-chomp { from { transform: rotate(0); } to { transform: rotate(var(--open)); } }
@media (prefers-reduced-motion: reduce) { .jaw { animation: none; transform: rotate(var(--open)); } }
</style>
