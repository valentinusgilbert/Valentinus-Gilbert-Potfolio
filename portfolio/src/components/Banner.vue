<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { social } from '../data/profile';
import WalkingPets from './WalkingPets.vue';
import HeroChase from './HeroChase.vue';
import portrait from '../assets/self-photo.png';
import resume from '../assets/Resume - Valentinus Gilbert Sanjaya.pdf';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

const profileLinks = [
  { label: 'GitHub', href: social.github, icon: faGithub },
  { label: 'LinkedIn', href: social.linkedin, icon: faLinkedinIn },
  { label: 'CV', href: resume, icon: faFileArrowDown, download: 'Valentinus-Gilbert-Sanjaya-Resume.pdf' },
];
const portraitTilt = ref({ '--tilt-x': '0deg', '--tilt-y': '0deg' });
let portraitFrame;
const resetPortrait = () => {
  window.cancelAnimationFrame(portraitFrame);
  portraitTilt.value = { '--tilt-x': '0deg', '--tilt-y': '0deg' };
};
const followPortrait = (event) => {
  if (event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const target = event.currentTarget;
  const { clientX, clientY } = event;
  window.cancelAnimationFrame(portraitFrame);
  portraitFrame = window.requestAnimationFrame(() => {
    const box = target.getBoundingClientRect();
    portraitTilt.value = {
      '--tilt-x': ((clientY - box.top) / box.height - 0.5) * -8 + 'deg',
      '--tilt-y': ((clientX - box.left) / box.width - 0.5) * 8 + 'deg',
    };
  });
};

const roles = [
  { label: 'Frontend', description: 'Frontend developer building responsive interfaces with Vue, Nuxt, and React.' },
  { label: 'Full-stack', description: 'From product planning and design to frontend, backend, and deployment. I build the whole thing.' },
  { label: 'ERP', description: 'At Toyo, I build custom mcframe modules and supporting systems for manufacturing teams.' },
];
const activeRole = ref(0);
const greetings = ['Halo!', 'Hello!', 'Hola!', 'Bonjour!', 'Ciao!', 'Hallo!', 'こんにちは!'];
const greetingIndex = ref(0);
const greetingPaused = ref(false);
const greetingText = ref(greetings[0]);
let deleting = true;
let holdTicks = 16;
let greetingTimer;
let motionPreference;
const syncGreetingMotion = () => {
  if (motionPreference.matches) {
    greetingText.value = greetings[greetingIndex.value];
    deleting = true;
    holdTicks = 16;
  }
};
onMounted(() => {
  motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  motionPreference.addEventListener('change', syncGreetingMotion);
  greetingTimer = window.setInterval(() => {
    if (greetingPaused.value || motionPreference.matches || document.hidden) return;
    if (holdTicks > 0) { holdTicks--; return; }
    const letters = Array.from(greetingText.value);
    if (deleting) {
      greetingText.value = letters.slice(0, -1).join('');
      if (!greetingText.value) {
        greetingIndex.value = (greetingIndex.value + 1) % greetings.length;
        deleting = false;
        holdTicks = 2;
      }
    } else {
      greetingText.value = Array.from(greetings[greetingIndex.value]).slice(0, letters.length + 1).join('');
      if (greetingText.value === greetings[greetingIndex.value]) { deleting = true; holdTicks = 16; }
    }
  }, 110);
});
onBeforeUnmount(() => {
  window.clearInterval(greetingTimer);
  motionPreference?.removeEventListener('change', syncGreetingMotion);
  window.cancelAnimationFrame(portraitFrame);
});
</script>

<template>
  <section id="home" class="hero shell" aria-labelledby="hero-title">
    <div class="hero-layout">
      <HeroChase />
      <div class="hero-copy">
        <button class="hero-greeting" type="button" :aria-pressed="greetingPaused" :aria-label="greetingPaused ? 'Resume typing greeting' : 'Pause typing greeting'" :title="greetingPaused ? 'Resume greeting' : 'Pause greeting'" @click="greetingPaused = !greetingPaused"><span class="greeting-text" :class="{ 'is-paused': greetingPaused }" aria-hidden="true">{{ greetingText }}</span></button>
        <h1 id="hero-title">I’m <span translate="no">Gilbert.</span></h1>
        <div class="hero-tabs" role="group" aria-label="Explore what I do"><button v-for="(role, index) in roles" :key="role.label" :data-role="index" :aria-pressed="activeRole === index" @click="activeRole = index">{{ role.label }}</button></div>
        <p class="hero-summary" aria-live="polite">{{ roles[activeRole].description }}</p>
        <div class="hero-actions">
          <a class="action" href="#projects">Explore my projects <span aria-hidden="true">↗</span></a>
          <a class="hero-contact" href="#contact">Let’s talk</a>
        </div>
        <a class="hero-status" :href="social.linkedin" target="_blank" rel="noopener noreferrer">Currently building ERP solutions at Toyo <span aria-hidden="true">↗</span></a>
      </div>
      <nav class="hero-socials" aria-label="Profile links and CV">
        <a v-for="link in profileLinks" :key="link.label" :href="link.href" :download="link.download" :target="link.download ? undefined : '_blank'" :rel="link.download ? undefined : 'noopener noreferrer'">
          <svg :viewBox="'0 0 ' + link.icon.icon[0] + ' ' + link.icon.icon[1]" aria-hidden="true" focusable="false"><path :d="link.icon.icon[4]" /></svg>
          {{ link.label }}
        </a>
      </nav>
      <figure class="hero-portrait">
        <div class="portrait-interaction" @pointermove="followPortrait" @pointerleave="resetPortrait" @pointercancel="resetPortrait">
          <div class="portrait-stage" :style="portraitTilt"><img :src="portrait" alt="Valentinus Gilbert Sanjaya" width="1396" height="1450" fetchpriority="high" /></div>
        </div>
        <figcaption>Design. Code. Deploy.</figcaption>
      </figure>
    </div>
    <WalkingPets />
  </section>
</template>

<style scoped lang="scss">
.hero { padding-block: 64px 28px; }
.hero-layout { position: relative; isolation: isolate; display: grid; grid-template-columns: minmax(0, 1.25fr) minmax(0, 0.85fr); grid-template-areas: 'copy portrait' 'socials portrait'; gap: 20px 64px; align-items: center; }
.hero-copy { grid-area: copy; }
.hero-socials { grid-area: socials; display: flex; flex-wrap: wrap; gap: 8px; }
.hero-socials a { display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 44px; padding: 10px 16px; border-radius: 999px; background: var(--surface); font-size: 14px; font-weight: 500; text-decoration: none; transition: transform 180ms, background-color 180ms, color 180ms; }
.hero-socials a:hover { background: var(--accent); color: #fff; transform: translateY(-3px); }
.hero-socials svg { width: 16px; height: 16px; fill: currentColor; }
.hero-greeting { display: flex; align-items: center; min-height: 44px; border: 0; padding: 0 4px; background: transparent; color: var(--muted); font-size: 16px; text-align: left; }
.hero-greeting > span { min-width: 10ch; min-height: 1.4em; font-family: var(--display); font-size: 26px; font-weight: 700; color: var(--accent); }
.greeting-text::after { content: ''; display: inline-block; width: 2px; height: 0.9em; margin-left: 4px; background: currentColor; vertical-align: -0.04em; animation: greeting-caret 900ms step-end infinite; }
.greeting-text.is-paused::after { animation-play-state: paused; }
@keyframes greeting-caret { 50% { opacity: 0; } }
h1 { font-size: clamp(72px, 8vw, 116px); font-weight: 650; line-height: 0.98; letter-spacing: -0.035em; margin-block: 24px; animation: name-arrive 800ms var(--ease) both; }
h1 > span { display: block; color: var(--accent); }
.hero-summary { font-size: 20px; color: var(--muted); max-width: 530px; }
.hero-tabs { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px; }
.hero-tabs button { min-height: 44px; border: 0; border-radius: 999px; padding: 9px 20px; background: var(--surface); font-size: 14px; font-weight: 600; transition: background-color 180ms, color 180ms; }
.hero-tabs button:hover { background: #e7eaff; }
.hero-tabs button[aria-pressed="true"] { background: var(--accent); color: #fff; }
.hero-actions { display: flex; align-items: center; flex-wrap: wrap; gap: 28px; margin-top: 28px; }
.hero-contact { min-height: 44px; display: inline-flex; align-items: center; font-weight: 600; }
.hero-status { display: inline-flex; align-items: center; min-height: 44px; gap: 8px; margin-top: 20px; font-size: 14px; color: var(--muted); text-decoration: none; }
.hero-status:hover { color: var(--accent); text-decoration: underline; }
.hero-portrait { grid-area: portrait; margin: 0; min-width: 0; transform: rotate(3deg); transition: transform 450ms var(--ease); animation: portrait-arrive 900ms var(--ease) both; }
.hero-portrait:hover { transform: rotate(0) translateY(-4px); }
.portrait-stage { padding: 24px 12px 0; border-radius: 48% 48% 28% 28%; overflow: hidden; background: #ffedcb; transform: perspective(900px) rotateX(var(--tilt-x)) rotateY(var(--tilt-y)); transition: transform 180ms ease-out; }
.portrait-stage img { width: 100%; aspect-ratio: 0.95; object-fit: cover; object-position: top; }
figcaption { margin-top: 18px; text-align: center; font-size: 13px; color: var(--muted); }
@keyframes name-arrive { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
@keyframes portrait-arrive { from { opacity: 0; translate: 0 16px; } to { opacity: 1; translate: 0 0; } }
@media (max-width: 950px) {
  .hero-layout { grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr); gap: 32px; }
  .hero-summary { font-size: 18px; }
}
@media (max-width: 650px) {
  .hero { padding-top: 36px; }
  .hero-layout { grid-template-columns: minmax(0, 1fr) 120px; grid-template-areas: 'greeting portrait' 'title portrait' 'roles roles' 'summary summary' 'actions actions' 'status status' 'socials socials'; gap: 0 16px; }
  .hero-copy { display: contents; }
  .hero-greeting { grid-area: greeting; align-self: end; flex-wrap: wrap; gap: 4px 8px; font-size: 13px; }
  .hero-greeting > span { font-size: 22px; }
  h1 { grid-area: title; font-size: clamp(48px, 11vw, 70px); margin-block: 16px 20px; }
  .hero-summary { grid-area: summary; font-size: 18px; margin-top: 16px; }
  .hero-tabs { grid-area: roles; margin-top: 8px; margin-bottom: 0; }
  .hero-tabs button { padding-inline: 17px; }
  .hero-actions { grid-area: actions; margin-top: 24px; gap: 24px; }
  .hero-actions .action { font-size: 14px; padding-inline: 20px; }
  .hero-status { grid-area: status; margin-top: 12px; font-size: 13px; }
  .hero-socials { margin-top: 12px; }
  .hero-socials a { padding-inline: 10px; gap: 6px; font-size: 13px; }
  .hero-portrait { grid-area: portrait; width: 100%; }
  .portrait-stage { padding: 10px 2px 0; }
  figcaption { display: none; }
}
@media (max-width: 360px) {
  .hero-layout { grid-template-columns: minmax(0, 1fr) 96px; gap: 0 12px; }
  h1 { font-size: 46px; }
}
@media (prefers-reduced-motion: reduce) {
  .portrait-stage, .hero-portrait, .hero-portrait:hover { transform: none; }
  .greeting-text::after { display: none; }
}
</style>
