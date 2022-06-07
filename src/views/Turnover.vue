<template>
  <h1 :class="$style.title">Turnover</h1>
  <p>{{ env }}</p>
  <p>{{ VUE_APP_BACKOFFICE_API_PREFIX }}</p>
  <QBtn color="primary">Quasar btn primary</QBtn>
  <QBtn color="secondary">Quasar btn secondary</QBtn>
  <QBtn color="accent ">Quasar btn accent </QBtn>
  <QBtn color="dark">Quasar btn dark</QBtn>
  <QBtn color="positive">Quasar btn positive</QBtn>
  <QBtn color="negative">Quasar btn negative</QBtn>
  <QBtn color="info">Quasar btn info</QBtn>
  <QBtn color="warning">Quasar btn warning</QBtn>
  <img src="@/assets/wallpaperbetter.jpg"/>
</template>

<script lang="ts" setup>
const env = import.meta.env;
const VUE_APP_BACKOFFICE_API_PREFIX =  import.meta.env.VUE_APP_BACKOFFICE_API_PREFIX;
</script>

<style module>
.title {
  color: red;
}
</style>