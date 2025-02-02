<template>
  <div class="hello-world">
    <div class="hello-world__message">{{ currentMessage }}</div>
  </div>
</template>

<script src="./js/helloworld.js"></script>

<style lang="scss" scoped>
.hello-world {
  font-size: 40px;
  font-weight: bolder;
  height: 47px; // Set a fixed height to prevent movement
  @media (max-width: 768px) {
    font-size: 20px;
    height: 24px;
  }
}
</style>
