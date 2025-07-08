<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    image?: string
    name?: string
    to?: string
    category?: string
  }>(),
  {
    name: 'Product name',
  }
)
</script>

<template>
  <NuxtLink
    :to="`${props.category}/${props.to}`"
    class="app-card"
  >
    <img
      alt=""
      class="app-card__img"
      src="@assets/images/stub-image.jpg"
    />
    <span class="app-card__name">{{ props.name }}</span>
    <div class="app-card__overlay" />
  </NuxtLink>
</template>

<style lang="scss">
.app-card {
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &__overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    transition: var(--transition);
  }

  &__img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition);
  }

  &__name {
    position: absolute;
    bottom: 24px;
    left: 24px;
    z-index: 2;
    font-size: 24px;
    font-weight: 700;
    color: var(--color-primary-20);
    transition: var(--transition);
  }

  &:hover {
    .app-card__img {
      transition: var(--transition);
      transform: scale(1.2);
    }

    .app-card__name {
      bottom: 48px;
      left: 48px;
      transition: var(--transition);
    }

    .app-card__overlay {
      background-color: rgba(0, 0, 0, 0.4);
      transition: var(--transition);
    }
  }
}
</style>
