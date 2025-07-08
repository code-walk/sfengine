<script setup lang="ts">
import { useMedia } from '~/composables/useMedia'

const { isDesktop } = useMedia()
</script>

<template>
  <section class="brandbook">
    <AppContainer
      class="brandbook__container"
      size="lg"
    >
      <img
        class="brandbook__image"
        src="@assets/images/brandbook.png"
      />
      <div class="brandbook__info">
        <div class="brandbook__inner">
          <TheLogotip
            v-if="isDesktop"
            class="brandbook__logo"
            size="lg"
          />
          <h2 class="brandbook__title">брендбук</h2>
        </div>
        <h4 class="brandbook__subtitle">
          Философия и ценности <span class="text-accent">вашего бренда</span>
        </h4>
        <div class="brandbook__description">
          <p class="brandbook__text">
            Брендбук помогает правильно и внятно презентовать идентичность бренда. Кроме того, когда
            все элементы и пояснения по применению айдентики собраны в одном месте, они работают как
            корпоративная энциклопедия.
            <br />

            Когда компании потребуется сделать упаковку для товара или выпустить печатные материалы,
            примеры в брендбуке позволят сделать макеты дизайна по аналогии.
          </p>
          <h5 class="brandbook__strong">Это оптимизирует время работы и расходы!</h5>
        </div>
        <img
          alt=""
          class="brandbook__smile"
          src="@assets/images/brandbook-smile.png"
        />
      </div>
    </AppContainer>
  </section>
</template>

<style lang="scss">
.brandbook {
  &__container {
    display: grid;
    grid-template-columns: auto 1fr;

    @include lt($lg) {
      align-items: center;
    }
  }

  &__image {
    max-width: 780px;
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  &__inner {
    display: flex;
    flex-direction: column;
    max-width: max-content;
  }

  &__logo {
    align-self: center;
  }

  &__title {
    margin-top: 24px;
    text-transform: uppercase;
    @include title(var(--color-primary-200), var(--font-size-lx), var(--font-family-secondary));
    @include lt($md) {
      margin-top: 0;
      margin-bottom: 14px;
      font-size: 30px;
    }
  }

  &__subtitle {
    margin: 40px 0;
    font-size: var(--font-size-lg);
    font-weight: 700;
    color: var(--color-primary-200);
    text-transform: uppercase;
    @include lt($md) {
      margin: 0;
      font-size: var(--font-size-sm);
    }
    @include lt($lg) {
      text-align: center;
    }
  }

  &__description {
    display: flex;
    flex-direction: column;

    @include lt($md) {
      font-size: var(--font-size-sm);
    }
  }

  &__strong {
    align-self: flex-start;
    margin-top: 20px;
    font-weight: 700;
    color: var(--color-primary-200);
    @include lte($md) {
      font-size: var(--font-size-sm);
    }
  }

  &__smile {
    align-self: center;
    width: 203px;
    margin-top: 40px;
  }
}
</style>
