<script setup>
import { ref } from 'vue';
const paused = ref(false);
</script>

<template>
  <div class="hero-chase" :class="{ 'is-paused': paused }">
    <button class="chase-track" type="button" :aria-pressed="paused" :aria-label="paused ? 'Resume Pac-Man chase' : 'Pause Pac-Man chase'" @click="paused = !paused">
      <span class="chase-runner" aria-hidden="true">
        <span class="chase-pack">
          <span class="ghost ghost--pink"><i></i><i></i></span>
          <span class="ghost ghost--blue"><i></i><i></i></span>
          <span class="pacman"><i class="jaw jaw--top"></i><i class="jaw jaw--bottom"></i></span>
        </span>
      </span>
      <span class="chase-control" aria-hidden="true"><svg viewBox="0 0 24 24"><path v-if="paused" d="m9 6 9 6-9 6Z" /><path v-else d="M8 6h3v12H8zM15 6h3v12h-3z" /></svg></span>
    </button>
  </div>
</template>

<style scoped>
.hero-chase { margin-top: 28px; }
.chase-track { position: relative; display: block; width: 100%; height: 56px; padding: 0; border: 0; border-radius: 14px; background: transparent; overflow: hidden; }
.chase-track::before { content: ''; position: absolute; left: 0; right: 52px; top: 28px; height: 4px; background-image: radial-gradient(circle, #c9cddb 1.5px, transparent 2px); background-size: 20px 4px; }
.chase-runner { position: absolute; left: 0; top: 10px; width: calc(100% - 184px); height: 36px; animation: chase-run 10s linear infinite alternate; }
.chase-pack { display: flex; align-items: center; justify-content: space-between; width: 132px; height: 36px; animation: chase-turn 20s step-end infinite; }
.ghost { position: relative; display: flex; align-items: flex-start; justify-content: center; gap: 3px; width: 28px; height: 30px; padding-top: 7px; border-radius: 14px 14px 0 0; clip-path: polygon(0 0,100% 0,100% 100%,83% 86%,66% 100%,50% 86%,33% 100%,16% 86%,0 100%); animation: ghost-bob 400ms ease-in-out infinite alternate; }
.ghost--pink { background: #ee809d; animation-delay: -200ms; }
.ghost--blue { background: #6abed2; }
.ghost i { position: relative; width: 8px; height: 10px; border-radius: 50%; background: #fff; }
.ghost i::after { content: ''; position: absolute; right: 0; top: 3px; width: 4px; height: 5px; border-radius: 50%; background: #24335d; }
.pacman { position: relative; width: 32px; height: 32px; }
.jaw { position: absolute; left: 0; width: 32px; height: 16px; background: #f5bd29; animation: pacman-chomp 220ms ease-in-out infinite alternate; }
.jaw--top { top: 0; border-radius: 32px 32px 0 0; transform-origin: center bottom; --open: -28deg; }
.jaw--bottom { bottom: 0; border-radius: 0 0 32px 32px; transform-origin: center top; --open: 28deg; }
.pacman::after { content: ''; position: absolute; left: 16px; top: 5px; width: 4px; height: 4px; border-radius: 50%; background: #393023; }
.chase-control { position: absolute; right: 4px; top: 6px; display: grid; place-items: center; width: 44px; height: 44px; border-radius: 50%; background: var(--surface); color: var(--muted); }
.chase-control svg { width: 16px; height: 16px; fill: currentColor; }
.chase-track:hover .chase-control { color: var(--accent); background: #eef0ff; }
.is-paused .chase-runner, .is-paused .chase-pack, .is-paused .ghost, .is-paused .jaw { animation-play-state: paused; }
@keyframes chase-run { from { transform: translateX(0); } to { transform: translateX(100%); } }
@keyframes chase-turn { 0%, 100% { transform: scaleX(1); } 50% { transform: scaleX(-1); } }
@keyframes ghost-bob { from { translate: 0 -2px; } to { translate: 0 2px; } }
@keyframes pacman-chomp { from { transform: rotate(0); } to { transform: rotate(var(--open)); } }
@media (prefers-reduced-motion: reduce) {
  .chase-runner, .chase-pack, .ghost, .jaw { animation: none; }
  .chase-runner { transform: translateX(50%); }
  .jaw { transform: rotate(var(--open)); }
}
</style>
