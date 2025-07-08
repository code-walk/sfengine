<script lang="ts" setup>
import { computed, defineEmits, defineProps } from 'vue'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import IconClose from '@/assets/icons/close.svg'

const props = withDefaults(
  defineProps<{
    modelValue: boolean
    disabled?: boolean
  }>(),
  {
    disabled: false,
  }
)
const emits = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const modelValue = computed({
  get: () => props.modelValue,
  set: (value) => emits('update:modelValue', value),
})

const close = () => {
  emits('update:modelValue', false)
}
</script>

<template>
  <TransitionRoot
    :show="modelValue"
    as="template"
    appear
  >
    <Dialog
      as="div"
      class="app-modal-container"
      @close="close"
    >
      <TransitionChild
        as="template"
        enter="enter-active"
        enter-from="enter-from"
        enter-to="enter-to"
        leave="leave-active"
        leave-from="leave-from"
        leave-to="leave-to"
      >
        <div
          v-bind="$attrs"
          class="app-modal"
        >
          <img
            alt=""
            class="app-modal__image"
            src="@/assets/images/form-smile.png"
          />
          <TransitionChild
            as="template"
            enter="enter-active"
            enter-from="enter-from"
            enter-to="enter-to"
            leave="leave-active"
            leave-from="leave-from"
            leave-to="leave-to"
          >
            <DialogPanel class="app-modal__inner">
              <button
                :disabled="disabled"
                aria-label="закрыть"
                class="app-modal__btn-close"
                type="button"
                @click="close"
              >
                <IconClose class="app-modal__btn-close-icon" />
              </button>

              <div
                v-if="$slots.header"
                class="app-modal__top"
              >
                <slot name="header" />
              </div>
              <div
                v-if="$slots.content"
                class="app-modal__content"
              >
                <slot name="content" />
              </div>
              <div
                v-if="$slots.footer"
                class="app-modal__footer"
              >
                <slot name="footer" />
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </TransitionChild>
    </Dialog>
  </TransitionRoot>
</template>

<style lang="scss">
.app-modal-container {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(39, 39, 42, 0.6);
}

.app-modal {
  position: relative;
  width: 95%;
  max-width: 600px;

  &__inner {
    position: relative;
    z-index: 201;
    max-height: 600px;
    padding: 55px 40px;
    overflow-y: auto;

    // кастомный scrollbar
    scrollbar-color: var(--color-gray-700) transparent;
    scrollbar-width: thin;
    background-color: var(--color-background);
    border-radius: 6px;
    box-shadow: 2px 4px 24px 0 rgba(0, 0, 0, 0.12);
    will-change: transform, opacity;

    /* Для Chrome и других браузеров, кроме Firefox */

    &::-webkit-scrollbar {
      width: 12px;
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
      border-radius: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--color-gray-700);
      background-clip: padding-box; /* используем padding-box для сохранения border-radius */
      border: 3px solid transparent; /* регулируйте это значение по необходимости */
      border-radius: 8px;
    }
  }

  &__top {
    font-family: var(--font-family-primary);
    font-size: 24px;
    font-weight: 700;
    line-height: 1.5;
    color: var(--color-primary-200);
  }

  &__btn-close {
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    cursor: pointer;
    background-color: transparent;
    border: none;
    outline: 0;
  }

  &__btn-close-icon {
    width: 20px;
    height: 20px;
  }

  &__image {
    position: absolute;
    top: 0;
    right: 65px;
    z-index: 200;
    max-width: 222px;
    transform: translateY(-131px);
  }
}

// анимации

.enter-active {
  transition:
    opacity 0.3s ease-in-out,
    transform 0.3s ease-in-out;
}

.enter-from {
  opacity: 0;
  transform: translateY(-15px);
}

.enter-to {
  opacity: 1;
  transform: translateY(0);
}

.leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.leave-from {
  opacity: 1;
  transform: translateY(0);
}

.leave-to {
  opacity: 0;
  transform: translateY(-15px);
}
</style>
