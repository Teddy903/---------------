<template>
    <section class="py-32 relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-animated opacity-10"></div>
        <div class="container mx-auto px-6 relative z-10">
            <div class="max-w-4xl mx-auto text-center">
                <h2 ref="title" class="section-title text-3xl sm:text-6xl md:text-8xl lg:text-6xl">
                    <span class="block overflow-hidden">
                        <span class="inline-block">ГОТОВЫ</span>
                    </span>
                    <span class="block overflow-hidden">
                        <span class="inline-block text-gradient">ПРЕОБРАЗИТЬ</span>
                    </span>
                    <span class="block overflow-hidden">
                        <span class="inline-block">СВОЙ АВТОМОБИЛЬ?</span>
                    </span>
                </h2>

                <div ref="socialsContainer" class="flex flex-wrap justify-center gap-6 mb-12">
                    <a v-for="social in socials" :key="social.name" :href="social.url" target="_blank"
                        class="btn-secondary inline-flex items-center gap-3">
                        <component :is="social.icon" class="w-6 h-6" />
                        {{ social.name }}
                    </a>
                </div>

                <div ref="phone" class="text-3xl md:text-4xl font-bold text-accent">
                    <a href="tel:+79229159737" class="hover:text-accent-hover transition-colors">
                        +7 922 915-97-37
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { h } from 'vue'

const { gsap } = useGsap()

const title = ref<HTMLElement | null>(null)
const socialsContainer = ref<HTMLElement | null>(null)
const phone = ref<HTMLElement | null>(null)

const TelegramIcon = {
    render() {
        return h('svg', {
            viewBox: '0 0 24 24',
            fill: 'currentColor',
            innerHTML: '<path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>'
        })
    }
}

const WhatsAppIcon = {
    render() {
        return h('svg', {
            viewBox: '0 0 24 24',
            fill: 'currentColor',
            innerHTML: '<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>'
        })
    }
}

const VkIcon = {
    render() {
        return h('svg', {
            viewBox: '0 0 24 24',
            fill: 'currentColor',
            innerHTML: '<path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.391 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.523-2.049-1.714-1.033-1.01-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.253-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.049.17.49-.085.744-.576.744z"/>'
        })
    }
}

const MaxIcon = {
  render() {
    return h('svg', {
      viewBox: '0 0 24 24',
      fill: 'currentColor',
      class: 'w-6 h-6',
      innerHTML: '<path d="M12.18 0.06C18.79 0.06 23.97 5.42 23.97 12.04C23.97 18.65 18.63 23.88 12.25 23.88C9.98 23.88 8.88 23.56 7.12 22.31C6.99 22.22 6.83 22.24 6.73 22.35C5.37 23.80 1.88 24.82 1.72 22.84C1.72 19.39 0 17.15 0 11.97C0 5.17 5.57 0.06 12.18 0.06ZM12.37 5.95C9.23 5.79 6.78 7.97 6.24 11.37C5.80 14.19 6.59 17.63 7.27 17.80C7.55 17.88 8.25 17.35 8.75 16.87C8.84 16.78 8.99 16.77 9.10 16.84C9.88 17.32 10.77 17.68 11.75 17.73C14.97 17.89 17.82 15.37 17.99 12.16C18.16 8.94 15.59 6.12 12.37 5.95V5.95Z" />'
    })
  }
}

const socials = [
{ name: 'Telegram', url: 'https://t.me/79229159737', icon: TelegramIcon },
{ name: 'VK', url: 'https://vk.ru/club241937554', icon: VkIcon },
{ name: 'Макс', url: 'https://max.ru/79229159737', icon: MaxIcon }
]

onMounted(() => {
    // Title animation
    gsap.fromTo(
        title.value?.querySelectorAll('span'),
        { rotateX: 90, opacity: 0 },
        {
            rotateX: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: title.value,
                start: 'top 80%'
            }
        }
    )

    // Social buttons
    gsap.fromTo(
        socialsContainer.value?.children,
        { scale: 0, opacity: 0 },
        {
            scale: 1,
            opacity: 1,
            stagger: 0.1,
            duration: 0.6,
            ease: 'back.out(1.7)',
            scrollTrigger: {
                trigger: socialsContainer.value,
                start: 'top 80%'
            }
        }
    )

    // Phone
    gsap.fromTo(
        phone.value,
        { y: 30, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 0.8,
            scrollTrigger: {
                trigger: phone.value,
                start: 'top 80%'
            }
        }
    )
})
</script>