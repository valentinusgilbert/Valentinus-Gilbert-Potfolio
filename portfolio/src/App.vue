<template>
  <div class="portfolio">
    <Header class="sticky-header" />
    <Banner />
  </div>
</template>

<script src="./js/app.js"></script>

<style>
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
</style>
