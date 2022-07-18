<template>
  <pre>{{ env }}</pre>
  <p>
    VUE_APP_BACKOFFICE_API_PREFIX
    <strong>{{ VUE_APP_BACKOFFICE_API_PREFIX }}</strong>
  </p>
  <p>
    Title <strong>{{ TITLE }}</strong>
  </p>
  <p>
    BASE_URL <strong>{{ BASE_URL }}</strong>
  </p>
</template>

<script setup lang="ts">
  const { VUE_APP_BACKOFFICE_API_PREFIX } = import.meta.env;
  const { TITLE } = import.meta.env;
  const { BASE_URL } = import.meta.env;
  // eslint-disable-next-line
  const env = import.meta.env;
</script>
