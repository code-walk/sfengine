<script setup>
import IconTelegram from '@/assets/icons/telegram.svg'
import IconWhatsApp from '@/assets/icons/whatsapp.svg'

const route = useRoute()

let isShowMobileNavigation = ref(false)

watch(route, () => {
  isShowMobileNavigation.value = false
})
</script>

<template>
  <div class="app-navigation-mobile">
    <AppBurgerMenu
      v-model="isShowMobileNavigation"
      :value="isShowMobileNavigation"
    />
    <div
      :class="[
        'app-navigation-mobile__wrapper',
        {
          'app-navigation-mobile__wrapper_active': isShowMobileNavigation,
        },
      ]"
    >
      <div class="app-navigation-mobile__actions">
        <a
          class="app-navigation-mobile__action"
          href="#"
          ><IconTelegram class="app-navigation-mobile__icon"
        /></a>
        <a
          class="app-navigation-mobile__action"
          href="#"
          ><IconWhatsApp class="app-navigation-mobile__icon"
        /></a>
      </div>
      <TheNavigation />
    </div>
  </div>
</template>

<style lang="scss">
.app-navigation-mobile {
  &__wrapper {
    position: fixed;
    top: var(--header-height);
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    display: flex;
    flex-direction: column;
    gap: 16px 0;
    height: 0;
    padding: 0 15px;
    visibility: hidden;
    background-color: var(--color-primary-10);
    transition: var(--transition);
  }

  &__wrapper_active {
    height: 100%;
    visibility: visible;
    transition: var(--transition);
  }

  &__actions {
    display: flex;
    gap: 8px;
    align-items: center;
    margin-top: 16px;
  }

  &__action {
    color: var(--color-primary-200);
  }
}
</style>
