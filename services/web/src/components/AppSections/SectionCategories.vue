<script setup lang="ts">
import ArrowExpand from '@/assets/icons/arrow-expand.svg?component'
</script>

<template>
  <section class="categories">
    <AppContainer class="categories__container">
      <div class="categories__wrapper">
        <img
          alt=""
          class="categories__img"
          src="@assets/images/categories-2.png"
        />
        <!-- TODO: Рефактор -->
        <img
          alt=""
          class="categories__personage"
          src="@assets/images/categories-personage-2.png"
        />

        <div class="categories__info">
          <div class="categories__inner">
            <div class="categories__box">
              <h2 class="categories__title">Lorem ipsum</h2>
              <strong class="categories__subtitle">
                Ut enim ad minim veniam, quis nostrud
                <b class="categories__b">exercitation</b>
              </strong>
            </div>

            <p class="categories__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>

          <nav class="categories__navigation">
            <ul class="categories__list">
              <li class="categories__item">
                <NuxtLink
                  class="categories__link"
                  to="/design/stickers"
                  >Стикеры
                  <ArrowExpand class="categories__link-icon" />
                </NuxtLink>
              </li>
              <li class="categories__item">
                <NuxtLink
                  class="categories__link"
                  to="/design/stickers3d"
                  >3D-стикеры
                  <ArrowExpand class="categories__link-icon" />
                </NuxtLink>
              </li>
              <li class="categories__item">
                <NuxtLink
                  class="categories__link"
                  to="/design/stickers-tg"
                  >Тг-стикеры
                  <ArrowExpand class="categories__link-icon" />
                </NuxtLink>
              </li>
              <li class="categories__item">
                <NuxtLink
                  class="categories__link"
                  to="/design/coloring"
                  >Раскраски
                  <ArrowExpand class="categories__link-icon" />
                </NuxtLink>
              </li>
              <li class="categories__item">
                <NuxtLink
                  class="categories__link"
                  to="/design/brandbook"
                  >Брендбук
                  <ArrowExpand class="categories__link-icon" />
                </NuxtLink>
              </li>
              <li class="categories__item">
                <NuxtLink
                  class="categories__link"
                  to="/design/mascot"
                  >Маскот
                  <ArrowExpand class="categories__link-icon" />
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </AppContainer>
  </section>
</template>

<style lang="scss">
.categories {
  &__container {
    padding-top: var(--spacing-3xl);
    padding-bottom: var(--spacing-3xl);
  }

  &__wrapper {
    position: relative;
  }

  &__title {
    @include title(var(--color-primary-200), var(--font-size-lx));
  }

  &__subtitle {
    font-size: var(--font-size-lg);
    color: var(--color-primary-200);
    text-transform: uppercase;
  }

  &__b {
    color: var(--color-accent-200);
  }

  &__img {
    width: 100%;
    margin-bottom: var(--spacing-xl);
    object-fit: cover;
  }

  &__personage {
    position: absolute;
    right: 0;
    bottom: 0;
    max-width: 568px;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  &__box {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);

    min-width: 331px;
  }

  &__inner {
    display: flex;

    gap: var(--spacing-md);
    align-items: stretch;
    max-width: 804px;

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }

  &__navigation {
    display: flex;
    gap: 10px;
    max-width: 923px;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
    margin-top: 24px;

    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__link {
    display: flex;
    gap: 55px;
    align-items: center;
    justify-content: space-between;
    padding: 12px 0;
    font-size: 18px;
    color: var(--color-primary-200);
    border-bottom: 1px solid var(--color-primary-200);
  }

  &__link-icon {
    color: var(--color-primary-200);
    transition: var(--transition);
  }

  &__link:hover {
    color: var(--color-accent-200);
    border-bottom: 1px solid var(--color-accent-200);
    transition: var(--transition);

    & .categories__link-icon {
      color: var(--color-accent-200);
      transform: translateY(5px);
      transform: translateX(5px);
    }
  }
}
</style>
