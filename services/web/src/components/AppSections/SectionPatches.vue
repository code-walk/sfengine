<script setup lang="ts">
import { useMedia } from '~/composables/useMedia'

const { isDesktop } = useMedia()
</script>

<template>
  <section class="patches">
    <AppContainer
      class="patches__container"
      size="lg"
    >
      <div>
        <div
          v-if="!isDesktop"
          class="patches__inner"
        >
          <div class="patches__title">
            <h2 class="patches__title-text">ПАТЧИ</h2>
          </div>
        </div>
        <h4
          v-if="!isDesktop"
          class="patches__description-title"
        >
          ДЕТАЛЬ, КОТОРАЯ ОТРАЖАЕТ <br />ВАШ
          <span class="text-accent">ДУХ ПРИКЛЮЧЕНИЙ</span>
        </h4>
      </div>

      <div class="patches__image-wrapper">
        <div class="patches__bg-wrapper">
          <img
            alt=""
            class="patches__bg-img"
            src="@assets/images/patches-pattern.png"
          />
          <h4 class="patches__bg-text">
            ОРИГИНАЛЬНЫЙ АКССЕСУАР <br />
            ДЛЯ АКТИВНОГО ОТДЫХА
          </h4>
        </div>
        <img
          alt=""
          class="patches__image1"
          src="@assets/images/patches-sticker.png"
        />
      </div>
      <div class="patches__info">
        <div
          v-if="isDesktop"
          class="patches__inner"
        >
          <div class="patches__title">
            <TheLogotip size="lg" />
            <h2 class="patches__title-text">ПАТЧИ</h2>
          </div>
        </div>
        <h4
          v-if="isDesktop"
          class="patches__description-title"
        >
          ДЕТАЛЬ, КОТОРАЯ ОТРАЖАЕТ ВАШ <span class="patches__text-accent">ДУХ ПРИКЛЮЧЕНИЙ</span>
        </h4>
        <div>
          <p class="patches__description-text">
            Патчи — это не только украшение для вашей одежды или рюкзака, это символы ваших самых
            ярких моментов. Каждая деталь напоминает о приключениях.
            <br /><br />
            Патчи легко крепятся к любой липучке и надёжно держатся. Вы сможете индиви дуализировать
            свою экипировку этим уникальным акссесуаром.
          </p>
          <h5 class="patches__strong">
            Патчи не только добавят яркости, но и расскажут вашу историю: о захватываю щих маршрутах
            и покорённых вершинах.
          </h5>
        </div>
        <img
          alt=""
          class="patches__smile"
          src="@assets/images/patches-smile.png"
        />
      </div>
    </AppContainer>
  </section>
</template>

<style lang="scss">
.patches {
  &__container {
    display: flex;
    gap: 40px;
    justify-content: space-between;
    @include lt($lg) {
      flex-direction: column;
      gap: 20px;
      align-items: center;
    }
  }

  &__image-wrapper {
    position: relative;
    width: 100%;
    max-width: 687px;
    height: 100%;
    aspect-ratio: 687/886;
    @include lte($lg) {
      aspect-ratio: 432/584;
    }
  }

  &__bg-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__image1 {
    position: absolute;
    top: 0;
    left: 0;
    width: 68%;
    @include lte($lg) {
      width: 58%;
    }
  }

  &__bg-wrapper {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 74%;
    @include lt($lg) {
      width: 100%;
      height: 100%;
    }
  }

  &__bg-text {
    position: absolute;
    bottom: 25px;
    width: 100%;
    font-size: var(--font-size-lg);
    font-weight: 700;
    color: var(--color-primary-20);
    text-align: center;
    text-transform: uppercase;
    @include lte($md) {
      font-size: var(--font-size-sm);
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    @include gte($lg) {
      max-width: 330px;
    }
    @include lt($lg) {
      flex-direction: row;
      align-items: center;
    }
  }

  &__inner {
    @include gte($lg) {
      align-self: flex-start;
    }
  }

  &__title {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__title-text {
    text-transform: uppercase;
    @include title(var(--color-primary-200), var(--font-size-lx), var(--font-family-secondary));
    @include gte($lg) {
      margin-top: 24px;
    }
    @include lte($md) {
      font-size: 30px;
    }
  }

  &__description-title {
    margin: 40px 0;
    font-size: var(--font-size-lg);
    font-weight: 700;
    color: var(--color-primary-200);
    text-transform: uppercase;
    @include lt($lg) {
      margin: 20px 0 0;
      text-align: center;
    }
    @include lte($md) {
      font-size: 14px;
    }
  }

  &__text-accent {
    color: var(--color-accent-100);
  }

  &__description-text {
    @include lte($md) {
      font-size: var(--font-size-sm);
    }
  }

  &__strong {
    margin-top: 20px;
    font-weight: 700;
    color: var(--color-primary-200);
  }

  &__smile {
    align-self: center;
    width: 120px;
    @include gte($lg) {
      width: 203px;
      margin-top: 40px;
    }
  }
}
</style>
