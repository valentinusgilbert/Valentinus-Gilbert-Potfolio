<script setup>
import { computed, ref } from 'vue';
import { featuredProjects, social } from '../data/profile';
import WalkingPets from './WalkingPets.vue';
import portrait from '../assets/self-photo.png';

const modes = [
  { id: 'frontend', label: 'Frontend', title: 'A good interface makes all the difference.', description: 'I turn designs into responsive websites that feel good to use. Vue, Nuxt, React, and the details in between.', project: featuredProjects[1], color: '#eef0ff' },
  { id: 'fullstack', label: 'Full-stack', title: 'From the first sketch to going live.', description: 'Product planning, interface design, frontend, backend, and deployment. I like seeing the whole thing through.', project: featuredProjects[0], color: '#eaf3f0' },
  { id: 'erp', label: 'ERP', title: 'There’s a business behind every screen.', description: 'At Toyo, I build custom mcframe ERP modules and full-stack subsystems around how manufacturing teams actually work.', color: '#fff2dc' },
];
const activeMode = ref(0);
const previewFailed = ref(false);
const mode = computed(() => modes[activeMode.value]);
</script>

<template>
  <section id="home" class="hero shell" aria-labelledby="hero-title">
    <div class="hero-greeting"><span class="hello-mark">Halo!</span> Hello from Tangerang Selatan.</div>
    <h1 id="hero-title">Hi, I’m <span translate="no">Gilbert.</span></h1>
    <div class="hero-tabs" role="group" aria-label="Explore the work I do">
      <button v-for="(item, index) in modes" :key="item.id" :aria-pressed="activeMode === index" :data-mode="item.id" @click="activeMode = index; previewFailed = false">{{ item.label }}</button>
    </div>
    <p class="hero-summary">Frontend developer. Full-stack builder.<br />I turn ideas into websites people can use.</p>
    <div class="hero-actions">
      <a class="action" href="#projects">Come see what I build <span aria-hidden="true">↗</span></a>
      <a class="hero-contact" href="#contact">Let’s talk</a>
    </div>

    <div class="workbench">
      <div class="portrait-note">
        <div class="portrait-stage"><img :src="portrait" alt="Valentinus Gilbert Sanjaya" width="1396" height="1450" fetchpriority="high" /></div>
        <p>One person.<br /><strong>Quite a few hats.</strong></p>
        <a :href="social.linkedin" target="_blank" rel="noopener noreferrer">Currently at Toyo ↗</a>
      </div>
      <div class="preview-stage" :style="{ '--stage': mode.color }">
        <Transition name="preview-swap" mode="out-in">
          <div :key="mode.id" class="preview-content">
            <template v-if="mode.project">
              <a class="hero-browser" :href="'#' + mode.project.id" :aria-label="'Explore ' + mode.project.title">
                <div class="browser-toolbar"><span class="browser-dots" aria-hidden="true"><i></i><i></i><i></i></span><span translate="no">{{ mode.project.domain }}</span><span aria-hidden="true">↗</span></div>
                <img v-if="!previewFailed" :src="mode.project.image" :alt="mode.project.title + ' website preview'" width="1440" height="1050" @error="previewFailed = true" />
                <p v-else class="hero-preview-fallback">{{ mode.project.title }}<br />Explore the project below.</p>
              </a>
            </template>
            <div v-else class="erp-preview">
              <span class="erp-name" translate="no">mcframe<span> / </span>ERP</span>
              <p>Built around<br /><strong>the way you work.</strong></p>
              <div class="erp-capabilities"><span>Business requirements</span><span>Custom modules</span><span>Full-stack subsystems</span></div>
              <a href="#experience" class="text-link">My work at Toyo <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </Transition>
        <div class="mode-description" aria-live="polite"><h2>{{ mode.title }}</h2><p>{{ mode.description }}</p></div>
      </div>
    </div>
    <WalkingPets />
  </section>
</template>

<style scoped lang="scss">
.hero { padding-block: 40px 28px; }
.hero-greeting { display: flex; justify-content: center; align-items: center; gap: 10px; font-size: 15px; color: var(--muted); }
.hello-mark { font-family: var(--display); font-size: 24px; font-weight: 700; line-height: 1; color: var(--accent); transform: rotate(-8deg); }
h1 { text-align: center; font-size: clamp(58px, 8.2vw, 118px); font-weight: 650; letter-spacing: -0.035em; margin-block: 18px 24px; animation: name-arrive 800ms var(--ease) both; }
h1 > span { color: var(--accent); }
.hero-tabs { display: flex; justify-content: center; flex-wrap: wrap; gap: 8px; }
.hero-tabs button { border: 0; border-radius: 999px; min-height: 44px; padding: 9px 22px; background: var(--surface); font-weight: 600; transition: background-color 180ms, color 180ms, transform 180ms; }
.hero-tabs button:hover { background: #e8eaff; transform: translateY(-2px); }
.hero-tabs button[aria-pressed="true"] { background: var(--accent); color: #fff; }
.hero-summary { margin-top: 20px; text-align: center; font-size: 18px; color: var(--muted); }
.hero-actions { display: flex; justify-content: center; align-items: center; gap: 28px; margin-top: 24px; }
.hero-contact { min-height: 44px; display: inline-flex; align-items: center; font-weight: 600; }
.workbench { display: grid; grid-template-columns: 240px minmax(0, 1fr); align-items: center; gap: 56px; max-width: 1010px; margin: 36px auto 0; animation: workbench-arrive 900ms var(--ease) both; }
.portrait-note { transform: rotate(-5deg); text-align: center; transition: transform 350ms var(--ease); }
.portrait-note:hover { transform: rotate(0); }
.portrait-stage { border-radius: 110px 110px 48px 48px; overflow: hidden; background: #ffedcb; padding: 20px 4px 0; }
.portrait-stage img { width: 100%; aspect-ratio: 1; object-fit: cover; object-position: top; }
.portrait-note p { margin-top: 14px; font-family: var(--display); font-size: 24px; line-height: 1.15; letter-spacing: -0.03em; }
.portrait-note > a { display: inline-flex; min-height: 44px; align-items: center; font-size: 13px; color: var(--muted); }
.preview-stage { background: var(--stage); border-radius: 28px; padding: 24px; min-width: 0; }
.preview-content { min-height: 268px; }
.hero-browser { display: block; border-radius: 12px; overflow: hidden; background: #fff; text-decoration: none; transform: rotate(2deg); transition: transform 400ms var(--ease); }
.hero-browser:hover { transform: rotate(0) translateY(-4px); }
.browser-toolbar { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 10px 14px; font-size: 13px; color: var(--muted); }
.browser-dots { display: inline-flex; gap: 5px; }
.browser-dots i { width: 7px; height: 7px; border-radius: 50%; background: #d0d2dc; }
.hero-browser img { width: 100%; aspect-ratio: 2.4; object-fit: cover; object-position: top; }
.mode-description { margin-top: 24px; }
.mode-description h2 { font-size: 22px; letter-spacing: -0.035em; }
.mode-description p { margin-top: 8px; font-size: 14px; color: var(--muted); }
.erp-preview { display: flex; flex-direction: column; justify-content: space-between; gap: 16px; min-height: 268px; background: #fffdf6; padding: 24px; border-radius: 14px; }
.erp-name { font-size: 14px; font-weight: 700; }
.erp-name > span { color: #8a702d; }
.erp-preview > p { font-family: var(--display); font-size: clamp(28px, 3vw, 44px); line-height: 1.1; letter-spacing: -0.045em; }
.erp-capabilities { display: flex; flex-wrap: wrap; gap: 8px; }
.erp-capabilities > span { padding: 5px 10px; border-radius: 6px; background: #f5ecd4; font-size: 13px; }
.erp-preview .text-link { font-size: 14px; }
.hero-preview-fallback { min-height: 230px; display: grid; align-content: center; padding: 24px; }
.preview-swap-enter-active, .preview-swap-leave-active { transition: opacity 170ms, transform 220ms var(--ease); }
.preview-swap-enter-from { opacity: 0; transform: translateY(8px); }
.preview-swap-leave-to { opacity: 0; transform: translateY(-8px); }
@keyframes name-arrive { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
@keyframes workbench-arrive { from { opacity: 0; transform: translateY(16px) scale(0.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
@media (max-width: 900px) {
  .workbench { grid-template-columns: 170px minmax(0, 1fr); gap: 28px; }
  .preview-content { min-height: 220px; }
  .portrait-note p { font-size: 20px; }
}
@media (max-width: 650px) {
  .hero { padding-top: 40px; }
  .hero-greeting { font-size: 13px; }
  .hello-mark { font-size: 24px; }
  h1 { font-size: clamp(54px, 11.5vw, 75px); }
  .hero-tabs { gap: 6px; }
  .hero-tabs button { padding-inline: 17px; font-size: 14px; }
  .hero-summary { font-size: 16px; }
  .hero-actions { gap: 16px; flex-wrap: wrap; }
  .hero-actions .action { font-size: 14px; padding-inline: 20px; }
  .workbench { display: flex; flex-direction: column; gap: 28px; margin-top: 36px; }
  .portrait-note { display: grid; grid-template-columns: 76px 1fr; column-gap: 16px; text-align: left; transform: rotate(-3deg); align-items: center; max-width: 280px; }
  .portrait-stage { grid-row: span 2; border-radius: 50%; padding: 6px 0 0; }
  .portrait-note p { margin-top: 0; font-size: 20px; }
  .portrait-note > a { min-height: 32px; }
  .preview-stage { width: 100%; padding: 16px; border-radius: 20px; }
  .preview-content { min-height: 168px; }
  .browser-toolbar { gap: 8px; padding: 8px 10px; font-size: 13px; }
  .browser-dots { gap: 3px; }
  .browser-dots i { width: 5px; height: 5px; }
  .hero-browser { transform: rotate(1deg); }
  .mode-description h2 { font-size: 20px; }
  .mode-description p { font-size: 14px; }
  .erp-preview { min-height: 220px; padding: 16px; }
}
</style>
