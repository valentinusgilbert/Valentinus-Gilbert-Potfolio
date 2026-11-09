<script setup>
import { ref } from 'vue';
import { identity, skillGroups, education } from '../data/profile';
import photo from '../assets/gilbert-photo.jpg';
const photoFailed = ref(false);
</script>

<template>
  <section id="about" class="about section-space" aria-labelledby="about-title">
    <div class="shell">
      <div class="about-top">
        <figure class="about-photo">
          <img v-if="!photoFailed" :src="photo" :alt="'Photo of ' + identity.name + ' in the mountains'" width="1000" height="911" loading="lazy" @error="photoFailed = true" />
          <div v-else class="photo-unavailable">Gilbert, away from the keyboard.<br />The photo couldn’t load this time.</div>
          <figcaption>A little time away from the screen.</figcaption>
        </figure>
        <div class="about-copy">
          <h2 id="about-title">More than<br />a browser tab.</h2>
          <p>I’m Valentinus Gilbert Sanjaya, a developer based in Tangerang Selatan. I like the part where a complicated idea finally starts to make sense on screen.</p>
          <p>I work across frontend, full-stack applications, and ERP consulting. Sometimes that means getting an interaction just right. Sometimes it means understanding how a factory actually works.</p>
          <p>I’m hands-on from the first conversation through design, development, and deployment. And yes, the little animals are staying.</p>
          <div class="about-education"><strong>{{ education.school }}</strong><span>{{ education.degree }}</span><span>{{ education.period.replaceAll('—', '–') }} · GPA {{ education.grade }}</span></div>
        </div>
      </div>
      <div class="skills">
        <h3>A few tools<br /> in my corner.</h3>
        <dl class="skills-list"><div v-for="group in skillGroups" :key="group.label" class="skill-group"><dt>{{ group.label }}</dt><dd>{{ group.items.join(' · ') }}</dd></div></dl>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.about { --accent: #b4beff; background: #171a26; color: #fff; }
.about-top { display: grid; grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr); align-items: center; gap: 80px; }
.about-photo { margin: 0; transform: rotate(-3deg); padding: 12px; border-radius: 24px; background: #fff; color: var(--ink); }
.about-photo img { width: 100%; aspect-ratio: 4 / 5; object-fit: cover; object-position: 48% center; border-radius: 14px; }
.about-photo figcaption { margin: 12px 6px 2px; font-size: 13px; color: #575b6b; }
.photo-unavailable { display: grid; align-content: center; min-height: 380px; padding: 24px; background: #eef0f5; border-radius: 14px; }
.about-copy h2 { font-size: clamp(36px, 4.8vw, 64px); }
.about-copy p { margin-top: 24px; color: #d3d6e0; font-size: 18px; }
.about-education { display: flex; flex-direction: column; align-items: flex-start; margin-top: 28px; font-size: 14px; color: #c6cbdc; }
.about-education strong { color: #fff; font-size: 18px; margin-bottom: 4px; }
.skills { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 2fr); gap: 48px; margin-top: 88px; }
.skills > h3 { font-size: 36px; }
.skills-list { margin: 0; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 32px 40px; }
dt { font-family: var(--display); font-size: 22px; font-weight: 600; }
dd { margin: 12px 0 0; color: #c6cbdc; }
@media (max-width: 900px) {
  .about-top { gap: 40px; }
  .skills { grid-template-columns: minmax(0, 1fr); gap: 28px; margin-top: 64px; }
  .skills > h3 br { display: none; }
}
@media (max-width: 650px) {
  .about-top { display: flex; flex-direction: column-reverse; gap: 40px; }
  .about-photo { width: calc(100% - 16px); }
  .about-photo img { aspect-ratio: 1; }
  .about-copy p { font-size: 16px; }
  .skills-list { grid-template-columns: minmax(0, 1fr); gap: 28px; }
}
</style>
