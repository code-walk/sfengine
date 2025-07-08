<script setup lang="ts">
import { useMedia } from '~/composables/useMedia'

const { isDesktop } = useMedia()
</script>

<template>
  <section class="mascot">
    <AppContainer
      class="mascot__container"
      size="lg"
    >
      <div
        v-if="!isDesktop"
        class="mascot__top-block"
      >
        <div class="mascot__inner">
          <div class="mascot__title">
            <div>
              Разработка персонажа бренда -
              <span class="text-accent">маскота</span>
            </div>
          </div>
        </div>
        <p class="mascot__description">
          Маскот— это узнаваемый персонаж, инструмент маркетингового дизайна. Он станет символом и
          талисманом компании, ведь у маскота есть история, личность и харизма. <br />В нем
          отражается уникальное позиционирование бренда.
        </p>
      </div>
      <div class="mascot__images">
        <img
          alt=""
          class="mascot__image"
          src="@assets/images/mascot-image.png"
        />
        <img
          alt=""
          class="mascot__pen"
          src="@assets/images/mascot-pen.png"
        />
      </div>

      <div class="mascot__info">
        <div
          v-if="isDesktop"
          class="mascot__info-head"
        >
          <div class="mascot__inner">
            <div class="mascot__title">
              <TheLogotip size="lg" />
              <div>
                Разработка персонажа бренда -
                <span class="text-accent">маскота</span>
              </div>
            </div>
          </div>
          <p>
            Маскот— это узнаваемый персонаж, инструмент маркетингового дизайна. Он станет символом и
            талисманом компании, ведь у маскота есть история, личность и харизма. В нем отражается
            уникальное позиционирование бренда.
          </p>
        </div>
        <div class="mascot__advantages">
          <h4 class="mascot__list-header">ПРЕИМУЩЕСТВА КОМПАНИЙ <br />У КОТОРЫХ ЕСТЬ МАСКОТ:</h4>

          <div class="mascot__list-wrap">
            <ul class="mascot__list">
              <li class="mascot__list-item">УЗНАВАЕМОСТЬ</li>
            </ul>
            <p class="mascot__list-description">
              Маскот выделяет бренд среди конкурентов и делает его запоминающимся.
            </p>
          </div>

          <div>
            <ul>
              <li class="mascot__list-item">УВЕЛИЧЕНИЕ ДОХОДА</li>
            </ul>
            <p class="mascot__list-description">
              Исследования показывают, что реклама с маскотом приносит на на 30% больше прибыли.
              Также персонажи выступают самостоятельным объектом продаж в качестве мерча.
            </p>
          </div>

          <div>
            <ul>
              <li class="mascot__list-item">ЭМОЦИОНАЛЬНАЯ СВЯЗЬ</li>
            </ul>
            <p class="mascot__list-description">
              Через яркий и дружелюбный образ маскот помогает установить доверие и симпатию у
              аудитории.
            </p>
          </div>
        </div>
      </div>
    </AppContainer>
  </section>
</template>

<style lang="scss">
.mascot {
  color: var(--color-primary-200);

  &__container {
    display: flex;
    gap: 24px;
    align-items: center;
    @include lt($lg) {
      flex-direction: column;
      gap: 20px;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
  }

  &__info-head {
    @include gte($lg) {
      max-width: 450px;
      margin-bottom: 24px;
    }
  }

  &__images {
    position: relative;
  }

  &__image {
    width: 100%;
    max-width: 689px;
  }

  &__pen {
    position: absolute;
    top: -200px;
    left: 0;
    max-width: 632px;
  }

  &__inner {
    display: flex;
    margin-bottom: 24px;
    @include gte($lg) {
      max-width: 450px;
    }
  }

  &__title {
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
    font-family: var(--font-family-secondary);
    font-size: var(--font-size-lx);
    @include gte($lg) {
      max-width: 300px;
    }
    @include lt($lg) {
      text-align: center;
    }
    @include lt($md) {
      font-size: 30px;
    }
  }

  &__title-description {
    @include lt($md) {
      font-size: var(--font-size-sm);
    }
  }

  &__advantages {
    display: flex;
    flex-direction: column;
    gap: 24px;
    @include gte($lg) {
      max-width: 450px;
    }
  }

  &__list-header {
    font-size: var(--font-size-lg);
    font-weight: 700;
    @include lt($md) {
      font-size: var(--font-size-m);
    }
  }

  &__list-item {
    margin-bottom: 6px;
    margin-left: 16px;
    font-weight: 700;
    list-style: disc inside;
  }

  &__list-description {
    color: var(--color-primary-100);
    @include lt($md) {
      font-size: var(--font-size-sm);
    }
  }
}
</style>
