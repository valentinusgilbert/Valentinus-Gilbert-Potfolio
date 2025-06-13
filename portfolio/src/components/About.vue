<template>
  <div id="about" class="about">
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
              I'm a passionate software developer with expertise in web development, specializing in modern frameworks like Vue.js and React.js.
              I love creating elegant solutions to complex problems and am always eager to learn new technologies.
            </p>
            <div class="skills">
              <div class="skill-tag">Vue.js</div>
              <div class="skill-tag">Next.js</div>
              <div class="skill-tag">React.js</div>
              <div class="skill-tag">React Native</div>
              <div class="skill-tag">JavaScript</div>
              <div class="skill-tag">TypeScript</div>
              <div class="skill-tag">HTML/CSS</div>
              <div class="skill-tag">Node.js</div>
              <div class="skill-tag">Cloud Deployment</div>
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
              • Major in Computer Science<br>
              • GPA: 3.91/4.00<br>
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

    <div class="about__stats-section" data-aos="fade-up" data-aos-delay="200">
      <div class="about__stats-content">
        <div class="about__stats-left">
          <div class="about__stats-title">2+ Years of Experience</div>
          <div class="about__stats-desc">
            I turn ideas and designs into functional, beautiful websites. With 2+ years of experience, I help businesses stand out through clean code and smart UI.
          </div>
          <button class="about__stats-btn">HIRE ME NOW →</button>
        </div>
        <div class="about__stats-right">
          <div class="about__stats-grid">
            <div class="about__stats-item">
              <div class="about__stats-value">10+</div>
              <div class="about__stats-label">SATISFIED CLIENTS</div>
            </div>
            <div class="about__stats-item">
              <div class="about__stats-value">10+</div>
              <div class="about__stats-label">SUCCESSFULLY PROJECTS</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="project" class="about__carousel-section" data-aos="fade-up" data-aos-delay="300">
      <div class="about__carousel-title">My Projects</div>
      <div class="about__carousel-wrapper">
        <swiper
          :modules="[SwiperAutoplay, SwiperPagination]"
          :slides-per-view="slidesPerView"
          :space-between="20"
          :loop="true"
          :autoplay="{ delay: 3000, disableOnInteraction: false }"
          :pagination="{ clickable: true }"
          class="about__carousel"
        >
          <swiper-slide v-for="(project, idx) in projects" :key="idx">
            <div class="about__carousel-card">
              <img :src="project.image" :alt="project.title" class="about__carousel-img" />
              <div class="about__carousel-card-content">
                <div class="about__carousel-card-title">{{ project.title }}</div>
                <div class="about__carousel-card-desc">{{ project.desc }}</div>
                <a v-if="project.link" :href="project.link" target="_blank" rel="noopener" class="about__carousel-btn">See Project</a>
                <button v-else class="about__carousel-btn" disabled style="opacity:0.6;cursor:not-allowed;">Cant See Project</button>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const SwiperAutoplay = Autoplay;
const SwiperPagination = Pagination;

const slidesPerView = ref(1);

const updateSlidesPerView = () => {
  slidesPerView.value = window.innerWidth > 768 ? 3 : 1;
};

onMounted(() => {
  updateSlidesPerView();
  window.addEventListener('resize', updateSlidesPerView);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateSlidesPerView);
});

const projects = ref([
  {
    image: new URL('../assets/project/bicooks.jpeg', import.meta.url).href,
    title: 'Bicooks - Mobile App',
    desc: 'Cooking App which build using Expo Framework based on React Native',
  },
  {
    image: new URL('../assets/project/visionvip.jpeg', import.meta.url).href,
    title: 'Vision CRM Web App',
    desc: 'Customer Relationship Management which built using Next Js Framework based on React JS for insurance agency',
    link: 'https://www.visionvip.id'
  },
  {
    image: new URL('../assets/project/sewas.jpeg', import.meta.url).href,
    title: 'Sewas - Rent Marketplace',
    desc: 'Rent Marketplace build using Laravel and MySQL',
  },
  {
    image: new URL('../assets/project/git-profile-finder.jpeg', import.meta.url).href,
    title: 'Git Profile Finder',
    desc: 'Search git username profile and will show the profile detail and the repos',
    link: 'https://git-profile-finder-valentinus.vercel.app/'
  },
  {
    image: new URL('../assets/project/noka.jpeg', import.meta.url).href,
    title: 'NOKA',
    desc: 'Game Website Project (College Project)',
    link: 'https://noka-3-valentinus-gilbert.netlify.app/'
  },
  {
    image: new URL('../assets/project/furnid.jpeg', import.meta.url).href,
    title: 'Furnid',
    desc: 'Furniture Shop Website (College Project)',
    link: 'https://furnid-valentinusgilbert.netlify.app/'
  },
]);
</script>

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
    @media screen and (max-width: 768px) {
      max-width: 380px;
    }
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
        max-width: 380px;
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
      @media screen and (max-width: 768px) {
        max-width: 380px;
      }
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
    @media screen and (max-width: 768px) {
      max-width: 380px;
    }
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

  &__stats-section {
    width: 90%;
    max-width: 1000px;
    background: #fff;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 768px) {
      max-width: 380px;
    }
    .about__stats-content {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      gap: 32px;
      @media (max-width: 900px) {
        flex-direction: column;
        gap: 24px;
        align-items: flex-start;
      }
    }
    .about__stats-left {
      flex: 1;
      min-width: 220px;
      .about__stats-title {
        font-size: 32px;
        font-weight: bold;
        margin-bottom: 16px;
        color: #222;
      }
      .about__stats-desc {
        font-size: 16px;
        color: #444;
        margin-bottom: 24px;
        max-width: 350px;
      }
      .about__stats-btn {
        background: #556775;
        color: #fff;
        border: none;
        border-radius: 24px;
        padding: 12px 32px;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        transition: background 0.2s;
        &:hover {
          background: #FF715B;
        }
      }
    }
    .about__stats-right {
      flex: 1.2;
      .about__stats-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 32px 48px;
        @media (max-width: 600px) {
          gap: 20px;
        }
        .about__stats-item {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          .about__stats-value {
            font-size: 36px;
            font-weight: bold;
            color: #3a5ba0;
          }
          .about__stats-label {
            font-size: 14px;
            color: #888;
            font-weight: 600;
            margin-top: 4px;
          }
        }
      }
    }
  }

  &__carousel-section {
    width: 90%;
    max-width: 1080px;
    @media screen and (max-width: 768px) {
      width: 100vw;
      max-width: 100vw;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;

    .about__carousel-wrapper {
      width: 100%;
      overflow: hidden;
      position: relative;
    }

    .about__carousel {
      width: 100%;
      padding-bottom: 40px;
      overflow: visible;
      
      :deep(.swiper-wrapper) {
        overflow: visible;
      }

      :deep(.swiper-slide) {
        width: auto;
        height: auto;
      }
      
      :deep(.swiper-pagination) {
        bottom: 0;
      }
      
      :deep(.swiper-pagination-bullet) {
        background: #FF715B;
        opacity: 0.5;
      }
      
      :deep(.swiper-pagination-bullet-active) {
        opacity: 1;
      }
    }
    .about__carousel-title {
      font-size: 32px;
      font-weight: bold;
      margin-bottom: 32px;
      color: #222;
      text-align: center;
      background: linear-gradient(45deg, #FF715B, #FF9F8C);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .about__carousel-card {
      background: #fff;
      border-radius: 16px;
      box-shadow: 0 6px 24px rgba(0,0,0,0.10);
      padding: 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 380px;
      margin: 0 auto;
      transition: box-shadow 0.2s;
      &:hover {
        box-shadow: 0 12px 32px rgba(255,113,91,0.18);
      }
    }
    .about__carousel-img {
      width: 100%;
      max-width: 320px;
      border-radius: 12px;
      margin-bottom: 20px;
      object-fit: cover;
      box-shadow: 0 2px 8px rgba(0,0,0,0.10);
      aspect-ratio: 16/10;
      height: auto;
      min-height: 200px;
      background: #f3f3f3;
    }
    .about__carousel-card-content {
      text-align: center;
      .about__carousel-card-title {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 8px;
        color: #3a5ba0;
      }
      .about__carousel-card-desc {
        font-size: 15px;
        color: #444;
      }
    }
    .about__carousel-btn {
      display: inline-block;
      margin-top: 16px;
      padding: 10px 28px;
      background: #FF715B;
      color: #fff;
      border: none;
      border-radius: 24px;
      font-size: 15px;
      font-weight: 600;
      text-decoration: none;
      transition: background 0.2s, box-shadow 0.2s;
      box-shadow: 0 2px 8px rgba(255,113,91,0.10);
      cursor: pointer;
    }
    .about__carousel-btn:hover {
      background: #ff8c6b;
      box-shadow: 0 4px 16px rgba(255,113,91,0.18);
    }
  }
}
</style>
