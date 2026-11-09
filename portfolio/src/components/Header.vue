<script setup>
import resume from '../assets/Resume - Valentinus Gilbert Sanjaya.pdf';
</script>

<template>
  <header class="site-header shell">
    <a class="site-name" href="#home" aria-label="Gilbert, back to home" translate="no">gilbert<span>.</span></a>
    <nav aria-label="Main navigation">
      <a href="#projects">Work</a>
      <a href="#experience">Experience</a>
      <a href="#about">About</a>
    </nav>
    <a class="resume-link" :href="resume" download="Valentinus-Gilbert-Sanjaya-Resume.pdf">Resume <span aria-hidden="true">↙</span></a>
  </header>
</template>

<style scoped lang="scss">
.site-header { display: flex; align-items: center; justify-content: space-between; gap: 24px; padding-block: 24px; }
.site-name { font-size: 30px; font-weight: 800; letter-spacing: -2px; text-decoration: none; line-height: 1.4; }
.site-name span { color: var(--accent); }
nav { display: flex; gap: 32px; }
nav a, .resume-link { display: inline-flex; align-items: center; gap: 16px; min-height: 44px; text-decoration: none; font-size: 14px; font-weight: 600; }
nav a:hover, .resume-link:hover { text-decoration: underline; }
@media (max-width: 600px) {
  .site-header { flex-wrap: wrap; gap: 8px 16px; padding-block: 16px; }
  nav { order: 3; width: 100%; justify-content: space-between; gap: 16px; }
  .site-name { font-size: 26px; }
}
</style>
