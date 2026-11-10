<template>
  <footer class="py-12 border-t border-gray-800">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row items-center justify-between gap-8">
        <!-- Logo -->
        <NuxtLink to="/" class="flex-shrink-0">
          <NuxtImg src="/images/logo.png" alt="Детейлинг Мастер" class="h-10 w-auto" width="1953" height="582" />
        </NuxtLink> <!-- Copyright -->
        <div class="text-text-secondary text-center">
          <p>© 2026 Детейлинг Мастер</p>
          <p class="text-sm mt-2">Киров, Хлебозаводской проезд, 3А</p>
        </div>

        <!-- Social -->
        <SocialLinks />
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { gsap } = useGsap()

onMounted(() => {
  // Magnetic effect on social icons
  const socialIcons = document.querySelectorAll<HTMLElement>('.social-links a')

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
  })
})
</script>