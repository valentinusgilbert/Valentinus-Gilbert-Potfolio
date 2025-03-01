<template>
  <div class="about">
    <div class="about__container">
      <img src="../assets/work.gif" alt="Banner Image" />
      <div class="about__container-text">
        <div class="about__container-text-title">
          About Me
        </div>
        <div class="about__container-text-description">
          Hi, My name is Valentinus Gilbert Sanjaya
          <br/>
          <br>
          I'm a software developer passionate about building applications.
          I have experience in web development, along with frameworks like Vue.js and React.js.
          <br>
          <br>
           I always eager to learn new technologies, I look forward to collaborating on exciting projects.
          
          <br>
          <br>
           Feel free to reach out—I'd love to connect and work together!
        </div>
      </div>
    </div>
    <div class="about__education">
      <div class="about__education-title">
        Education
      </div>
      <div class="about__education-description">
        <div class="about__education-description-item">
          <div class="about__education-description-item-container">
            <div class="about__education-description-item-period">
              2021 - 2025
            </div>
            <div class="about__education-description-item-title">
              Bachelor of Computer Science
            </div>
            <div class="about__education-description-item-description">
              Universitas Bina Nusantara
            </div>
          </div>
        </div>
        <div class="about__education-description-item">
          <div class="about__education-description-item-container">
            <div class="about__education-description-item-period">
              2018 - 2021
            </div>
            <div class="about__education-description-item-title">
              Highshool
            </div>
            <div class="about__education-description-item-description">
              SMA Xaverius 1 Bandar Lampung
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script src="./js/about.js"></script>

<style lang="scss" scoped>
  .about {
    display: flex;
    padding: 32px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 32px;
    &__container {
      display: flex;
      width: 825px;
      background-color: rgb(170, 163, 142);
      padding: 8px;
      border: 2px solid white;
      border-radius: 8px;
      gap: 12px;
      @media (max-width: 768px) {
        width: 336px;
      }
      img {
        border-radius: 8px;
        height: 272px;
        box-shadow: -3px 6px 8px rgba(0, 0, 0, 0.5);
        @media (max-width: 768px) {
          display: none;
        }
      }
      &-text {
        height: 100%;
        display: flex;
        flex-direction: column;
        border-radius: 8px;
        box-shadow: -3px 6px 8px rgba(0, 0, 0, 0.5);
        &-title {
          font-size: 32px;
          font-weight: bold;
          text-shadow: -3px 2px 2px rgba(0, 0, 0, 0.5);
          background-color: #FF715B;
          padding: 2px 12px;
          border-radius: 8px 8px 0px 0px;
          @media (max-width: 768px) {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 12px;
          }
        }
        &-description {
          background: white;
          padding: 12px;
          border-radius: 0px 0px 8px 8px;
          font-size: 16px;
          color: black;
          font-weight: lighter;
          text-align: justify;
          text-shadow: -4px 2px 2px rgba(0, 0, 0, 0.1);
          @media (max-width: 768px) {
            align-items: center;
            text-align: center;
          }
        }
      }
    }
    &__education {
      display: flex;
      width: 778px;
      background-color: rgb(129, 142, 134);
      padding: 32px;
      border: 2px solid white;
      border-radius: 8px;
      flex-direction: column;
      @media (max-width: 768px) {
        width: 336px;
      }
      &-title {
        font-size: 32px;
        font-weight: bold;
        text-shadow: -3px 2px 2px rgba(0, 0, 0, 0.5);
        @media (max-width: 768px) {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
        }

      }

   
      &-description {
        display: flex;
        gap: 48px;
        &-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
          width: 50%;
          &-container {
            margin-top: 24px;
          }
          &-title {
            font-size: 20px;
            font-weight: bold;
            text-shadow: -3px 2px 2px rgba(0, 0, 0, 0.5);
          }
          &-description {
            font-size: 16px;
            text-shadow: -3px 2px 2px rgba(0, 0, 0, 0.5);
            padding-bottom: 8px;
            border-bottom: 4px solid #FF715B;
          }
        }
    
      }
    }
  }
</style>
