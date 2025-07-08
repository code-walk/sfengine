<template>
  <section class="section-form">
    <AppContainer class="section-form__container">
      <div class="section-form__wrapper">
        <h2 class="section-form__title1">Сделайте первый шаг к <b>успешному проекту</b></h2>
        <FeedBackForm />
        <img
          alt="form-image"
          class="section-form__image"
          src="@assets/images/request-2.png"
        />
      </div>
    </AppContainer>
  </section>
</template>

<style lang="scss">
.section-form {
  &__container {
    padding-top: var(--spacing-3xl);
    padding-bottom: var(--spacing-3xl);
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 686px;
    margin: 0 auto;
  }

  &__title1 {
    @include title(var(--color-primary-200), var(--font-size-lx));
  }

  &__title2 {
    @include title(var(--color-accent-100), var(--font-size-lx));
  }

  &__image {
    width: 360px;
    margin-top: var(--spacing-lg);
  }
}
</style>
