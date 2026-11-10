<template>
    <div ref="card" class="card group cursor-pointer relative overflow-hidden" @mousemove="handleMouseMove"
        @mouseleave="handleMouseLeave">
        <!-- Glow Effect -->
        <div ref="glow"
            class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            :style="glowStyle"></div>
        <div class="relative z-10">
            <!-- Icon Container -->
            <div
                class="w-16 h-16 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 text-white group-hover:border-white/50 group-hover:bg-white/5 group-hover:scale-110 transition-all duration-500">
                <component :is="icon" />
            </div>

            <h3
                class="text-xl font-bold text-white mb-3 font-display group-hover:text-white transition-colors duration-300">
                {{ title }}
            </h3>
            <p class="text-text-secondary leading-relaxed text-sm">
                {{ description }}
            </p>
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
    title: string
    description: string
    icon: any
    delay?: number
}>()

const { gsap } = useGsap()

const card = ref<HTMLElement | null>(null)
const glow = ref<HTMLElement | null>(null)
const glowStyle = ref({})

const handleMouseMove = (e: MouseEvent) => {
    if (!card.value) return

    const rect = card.value.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    glowStyle.value = {
        background: `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.08), transparent 60%)`
    }

    gsap.to(card.value, {
        scale: 1.02,
        duration: 0.3,
        ease: 'power2.out'
    })
}

const handleMouseLeave = () => {
    if (!card.value) return

    gsap.to(card.value, {
        scale: 1,
        duration: 0.4,
        ease: 'power2.out'
    })

    glowStyle.value = {}
}
</script>