<template>
  <footer ref="footerRef" class="py-12 border-t border-gray-800">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row items-center justify-between gap-8">
        <!-- Logo -->
        <NuxtLink to="/" class="flex-shrink-0">
          <NuxtImg src="/images/logo.png" alt="Детейлинг Мастер" class="h-10 w-auto" width="1953" height="582" format="webp" />
        </NuxtLink> 
        <!-- Copyright -->
        <div class="text-text-secondary text-center">
          <p>© 2026 Детейлинг Мастер</p>
          <p class="text-sm mt-1">Киров, Хлебозаводской проезд, 3А</p>
          <a href="tel:+79229159737" class="text-sm mt-1 inline-flex items-center gap-1.5 text-white hover:text-accent transition-colors font-medium">
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span>+7 922 915-97-37</span>
          </a>
        </div>

        <!-- Social -->
        <SocialLinks />
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { gsap } = useGsap()
const footerRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!footerRef.value) return

  // Magnetic effect scoped exclusively to footer social links
  const socialIcons = footerRef.value.querySelectorAll<HTMLElement>('.social-links a')
  const cleanups: Array<() => void> = []

  socialIcons.forEach(icon => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = icon.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      gsap.to(icon, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: 'power2.out'
      })
    }

    const handleMouseLeave = () => {
      gsap.to(icon, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.5)'
      })
    }

    icon.addEventListener('mousemove', handleMouseMove)
    icon.addEventListener('mouseleave', handleMouseLeave)

    cleanups.push(() => {
      icon.removeEventListener('mousemove', handleMouseMove)
      icon.removeEventListener('mouseleave', handleMouseLeave)
    })
  })

  onUnmounted(() => {
    cleanups.forEach(cleanup => cleanup())
  })
})
</script>