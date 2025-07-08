import type { ObjectDirective } from 'vue'

interface TargetElement extends HTMLElement {
  __click_outside_handler: (event: MouseEvent) => void
}

type ClickOutsideCallback = (event: MouseEvent) => void

export const vClickOutside: ObjectDirective<TargetElement, ClickOutsideCallback> = {
  mounted(el, binding) {
    el.__click_outside_handler = (event: MouseEvent) => {
      if (!event.composedPath().includes(el)) {
        binding.value(event)
      }
    }

    document.addEventListener('pointerup', el.__click_outside_handler)
  },

  beforeUnmount(el) {
    document.removeEventListener('pointerup', el.__click_outside_handler)
  },
}
