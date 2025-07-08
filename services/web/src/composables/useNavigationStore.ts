import { useNavigationStore } from '@/store/navigationStore'

export const useNavigation = () => {
  const navigationStore = useNavigationStore()

  return {
    products: navigationStore.productsItems,
    design: navigationStore.designItems,
  }
}
