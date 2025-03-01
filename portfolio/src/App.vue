<template>
  <div class="portfolio">
    <Header class="sticky-header" />
    <div class="portofolio-content">
      <Banner />
    </div>
    <div class="divider-1">
      <div class="divider-1__rectangle">

      </div>
      <div class="divider-1__circle">

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
  display: flex;
  gap: 18px;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 296px;
  }
  &__rectangle {
    background-color: #556775;
    width: 95%;
    height: 32px;
    border-radius: 8px;
    @media (max-width: 768px) {
      height: 24px;
    }
  }
  &__circle {
    background-color: #FF715B;
    width: 48px;
    height: 48px;
    border-radius: 100%;
    @media (max-width: 768px) {
      height: 32px;
      width: 32px;
    }
  }
}
</style>
