<template>
  <section class="py-16 md:py-20 relative bg-primary-secondary/40 border-y border-neutral-800/80">
    <div class="container mx-auto px-4 md:px-6">
      <div class="text-center max-w-2xl mx-auto mb-10">
        <span class="text-xs uppercase tracking-widest text-text-secondary font-display font-semibold block mb-2">
          Материалы и технологии
        </span>
        <h3 class="text-xl md:text-2xl font-bold font-display text-white">
          РАБОТАЕМ С МИРОВЫМИ ЛИДЕРАМИ ДЕТЕЙЛИНГА
        </h3>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 max-w-6xl mx-auto">
        <div
          v-for="brand in brands"
          :key="brand.name"
          class="p-4 md:p-5 rounded-xl bg-primary-card/70 border border-neutral-800/80 hover:border-white/30 transition-all duration-300 text-center flex flex-col items-center justify-center group"
        >
          <div class="text-base md:text-lg font-black font-display text-white tracking-wider group-hover:scale-105 transition-transform duration-300">
            {{ brand.name }}
          </div>
          <div class="text-[11px] font-medium text-neutral-400 mt-1">
            {{ brand.country }}
          </div>
          <div class="text-[10px] text-text-secondary mt-1.5 opacity-80">
            {{ brand.specialty }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const brands = [
  { name: 'KOCH CHEMIE', country: 'Германия', specialty: 'Автохимия и пасты' },
  { name: 'CARPRO', country: 'Южная Корея', specialty: 'Керамика CQuartz' },
  { name: 'RUPES', country: 'Италия', specialty: 'Полировальные системы' },
  { name: 'SUNTEK', country: 'США', specialty: 'Полиуретановые плёнки' },
  { name: 'LLUMAR', country: 'США', specialty: 'Антигравийная броня' },
  { name: 'GYEON', country: 'Южная Корея', specialty: 'Кварцевая защита' }
]
</script>
