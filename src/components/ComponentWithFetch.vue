<template>
  <section>
    {{ isLoading }}
    {{ data }}
    {{ isFinished }}
  </section>
</template>

<script setup lang="ts">
  import axios from 'axios';
  import { useAxios } from '@vueuse/integrations/useAxios';

  const instance = axios.create({
    baseURL: import.meta.env.VUE_APP_BACKOFFICE_API_PREFIX,
  });

  const { data, isFinished, isLoading } = useAxios('/posts/1', instance);
</script>
