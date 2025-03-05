<template>
  <div class="about">
    <div class="about__container">
      <img src="../assets/work.gif" alt="Banner Image" />
      <div class="about__container-text">
        <div class="about__container-text-title">
          About Me
        </div>
        <div class="about__container-text-description">
          <br>
          Hi, My name is Valentinus Gilbert Sanjaya
          <br/>
          <br>
          I'm a software developer passionate about building applications.
          I have experience in web development, along with frameworks like Vue.js and React.js.
          <br>
          <br>
           Feel free to reach out—I'd love to connect and work together!
           <br>
           <br>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./js/project.js"></script>

<style lang="scss" scoped>
  .about {
    display: flex;
    padding: 32px 0px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 32px;
    &__container {
      display: flex;
      width: 825px;
      background-color: rgb(218, 117, 99);
      padding: 8px;
      border: 2px solid white;
      border-radius: 8px;
      gap: 12px;
      align-items: center;
      @media (max-width: 768px) {
        width: 336px;
      }
    }
  }
</style>
