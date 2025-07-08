<script setup lang="ts">
import IconCheck from '@/assets/icons/check.svg?component'
import AppFadeTransition from '@/components/AppFadeTransition.vue'
import AppExpandTransition from '@/components/AppExpandTransition.vue'

const props = withDefaults(
  defineProps<{
    /** Отключает возможность переключения checkbox. Значение остается равным modelValue */
    disabled?: boolean
    /** Текст ошибки */
    error?: string
  }>(),
  {
    disabled: false,
  }
)

const emit = defineEmits<{
  /** Срабытвает при изменении состояния */
  (e: 'change'): void
}>()

const checked = defineModel<boolean>()

const slots = defineSlots<{
  /** Название чекбокса */
  default?: string
  /** Описание чекбокса */
  description?: string
}>()
</script>

<template>
  <div
    :class="[
      'app-checkbox',
      { 'app-checkbox_checked': checked },
      { 'app-checkbox_disabled': props.disabled },
    ]"
  >
    <label class="app-checkbox__label">
      <div class="app-checkbox__rect">
        <input
          v-model="checked"
          :disabled="props.disabled"
          class="app-checkbox__control"
          type="checkbox"
          @change="emit('change')"
        />
        <AppFadeTransition>
          <IconCheck
            v-if="checked"
            class="app-checkbox__check"
          />
        </AppFadeTransition>
      </div>
      <div
        v-if="slots.default"
        class="app-checkbox__label-text"
      >
        <slot />
      </div>
    </label>
    <div
      v-if="slots.default"
      class="app-checkbox__footer"
    >
      <div
        v-if="slots.description"
        class="app-checkbox__description"
      >
        <slot name="description" />
      </div>
      <AppExpandTransition :shown="Boolean(props.error)">
        <div class="app-checkbox__error">
          {{ props.error }}
        </div>
      </AppExpandTransition>
    </div>
  </div>
</template>

<style lang="scss">
.app-checkbox {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;

  &_disabled {
    opacity: 0.6;
  }

  &__label {
    display: flex;
    gap: 12px;
    align-items: flex-start;
  }

  &_disabled &__label,
  &_disabled &__label * {
    cursor: not-allowed;
  }

  &__rect {
    position: relative;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    margin-top: 1px;
    border: 2px solid var(--color-accent-100);
    border-radius: 4px;
    transition:
      background-color 0.3s,
      border-color 0.3s;
  }

  &_checked &__rect {
    background-color: var(--color-accent-200);
    border-color: var(--color-accent-200);
  }

  &:not(&_disabled) &__label:hover &__rect {
    background-color: var(--color-accent-200);
    border-color: var(--color-accent-200);
  }

  &__rect::before {
    position: absolute;
    top: -2px;
    right: -2px;
    bottom: -2px;
    left: -2px;
    pointer-events: none;
    content: '';
    border-radius: 5px;
    transition: box-shadow 0.3s;
  }

  &__rect:has(:focus-visible)::before {
    box-shadow: 0 0 0 2px var(--color-accent-200);
  }

  &__control {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
  }

  &__check {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 12px;
    height: 12px;
    color: var(--color-primary-20);
    transform: translate(-50%, -50%);
  }

  &__label-text {
    font-size: 18px;
    font-weight: 400;
    line-height: 19.6px;
    color: var(--color-accent-200);
    transition: color 0.3s;
  }

  &:not(&_disabled) &__label:hover &__label-text {
    color: var(--color-accent-100);
  }

  &__footer {
    padding-left: 28px;
  }

  &__description {
    margin-top: 4px;
    font-size: 14px;
    font-weight: 400;
    line-height: 19.6px;
    color: var(--color-primary-100);
  }

  &__error {
    padding-top: 4px;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.35;
    color: var(--color-error);
  }
}
</style>
