<script setup>
import { useNavigation } from '@/composables/useNavigationStore'

const { products } = useNavigation()
definePageMeta({
  layout: 'category',
})
</script>

<template>
  <div class="products-list">
    <AppContainer class="product-list__container">
      <h1 class="product-list__title">{{ products.label }}</h1>
      <div class="product-list__wrapper">
        <AppCard
          v-for="item in products.items"
          :key="item"
          :category="products.category"
          :image="item.image"
          :name="item.label"
          :to="item.link"
          class="product-list__item"
        />
      </div>
    </AppContainer>
  </div>
</template>

<style lang="scss">
.product-list {
  &__title {
    @include title();
  }

  &__container {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
  }

  &__wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-m);
  }
}
</style>
