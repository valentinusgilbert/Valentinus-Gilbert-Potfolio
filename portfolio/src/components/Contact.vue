<script setup>
import { ref } from 'vue';
import { social } from '../data/profile';

const name = ref('');
const message = ref('');
const feedback = ref('');

const sendMessage = (event) => {
  if (!name.value.trim() || !message.value.trim()) {
    feedback.value = 'Please add your name and a message before opening WhatsApp.';
    const field = event.currentTarget.elements.namedItem(!name.value.trim() ? 'name' : 'message');
    field.setCustomValidity('Please enter more than spaces.');
    field.reportValidity();
    return;
  }
  const text = `Hi Gilbert! I’m ${name.value.trim()}. ${message.value.trim()}`;
  const opened = window.open(
    `https://wa.me/${social.whatsappNumber}?text=${encodeURIComponent(text)}`,
    '_blank',
  );
  if (opened) {
    opened.opener = null;
    feedback.value = 'WhatsApp opened. Your message stays here until you’re done.';
  } else {
    feedback.value = 'Your browser blocked the new tab. Allow pop-ups, then try again, or use the WhatsApp link below.';
  }
};
</script>

<template>
  <section id="contact" class="contact section-space" aria-labelledby="contact-title">
    <div class="shell contact-layout">
      <div class="contact-copy">
        <h2 id="contact-title">Let’s make<br />something click.</h2>
        <p>A website, an app, an ERP challenge, or a team I should meet. Tell me what you’re working on.</p>
        <a class="text-link" :href="social.whatsapp" target="_blank" rel="noopener noreferrer">Say hello on WhatsApp <span aria-hidden="true">↗</span></a>
      </div>
      <form @submit.prevent="sendMessage">
        <label for="contact-name">Your name</label>
        <input id="contact-name" v-model="name" name="name" autocomplete="name" placeholder="Your name…" required maxlength="120" @input="feedback = ''; $event.target.setCustomValidity('')" />
        <label for="contact-message">What are you thinking?</label>
        <textarea id="contact-message" v-model="message" name="message" autocomplete="off" rows="4" placeholder="Tell me a little about your project…" required maxlength="4000" @input="feedback = ''; $event.target.setCustomValidity('')"></textarea>
        <button class="action" type="submit">Open WhatsApp <span aria-hidden="true">↗</span></button>
        <p class="contact-note">You’ll review and send your message in WhatsApp.</p>
        <p v-if="feedback" class="contact-feedback" role="status">{{ feedback }}</p>
      </form>
    </div>
  </section>
</template>

<style scoped lang="scss">
.contact { background: #fff; }
.contact-layout { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 72px; padding: 48px; border-radius: 28px; background: #eef0ff; }
.contact-copy p { max-width: 420px; margin-top: 24px; }
.contact-copy .text-link { margin-top: 24px; }
form { display: flex; flex-direction: column; align-items: flex-start; }
label { font-weight: 600; font-size: 14px; margin-bottom: 8px; }
input, textarea { width: 100%; min-width: 0; border: 1px solid #a4abc5; background: var(--paper); color: var(--ink); border-radius: 10px; padding: 12px 16px; margin-bottom: 24px; }
input::placeholder, textarea::placeholder { color: var(--muted); }
textarea { resize: vertical; min-height: 140px; }
.contact-note { margin-top: 12px; font-size: 13px; color: var(--muted); }
.contact-feedback { margin-top: 12px; }
@media (max-width: 900px) { .contact-layout { gap: 36px; padding: 32px; } }
@media (max-width: 650px) { .contact-layout { grid-template-columns: minmax(0, 1fr); gap: 32px; padding: 24px; border-radius: 20px; } }
</style>
