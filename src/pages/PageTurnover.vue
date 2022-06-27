<template>
  <WrapPage>
    <h1 :class="$style.title">Turnover</h1>
    <p>{{ env }}</p>
    <p>VUE_APP_BACKOFFICE_API_PREFIX {{ VUE_APP_BACKOFFICE_API_PREFIX }}</p>
    <QBtn color="primary"> Quasar btn primary </QBtn>

    <QBtn color="secondary"> Quasar btn secondary </QBtn>
    <QBtn color="accent "> Quasar btn accent </QBtn>
    <QBtn color="dark"> Quasar btn dark </QBtn>
    <QBtn color="positive"> Quasar btn positive </QBtn>
    <QBtn color="negative"> Quasar btn negative </QBtn>
    <QBtn color="info"> Quasar btn info </QBtn>
    <QBtn
      color="warning"
      align="center"
      href="#"
      target="_blank"
      type="submit"
    >
      Quasar btn warning
    </QBtn>
    <img src="@/assets/wallpaperbetter.jpg" />
  </WrapPage>
</template>

<script lang="ts" setup>
  import { defineAsyncComponent } from 'vue';

  const input = {
    foo: 'hello',
    bar: 'world',
  };

  const WrapPage = defineAsyncComponent(
    () => import('@/components/WrapPage.vue')
  );

  const { env } = import.meta;
  const { VUE_APP_BACKOFFICE_API_PREFIX } = import.meta.env;

  function test(v: string): string {
    return v;
  }
  test('{}');
</script>

<style module>
  .title {
    color: red;
  }
</style>
