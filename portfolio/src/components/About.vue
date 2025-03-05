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
    <div class="about__experience">
      <div class="about__experience-title">
        Work Experience
      </div>
      <div class="about__experience-description">
        <div class="about__experience-description-item">
          <div class="about__experience-description-item-container">
            <div class="about__experience-description-item-period">
              Feb 2024 - Feb 2025
            </div>
            <div class="about__experience-description-item-title">
              PT. Global Digital Niaga (Blibli)
            </div>
            <div class="about__experience-description-item-description">
              Software Engineer - Front End Developer
            </div>
          </div>
        </div>
        <div class="about__experience-description-item">
          <div class="about__experience-description-item-container">
            <div class="about__experience-description-item-period">
              Sept 2023 - Present
            </div>
            <div class="about__experience-description-item-title">
              Ditto Dev
            </div>
            <div class="about__experience-description-item-description">
              Freelance Web Developer
            </div>
          </div>
        </div>
        <div class="about__experience-description-item">
          <div class="about__experience-description-item-container">
            <div class="about__experience-description-item-period">
              Sept 2023 - Jan 2024
            </div>
            <div class="about__experience-description-item-title">
              Courses Mentor
            </div>
            <div class="about__experience-description-item-description">
              Bina Nusantara University
            </div>
          </div>
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
              Senior Highshool
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
      img {
        border-radius: 8px;
        height: 295px;
        box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.5);
        @media (max-width: 768px) {
          display: none;
        }
      }
      &-text {
        height: 100%;
        display: flex;
        flex-direction: column;
        border-radius: 8px;
        box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.5);
        &-title {
          font-size: 32px;
          font-weight: bold;
          text-shadow: -3px 2px 2px rgba(0, 0, 0, 0.5);
          background: linear-gradient(179.29deg, #a1483b 35.16%, #c1412e 78.39%);
          padding: 2px 12px;
          border-radius: 8px 8px 0px 0px;
          @media (max-width: 768px) {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
        &-description {
          background: repeating-linear-gradient(
            white,
            white 24px,
            #ccc 25px
          );
          padding: 0px 12px;
          line-height: 25px;
          border-radius: 0px 0px 8px 8px;
          font-size: 16px;
          color: black;
          font-weight: lighter;
          text-align: justify;
          text-shadow: -4px 2px 2px rgba(0, 0, 0, 0.1);
          @media (max-width: 768px) {
            align-items: center;
            text-align: center;
            padding: 0px 24px;
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
        background-color: rgb(174, 174, 108);
        padding: 4px 12px;
        border-radius: 8px;
        box-shadow: -2px 4px 8px rgba(0, 0, 0, 0.5);
        display: flex;
        @media (max-width: 768px) {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }

   
      &-description {
        display: flex;
        gap: 36px;
        @media (max-width: 768px) {
          align-items: center;
          display: flex;
          flex-direction: column;
          gap: 20px
        }
        &-item {
          display: flex;
          flex-direction: column;
          width: 50%;
          @media (max-width: 768px) {
            width: 100%;
          }
          &-container {
            background-color: white;
            padding: 16px;
            border-radius: 8px;
            box-shadow: -2px 4px 8px rgba(0, 0, 0, 0.5);
            border-bottom: 8px solid #FF715B;
            @media (max-width: 768px) {
              height: 120px;
            }
          }
          &-period {
            width: 120px;
            padding-bottom: 8px;
            font-size: 16px;
            font-weight: bold;
            color: black;
            border-bottom: 1px solid black;
          }
          &-title {
            color: black;
            font-size: 20px;
            font-weight: bold;
            margin-top: 12px;
          }
          &-description {
            border-radius: 8px;
            margin-top: 4px;
            font-size: 16px;
            color: black;
            padding-bottom: 8px;

          }
        }
      }
      
    }
    &__experience {
      display: flex;
      width: 778px;
      background-color: rgb(126, 142, 170);
      padding: 32px;
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
        background-color: rgb(98, 152, 218);
        padding: 4px 12px;
        border-radius: 8px;
        box-shadow: -2px 4px 8px rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: flex-end;
        @media (max-width: 768px) {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }

   
      &-description {
        display: flex;
        gap: 12px;
        @media (max-width: 768px) {
          align-items: center;
          display: flex;
          flex-direction: column;
          gap: 20px
        }
        &-item {
          display: flex;
          flex-direction: column;
          width: 50%;
          @media (max-width: 768px) {
            width: 100%;
          }
          &-container {
            background-color: white;
            padding: 16px;
            border-radius: 8px;
            box-shadow: -2px 4px 8px rgba(0, 0, 0, 0.5);
            border-bottom: 8px solid #a587de;
            height: 140px;
            
            @media (max-width: 768px) {
              height: 128px;
            }
          }
          &-period {
            width: 180px;
            padding-bottom: 8px;
            font-size: 16px;
            font-weight: bold;
            color: black;
            border-bottom: 1px solid black;
          }
          &-title {
            color: black;
            font-size: 20px;
            font-weight: bold;
            margin-top: 12px;
          }
          &-description {
            border-radius: 8px;
            margin-top: 4px;
            font-size: 16px;
            color: black;
            padding-bottom: 8px;

          }
        }
      }
      
    }
  }
</style>
