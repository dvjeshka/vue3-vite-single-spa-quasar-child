<script setup lang="ts">
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
  import HelloWorld from '@/components/HelloWorld.vue';
</script>

<template>
  <img
    alt="Vue logo"
    src="@/assets/logo.png"
  />
  <HelloWorld msg="finuslugi-backoffice Vue 3 + TypeScript + Vite" />
  <RouterLink to="/turnover"> Turnover </RouterLink>
</template>
