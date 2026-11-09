<script setup>
import { social } from '../data/profile';
const year = new Date().getFullYear();
</script>

<template>
  <footer class="footer shell">
    <div class="footer-top">
      <p>Designed &amp; built by Gilbert.<br /><span class="muted">From Tangerang Selatan, with care.</span></p>
      <nav aria-label="Social links">
        <a :href="social.github" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a :href="social.linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a :href="social.instagram" target="_blank" rel="noopener noreferrer">Instagram</a>
      </nav>
    </div>
    <a class="footer-name" href="#home" aria-label="Gilbert, back to top" translate="no">Gilbert<span>.</span></a>
    <div class="footer-bottom"><p>© {{ year }} Valentinus Gilbert Sanjaya</p><a href="#home">Back to top ↑</a></div>
  </footer>
</template>

<style scoped lang="scss">
.footer { padding-block: 48px 24px; }
.footer-top, .footer-bottom { display: flex; align-items: center; justify-content: space-between; gap: 24px; font-size: 14px; }
.footer-top nav { display: flex; gap: 24px; flex-wrap: wrap; }
.footer-top nav a, .footer-bottom a { display: inline-flex; align-items: center; min-height: 44px; text-decoration: none; }
.footer-top a:hover, .footer-bottom a:hover { text-decoration: underline; }
.footer-name { display: block; width: fit-content; font-family: 'Instrument Serif', Georgia, serif; font-style: italic; font-size: clamp(100px, 22vw, 330px); line-height: 1.1; letter-spacing: -0.06em; margin-block: 24px; text-decoration: none; }
.footer-name span { color: var(--accent); }
.footer-bottom { color: var(--muted); font-size: 13px; }
@media (max-width: 650px) {
  .footer-top, .footer-bottom { flex-direction: column; align-items: flex-start; gap: 16px; }
  .footer-top nav { gap: 24px; }
  .footer-name { font-size: 28vw; }
}
</style>
