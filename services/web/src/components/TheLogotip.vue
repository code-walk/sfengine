<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    size?: string
  }>(),
  {
    size: 'md',
  }
)
</script>

<template>
  <img
    :class="[
      'the-logo',
      {
        [`the-logo_${props.size}`]: props.size,
      },
    ]"
    src="@assets/images/logo.png"
  />
</template>

<style lang="scss">
.the-logo {
  @include box(74px);

  &_sm {
    @include box(40px);
  }

  &_lg {
    @include box(100px);
  }
}
</style>
