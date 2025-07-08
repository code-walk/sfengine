<template>
  <main class="layout-product">
    <AppBackLink class="layout-product__back-link" />
    <div class="layout-product__body">
      <slot />
    </div>
    <SectionForm />
  </main>
</template>

<style lang="scss">
.layout-product {
  &__back-link {
    margin-top: 48px;
  }

  &__body {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3xl);
  }

  &__body > .product-body {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3xl);
  }
}
</style>
