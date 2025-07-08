<script lang="ts" setup>
import { computed, onMounted, provide, ref } from 'vue'
import { injectionKey } from './injectionKey'
import { useEventListener } from '@/composables/useEventListener'
import { bp, gt, gte, lt, lte } from '@/helpers/breakpoints'

defineSlots<{
  /** Содержимое по умолчанию */
  default: () => unknown
}>()

const width = ref<number>(0)

const isMobile = computed<boolean>(() => lte(width.value, bp.sm)) // <= 425
const isTablet = computed<boolean>(() => gt(width.value, bp.sm) && lt(width.value, bp.lg)) //  425 <= x < 1024
const isDesktop = computed<boolean>(() => gte(width.value, bp.md)) // >= 1024

const handleResize = () => {
  width.value = window.innerWidth
}

useEventListener(window, 'resize', handleResize)
onMounted(handleResize)

provide(injectionKey, { width, isMobile, isTablet, isDesktop })
</script>

<template>
  <slot />
</template>
