<script setup>
import { ref } from 'vue';
import cat from '../assets/cat.gif';
import dog from '../assets/dog.gif';
import pig from '../assets/pig.gif';
import duck from '../assets/duck.gif';
import cow from '../assets/cow.gif';
import bear from '../assets/bear.gif';
import pikachu from '../assets/pikachu.gif';
import catStill from '../assets/pets/cat.png';
import dogStill from '../assets/pets/dog.png';
import pigStill from '../assets/pets/pig.png';
import duckStill from '../assets/pets/duck.png';
import cowStill from '../assets/pets/cow.png';
import bearStill from '../assets/pets/bear.png';
import pikachuStill from '../assets/pets/pikachu.png';

const paused = ref(false);
const pets = [
  { name: 'cat', animated: cat, still: catStill, pace: 32, delay: -3, facing: 1 },
  { name: 'dog', animated: dog, still: dogStill, pace: 27, delay: -16, facing: 1 },
  { name: 'pig', animated: pig, still: pigStill, pace: 38, delay: -29, facing: 1 },
  { name: 'duck', animated: duck, still: duckStill, pace: 48, delay: -41, facing: 1 },
  { name: 'cow', animated: cow, still: cowStill, pace: 42, delay: -12, facing: -1 },
  { name: 'bear', animated: bear, still: bearStill, pace: 35, delay: -23, facing: 1 },
  { name: 'pikachu', animated: pikachu, still: pikachuStill, pace: 20, delay: -19, facing: 1 },
];
</script>

<template>
  <div class="walking-pets" :class="{ 'is-paused': paused }">
    <div class="pets-caption">
      <p>A few friends, tagging along.</p>
      <button class="pet-toggle" type="button" :aria-pressed="paused" @click="paused = !paused">{{ paused ? 'Resume animals' : 'Pause animals' }}</button>
    </div>
    <div class="pets-track" aria-hidden="true">
      <div v-for="(pet, index) in pets" :key="pet.name" class="pet-walker" :style="{ '--pace': pet.pace + 's', '--cycle': pet.pace * 2 + 's', '--delay': pet.delay + 's', '--facing': pet.facing, '--rest': index / (pets.length - 1) * 100 + '%' }">
        <picture class="pet-sprite">
          <source media="(prefers-reduced-motion: reduce)" :srcset="pet.still" />
          <img :src="paused ? pet.still : pet.animated" alt="" width="56" height="56" decoding="async" />
        </picture>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.walking-pets { --pet-size: 56px; margin-top: 40px; }
.pets-caption { display: flex; align-items: center; justify-content: space-between; gap: 16px; color: var(--muted); font-size: 13px; }
.pet-toggle { min-height: 44px; padding: 8px 0 8px 16px; border: 0; background: transparent; text-decoration: underline; text-underline-offset: 4px; font-size: 13px; }
.pet-toggle:hover { color: var(--accent); }
.pets-track { position: relative; height: 64px; overflow: hidden; }
.pet-walker { position: absolute; top: 0; left: 0; width: calc(100% - var(--pet-size)); height: var(--pet-size); transform: translateX(var(--rest)); animation: pet-stroll var(--pace) linear var(--delay) infinite alternate; }
.pet-sprite { display: block; width: var(--pet-size); height: var(--pet-size); transform: scaleX(var(--facing)); animation: pet-turn var(--cycle) step-end var(--delay) infinite; }
.pet-sprite img { width: 100%; height: 100%; object-fit: contain; image-rendering: pixelated; }
.is-paused .pet-walker, .is-paused .pet-sprite { animation-play-state: paused; }
@keyframes pet-stroll { from { transform: translateX(0); } to { transform: translateX(100%); } }
@keyframes pet-turn { 0%, 100% { transform: scaleX(var(--facing)); } 50% { transform: scaleX(calc(var(--facing) * -1)); } }
@media (max-width: 600px) {
  .walking-pets { --pet-size: 36px; margin-top: 24px; }
  .pets-track { height: 44px; }
}
@media (prefers-reduced-motion: reduce) {
  .pet-walker, .pet-sprite { animation: none; }
  .pet-toggle { display: none; }
}
</style>
