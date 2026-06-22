<template>
  <section
    id="about"
    class="bg-bgalt"
    :style="{ padding: 'clamp(4.5rem,10vw,7.5rem) clamp(1.25rem,5vw,4rem)' }"
  >
    <div class="max-w-[700px] mx-auto">
      <div class="eyebrow reveal">Sobre mí</div>
      <p class="reveal font-display font-light leading-[1.75] mb-5" style="font-size:clamp(1rem,2.2vw,1.2rem);color:#9ba3c0;"> {{ about }} </p>
      <!-- Stats -->
      <div class="reveal mt-10 grid grid-cols-2 gap-px bg-white/[.07] border border-white/[.07] rounded-xl overflow-hidden">
        <div
          v-for="stat in stats" :key="stat.label"
          class="bg-bgalt px-7 py-6"
        >
          <div class="font-display font-bold leading-none text-txt" style="font-size:clamp(1.8rem,5vw,2.8rem)">
            {{ stat.value }}<em class="text-green not-italic">{{ stat.suffix }}</em>
          </div>
          <div class="text-[.8rem] text-muted mt-1">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// ── Datos — edítalos aquí ──
const about = 'Soy una persona ágil y resolutiva, con ambición y ganas de seguir aprendiendo, capaz de trabajar en perfecta sintonía con diversos grupos de trabajo. Tambien tengo experiencia en gestión de equipos de desarollo, buscando siempre la forma para que todos mis compañeros den lo maximo de si mismos y que todos rememos hacia el mismo objetivo'
const stats = [
  { value: '25',  suffix: '', label: 'Años' },
  { value: '5',  suffix: '+', label: 'Años de experiencia' },
  { value: '3',  suffix: '',  label: 'Experiencias Laborales'  },
  { value: '∞',  suffix: '',  label: 'Café consumido'      },
]
</script>
