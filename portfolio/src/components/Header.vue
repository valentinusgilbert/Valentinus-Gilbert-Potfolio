<template>
  <header>
    <div class="header-title">
        <div class="header-title__circles">
        <span></span>
        <span></span>
        <span></span>
        </div>
        <div class="header-title__title">Portfolio - Valentinus Gilbert Sanjaya</div>
        <button class="header-title__button" @click="downloadResume">
          Resume
        </button>
    </div>
  </header>
</template>

<script src="./js/header.js"></script>
<style lang="scss" scoped>
.header-title {
  background-color: #f8f9fa;
  display: flex;
  position: relative;
  align-items: center;
  padding: 6px 16px;
  &__circles{
    left: 10px;
    display: flex;
    gap: 10px;
    span {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        
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
    background-color: #007bff;
    color: white;
    border: none;
    padding: 6px 12px;
    border-radius: 4px;
    cursor: pointer;
  }
  &__button:hover {
    background-color: #0056b3;
  }
  &__title {
    flex-grow: 1;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    color: gray;
  }
}

</style>
