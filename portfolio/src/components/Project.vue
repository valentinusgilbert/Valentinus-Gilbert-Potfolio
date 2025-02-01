<template>
  <div class="project">
    <div class="project__container">
      <div class="project__container-title">
        Project
      </div>
      .
    </div>
  </div>
</template>

<script src="./js/project.js"></script>

<style lang="scss" scoped>
  .project {
    padding: 32px 0px;
    &__container {
      display: flex;
      width: 780px;
      padding: 32px;
      background-color: rgb(212, 182, 115);
      border: 2px solid white;
      border-radius: 8px;
      flex-direction: column;
      gap: 24px;
      @media (max-width: 768px) {
        width: 336px;
        padding: 12px;
        gap: 20px;
      }
      &-title {
        font-size: 32px;
        font-weight: bold;
        text-shadow: -3px 2px 2px rgba(0, 0, 0, 0.5);
        background-color: rgb(204, 149, 66);
        padding: 4px 12px;
        border-radius: 8px;
        box-shadow: -2px 4px 8px rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    
  }
</style>
