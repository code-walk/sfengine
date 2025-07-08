import { defineStore } from 'pinia'

export const useNavigationStore = defineStore('navigation', {
  state: () => ({
    productsItems: {
      label: 'Изделия из ПВХ',
      category: 'products',
      items: [
        { label: 'Джибитсы', link: 'jibits' },
        { label: 'Магниты', link: 'magnets' },
        { label: 'Брелоки', link: 'keyrings' },
        { label: 'Пуллеры', link: 'pullers' },
        { label: 'Патчи', link: 'patches' },
        { label: 'Костеры', link: 'kosters' },
      ],
    },
    designItems: {
      label: 'Дизайн',
      category: 'design',
      items: [
        { label: 'Стикеры', link: 'stickers' },
        { label: '3D-стикеры', link: 'stickers3d' },
        { label: 'Тг-стикеры', link: 'stickers-tg' },
        { label: 'Раскраски', link: 'coloring' },
        { label: 'Брендбук', link: 'brandbook' },
        { label: 'Маскот', link: 'mascot' },
      ],
    },
  }),
})
