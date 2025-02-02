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
          <div
            class="divider-1__rectangle-inner__play"
          >
            <div class="divider-1__rectangle-inner__play-time">
              <span>{{ currentTime }} / {{ duration }}</span>
            </div>
            <div>
              <div class="soundwave" v-if="isPlaying">
                <div
                  v-for="(value, index) in soundwaveData"
                  :key="index"
                  :style="{ height: `${value / 14}px` }"
                  class="soundwave-bar"
                ></div>
              </div>
              <div class="playing" v-else>
                <span v-if="isEnded">End. Play again?</span>
                <span v-else-if="isPaused">Pause...</span>
                <span v-else>Play Music..</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="divider-1__line">
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
    border-radius: 8px;
    padding: 8px;
    border: 2px solid white;
    @media (max-width: 768px) {
      width: 75%;
    }
    &-inner {
      &__play {
        display: flex;
        gap: 16px;
        align-items: center;
        &-time {
          display: flex;
          font-size: 12px;
          width: 100%; /* Adjust width to fit content */
          white-space: nowrap; /* Prevent line break */
          justify-content: center; /* Center the text */
        }
      }
    }

  }
  &__circle {
    background: linear-gradient(140.19deg, 
    #da5541 42%, #b38e89 100%);
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
  &__line {
    margin-left: 30px;
    width: 340px;
    border-top: 4px solid #FF715B;
    @media (max-width: 768px) {
      display: none;
    }
  }
}

.playing {
  width: 255px;
  display: flex;
  align-items: flex-end;
  height: 20px;
  background-color: #000;
  justify-content: center; /* Center the text */
  color: #fff; /* Text color */
  border-radius: 4px;
  border: 1px solid white;
  align-items: center;
  @media (max-width: 768px) {
      width: 160px;
  }
}
.soundwave {
  display: flex;
  align-items: flex-end;
  height: 20px;
  background-color: #000;
  justify-content: center; /* Center the text */
  color: #fff; /* Text color */
  border-radius: 4px;
  border: 1px solid white;
  width: 255px;
  .soundwave-bar {
    width: 1px;
    background-color: #fff;
    margin-right: 1px;
    height: 0.8px;
  }
  @media (max-width: 768px) {
    width: 160px;
    .soundwave-bar {
      margin-right: 1.1px; /* Increase margin */
    }
  }
}
</style>
