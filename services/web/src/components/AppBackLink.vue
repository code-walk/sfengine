<script setup lang="ts">
import Arrow from '@/assets/icons/arrow.svg?component'
</script>

<template>
  <div class="app-back-link">
    <AppContainer class="app-back-link__container">
      <NuxtLink
        class="app-back-link__link"
        to="/"
      >
        <Arrow class="app-back-link__arrow-icon" />
        Вернуться на главную
      </NuxtLink>
    </AppContainer>
  </div>
</template>

<style lang="scss">
.app-back-link {
  &__arrow-icon {
    rotate: 180deg;
  }

  &__link {
    display: flex;
    gap: 8px;
    align-items: center;
    padding: 12px 0;
    color: var(--color-primary-200);

    &:hover {
      color: var(--color-accent-100);
    }
  }
}
</style>
