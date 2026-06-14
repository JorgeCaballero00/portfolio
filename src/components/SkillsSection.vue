<template>
  <section
    id="skills"
    class="bg-bgalt"
    :style="{ padding: 'clamp(4.5rem,10vw,7.5rem) clamp(1.25rem,5vw,4rem)' }"
  >
    <div class="max-w-[700px] mx-auto">
      <div class="eyebrow reveal">Stack técnico</div>
      <h2
        class="reveal font-display font-bold text-txt leading-[1.1] mb-12"
        style="font-size:clamp(1.7rem,4vw,2.4rem)"
      >
        Con qué trabajo
      </h2>

      <div
        v-for="group in skillGroups"
        :key="group.name"
        class="sk-group mb-11 last:mb-0 reveal"
      >
        <div class="font-mono text-[.65rem] tracking-[.12em] uppercase text-muted mb-4">
          {{ group.name }}
        </div>

        <div
          v-for="skill in group.skills"
          :key="skill.name"
          class="flex items-center gap-3.5 mb-3.5"
        >
          <span class="font-display text-[.83rem] font-medium text-txt w-[138px] shrink-0">
            {{ skill.name }}
          </span>
          <div class="flex-1 h-[3px] rounded-sm bg-white/[.05] overflow-hidden">
            <div class="sk-fill" :data-pct="skill.pct"></div>
          </div>
          <span class="font-mono text-[.68rem] text-muted w-[30px] text-right shrink-0">
            {{ skill.pct }}%
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// ── Datos — edítalos aquí ──
const skillGroups = [
  {
    name: 'Frontend',
    skills: [
      { name: 'Vue.js',    pct: 90 },
      { name: 'React.js',    pct: 70 },
      { name: 'JavaScript',  pct: 93 },
      { name: 'TypeScript',  pct: 90 },
      { name: 'HTML5 / CSS3',pct: 95 },
    ],
  },
  {
    name: 'Estilos y UI',
    skills: [
      { name: 'Tailwind CSS', pct: 92 },
      { name: 'Bootstrap', pct: 85 },
      { name: 'SCSS / Sass',  pct: 88 },
      { name: 'Storybook',    pct: 82 },
      { name: 'Figma',        pct: 72 },
    ],
  },
  {
    name: 'Tooling y testing',
    skills: [
      { name: 'Pinia / Vuex',pct: 92 },
      { name: 'Jest',        pct: 90 },
      { name: 'Git',         pct: 85 },
      { name: 'Vitest',      pct: 78 },
    ],
  },
]
</script>
