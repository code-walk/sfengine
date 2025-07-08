<template>
  <section
    id="about"
    class="about"
  >
    <AppContainer class="about__container">
      <article class="about-article">
        <img
          alt=""
          class="about-article__img"
          src="@assets/images/about-box-1.png"
        />
        <div class="about-article__inner">
          <div class="about-article__info">
            <h2 class="about-article__title">О нас</h2>
            <p class="about-article__description">
              Быстро найдём самые действенные решения для вашего бренда и удержим фокус на
              результате.
            </p>
            <p class="about-article__description">
              Наши изделия не пылятся в ящике, а органично встраиваются в жизнь клиентов и создают
              естественный повод для разговора о вашем бренде
            </p>
            <img
              alt=""
              class="about-article__pattern"
              src="@assets/images/about-pattern.png"
            />
          </div>
          <img
            alt=""
            class="about-article__img"
            src="@assets/images/about-box-3.png"
          />
        </div>
      </article>

      <article class="about-article">
        <div class="about-article__inner">
          <div class="about-article__column">
            <p class="about-article__description">
              «ELASTIC» - бренд-студия, специализирующаяся на разработке айдентики. Каждый проект
              начинается с изучения вашего бизнеса, ценностей и аудитории. Наша задача — создать не
              просто набор графических элементов, а продуманную систему визуальной коммуникации.
              Логотип, цвета, шрифты, маскот — всё это будет работать вместе, чтобы ваш бренд
              запомнили, полюбили и выбрали.
            </p>
          </div>
          <div class="about-article__column about-article__info">
            <p class="about-article__description">
              Наш подход сочетает актуальные тренды с индивидуальными решениями. Завершенные проекты
              получают полный пакет файлов во всех необходимых форматах и руководство по
              использованию фирменного стиля.
            </p>
            <strong class="about-article__strong">
              Мы точно знаем какой именно мерч понравится вашим коллегам и друзьям, и что сейчас в
              тренде!
            </strong>
          </div>
        </div>
        <img
          alt=""
          class="about-article__img"
          src="@assets/images/about-box-2.png"
        />
      </article>
    </AppContainer>
  </section>
</template>

<style lang="scss">
// ABOUT

.about {
  &__container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-md);
    padding-top: var(--spacing-3xl);
    padding-bottom: var(--spacing-3xl);

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
}

// ABOUT-ARTICLE

.about-article {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);

  &__title {
    @include title();
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__strong {
    @include title(var(--color-primary-200), var(--font-size-lg), var(--font-family-primary));
  }

  &__inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-md);

    @media screen and (max-width: 1280px) {
      grid-template-columns: 1fr;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
  }
}
</style>
