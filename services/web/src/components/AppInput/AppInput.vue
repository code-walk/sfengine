<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { debounce } from 'lodash-es'
import type { AppInputAttrs, AppInputProps } from './AppInputTypes'
import AppFormField from '@/components/AppFormField/AppFormField.vue'

// TODO: Сделать проверка на тип инпута
// TODO: Сделать проверку на максимально число и максимальное кол-во символов
// Мб сделать валидацию через пропс (maxValue, maxLength), если введено > символов то вернуть эмит с ошибкой
// Проверку всех полей сделать через хелпер или composable

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<AppInputProps>(), {
  modelValue: '',
  placeholder: 'Введите текст',
  type: 'text',
  loading: false,
  disabled: false,
  required: false,
  readonly: false,
  full: false,
  autocomplete: 'on',
  size: 'xs',
  variant: 'solid',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>()

const slots = defineSlots<{
  leading?: () => unknown
  trailing?: () => unknown
}>()

const attrs = useAttrs() as AppInputAttrs

const filtersAttrs = computed(() => {
  const { class: _c, style: _s, ...others } = attrs
  return others
})

const _value = computed({
  get() {
    return props.modelValue
  },
  set(newValue) {
    debouncedModelValue(newValue)
  },
})

const debouncedModelValue = debounce((value: string | number) => {
  emit('update:modelValue', value)
}, 300)
</script>

<template>
  <AppFormField
    v-slot="{ id: _id }"
    :class="['app-input', attrs.class]"
    :error="props.error"
    :for="props.id"
    :label="props.label"
    :required="props.required"
    :style="attrs.style"
  >
    <div class="app-input__wrapper">
      <div class="app-input__inner">
        <span
          v-if="slots.trailing"
          class="app-input__trailing"
        >
          <slot name="trailing" />
        </span>
        <input
          v-model="_value"
          v-bind="filtersAttrs"
          :id="_id"
          :autocomplete="props.autocomplete"
          :class="[
            'app-input__input',
            `app-input__input_${props.size}`,
            `app-input__input_${props.variant}`,
            { [`app-input__input_error`]: Boolean(props.error) },
          ]"
          :disabled="props.disabled"
          :name="props.name"
          :placeholder="props.placeholder"
          :type="props.type"
          :value="modelValue"
        />
        <span
          v-if="slots.leading"
          class="app-input__leading"
        >
          <slot name="leading" />
        </span>
      </div>
    </div>
  </AppFormField>
</template>

<style src="./style.scss" />
