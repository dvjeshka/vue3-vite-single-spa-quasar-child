<template>
  <img
    alt="wallpaperbetter"
    width="100"
    height="100"
    src="@/assets/wallpaperbetter.jpg"
  />
  <img
    alt="wallpaperbetter"
    width="100"
    height="100"
    src="../assets/wallpaperbetter.jpg"
  />
  <img
    alt="telegram"
    :src="telegram"
  />
  <!--    <img
        alt="telegramImportMetaUrl"
        :src="telegramImportMetaUrl"
      />-->
</template>

<script setup lang="ts">
  import telegram from '../assets/icons/telegram.svg';
  // const telegramImportMetaUrl = new URL('/assets/icons/telegram.svg', import.meta.url).href
</script>

<style scoped></style>
