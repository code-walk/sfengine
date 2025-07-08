<script setup lang="ts">
import Telegram from '@/assets/icons/telegram.svg?component'
import Whatsapp from '@/assets/icons/whatsapp.svg?component'
</script>

<template>
  <footer class="app-footer">
    <AppContainer class="app-footer__container">
      <div class="app-footer__main-block">
        <TheLogotip />
        <div class="app-footer__info">
          <div class="app-footer__contacts">
            <div class="app-footer__messengers">
              <Telegram />
              <Whatsapp />
            </div>
            <a
              class="app-footer__phone"
              href="tel:+79870771041"
            >
              +7 987 077-10-41
            </a>
            <div>Ваш персональный менеджер Екатерина</div>
          </div>
          <div class="app-footer__contacts">
            <div class="app-footer__address">
              г. Пенза, ул. Дружбы, 6 (Технопарк “Яблочков”), оф. 415
            </div>
            <div>пн-пт с 9:00 до 17:00</div>
          </div>
        </div>
      </div>
      <hr class="app-footer__hr" />
      <div class="app-footer__links">
        <div>© 2025 Elastic. Все права защищены</div>
        <div>Пользовательское соглашение</div>
        <div>Политика конфиденциальности</div>
      </div>
    </AppContainer>
  </footer>
</template>

<style lang="scss">
.app-footer {
  height: var(--footer-height);
  background-color: var(--color-primary-200);

  &__messengers,
  &__phone,
  &__address {
    color: var(--color-primary-20);
  }

  &__main-block,
  &__info,
  &__links {
    @include flex(space-between);
    padding: 30px 0 40px;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      gap: 20px;
      align-items: start;
      padding: 16px 0;
    }
  }

  &__info {
    display: flex;
    gap: 32px;
  }

  &__contacts {
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: center;
    max-width: 250px;
    height: auto;
  }

  &__messengers {
    display: flex;
    gap: 20px;
  }

  &__phone {
    font-size: 24px;
    font-weight: 700;
  }

  &__phone:hover {
    color: var(--color-accent-200);
  }

  &__hr {
    color: var(--color-primary-50);
  }

  &__links {
    display: flex;
    gap: 32px;
    margin-top: var(--spacing-lg);
  }
}
</style>
