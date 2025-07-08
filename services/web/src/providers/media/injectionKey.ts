import type { ComputedRef, InjectionKey, Ref } from 'vue'

export interface MediaContext {
  width: Ref<number>
  isMobile: ComputedRef<boolean>
  isTablet: ComputedRef<boolean>
  isDesktop: ComputedRef<boolean>
}

export const injectionKey = Symbol() as InjectionKey<MediaContext>
