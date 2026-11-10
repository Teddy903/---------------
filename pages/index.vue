<template>
    <div class="min-h-screen">
        <AppHeader />
        <main>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <PricingSection />
            <BeforeAfterSection />
            <ProcessSection />
            <CtaSection />
            <ContactsSection />
        </main>
        <AppFooter />
        <CookieBanner/>
    </div>
</template>

<script setup lang="ts">

useHead({
    htmlAttrs: {
        lang: 'ru'
    }
})
const { cdnURL, baseURL } = useRuntimeConfig().app
useHead({
    link: [
        { rel: 'icon', type: 'image/x-icon', href: `${cdnURL || baseURL}favicon.ico` },
    ],
})
</script>