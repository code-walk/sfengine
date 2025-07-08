import { inject } from 'vue'
import { injectionKey } from '@/providers/media/injectionKey'

export const useMedia = () => {
  const context = inject(injectionKey)

  if (!context) {
    throw new Error('not media context provided')
  }

  return context
}
