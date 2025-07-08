<script lang="ts" setup>
import { provide, ref } from 'vue'
import { injectionKey } from './injectionKey'

defineSlots<{
  /** Содержимое по умолчанию */
  default: () => unknown
}>()

const isActive = ref<boolean>(false)

provide(injectionKey, { isActive })
</script>

<template>
  <slot />
</template>
