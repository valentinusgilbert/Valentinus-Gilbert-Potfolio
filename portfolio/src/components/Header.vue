<script setup>
import resume from '../assets/Resume - Valentinus Gilbert Sanjaya.pdf';
</script>

<template>
  <header class="header-wrap">
    <div class="site-header shell">
      <a class="site-name" href="#home" aria-label="Gilbert, back to home" translate="no">gilbert<span>.</span></a>
      <nav aria-label="Main navigation">
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#about">About me</a>
      </nav>
      <a class="resume-link" :href="resume" download="Valentinus-Gilbert-Sanjaya-Resume.pdf">Resume <span aria-hidden="true">↙</span></a>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header-wrap { position: sticky; top: 0; z-index: 20; background: #ffffffed; backdrop-filter: blur(12px); }
.site-header { display: flex; align-items: center; justify-content: space-between; gap: 24px; padding-block: 18px; }
.site-name { font-family: var(--display); font-size: 32px; font-weight: 800; letter-spacing: -2px; text-decoration: none; line-height: 1.4; }
.site-name span { color: var(--accent); }
nav { display: flex; gap: 4px; padding: 5px; background: var(--surface); border-radius: 999px; }
nav a, .resume-link { display: inline-flex; align-items: center; justify-content: center; gap: 14px; min-height: 44px; padding: 10px 20px; text-decoration: none; font-size: 14px; font-weight: 500; border-radius: 999px; transition: background-color 180ms, color 180ms; }
nav a:hover { background: #fff; color: var(--accent); }
.resume-link { background: var(--ink); color: #fff; }
.resume-link:hover { background: var(--accent); color: #fff; }
@media (max-width: 650px) {
  .site-header { flex-wrap: wrap; gap: 12px 16px; padding-block: 12px; }
  nav { order: 3; width: 100%; justify-content: space-between; gap: 0; padding: 4px; }
  nav a { padding-inline: 12px; flex: 1; }
  .site-name { font-size: 28px; }
  .resume-link { min-height: 40px; padding: 8px 16px; }
}
</style>
