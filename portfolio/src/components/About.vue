<template>
  <div class="about">
    <div class="about__container" data-aos="fade-up">
      <div class="about__container-content">
        <div class="about__container-text">
          <div class="about__container-text-title">
            About Me
          </div>
          <div class="about__container-text-description">
            <p class="greeting">Hi, I'm Valentinus Gilbert Sanjaya</p>
            <p class="role">Software Developer</p>
            <p class="description">
              I'm a passionate software developer with expertise in web development, specializing in Vue.js and React.js. 
              I love creating elegant solutions to complex problems and am always eager to learn new technologies.
            </p>
            <div class="skills">
              <div class="skill-tag">Vue.js</div>
              <div class="skill-tag">React.js</div>
              <div class="skill-tag">JavaScript</div>
              <div class="skill-tag">TypeScript</div>
              <div class="skill-tag">HTML/CSS</div>
            </div>
          </div>
        </div>
        <div class="about__container-image">
          <img src="../assets/work.gif" alt="Work Illustration" />
        </div>
      </div>
      <div class="about__container-education">
        <div class="education-card">
          <div class="education-card-content">
            <div class="education-period">2021 - 2025</div>
            <div class="education-degree">Bachelor of Computer Science</div>
            <div class="education-school">Universitas Bina Nusantara</div>
            <div class="education-details">
              • Major in Software Engineering<br>
              • GPA: 3.85/4.00<br>
              • Active in Programming Club
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="about__experience" data-aos="fade-up" data-aos-delay="100">
      <div class="about__experience-title">
        Work Experience
      </div>
      <div class="experience-cards">
        <div class="experience-card" data-aos="fade-up" data-aos-delay="200">
          <div class="experience-card-content">
            <div class="experience-period">Feb 2024 - Feb 2025</div>
            <div class="experience-title">Software Engineer - Front End Developer</div>
            <div class="experience-company">
              <span class="company-icon">🏢</span>
              PT. Global Digital Niaga (Blibli)
            </div>
            <div class="experience-description">
              <ul>
                <li>Developing and maintaining frontend applications using Vue.js and React.js</li>
                <li>Collaborating with cross-functional teams to deliver high-quality products</li>
                <li>Implementing responsive designs and ensuring cross-browser compatibility</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="experience-card" data-aos="fade-up" data-aos-delay="300">
          <div class="experience-card-content">
            <div class="experience-period">Sept 2023 - Present</div>
            <div class="experience-title">Freelance Web Developer</div>
            <div class="experience-company">
              <span class="company-icon">💼</span>
              Ditto Dev
            </div>
            <div class="experience-description">
              <ul>
                <li>Building custom web applications for clients</li>
                <li>Implementing modern UI/UX designs</li>
                <li>Optimizing website performance and SEO</li>
              </ul>
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
  gap: 48px;
  max-width: 1200px;
  margin: 0 auto;

  &__container {
    width: 90%;
    max-width: 1000px;
    background: linear-gradient(145deg, #2a3b4c, #1a2a3a);
    border-radius: 20px;
    padding: 40px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

    &-content {
      display: flex;
      gap: 40px;
      align-items: center;
      margin-bottom: 40px;

      @media (max-width: 768px) {
        flex-direction: column;
        gap: 24px;
      }
    }

    &-text {
      flex: 1;
      color: white;

      &-title {
        font-size: 32px;
        font-weight: bold;
        margin-bottom: 24px;
        background: linear-gradient(45deg, #FF715B, #FF9F8C);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      &-description {
        .greeting {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 8px;
        }

        .role {
          font-size: 20px;
          color: #FF715B;
          margin-bottom: 16px;
        }

        .description {
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 24px;
          color: #e0e0e0;
        }

        .skills {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;

          .skill-tag {
            background: rgba(255, 255, 255, 0.1);
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 14px;
            color: #FF715B;
            border: 1px solid rgba(255, 113, 91, 0.3);
            transition: all 0.3s ease;

            &:hover {
              background: rgba(255, 113, 91, 0.2);
              transform: translateY(-2px);
            }
          }
        }
      }
    }

    &-image {
      flex: 1;
      img {
        width: 100%;
        max-width: 400px;
        border-radius: 12px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        transition: transform 0.3s ease;

        &:hover {
          transform: scale(1.02);
        }
      }
    }

    &-education {
      width: 100%;
      .education-card {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 16px;
        overflow: hidden;
        transition: transform 0.3s ease;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);

        &:hover {
          transform: translateY(-5px);
        }

        &-content {
          padding: 24px;
        }
      }

      .education-period {
        color: #FF715B;
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 12px;
      }

      .education-degree {
        color: white;
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 8px;
      }

      .education-school {
        color: #e0e0e0;
        font-size: 16px;
        margin-bottom: 16px;
      }

      .education-details {
        color: #b0b0b0;
        font-size: 14px;
        line-height: 1.6;
      }
    }
  }

  &__experience {
    width: 90%;
    max-width: 1000px;
    background: linear-gradient(145deg, #2a3b4c, #1a2a3a);
    border-radius: 20px;
    padding: 40px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

    &-title {
      font-size: 32px;
      font-weight: bold;
      margin-bottom: 40px;
      color: white;
      text-align: center;
      background: linear-gradient(45deg, #FF715B, #FF9F8C);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      position: relative;
      
      &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 60px;
        height: 3px;
        background: linear-gradient(45deg, #FF715B, #FF9F8C);
        border-radius: 2px;
      }
    }

    .experience-cards {
      display: flex;
      gap: 24px;
      justify-content: center;
      flex-wrap: wrap;

      @media (max-width: 768px) {
        flex-direction: column;
      }
    }

    .experience-card {
      flex: 1;
      min-width: 300px;
      max-width: 450px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 16px;
      overflow: hidden;
      transition: all 0.3s ease;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        border-color: rgba(255, 113, 91, 0.3);
      }

      &-content {
        padding: 24px;
      }
    }

    .experience-period {
      color: #FF715B;
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 12px;
      display: inline-block;
      padding: 4px 12px;
      background: rgba(255, 113, 91, 0.1);
      border-radius: 20px;
    }

    .experience-title {
      color: white;
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 12px;
    }

    .experience-company {
      color: #e0e0e0;
      font-size: 16px;
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      gap: 8px;

      .company-icon {
        font-size: 18px;
      }
    }

    .experience-description {
      color: #b0b0b0;
      font-size: 14px;
      line-height: 1.6;

      ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          position: relative;
          padding-left: 20px;
          margin-bottom: 8px;

          &::before {
            content: '▹';
            position: absolute;
            left: 0;
            color: #FF715B;
          }

          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
</style>
