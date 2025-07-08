import type { ComputedRef, InjectionKey } from 'vue'

export interface Breadcrumb {
  name: string
  to: string
}

export interface PageMetadataContext {
  title: ComputedRef<string>
  breadcrumbs: ComputedRef<Breadcrumb>
}

export const injectionKey = Symbol() as InjectionKey<PageMetadataContext>
