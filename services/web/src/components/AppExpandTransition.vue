<script lang="ts" setup>
const props = defineProps<{
  shown?: boolean
}>()

defineSlots<{
  /** Содержимое по умолчанию */
  default?: () => unknown
}>()
</script>

<template>
  <Transition name="expand">
    <div
      v-if="props.shown"
      class="app-expand-transition"
    >
      <div class="app-expand-transition__inner">
        <slot />
      </div>
    </div>
  </Transition>
</template>

<style lang="scss">
.app-expand-transition {
  display: grid;
  grid-template-rows: 1fr;
  overflow: hidden;

  &__inner {
    min-height: 0;
  }
}

.expand-enter-active,
.expand-leave-active {
  transition:
    grid-template-rows 0.3s,
    opacity 0.3s;
}

.expand-enter-from,
.expand-leave-to {
  grid-template-rows: 0fr;
  opacity: 0;
}
</style>
