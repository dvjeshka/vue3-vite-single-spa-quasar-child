<template>
  <pre>{{ env }}</pre>
  <p>
    VUE_APP_BACKOFFICE_API_PREFIX
    <strong>{{ VABAP }}</strong>
  </p>
  <p>
    Title <strong>{{ TITLE }}</strong>
  </p>
  <p>
    BASE_URL <strong>{{ BASE_URL }}</strong>
  </p>
</template>

<script setup lang="ts">
  /* eslint-disable */
  const VABAP = import.meta.env.VUE_APP_BACKOFFICE_API_PREFIX;
  const TITLE = import.meta.env.TITLE;
  const BASE_URL = import.meta.env.BASE_URL;
  // eslint-disable-next-line
  const env = import.meta.env;
  /* eslint-enable */
</script>
