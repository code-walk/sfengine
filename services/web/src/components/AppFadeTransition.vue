<script lang="ts" setup>
defineSlots<{
  /** Содержимое по умолчанию */
  default: () => unknown
}>()
</script>

<template>
  <Transition name="fade">
    <slot />
  </Transition>
</template>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
