<script setup>
import Header from './components/Header.vue';
import Banner from './components/Banner.vue';
import Projects from './components/Projects.vue';
import Experience from './components/Experience.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <a class="skip-link" href="#main">Skip to content</a>
  <Header />
  <main id="main" tabindex="-1">
    <Banner />
    <Projects />
    <Experience />
    <About />
    <Contact />
  </main>
  <Footer />
</template>
