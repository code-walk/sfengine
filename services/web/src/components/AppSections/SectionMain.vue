<template>
  <section class="main-screen">
    <AppContainer class="main-screen__container">
      <img
        alt=""
        class="main-screen__img"
        src="@assets/images/main-screen.png"
      />

      <div class="main-screen__info">
        <div class="main-screen__inner">
          <h1 class="main-screen__title">бренд-студия elastic</h1>
          <p class="main-screen__description">
            Ваш надежный партнер в создании уникальных дизайнов и креативных решений. Мы помогаем
            брендам выделяться и вдохновлять своих клиентов.
          </p>
        </div>
        <div class="main-screen__advantages">
          <div class="advantages-item">
            <strong class="advantages-item__title">200</strong>
            <p class="advantages-item__description">Успешно выполненных проектов</p>
          </div>
          <div class="advantages-item">
            <strong class="advantages-item__title">10+</strong>
            <p class="advantages-item__description">Лет опыта в дизайне и разработке</p>
          </div>
        </div>
      </div>
    </AppContainer>
  </section>
</template>

<style lang="scss">
.main-screen {
  &__container {
    @include flex(center);
    flex-direction: column;
    gap: var(--spacing-sm);
    padding-top: var(--spacing-2xl);
  }

  &__info {
    display: grid;
    grid-template-columns: 1fr 450px;
    gap: var(--spacing-md);
    align-self: stretch;

    max-width: var(--container-width-xl);

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  &__img {
    width: 100%;
    object-fit: contain;
  }

  &__inner {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
  }

  &__title {
    @include title();
  }

  &__description {
    max-width: 700px;
    font-size: var(--font-size-md);
    font-weight: 300;
  }

  &__advantages {
    @include flex(center);
    gap: var(--spacing-md);

    @media screen and (max-width: 768px) {
      justify-content: start;
    }
  }
}

.advantages-item {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);

  &__title {
    font-family: var(--font-family-secondary);
    font-size: var(--font-size-xl);
    color: var(--color-accent-100);
  }

  &__description {
    font-size: var(--font-size-md);
    font-weight: 300;
  }
}
</style>
