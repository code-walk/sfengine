<script lang="ts" setup>
import { computed, provide, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { injectionKey } from './injectionKey'

defineSlots<{
  /** Содержимое по умолчанию */
  default: () => unknown
}>()

const TITLE_POSTFIX = 'Garex'

const route = useRoute()
const { t: $t } = useI18n()

const title = computed(() => {
  return route.meta.titleI18n ? $t(route.meta.titleI18n) : ''
})

const breadcrumbs = computed(() => {
  return route.meta.breadcrumbs ? route.meta.breadcrumbs : ''
})

const handleTitleChange = () => {
  document.title = [title.value, TITLE_POSTFIX].filter(Boolean).join(' · ')
}

watch(title, handleTitleChange, { immediate: true })

provide(injectionKey, { title, breadcrumbs })
</script>

<template>
  <slot />
</template>
