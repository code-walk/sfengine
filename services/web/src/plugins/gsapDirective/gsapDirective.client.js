/**
 * Кастомная директива v-gsap для анимаций с GSAP и ScrollTrigger.
 *
 * Как использовать:
 * 1. Добавьте директиву v-gsap на элемент.
 * 2. Передайте объект с параметрами анимации и ScrollTrigger.
 *
 * Параметры:
 * - animation: Объект с ключами `from` и `to` для определения начального и конечного состояния анимации.
 * - scrollTrigger: Объект с настройками ScrollTrigger (опционально).
 * - clearStyles: Булевый флаг, указывающий, нужно ли удалять стили после завершения анимации (по умолчанию true).
 * - duration: Длительность анимации в секундах.
 * - delay: Задержка перед началом анимации в секундах.
 * - ease: Функция easing для анимации (например, 'power2.out').
 *
 * Примеры использования:
 *
 * 1. Простая анимация без ScrollTrigger:
 * <div v-gsap="{ animation: { from: { opacity: 0 }, to: { opacity: 1 } }, duration: 1 }">
 *   Элемент с анимацией
 * </div>
 *
 * 2. Анимация с ScrollTrigger:
 * <div v-gsap="{
 *   animation: { from: { opacity: 0, y: 100 }, to: { opacity: 1, y: 0 } },
 *   scrollTrigger: {
 *     trigger: '.container',
 *     start: 'top center',
 *     end: 'bottom center',
 *     scrub: true,
 *   },
 *   duration: 1,
 * }">
 *   Элемент с анимацией и ScrollTrigger
 * </div>
 *
 * 3. Анимация с удалением стилей:
 * <div v-gsap="{
 *   animation: { from: { opacity: 0 }, to: { opacity: 1 } },
 *   clearStyles: true,
 *   duration: 1,
 * }">
 *   Элемент с удалением стилей после анимации
 * </div>
 */
import { onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { defineNuxtPlugin } from '#app'

gsap.registerPlugin(ScrollTrigger)

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    nuxtApp.vueApp.directive('gsap', {
      mounted(el, binding) {
        const { value } = binding
        const { animation, scrollTrigger, clearStyles = true, ...options } = value

        const timeline = gsap.fromTo(el, animation.from, {
          ...animation.to,
          ...options,
          scrollTrigger: scrollTrigger
            ? {
                trigger: el,
                ...scrollTrigger,
              }
            : null,
          onComplete: () => {
            if (clearStyles && !scrollTrigger) {
              el.removeAttribute('style')
            }
          },
        })

        onUnmounted(() => {
          timeline.kill()
          ScrollTrigger.getById(timeline.scrollTrigger?.id)?.kill()
        })
      },
      getSSRProps(binding) {
        return {
          id: binding.value,
        }
      },
    })
  }
})
