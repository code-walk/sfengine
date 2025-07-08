<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import MediaProvider from '~/providers/media/MediaProvider.vue'

const isSticky = ref(true)
const isScroll = ref(false)

const handleScroll = () => {
  isScroll.value = Boolean(window.scrollY > 0)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

// const animations = {
//   header: {
//     animation: { from: { y: -60 }, to: { y: 0 } },
//     type: 'from',
//     duration: 1,
//     clearStyle: true,
//   },
//   footer: {
//     animation: { from: { y: 60 }, to: { y: 0 } },
//     type: 'from',
//     duration: 1,
//     clearStyle: true,
//     delay: 1,
//   },
// }
</script>

<template>
  <MediaProvider>
    <AppHeader
      :is-scroll="isScroll"
      :is-sticky="isSticky"
    />
    <NuxtLayout class="app-main">
      <NuxtPage />
    </NuxtLayout>
    <AppFooter />
  </MediaProvider>
</template>

<style lang="scss">
.app-main {
  flex-grow: 1;
}
</style>
