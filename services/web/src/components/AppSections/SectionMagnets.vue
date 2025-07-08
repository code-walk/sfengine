<template>
  <section class="magnets">
    <AppContainer
      class="magnets__container"
      size="lg"
    >
      <img
        alt=""
        class="magnets__image"
        src="@assets/images/magnets-image.png"
      />
      <div class="magnets__info">
        <div class="magnets__box">
          <div class="magnets__inner">
            <h2 class="magnets__title">магниты</h2>
            <h4 class="magnets__subtitle">
              <span class="text-accent">ХОРОШИЕ ВОСПОМИНАНИЯ <br /></span>В ПОВСЕДНЕВНОМ
              ПРОСТРАНСТВЕ
            </h4>
          </div>
          <div class="magnets__description">
            <p class="magnets__text">
              Магниты — это не только украшение на холодильник, это карта ваших эмоций и
              приключений. Они напоминают о тёплых днях, ярких впечатлениях и моментах, которые
              хочется сохранить в памяти.
              <br />
              <br />
              Персонализированные магниты с логотипом компании, добрым пожеланием или уникальным
              дизайном станут приятным сюрпризом для близких или партнёров.ассоциации.
            </p>
            <strong class="magnets__strong">
              Это не просто аксессуары, а эмоции, которые можно потрогать.
            </strong>
          </div>
        </div>
        <img
          alt=""
          class="magnets__smile"
          src="@assets/images/magnets-smile.png"
        />
      </div>
    </AppContainer>
  </section>
</template>

<style lang="scss">
.magnets {
  &__container {
    display: flex;
    flex-direction: column;
    gap: 40px;
    @include lte($md) {
      gap: 20px;
    }
  }

  &__image {
    width: 100%;
  }

  &__info {
    display: flex;
    gap: 40px;
    align-items: center;
    justify-content: space-between;

    @include lt($lg) {
      flex-direction: column;
      gap: 20px;
    }
  }

  &__inner {
    display: flex;
    flex-direction: column;
    gap: 40px;
    justify-content: center;
    max-width: 331px;

    @include lt($lg) {
      gap: 14px;
      align-items: center;
      max-width: 100%;
      text-align: center;
    }
  }

  &__box {
    display: flex;
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
      max-width: 331px;
    }

    @include lt($lg) {
      gap: 14px;
    }
  }

  &__text {
    @include lte($md) {
      font-size: var(--font-size-sm);
    }
  }

  &__strong {
    color: var(--color-primary-200);
  }

  &__smile {
    max-width: 210px;
    @include lt($lg) {
      width: 112px;
    }
  }
}
</style>
