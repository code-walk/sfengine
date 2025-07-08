<template>
  <section class="submit-request">
    <AppContainer
      class="submit-request__container"
      size="lg"
    >
      <img
        alt=""
        class="submit-request__img"
        src="@assets/images/submit-request.png"
      />
      <div class="submit-request__wrapper">
        <img
          alt=""
          class="submit-request__personage"
          src="@assets/images/submit-request-personage.png"
        />
        <div class="submit-request__box">
          <p class="submit-request__description">
            Оставьте заявку, и наш менеджер свяжется с вами в течение 5 минут.
          </p>
          <AppButton class="submit-request__btn">Оставить заявку</AppButton>
        </div>
      </div>
    </AppContainer>
  </section>
</template>

<style lang="scss">
// SUBMIT-REQUEST

.submit-request {
  &__container {
    padding-top: var(--spacing-3xl);
    padding-bottom: var(--spacing-3xl);
  }

  &__img {
    width: 100%;
  }

  &__box {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);

    max-width: 331px;
    margin-bottom: 45px;

    @media screen and (max-width: 768px) {
      margin-top: 20px;
      margin-bottom: 0;
    }
  }

  &__wrapper {
    display: flex;
    gap: var(--spacing-md);
    align-items: end;

    @media screen and (max-width: 768px) {
      margin: 0;
    }
  }

  &__personage {
    max-width: 531px;

    @media screen and (max-width: 768px) {
      align-self: start;
      max-width: 205px;
      margin-top: -20px;
    }
  }

  &__description {
    font-weight: 400;
    color: var(--color-primary-200);
  }

  &__btn {
    align-self: end;
  }
}
</style>
