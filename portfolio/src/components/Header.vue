<template>
  <header>
    <!-- New navigation bar -->

    <!-- Existing header title -->
    <div class="header-title">
        <div class="header-title__circles">
        <span></span>
        <span></span>
        <span></span>
        </div>
        <div class="header-title__title">Personal Portfolio</div>
        <button class="header-title__button" @click="downloadResume">
          Resume
        </button>
    </div>
    <nav class="header-navigation">
        <ul>
          <li><a href="#" @click.prevent="navigateTo('home')">Home</a></li>
          <li><a href="#" @click.prevent="navigateTo('about')">About</a></li>
          <li><a href="#" @click.prevent="navigateTo('project')">Project</a></li>
          <li><a href="#" @click.prevent="navigateTo('contact')">Contact</a></li>
        </ul>
      </nav>
  </header>
</template>

<script src="./js/header.js"></script>
<style lang="scss" scoped>


.header-title {
  background-color: #324757;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  &__circles{
    left: 10px;
    display: flex;
    gap: 10px;
    span {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        @media (max-width: 768px) {
            width: 8px;
            height: 8px;
        }
        
    } 
    :nth-child(1) {
        background-color: #FE5F58;
    }
    :nth-child(2) {
        background-color: #FDC728;
    }
    :nth-child(3) {
        background-color: #25C43A;
    }
  }
  &__button {
    position: relative;
    background-color: #FF715B;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 4px;
    font-weight: bolder;
    cursor: pointer;
    @media (max-width: 768px) {
        font-size: 10px;
        padding: 6px 8px;
    }
  }
  &__button:hover {
    background-color: #d86554;
  }
  &__title {
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    color: white;
    @media (max-width: 768px) {
        font-size: 12px;
    }
  }
}

.header-navigation {
    display: flex;
    justify-content: center;
    background-color: #556775;
    padding: 4px 16px;
    ul {
      list-style: none;
      display: flex;
      gap: 60px;
      margin: 0;
      padding: 0;
      @media (max-width: 768px) {
        gap: 28px;
      }
      li {
        a {
            font-size: 16px;
            color: white;
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }
            @media (max-width: 768px) {
                font-size: 12px;
                font-weight: bold;
            }
        }
      }
    }
  }

</style>
