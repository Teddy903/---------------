<template>
  <section class="py-16 md:py-24 lg:py-32 relative overflow-hidden bg-primary">
    <div class="container mx-auto px-4 md:px-6 relative z-10">
      <div class="text-center max-w-3xl mx-auto mb-16 md:mb-20">
        <h2 ref="title" class="section-title text-3xl sm:text-5xl md:text-7xl lg:text-7xl mb-4 break-words">
          ПОЧЕМУ МЫ
        </h2>
        <p ref="subtitle" class="text-text-secondary text-sm md:text-base lg:text-lg">
          Стандарты премиального детейлинга, благодаря которым нам доверяют автомобили любого класса
        </p>
      </div>

      <div ref="gridContainer" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        <div
          v-for="(item, idx) in advantages"
          :key="item.title"
          class="advantage-card group p-5 sm:p-7 md:p-8 rounded-2xl bg-primary-card border border-neutral-800 hover:border-white/40 transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between"
        >
          <div>
            <!-- Number / Icon Header -->
            <div class="flex items-center justify-between mb-6">
              <div class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300">
                <component :is="item.icon" class="w-6 h-6" />
              </div>
              <span class="text-xs font-display font-bold text-neutral-600 group-hover:text-white transition-colors duration-300">
                0{{ idx + 1 }}
              </span>
            </div>

            <h3 class="text-lg md:text-xl font-bold font-display text-white mb-3">
              {{ item.title }}
            </h3>
            <p class="text-text-secondary text-sm leading-relaxed">
              {{ item.description }}
            </p>
          </div>

          <div class="mt-6 pt-4 border-t border-neutral-800/80 flex items-center gap-2 text-xs text-neutral-400 group-hover:text-white transition-colors">
            <span class="w-1.5 h-1.5 rounded-full bg-white"></span>
            <span>{{ item.badge }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { h } from 'vue'

const { gsap } = useGsap()

const title = ref<HTMLElement | null>(null)
const subtitle = ref<HTMLElement | null>(null)
const gridContainer = ref<HTMLElement | null>(null)

let titleAnim: any = null
let cardsAnim: any = null

const IconDry = {
  render() {
    return h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '1.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
      h('path', { d: 'M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41' }),
      h('circle', { cx: '12', cy: '12', r: '4' })
    ])
  }
}

const IconChemistry = {
  render() {
    return h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '1.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
      h('path', { d: 'M10 2v7.31L4.69 18.5a2 2 0 0 0 1.71 3h11.2a2 2 0 0 0 1.71-3L14 9.31V2' }),
      h('path', { d: 'M8.5 2h7M7 15h10' })
    ])
  }
}

const IconEquipment = {
  render() {
    return h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '1.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
      h('circle', { cx: '12', cy: '12', r: '3' }),
      h('path', { d: 'M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z' })
    ])
  }
}

const IconSecurity = {
  render() {
    return h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '1.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
      h('rect', { x: '3', y: '11', width: '18', height: '11', rx: '2', ry: '2' }),
      h('path', { d: 'M7 11V7a5 5 0 0 1 10 0v4' })
    ])
  }
}

const IconPricing = {
  render() {
    return h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '1.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
      h('path', { d: 'M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' })
    ])
  }
}

const IconWarranty = {
  render() {
    return h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '1.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
      h('path', { d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' }),
      h('path', { d: 'm9 12 2 2 4-4' })
    ])
  }
}

const advantages = [
  {
    title: '100% сухой салон',
    description: 'Используем профессиональные автофены и турбосушки. Вы получаете автомобиль сухим в день выдачи — никаких запотевших стёкол и запаха сырости.',
    badge: 'Выдача день-в-день',
    icon: IconDry
  },
  {
    title: 'Премиум автокосметика',
    description: 'Работаем только оригинальными составами Koch Chemie (Германия) и CarPro (Корея). Безопасно для деликатной кожи Nappa, алькантары и детей.',
    badge: 'Сертифицированная химия',
    icon: IconChemistry
  },
  {
    title: 'Точный контроль ЛКП',
    description: 'Оборудование Rupes & Flex с эксцентриковым ходом предотвращает перегрев лака. Измеряем толщину ЛКП толщиномером до микрона до и после.',
    badge: 'Бережная полировка',
    icon: IconEquipment
  },
  {
    title: 'Охраняемый тёплый бокс',
    description: 'Круглосуточное видеонаблюдение 24/7, правильный микроклимат и температура для правильной кристаллизации керамики и антигравийных плёнок.',
    badge: 'Видеонаблюдение 24/7',
    icon: IconSecurity
  },
  {
    title: 'Фиксированная цена',
    description: 'Окончательная смета утверждается перед началом работ. Никаких внезапных наценок за «сложную грязь» или расходники при получении ключей.',
    badge: 'Без скрытых платежей',
    icon: IconPricing
  },
  {
    title: 'Гарантия на материалы',
    description: 'Официальная гарантия до 5 лет на полиуретановые плёнки (не желтеют и не отслаиваются) и честная гарантия на гидрофобные керамические покрытия.',
    badge: 'Гарантия качества',
    icon: IconWarranty
  }
]

onMounted(async () => {
  await nextTick()
  if (!title.value || !gridContainer.value) return

  titleAnim = gsap.fromTo(
    [title.value, subtitle.value],
    { y: 30, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.1,
      scrollTrigger: {
        trigger: title.value,
        start: 'top 85%'
      }
    }
  )

  const cards = gridContainer.value.querySelectorAll('.advantage-card')
  if (cards.length > 0) {
    cardsAnim = gsap.fromTo(
      cards,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: gridContainer.value,
          start: 'top 85%'
        }
      }
    )
  }
})

onUnmounted(() => {
  if (titleAnim) titleAnim.scrollTrigger?.kill()
  if (cardsAnim) cardsAnim.scrollTrigger?.kill()
})
</script>
