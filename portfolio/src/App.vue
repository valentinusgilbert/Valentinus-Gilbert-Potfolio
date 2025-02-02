<template>
  <div class="portfolio">
    <Header class="sticky-header" />
    <div class="portofolio-content">
      <Banner />
    </div>
    <div class="divider-1">
      <div class="divider-1__circle" @click="togglePlay">
        <font-awesome-icon :icon="isPlaying ? 'pause' : 'play'" />
      </div>
      <div class="divider-1__rectangle">
        <div class="divider-1__rectangle-inner">
           <-- Play 
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./js/app.js"></script>

<style lang="scss" scoped>
.sticky-header {
  position: -webkit-sticky; /* For Safari */
  position: sticky;
  top: 0;
  z-index: 1000; /* Adjust as needed */
  width: 100%;
}

.portfolio {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.divider-1 {
  display: flex;
  width: 840px;
  align-items: center;
  gap: 22px;
  padding: 0px;
  @media (max-width: 768px) {
    width: 336px;
  }
  &__rectangle {
    background-color: #556775;
    width: 75%;
    border-radius: 8px;
    padding: 8px;
    border: 2px solid white;
    @media (max-width: 768px) {
    }

  }
  &__circle {
    background-color: #c95a49;
    width: 48px;
    height: 48px;
    border-radius: 100%;
    border: 1px solid black;
    svg {
      color: white;
      font-size: 16px;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0px 3px #b99d9d;
    transition: all 0.2s ease;
    &:active {
      box-shadow: 0 1px #fff4f4;
      transform: translateY(2px);
    }
    @media (max-width: 768px) {
      height: 38px !important;
      width: 38px !important;
    }
  }
}
</style>
