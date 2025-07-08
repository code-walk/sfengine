<script lang="ts" setup>
import { computed } from 'vue'
import { v4 } from 'uuid'
import AppExpandTransition from '@/components/AppExpandTransition.vue'

const props = defineProps<{
  label?: string
  error?: string
  for?: string
  required?: boolean
  labelSize?: 'lg'
}>()

defineSlots<{
  default: (props: { id: string }) => unknown
}>()

const id = computed(() => props.for ?? v4())
</script>

<template>
  <div class="app-form-field">
    <label
      v-if="props.label"
      :class="['app-form-field__label', `app-form-field__label_${props.labelSize}`]"
      :for="id"
    >
      <span>{{ props.label }}</span>
      <span v-if="props.required">*</span>
    </label>
    <div class="app-form-field__control">
      <slot :id="id" />
    </div>
    <AppExpandTransition :shown="Boolean(props.error)">
      <div class="app-form-field__error">
        {{ props.error }}
      </div>
    </AppExpandTransition>
  </div>
</template>

<style lang="scss">
.app-form-field {
  &__label {
    display: block;
    margin-bottom: 4px;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.35;
  }

  &__label.app-form-field__label_lg {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.4;
  }

  &__control {
    width: 100%;
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
