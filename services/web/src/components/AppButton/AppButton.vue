<script setup lang="ts">
import { computed } from 'vue'
import type { AppButtonProps } from './AppButtonTypes'
import { NuxtLink } from '#components'
import IconCircle from '@/assets/icons/circle-notch.svg?component'

const props = withDefaults(defineProps<AppButtonProps>(), {
  type: 'button',
  label: 'Button',

  size: 'md',
  rounded: 'md',

  isLoading: false,
  isDisabled: false,
})

const emit = defineEmits<{
  (e: 'click'): void
  (e: 'focus'): void
}>()

const slots = defineSlots<{
  default?: () => unknown
  leading?: () => unknown
  trailing?: () => unknown
}>()

const asComponent = computed(() => {
  if (props.to) return NuxtLink

  return props.type
})

const isButtonDisabled = computed(() => {
  return props.isDisabled || props.isLoading
})

const onClick = () => {
  if (isButtonDisabled.value) return

  emit('click')
}

const onFocus = () => {
  emit('focus')
}
</script>

<template>
  <component
    :is="asComponent"
    :class="[
      'app-button',
      `app-button_size-${props.size}`,
      `app-button_rounded-${props.rounded}`,
      {
        'app-button_disabled': isButtonDisabled,
      },
    ]"
    :disabled="isButtonDisabled"
    :to="props.to"
    :type="props.type"
    @click="onClick"
    @focus="onFocus"
  >
    <span
      v-if="slots.leading"
      class="app-button__leading"
    >
      <slot name="leading" />
    </span>

    <span
      v-if="props.label || slots.default"
      class="app-button__content"
    >
      <IconCircle
        v-if="props.isLoading"
        class="app-button__icon-loading app-button__icon"
      />
      <slot v-else />
    </span>

    <span
      v-if="slots.trailing"
      class="app-button__trailing"
    >
      <slot name="trailing" />
    </span>
  </component>
</template>

<style lang="scss">
.app-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  padding: 10px 20px;
  border-radius: var(--border-radius-lg);
  border: 2px solid var(--color-primary-200);
  transition: var(--transition-hover);

  background-color: var(--color-primary-10);

  cursor: pointer;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  &:hover {
    outline: none;
    background-color: var(--color-primary-200);
    color: var(--color-primary-50);
  }

  &:active {
    color: var(--color-primary-10);
  }

  &:disabled,
  &_disabled:disabled {
    cursor: not-allowed;
    pointer-events: all !important;
    background-color: var(--color-secondary-100);
    color: var(--color-primary-50);
  }

  &__content {
    @include flex(center);
  }

  &__icon-loading {
    @include box(20px);

    animation: progress-circular 1s linear infinite;
  }

  &_size-md {
    min-width: 100px;
  }
}
</style>
