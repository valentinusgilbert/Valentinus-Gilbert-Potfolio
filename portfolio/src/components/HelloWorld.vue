<template>
  <div class="hello-world">
    <span class="hello-world__message">{{ currentMessage }}</span>
  </div>
</template>

<script src="./js/helloworld.js"></script>

<style lang="scss" scoped>
.hello-world {
  font-size: clamp(20px, 3.6vw, 32px);
  font-weight: 800;
  min-height: 1.35em; // fixed height prevents layout shift while typing
  color: var(--accent-2);
  &__message {
    text-shadow: -3px 2px 2px rgba(0, 0, 0, 0.5);
  }
}
</style>
