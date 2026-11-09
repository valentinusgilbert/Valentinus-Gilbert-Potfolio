<script setup>
import { identity, skillGroups, education } from '../data/profile';
import photo from '../assets/gilbert-photo.jpg';
import { ref } from 'vue';
const photoFailed = ref(false);
</script>

<template>
  <section id="about" class="about shell section-space" aria-labelledby="about-title">
    <div class="about-top">
      <figure class="about-photo">
        <img v-if="!photoFailed" :src="photo" :alt="'Photo of ' + identity.name + ' in the mountains'" width="1000" height="911" loading="lazy" @error="photoFailed = true" />
        <div v-else class="photo-unavailable">Gilbert, away from the keyboard.<br />The photo couldn’t load this time.</div>
        <figcaption>A little time away from the screen.</figcaption>
      </figure>
      <div class="about-copy">
        <h2 id="about-title">A person.<br />Then a developer.</h2>
        <p>I’m Valentinus Gilbert Sanjaya, a developer based in Tangerang Selatan. I like turning a complicated brief into an interface that feels straightforward.</p>
        <p>My work spans frontend development, full-stack applications, and ERP consulting. These days, I build custom mcframe modules and supporting systems for manufacturing clients at Toyo Business Engineering Indonesia.</p>
        <p>I’m hands-on across the whole process: figuring out what to build, designing it, writing the code, and getting it online.</p>
        <p class="about-education">{{ education.degree }} · {{ education.school }}<br />{{ education.period.replaceAll('—', '–') }} · GPA {{ education.grade }}</p>
      </div>
    </div>
    <div class="skills">
      <h3>What I work with</h3>
      <dl class="skills-list">
        <div v-for="group in skillGroups" :key="group.label" class="skill-group">
          <dt>{{ group.label }}</dt>
          <dd>{{ group.items.join(' · ') }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<style scoped lang="scss">
.about-top { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr); align-items: start; gap: 80px; }
.about-photo { margin: 0; }
.about-photo img { width: 100%; aspect-ratio: 4 / 5; object-fit: cover; object-position: 48% center; }
.about-photo figcaption { margin-top: 12px; font-size: 13px; color: var(--muted); }
.photo-unavailable { display: grid; align-content: center; min-height: 400px; padding: 32px; background: var(--surface); color: var(--muted); }
.about-copy h2 { font-size: clamp(36px, 4.3vw, 62px); }
.about-copy p { margin-top: 24px; }
.about-education { color: var(--muted); font-size: 14px; }
.skills { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 2fr); gap: 40px; margin-top: 80px; }
.skills-list { margin: 0; display: grid; gap: 24px; }
.skill-group { display: grid; grid-template-columns: 170px minmax(0, 1fr); gap: 24px; }
dt { font-weight: 600; }
dd { margin: 0; color: var(--muted); }
@media (max-width: 900px) {
  .about-top { gap: 40px; }
  .skills { grid-template-columns: minmax(0, 1fr); gap: 24px; margin-top: 56px; }
}
@media (max-width: 650px) {
  .about-top { display: flex; flex-direction: column-reverse; }
  .about-photo { width: 100%; }
  .about-photo img { aspect-ratio: 1; }
  .skill-group { grid-template-columns: minmax(0, 1fr); gap: 4px; }
}
</style>
