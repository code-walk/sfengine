<script setup lang="ts">
import { useMedia } from '~/composables/useMedia'

const { isDesktop } = useMedia()
</script>

<template>
  <AppContainer class="stickers3d stickers3d__container" size="lg">
    <div class="stickers3d__title-block">
      <div v-if="!isDesktop" class="stickers3d__inner">
        <div class="stickers3d__title">
          <h2 class="stickers3d__title-text">3D-стикеры</h2>
        </div>
      </div>
      <h4 v-if="!isDesktop" class="stickers3d__description-title">
        СОЗДАЮТ <br />
        <span class="stickers3d__text-accent">ЭМОЦИОНАЛЬНУЮ СВЯЗЬ</span><br />
        С ПЕРВОГО касания
      </h4>
    </div>
    <div class="stickers3d__info">
      <div v-if="isDesktop" class="stickers3d__inner">
        <div class="stickers3d__title">
          <TheLogotip size="lg" />
          <h2 class="stickers3d__title-text">3D-стикеры</h2>
        </div>
      </div>
      <h4 v-if="isDesktop" class="stickers3d__description-title">
        СОЗДАЮТ <br />
        <span class="stickers3d__text-accent">ЭМОЦИОНАЛЬНУЮ СВЯЗЬ</span><br />
        С ПЕРВОГО касания
      </h4>
      <p class="stickers3d__description-text">
        3D стикеры — это мощный инструмент продвижения. Их объёмная фактура притягивает внимание и
        вызывает желание прикоснуться, создавая эмоциональную связь с вашим брендом. Клиенты
        запомнят вас не только визуально, но и тактильно — через приятные ощущения от контакта со
        стикером. Это маркетинг, который не кричит о себе, а мягко, но настойчиво встраивается в
        привычки аудитории.
      </p>
      <h5 class="stickers3d__strong">
        С 3D стикерами ваш бренд становится не просто видимым — он становится осязаемым.
      </h5>
      <img alt="" class="stickers3d__smile" src="@assets/images/stickers3d-smile.png" />
    </div>
    <div class="stickers3d__image-wrapper">
      <div class="stickers3d__bg-wrapper">
        <h4 class="stickers3d__bg-text">
          Тактильный брендинг,<br />
          оставляющий след в памяти
        </h4>
        <img alt="" class="stickers3d__bg-img" src="@assets/images/stickers3d-pattern.png" />
      </div>
      <img alt="" class="stickers3d__phones-img" src="@assets/images/stickers3d-phones.png" />
      <img alt="" class="stickers3d__mockup-img" src="@assets/images/stickers3d-mockup.png" />
    </div>
  </AppContainer>
</template>

<style lang="scss">
.stickers3d {
  &__container {
    display: flex;
    gap: 24px;

    @include lt($lg) {
      flex-direction: column;
      gap: 20px;
      align-items: center;
    }
  }

  &__image-wrapper {
    position: relative;
    width: 100%;
    max-width: 804px;
    height: 100%;
    aspect-ratio: 804/889;

    @include lt($lg) {
      order: 1;
      aspect-ratio: 432/534;
    }
  }

  &__bg-wrapper {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 60%;
    transform: translateX(-50%);

    @include lt($lg) {
      width: 79%;
      height: 95%;
    }
  }

  &__bg-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__phones-img {
    position: absolute;
    bottom: 2%;
    left: -10%;
    width: 120%;
  }

  &__mockup-img {
    position: absolute;
    top: -7%;
    left: 15%;
    width: 80%;
  }

  &__bg-text {
    position: absolute;
    bottom: 4%;
    left: 50%;
    width: 100%;
    max-width: 355px;
    font-size: var(--font-size-lg);
    font-weight: 700;
    color: var(--color-primary-20);
    text-align: center;
    text-transform: uppercase;
    transform: translateX(-50%);

    @include lt($lg) {
      font-size: var(--font-size-m);
    }

    @include lte($md) {
      font-size: var(--font-size-sm);
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    @include gte($lg) {
      max-width: 331px;
    }

    @include lt($lg) {
      order: 2;
    }
  }

  &__title-block {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  &__inner {
    display: flex;
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

    @include lt($md) {
      font-size: 30px;
    }
  }

  &__description-title {
    font-size: var(--font-size-lg);
    font-weight: 700;
    color: var(--color-primary-200);
    text-transform: uppercase;

    @include gte($lg) {
      margin: 40px 0;
    }

    @include lt($lg) {
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
    width: 317px;
    margin-top: 20px;

    @include lt($lg) {
      width: 140px;
    }
  }
}
</style>
