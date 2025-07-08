<template>
  <section class="stickers">
    <AppContainer
      class="stickers__container"
      size="lg"
    >
      <img
        alt=""
        class="stickers__image"
        src="@assets/images/stickers-image.png"
      />
      <div class="stickers__info">
        <div class="stickers__inner">
          <h2 class="stickers__title">Стикеры</h2>
          <h4 class="stickers__subtitle">
            <span class="text-accent">яркий способ </span>сделать обычные вещи необычными
          </h4>
        </div>
        <div class="stickers__description">
          <p class="stickers__text">
            Каждый стикер, оставленный в том или ином месте (или подаренный кому‑то) является
            ненавязчивой рекламой бренда, что приводит к большей узнаваемости компании. Если
            приложить стикер к заказу, это обязательно оставит хорошее впечатление. У клиента
            возникнут приятные ассоциации. На стикере можно разместить москота или логотип компании.
            Мы воплотим в жизнь любой индивидуальный дизайн по вашим пожеланиям.
          </p>
          <strong class="stickers__strong">Ваше трепетное отношение к оценит любой клиент!</strong>
        </div>
        <img
          alt=""
          class="stickers__smile-img"
          src="@assets/images/stickers2-smile.png"
        />
      </div>
    </AppContainer>
  </section>
</template>

<style lang="scss">
.stickers {
  &__container {
    display: flex;
    flex-direction: column;
    gap: 24px;
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
    @include lt($lg) {
      gap: 14px;
      align-items: center;
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

  &__text-accent {
    color: var(--color-accent-100);
  }

  &__description {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    @include gte($lg) {
      max-width: 570px;
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

  &__smile-img {
    width: 200px;
    @include lt($lg) {
      align-self: center;
      width: 120px;
    }
  }
}
</style>
