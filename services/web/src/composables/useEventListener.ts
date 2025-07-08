import { onMounted, onUnmounted } from 'vue'

export const useEventListener = (
  target: Window | Document | Element,
  eventName: string,
  cb: (event: Event) => void
) => {
  onMounted(() => target.addEventListener(eventName, cb))
  onUnmounted(() => target.removeEventListener(eventName, cb))
}
