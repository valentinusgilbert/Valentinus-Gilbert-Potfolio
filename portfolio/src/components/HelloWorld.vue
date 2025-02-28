<template>
  <div class="hello-world">
    <div class="hello-world__message">{{ currentMessage }}</div>
  </div>
</template>

<script src="./js/helloworld.js"></script>

<style lang="scss" scoped>
.hello-world {
  text-align: center;
  margin: 20px 0;
  font-size: 24px;
  height: 40px; // Set a fixed height to prevent movement

  &__message {
    color: red;
  }
}
</style>
