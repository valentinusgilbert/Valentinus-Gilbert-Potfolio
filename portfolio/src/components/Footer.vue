<script setup>
import { social } from '../data/profile';
const year = new Date().getFullYear();
</script>

<template>
  <footer class="footer">
    <div class="shell">
      <div class="footer-top">
        <p>Made with curiosity.<br /><span>And probably too many open tabs.</span></p>
        <nav aria-label="Social links">
          <a :href="social.github" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a :href="social.linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a :href="social.instagram" target="_blank" rel="noopener noreferrer">Instagram</a>
        </nav>
      </div>
      <a class="footer-name" href="#home" aria-label="Gilbert, back to top" translate="no">gilbert<span>.</span></a>
      <div class="footer-bottom"><p>© {{ year }} Valentinus Gilbert Sanjaya</p><a href="#home">Back to top ↑</a></div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer { --accent: #b4beff; background: #171a26; color: #fff; padding-block: 48px 24px; }
.footer-top, .footer-bottom { display: flex; align-items: center; justify-content: space-between; gap: 24px; font-size: 14px; }
.footer-top p > span { color: #c6cbdc; }
.footer-top nav { display: flex; gap: 24px; flex-wrap: wrap; }
.footer-top nav a, .footer-bottom a { display: inline-flex; align-items: center; min-height: 44px; text-decoration: none; }
.footer-top a:hover, .footer-bottom a:hover { text-decoration: underline; }
.footer-name { display: block; width: fit-content; font-family: var(--display); font-size: clamp(100px, 21vw, 290px); font-weight: 600; line-height: 1.1; letter-spacing: -0.025em; margin-block: 24px; text-decoration: none; }
.footer-name span { color: #aab7ff; }
.footer-bottom { color: #c6cbdc; font-size: 13px; }
@media (max-width: 650px) {
  .footer-top, .footer-bottom { flex-direction: column; align-items: flex-start; gap: 16px; }
  .footer-name { font-size: 25vw; margin-block: 28px; }
}
</style>
