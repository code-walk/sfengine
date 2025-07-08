<script setup lang="ts">
import { useMedia } from '~/composables/useMedia'
import { useNavigation } from '@/composables/useNavigationStore'

const { isDesktop } = useMedia()
const { products, design } = useNavigation()
</script>

<template>
  <ClientOnly>
    <nav
      :class="[
        `the-navigation`,
        {
          'the-navigation_mobile': !isDesktop,
        },
      ]"
    >
      <ul :class="[`the-navigation__list`, { 'the-navigation__list_is-mobile': !isDesktop }]">
        <li class="the-navigation__item">
          <TheNavigationLink
            :category="products.category"
            :component="!isDesktop ? 'div' : 'NuxtLink'"
            :items="products.items"
            :label="products.label"
          />
        </li>
        <li class="the-navigation__item">
          <TheNavigationLink
            :category="design.category"
            :component="!isDesktop ? 'div' : 'NuxtLink'"
            :items="design.items"
            :label="design.label"
          />
        </li>
        <li class="the-navigation__item">
          <NuxtLink
            :class="[
              `the-navigation-link`,
              `the-navigation-link_default`,
              { 'the-navigation-link_mobile': !isDesktop },
            ]"
            to="/#about"
            >О нас</NuxtLink
          >
        </li>
      </ul>
    </nav>
  </ClientOnly>
</template>

<style lang="scss">
.the-navigation {
  display: flex;
  height: var(--header-height);

  &_mobile {
    height: auto;
    overflow: hidden;
  }

  &_default {
    border: none;
  }

  &__item {
    display: flex;
    align-items: center;
    height: 100%;
  }

  &__list {
    @include flex(center);
    gap: var(--spacing-lg);
    justify-content: space-between;
  }

  &__list_is-mobile {
    flex-direction: column;
    gap: 0;
    align-items: start;
    width: 100%;

    .the-navigation__item {
      width: 100%;
      height: 100%;
      font-size: 18px;
      font-weight: 400;
      color: var(--color-primary-200);
    }
  }

  &__link {
    display: flex;
    height: 100%;
    padding: 33px 0;
    color: var(--color-primary-200);
  }

  &__link:hover {
    color: var(--color-accent-200);
  }

  &__link_accent {
    color: var(--color-primary-400);
  }
}
</style>
