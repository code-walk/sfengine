import type { InjectionKey, Ref } from 'vue'

export interface MobileMenuContext {
  isActive: Ref<boolean>
}

export const injectionKey = Symbol() as InjectionKey<MobileMenuContext>
