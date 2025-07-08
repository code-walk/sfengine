<template>
  <section class="keyrings">
    <AppContainer
      class="keyrings__container"
      size="lg"
    >
      <img
        class="keyrings__image"
        src="@assets/images/keyrings-image.png"
      />
      <div class="keyrings__info">
        <img
          alt=""
          class="keyrings__smile"
          src="@assets/images/keyrings-smile.png"
        />
        <div class="keyrings__inner">
          <h2 class="keyrings__title">БРЕЛОКИ</h2>
          <h4 class="keyrings__subtitle">
            ЛЕГКО <span class="text-accent">ПЕРСОНАЛИЗИРУЙТЕ <br /></span>
            ПОВСЕДНЕВНЫЕ АКССЕСУАРЫ
          </h4>
        </div>
        <div class="keyrings__description">
          <p class="keyrings__text">
            Когда достают ключи, взгляд падает на брелок, который был выбран. Он вызывает улыбку и
            напоминает о важных моментах. Брелок — часть настроения и характера.<br />
            Брелоки очень практичны. Они легко крепятся и не теряют своего вида даже при активном
            использовании
          </p>
          <strong class="keyrings__strong">
            Это отличный подарок. Корпоративный сувенир, романтичный аксессуар или забавный подарок
            другу. Их выбирают с душой, чтобы они дарили эмоции.
          </strong>
        </div>
      </div>
    </AppContainer>
  </section>
</template>

<style lang="scss">
.keyrings {
  &__container {
    display: flex;
    flex-direction: column;
    gap: 24px;
    @include lte($md) {
      gap: 20px;
    }
  }

  &__bg-img {
    width: 100%;
    height: 100%;
  }

  &__info {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: space-between;

    @include lt($lg) {
      flex-direction: column;
      gap: 16px;
    }
  }

  &__inner {
    display: flex;
    flex-direction: column;
    gap: 40px;
    justify-content: center;
    @include lt($lg) {
      gap: 14px;
      align-items: center;
      text-align: center;
    }
  }

  &__title {
    @include title(var(--color-primary-200), var(--font-size-lx), var(--font-family-secondary));
    text-transform: uppercase;
    @include lte($md) {
      font-size: 30px;
    }
  }

  &__subtitle {
    @include title(var(--color-primary-200), var(--font-size-lg), var(--font-family-primary));
    text-transform: uppercase;
    @include lte($md) {
      font-size: 14px;
    }
  }

  &__description {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    @include gte($lg) {
      max-width: 450px;
    }
    @include lt($lg) {
      gap: 14px;
      order: 1;
    }
  }

  &__text {
    font-size: 14px;
  }

  &__strong {
    color: var(--color-primary-200);
  }

  &__smile {
    width: 100%;
    max-width: 205px;

    @include lt($lg) {
      order: 2;
      max-width: 120px;
    }
  }
}
</style>
