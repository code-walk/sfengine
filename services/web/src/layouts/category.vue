<template>
  <main class="layout-category">
    <AppBackLink class="layout-category__back-link" />
    <div class="layout-category__body">
      <slot />
    </div>
  </main>
</template>

<style lang="scss">
.layout-category {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-m);

  &__back-link {
    margin-top: 48px;
  }

  &__body {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3xl);
    margin-bottom: var(--spacing-3xl);
  }
}
</style>
