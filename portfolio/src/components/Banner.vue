<script setup>
import { social } from '../data/profile';
import WalkingPets from './WalkingPets.vue';
</script>

<template>
  <section id="home" class="hero shell" aria-labelledby="hero-title">
    <div class="hero-intro">
      <p>Frontend developer.<br />Full-stack thinker.</p>
      <p class="hero-location">Based in Tangerang Selatan, Indonesia.<br />Building for the people on the other side of the screen.</p>
    </div>
    <h1 id="hero-title">Hi, I’m <span translate="no">Gilbert<span class="hero-dot">.</span></span></h1>
    <div class="hero-bottom">
      <p>I design, build, and ship websites &amp; web apps.<br class="desktop-break" /> From the first sketch to the last deployment.</p>
      <a class="action" href="#projects">Explore my work <span aria-hidden="true">↓</span></a>
    </div>
    <div class="hero-note">
      <a :href="social.linkedin" target="_blank" rel="noopener noreferrer">Currently building ERP solutions at Toyo <span aria-hidden="true">↗</span></a>
      <span>Vue, Nuxt &amp; a thing for the details.</span>
    </div>
    <WalkingPets />
  </section>
</template>

<style scoped lang="scss">
.hero { padding-top: clamp(40px, 6vw, 88px); padding-bottom: 40px; }
.hero-intro, .hero-bottom, .hero-note { display: flex; align-items: flex-end; justify-content: space-between; gap: 32px; }
.hero-intro > p:first-child { font-size: 24px; line-height: 1.4; letter-spacing: -0.045em; }
.hero-location { max-width: 325px; font-size: 14px; color: var(--muted); }
h1 { margin-block: 40px 32px; font-size: clamp(72px, 13vw, 188px); font-weight: 500; letter-spacing: -0.075em; line-height: 0.95; }
h1 > span { font-family: 'Instrument Serif', Georgia, serif; font-style: italic; font-size: 1.18em; font-weight: 400; }
.hero-dot { color: var(--accent); }
.hero-bottom > p { font-size: clamp(16px, 1.5vw, 20px); max-width: 560px; }
.hero-note { margin-top: 64px; font-size: 13px; color: var(--muted); }
.hero-note a { text-decoration: none; }
.hero-note a:hover { text-decoration: underline; }
@media (max-width: 800px) {
  h1 { max-width: 100%; font-size: 15vw; }
  .hero-location { max-width: 240px; }
  .hero-note { align-items: flex-start; flex-direction: column; gap: 8px; margin-top: 40px; }
}
@media (max-width: 600px) {
  .hero-intro { align-items: flex-start; flex-direction: column; gap: 20px; }
  .hero-intro > p:first-child { font-size: 24px; }
  .hero-location { max-width: 280px; }
  h1 { font-size: 20vw; line-height: 1; margin-block: 32px; }
  h1 > span { display: block; font-size: 1.55em; margin-top: 4px; }
  .hero-bottom { flex-direction: column; align-items: flex-start; gap: 24px; }
  .desktop-break { display: none; }
}
</style>
