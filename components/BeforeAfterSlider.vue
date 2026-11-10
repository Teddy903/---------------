<template>
  <div ref="container" class="relative aspect-video rounded-2xl overflow-hidden bg-primary-card mb-8 select-none group"
    @mousemove="handleHover" @mouseleave="handleLeave">
    <!-- BEFORE Image (Bottom Layer) -->
    <!-- Лежит внизу, занимает всю ширину -->
    <div class="absolute inset-0 z-0">
      <img v-if="beforeImage" :src="beforeImage" alt="До" class="w-full h-full object-cover pointer-events-none"
        draggable="false" />
      <div v-else
        class="w-full h-full bg-neutral-800 flex items-center justify-center text-neutral-500 font-display uppercase tracking-widest">
        Фото До
      </div>
    </div><!-- AFTER Image (Top Layer) -->
    <!-- Лежит сверху, обрезается справа налево через clip-path -->
    <div class="absolute inset-0 z-10" :style="{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }">
      <img v-if="afterImage" :src="afterImage" alt="После" class="w-full h-full object-cover pointer-events-none"
        draggable="false" />
      <div v-else
        class="w-full h-full bg-neutral-700 flex items-center justify-center text-neutral-400 font-display uppercase tracking-widest">
        Фото После
      </div>
    </div>

    <!-- Slider Handle Line (Вертикальная линия разреза) -->
    <div class="absolute top-0 bottom-0 w-0.5 bg-white z-30 shadow-[0_0_10px_rgba(0,0,0,0.5)] pointer-events-none"
      :style="{ left: `${sliderPosition}%` }"></div>

    <!-- Slider Handle Button (Кнопка по центру линии) -->
    <div ref="handle" class="absolute top-1/2 -translate-y-1/2 z-40 cursor-ew-resize touch-none"
      :style="{ left: `${sliderPosition}%` }" @mousedown.prevent="startDrag" @touchstart.prevent="startDrag">
      <!-- -translate-x-1/2 центрирует кнопку относительно точки left -->
      <div
        class="-translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200">
        <svg class="w-6 h-6 text-black drop-shadow-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 8L22 12L18 16" />
          <path d="M6 8L2 12L6 16" />
        </svg>
      </div>
    </div>

    <!-- Labels -->
    <div
      class="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded text-xs font-bold text-white uppercase tracking-wider z-20 pointer-events-none border border-white/10">
      До
    </div>
    <div
      class="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded text-xs font-bold text-black uppercase tracking-wider z-20 pointer-events-none">
      После
    </div>

    <!-- Title Overlay (Optional) -->
    <div v-if="title"
      class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent z-20 pointer-events-none">
      <h3 class="text-white font-display font-medium text-sm md:text-base">{{ title }}</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  beforeImage?: string
  afterImage?: string
  title?: string
}>()

const container = ref<HTMLElement | null>(null)
const sliderPosition = ref(50)
let isDragging = false

// Logic for dragging
const startDrag = (e: MouseEvent | TouchEvent) => {
  if (!container.value) return
  isDragging = true

  // Update position immediately on click
  updatePosition(e)

  document.addEventListener('mousemove', onDrag)
  document.addEventListener('touchmove', onDrag, { passive: false })
  document.addEventListener('mouseup', stopDrag)
  document.addEventListener('touchend', stopDrag)
}

const onDrag = (e: MouseEvent | TouchEvent) => {
  if (!isDragging) return
  if ('touches' in e) e.preventDefault() // Prevent scrolling on mobile while dragging
  updatePosition(e)
}

const updatePosition = (e: MouseEvent | TouchEvent) => {
  if (!container.value) return

  const rect = container.value.getBoundingClientRect()
  const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX

  // Calculate percentage relative to container

  let x = clientX - rect.left
  let percentage = (x / rect.width) * 100

  // Clamp between 0 and 100
  percentage = Math.max(0, Math.min(100, percentage))

  sliderPosition.value = percentage
}

const stopDrag = () => {
  isDragging = false
  document.removeEventListener('mousemove', onDrag)
  document.removeEventListener('touchmove', onDrag)
  document.removeEventListener('mouseup', stopDrag)
  document.removeEventListener('touchend', stopDrag)
}

// Optional: Hover effect to slightly enlarge handle or show hint
const handleHover = (e: MouseEvent) => {
  // Can add subtle parallax or glow here if needed
}

const handleLeave = () => {
  // Reset any hover states
}

onUnmounted(() => {
  stopDrag()
})
</script>