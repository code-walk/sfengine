<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    value?: boolean
  }>(),
  {
    value: false,
  }
)
const emit = defineEmits(['update:modelValue'])

const toggleMenu = () => {
  emit('update:modelValue', !props.value)
}
</script>

<template>
  <button
    :class="[
      `app-burger`,
      {
        'app-burger_is-active': props.value,
      },
    ]"
    aria-label="Toggle menu"
    type="button"
    @click="toggleMenu"
  >
    <span
      v-for="line in 3"
      :key="line"
      class="app-burger__line"
    ></span>
  </button>
</template>

<style lang="scss">
.app-burger {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  cursor: pointer;
  background: transparent;
  border: none;

  &__line {
    width: 100%;
    height: 3px;
    background-color: #000;
    transition: all 0.3s ease;
  }

  &_is-active {
    .app-burger__line {
      &:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }

      &:nth-child(2) {
        opacity: 0;
      }

      &:nth-child(3) {
        transform: rotate(-45deg) translate(9px, -9px);
      }
    }
  }
}
</style>
