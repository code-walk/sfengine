<script setup lang="ts">
import IconTelegram from '@/assets/icons/telegram.svg'
import IconWhatsApp from '@/assets/icons/whatsapp.svg'

import { useMedia } from '~/composables/useMedia'

const props = withDefaults(defineProps<AppHeaderProps>(), { isSticky: true, isScroll: true })

const { isDesktop } = useMedia()

interface AppHeaderProps {
  isSticky: boolean
  isScroll: boolean
}

const isOpenModal = ref<boolean>(false)
const handleOpenModal = (flag: boolean) => {
  isOpenModal.value = flag
}
</script>

<template>
  <!-- TODO: Вынести в компонент -->
  <AppModal
    v-model:model-value="isOpenModal"
    class="modal-form"
    @update:model-value="handleOpenModal"
  >
    <template #header>
      <h4 class="modal-form__title">Оставить заявку</h4>
    </template>
    <template #content>
      <FeedBackForm />
    </template>
  </AppModal>
  <header
    :class="[
      'app-header',
      { 'app-header_is-sticky': props.isSticky, 'app-header_is-scrolling': props.isScroll },
    ]"
  >
    <AppContainer class="app-header__container">
      <template v-if="isDesktop">
        <NuxtLink
          class="app-header__logo"
          to="/"
        >
          <TheLogotip />
        </NuxtLink>
        <TheNavigation class="app-header__navigation" />
        <div class="app-header__actions">
          <div class="app-header__inner">
            <a
              class="app-header__action"
              href="#"
              ><IconTelegram class="app-header__icon"
            /></a>
            <a
              class="app-header__action"
              href="#"
              ><IconWhatsApp class="app-header__icon"
            /></a>
          </div>
          <AppButton
            class="app-header__button"
            @click="() => handleOpenModal(true)"
            >Оставить заявку</AppButton
          >
        </div>
      </template>

      <template v-else>
        <NuxtLink
          class="app-header__logo"
          to="/"
        >
          <TheLogotip size="sm" />
        </NuxtLink>

        <div class="app-header__inner">
          <AppButton
            class="app-header__button"
            @click="() => handleOpenModal(true)"
            >Оставить заявку</AppButton
          >

          <AppNavigationMobile />
        </div>
      </template>
    </AppContainer>
  </header>
</template>

<style lang="scss">
.app-header {
  @include flex(space-between);

  height: var(--header-height);
  background-color: var(--color-primary-10);

  transition: var(--transition);

  &_is-sticky {
    position: sticky;
    top: 0;
    z-index: 9;
  }

  &_is-scrolling {
    box-shadow: 0 -6px 10px 5px rgba(0, 0, 0, 0.5);
    transition: var(--transition);
  }

  &__container {
    @include flex(space-between);
    position: relative;
  }

  &__inner {
    @include flex(center);
    gap: 20px;
  }

  &__logo {
    cursor: pointer;
  }

  &__actions {
    @include flex(center);
    gap: 30px;
  }

  &__icon {
    color: var(--color-primary-200);
    transition: var(--transition-hover);
  }

  &__icon:hover {
    color: var(--color-accent-200);
    transition: var(--transition-hover);
  }
}
</style>
