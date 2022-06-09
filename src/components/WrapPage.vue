<template>
  <div :class="$style.app">
    <slot></slot>
  </div>
</template>
<style lang="scss" module>
.app {
  padding: 50px;
  background: #99bafd;
}
</style>