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
    <button class="pets-track" type="button" :aria-pressed="paused" :aria-label="paused ? 'Resume walking animation' : 'Pause walking animation'" :title="paused ? 'Resume animation' : 'Pause animation'" @click="paused = !paused">
      <span v-for="(pet, index) in pets" :key="pet.name" class="pet-walker" aria-hidden="true" :style="{ '--pace': pet.pace + 's', '--cycle': pet.pace * 2 + 's', '--delay': pet.delay + 's', '--facing': pet.facing, '--rest': index / (pets.length - 1) * 100 + '%' }">
        <picture class="pet-sprite">
          <source media="(prefers-reduced-motion: reduce)" :srcset="pet.still" />
          <img :src="paused ? pet.still : pet.animated" alt="" width="56" height="56" decoding="async" />
        </picture>
      </span>
    </button>
  </div>
</template>

<style scoped lang="scss">
.walking-pets { --pet-size: 56px; margin-top: auto; padding-top: 40px; }
.pets-track { display: block; position: relative; width: 100%; height: var(--pet-size); padding: 0; border: 0; background: transparent; overflow: hidden; }
.pet-walker { position: absolute; top: 0; left: 0; width: calc(100% - var(--pet-size)); height: var(--pet-size); transform: translateX(var(--rest)); animation: pet-stroll var(--pace) linear var(--delay) infinite alternate; }
.pet-sprite { display: block; width: var(--pet-size); height: var(--pet-size); transform: scaleX(var(--facing)); animation: pet-turn var(--cycle) step-end var(--delay) infinite; }
.pet-sprite img { width: 100%; height: 100%; object-fit: contain; image-rendering: pixelated; }
.is-paused .pet-walker, .is-paused .pet-sprite { animation-play-state: paused; }
@keyframes pet-stroll { from { transform: translateX(0); } to { transform: translateX(100%); } }
@keyframes pet-turn { 0%, 100% { transform: scaleX(var(--facing)); } 50% { transform: scaleX(calc(var(--facing) * -1)); } }
@media (max-width: 600px) {
  .walking-pets { --pet-size: 36px; padding-top: 24px; }
}
@media (min-width: 651px) and (max-height: 930px) {
  .walking-pets { padding-top: 28px; }
}
@media (min-width: 651px) and (max-height: 850px) {
  .walking-pets { padding-top: 20px; }
}
@media (prefers-reduced-motion: reduce) {
  .pet-walker, .pet-sprite { animation: none; }
}
</style>
