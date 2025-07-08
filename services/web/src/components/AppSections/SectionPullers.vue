<script setup lang="ts">
import { useMedia } from '~/composables/useMedia'

const { isDesktop } = useMedia()
</script>

<template>
  <AppContainer
    class="pullers pullers__container"
    size="lg"
  >
    <div
      v-if="!isDesktop"
      class="pullers__title-block"
    >
      <h2 class="pullers__title">ПУЛЛЕРЫ</h2>
      <h4 class="pullers__title-description">
        <span class="pullers__text-accent">ФУНКЦИОНАЛЬНЫЙ АКССЕСУАР</span>,<br />
        ДЛЯ УДОБНОГО УПРАВЛЕНИЯ МОЛНИЕЙ
      </h4>
    </div>
    <div class="pullers__image-container">
      <TheLogotip
        v-if="isDesktop"
        class="pullers__logo"
        size="lg"
      />
      <div class="pullers__bg-wrapper">
        <img
          alt=""
          class="pullers__bg-img"
          src="@assets/images/pullers-pattern.png"
        />
      </div>
      <img
        alt=""
        class="pullers__main-img"
        src="@assets/images/briefcase.png"
      />
      <img
        v-if="isDesktop"
        alt=""
        class="pullers__main-img2"
        src="../../assets/images/pullers-sticker-smile.png"
      />
      <img
        v-if="!isDesktop"
        alt=""
        class="pullers__main-img3"
        src="../../assets/images/pullers-sticker.png"
      />
      <img
        v-if="!isDesktop"
        alt=""
        class="pullers__smile-img"
        src="@assets/images/pullers-smile.png"
      />
      <div
        v-if="isDesktop"
        class="pullers__info"
      >
        <div class="pullers__title-block">
          <h2 class="pullers__title">ПУЛЛЕРЫ</h2>
          <h4 class="pullers__title-description">
            <span class="pullers__text-accent">ФУНКЦИОНАЛЬНЫЙ АКССЕСУАР</span>, ДЛЯ УДОБНОГО
            УПРАВЛЕНИЯ МОЛНИЕЙ
          </h4>
        </div>
        <div class="pullers__description-block">
          <p class="pullers__description1">
            Пуллер представляет собой небольшой элемент, который прикрепляется к молнии на одежде
            или сумке. Его главная функция — обеспечить удобное управление молнией.
            <br /><br />
            Пуллер — способ выделиться, как для брендов, так и для любителей персонализировать
            акссесуары. Индивидуальный дизайн или необычная форма делают продукт запоминающимся.
          </p>
          <h5 class="pullers__description2">
            Маленькая, но незаменимая деталь, сделает жизнь проще и приятнее!
          </h5>
        </div>
      </div>
    </div>
    <div
      v-if="!isDesktop"
      class="pullers__description-block"
    >
      <p class="pullers__description1">
        Пуллер представляет собой небольшой элемент, который прикрепляется к молнии на одежде или
        сумке. Его главная функция — обеспечить удобное управление молнией.
        <br /><br />
        Пуллер — способ выделиться, как для брендов, так и для любителей персонализировать
        акссесуары. Индивидуальный дизайн или необычная форма делают продукт запоминающимся.
      </p>
      <h5 class="pullers__description2">
        Маленькая, но незаменимая деталь, сделает жизнь проще и приятнее!
      </h5>
    </div>
  </AppContainer>
</template>

<style lang="scss">
.pullers {
  &__container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }

  &__image-container {
    position: relative;
    width: 100%;
    height: 100%;
    aspect-ratio: 1076/1151;
  }

  &__logo {
    position: absolute;
    top: 24%;
    left: 1.5%;
    rotate: -45deg;
  }

  &__bg-wrapper {
    position: absolute;
    top: 7.8%;
    right: 0;
    width: 92.3%;
    @include lt($lg) {
      top: 7.8%;
      width: 90%;
    }
  }

  &__bg-text {
    position: absolute;
    right: 60px;
    bottom: 20px;
    max-width: 170px;
    text-align: center;
    text-transform: uppercase;
    @include title(var(--color-primary-20), var(--font-size-lg), var(--font-family-primary));
  }

  &__bg-img {
    width: 100%;
    height: 100%;
  }

  &__main-img {
    position: absolute;
    top: 0;
    right: 0.97%;
    width: 64%;
    @include lt($lg) {
      width: 62.5%;
    }
  }

  &__main-img2 {
    position: absolute;
    right: 1.5%;
    bottom: 4%;
    width: 62%;
  }

  &__main-img3 {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 46%;
  }

  &__smile-img {
    position: absolute;
    bottom: 5%;
    left: 3%;
    width: 30%;
  }

  &__info {
    position: absolute;
    bottom: 0;
    left: 15px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    @include lt($lg) {
      position: static;
    }
    @include gte($lg) {
      max-width: 335px;
    }
  }

  &__title-block {
    display: flex;
    flex-direction: column;
    gap: 40px;
    justify-content: center;
    @include lte($lg) {
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

  &__title-description {
    @include title(var(--color-primary-200), var(--font-size-lg), var(--font-family-primary));
    text-transform: uppercase;
    @include lte($md) {
      font-size: 14px;
    }
  }

  &__text-accent {
    color: var(--color-accent-100);
  }

  &__description-block {
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

  &__description1 {
    @include lte($md) {
      font-size: var(--font-size-sm);
    }
  }

  &__description2 {
    color: var(--color-primary-200);
  }
}
</style>
