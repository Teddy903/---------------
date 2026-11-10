<template>
  <!-- Исправлено: py-16 на мобильных, py-24 на планшетах, py-32 на десктопе -->
  <section id="services" class="py-16 md:py-24 lg:py-32 relative">
    <!-- Исправлено: px-4 на мобильных для максимального использования ширины экрана -->
    <div class="container mx-auto px-4 md:px-6">
      
      <!-- Исправлено: mb-10 на мобильных, mb-16 на планшетах, mb-20 на десктопе -->
      <h2 ref="title" class="section-title text-4xl sm:text-6xl md:text-8xl lg:text-8xl">УСЛУГИ</h2>
      
      <!-- Исправлено: gap-6 на мобильных, gap-8 на планшетах и десктопе -->
      <div ref="cardsContainer" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <ServiceCard 
          v-for="(service, index) in services" 
          :key="service.title" 
          :title="service.title"
          :description="service.description" 
          :icon="service.icon" 
          :delay="index * 0.1" 
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { gsap } = useGsap()

const title = ref<HTMLElement | null>(null)
const cardsContainer = ref<HTMLElement | null>(null)

// Компоненты иконок (минималистичные SVG)
const IconInterior = {
  render() {
    return h('svg', { 
      viewBox: '0 0 24 24', 
      fill: 'none', 
      stroke: 'currentColor', 
      'stroke-width': '1.5', 
      'stroke-linecap': 'round', 
      'stroke-linejoin': 'round', 
      class: 'w-8 h-8' 
    }, [
      h('path', { d: 'M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9L2.7 10.6C1.7 11 1 11.9 1 13v3c0 .6.4 1 1 1h2' }),
      h('circle', { cx: '7', cy: '17', r: '2' }),
      h('circle', { cx: '17', cy: '17', r: '2' })
    ])
  }
}

const IconHeadlight = {
  render() {
    return h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '1.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round', class: 'w-8 h-8' }, [
      h('circle', { cx: '12', cy: '12', r: '4' }),
      h('path', { d: 'M12 2v4' }),
      h('path', { d: 'M12 18v4' }),
      h('path', { d: 'M4.93 4.93l2.83 2.83' }),
      h('path', { d: 'M16.24 16.24l2.83 2.83' }),
      h('path', { d: 'M2 12h4' }),
      h('path', { d: 'M18 12h4' }),
      h('path', { d: 'M4.93 19.07l2.83-2.83' }),
      h('path', { d: 'M16.24 7.76l2.83-2.83' })
    ])
  }
}

const IconShield = {
  render() {
    return h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '1.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round', class: 'w-8 h-8' }, [
      h('path', { d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' }),
      h('path', { d: 'm9 12 2 2 4-4' })
    ])
  }
}

const IconSparkle = {
  render() {
    return h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '1.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round', class: 'w-8 h-8' }, [
      h('path', { d: 'm12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z' })
    ])
  }
}

const IconClipboard = {
  render() {
    return h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '1.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round', class: 'w-8 h-8' }, [
      h('rect', { x: '8', y: '2', width: '8', height: '4', rx: '1', ry: '1' }),
      h('path', { d: 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2' }),
      h('path', { d: 'm9 14 2 2 4-4' })
    ])
  }
}

const services = [
  {
    title: 'Химчистка салонов',
    description: 'Глубокая очистка всех поверхностей салона с использованием профессиональной химии',
    icon: IconInterior
  },
  {
    title: 'Полировка фар',
    description: 'Восстановление прозрачности и защитное покрытие фар',
    icon: IconHeadlight
  },
  {
    title: 'Оклейка зон риска',
    description: 'Защита лакокрасочного покрытия полиуретановой плёнкой',
    icon: IconShield
  },
  {
    title: 'Полировка кузова',
    description: 'Удаление царапин и восстановление глубины цвета',
    icon: IconSparkle
  },
  {
    title: 'Предпродажная подготовка',
    description: 'Комплекс работ для максимальной презентабельности автомобиля',
    icon: IconClipboard
  }
]

let titleAnim: any = null
let cardsAnim: any = null

onMounted(async () => {
  await nextTick()

  if (!title.value || !cardsContainer.value) return

  // Title animation (чуть уменьшил y для более аккуратного появления на мобильных)
  titleAnim = gsap.fromTo(
    title.value,
    { y: 30, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: title.value,
        start: 'top 85%' // Запускаем чуть раньше на мобильных
      }
    }
  )

  // Cards stagger (предполагается, что в корне компонента ServiceCard есть класс "card")
  const cards = cardsContainer.value.querySelectorAll('.card')
  if (cards.length > 0) {
    cardsAnim = gsap.fromTo(
      cards,
      { y: 40, opacity: 0 }, // Уменьшил y с 80 до 40, чтобы анимация была компактнее
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardsContainer.value,
          start: 'top 85%'
        }
      }
    )
  }
})

// Очистка анимаций при уничтожении компонента (критично для Nuxt)
onUnmounted(() => {
  if (titleAnim) titleAnim.scrollTrigger?.kill()
  if (cardsAnim) cardsAnim.scrollTrigger?.kill()
})
</script>