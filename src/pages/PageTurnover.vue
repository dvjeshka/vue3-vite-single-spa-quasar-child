<template>
  <WrapPage>
    <ComponentWithRuntimeEnv />
    <ComponentWithFetch />
    <h1 :class="$style.title">Turnover</h1>
    <!--    <QDate
      model-value=""
      first-day-of-week="1"
    />
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
    </QBtn>-->
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
  </WrapPage>
</template>

<script lang="ts" setup>
  import { defineAsyncComponent } from 'vue';

  import exampleInSourceTest from '@/utils/exampleInSourceTest';

  exampleInSourceTest(1, 2, 3);

  const ComponentWithFetch = defineAsyncComponent(
    () => import('@/components/ComponentWithFetch.vue')
  );

  const ComponentWithRuntimeEnv = defineAsyncComponent(
    () => import('@/components/ComponentWithRuntimeEnv.vue')
  );

  const WrapPage = defineAsyncComponent(
    () => import('@/components/WrapPage.vue')
  );

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
