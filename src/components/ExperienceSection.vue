<template>
  <section
    id="experience"
    class="bg-bg"
    :style="{ padding: 'clamp(4.5rem,10vw,7.5rem) clamp(1.25rem,5vw,4rem)' }"
  >
    <div class="max-w-[700px] mx-auto">
      <div class="eyebrow reveal">Experiencia</div>
      <h2
        class="reveal font-display font-bold text-txt leading-[1.1] mb-12"
        style="font-size:clamp(1.7rem,4vw,2.4rem)"
      >
        Donde he dejado huella
      </h2>

      <!-- Timeline -->
      <div class="relative pl-7">
        <div class="absolute left-0 top-2 bottom-2 w-px bg-white/[.07]"></div>

        <div
          v-for="job in jobs"
          :key="job.company + job.period"
          class="relative pb-12 last:pb-0 reveal"
        >
          <!-- Dot timeline -->
          <div class="tl-dot"></div>

          <!-- Cabecera de la empresa -->
          <div class="font-mono text-[.65rem] text-green tracking-[.08em] mb-1">{{ job.period }}</div>
          <div class="font-display text-[1.1rem] font-semibold text-txt mb-0.5">{{ job.role }}</div>
          <div class="text-[.83rem] text-muted mb-4">{{ job.company }}</div>

          <!-- Descripción como lista de puntos (empresa sin subexperiencias) -->
          <ul
            v-if="job.bullets && !job.projects"
            class="flex flex-col gap-1.5 mb-4"
            style="max-width:580px"
          >
            <li
              v-for="(bullet, i) in job.bullets"
              :key="i"
              class="flex items-start gap-2.5 text-[.88rem] leading-[1.7]"
              style="color:#9ba3c0"
            >
              <span class="text-green mt-[5px] shrink-0 text-[.6rem]">▸</span>
              {{ bullet }}
            </li>
          </ul>

          <!-- Subexperiencias (consultora con varios proyectos/clientes) -->
          <div v-if="job.projects" class="flex flex-col gap-6 mb-4">
            <div
              v-for="(project, pi) in job.projects"
              :key="pi"
              class="pl-4 border-l border-white/[.08]"
            >
              <!-- Cabecera del proyecto/cliente -->
              <div class="flex flex-wrap items-center gap-2 mb-2">
                <span class="font-display text-[.88rem] font-semibold text-txt">{{ project.name }}</span>
                <span v-if="project.period" class="font-mono text-[.6rem] text-green/70 tracking-[.06em]">{{ project.period }}</span>
              </div>
              <div v-if="project.role" class="text-[.78rem] text-muted mb-2">{{ project.role }}</div>

              <!-- Bullets del proyecto -->
              <ul class="flex flex-col gap-1.5">
                <li
                  v-for="(bullet, bi) in project.bullets"
                  :key="bi"
                  class="flex items-start gap-2.5 text-[.85rem] leading-[1.7]"
                  style="color:#9ba3c0"
                >
                  <span class="text-green/60 mt-[5px] shrink-0 text-[.55rem]">▸</span>
                  {{ bullet }}
                </li>
              </ul>

              <!-- Tags del proyecto -->
              <div v-if="project.tags" class="flex flex-wrap gap-1.5 mt-3">
                <span
                  v-for="tag in project.tags" :key="tag"
                  class="font-mono text-[.6rem] px-2 py-0.5 rounded bg-green/[.05] border border-green/[.15] text-green/70"
                >{{ tag }}</span>
              </div>
            </div>
          </div>

          <!-- Tags generales de la empresa -->
          <div v-if="job.tags" class="flex flex-wrap gap-1.5">
            <span
              v-for="tag in job.tags" :key="tag"
              class="font-mono text-[.65rem] px-2.5 py-0.5 rounded bg-green/[.08] border border-green/20 text-green"
            >{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// ──────────────────────────────────────────────
// DATOS
const jobs = [
  {
    period:  'Nov 2021 — Abr 2026',
    role:    'Frontend Developer  · Tech Lead',
    company: 'INNOCV · Remoto',
    // // Tags generales de la empresa (opcional)
    // tags: ['Vue.js', 'JavaScript ES6', 'CSS3', 'GSAP', 'SCSS'],
    projects: [
      {
        name:   'Rural Servicios Informáticos (RSI)',
        period: 'Ene 2025 — Abr 2026',
        role:   'Frontend Tech lead',
        bullets: [
          'Liderazgo técnico del equipo frontend, promoviendo buenas prácticas y estándares de calidad.',
          'Coordinación técnica y mentoring de desarrolladores.',
          'Diseño de soluciones frontend alineadas con la arquitectura global del sistema.',
          'Estimación y análisis de costes de desarrollo antes de su implementación.',
          'Evolución de la arquitectura basada en microfrontends y librerías reutilizables para mejorar la escalabilidad.',
          'Supervisión de calidad de código, testing e integración continua.',
        ],
        tags: ['Vuejs V2 y V3', 'TypeScript', 'Jest', 'Pug', 'SQL', 'Figma', 'Jira'],
      },
      {
        name:   'Rural Servicios Informáticos (RSI)',
        period: 'Ene 2023 — Dic 2024',
        role:   'Frontend Developer',
        bullets: [
          'Desarrollo y mantenimiento de aplicaciones web y móviles para el sector bancario con Vue 3 y TypeScript.',
          'Diseño e implementación de arquitectura basada en microfrontends.',
          'Desarrollo de librerías reutilizables, reduciendo duplicidad de código y facilitando la escalabilidad del sistema.',
          'Análisis funcional y técnico de requisitos para la implementación de soluciones eficientes.',
          'Implementación de testing unitario con Jest e integración en pipelines CI/CD.',
        ],
        tags: ['Vuejs V2 y V3', 'TypeScript', 'Jest', 'Pug', 'SQL', 'Figma', 'Jira'],
      },
      {
        name:   'Mckinsey',
        period: 'Nov 2021 — Dic 2022',
        role:   'Frontend Developer',
        bullets: [
          'Desarrollo y mantenimiento de aplicaciones web para el sector de energías renovables.',
          'Implementación de soluciones con Vue.js, TypeScript y Tailwind.',
          'Desarrollo de testing unitario con Jest, mejorando la calidad y estabilidad del código.',
          'Gestión de pipelines CI/CD con Jenkins.',
          'Participación en entornos ágiles (Scrum) y gestión de tareas con Jira.',
        ],
        tags: ['Vuejs V2', 'TypeScript', 'Jest', 'Tailwind', 'SQL', 'Figma', 'Jira'],
      },
    ],
  },
  {
    period:  'Dic 2020 — Nov 2021',
    role:    'Junior FullStack Developer',
    company: 'Qaleon · Hibrido',
    bullets: [
      'Desarrollo de aplicaciones web internas y para clientes externos.',
      'Implementación de soluciones frontend y backend en entornos fullstack.',
      'Mantenimiento y evolución de funcionalidades existentes.',
      'Testing de aplicaciones con pytest.',
      'Control de versiones con Git (GitFlow).',
      'Despliegue y mantenimiento de aplicaciones.',
    ],
    tags: ['Vuejs (Vuetify)', 'Python (Django)',  'JavaScript', 'Tailwind',  'SQL', 'Figma', 'Jira'],
  },
  {
    period:  'Jun 2020 — Oct 2020',
    role:    'Desarollador Web',
    company: 'Abastores · Presencial',
    bullets: [
      'Desarrollo de plataforma de subastas agrícolas online.',
      'Implementación de APIs REST con Django y Django REST Framework.',
      'Desarrollo frontend con Vue.js (Quasar), JavaScript, HTML, CSS y SCSS.',
      'Testing de aplicaciones con pytest.',
      'Control de versiones con Git (GitFlow).',
      'Despliegue y mantenimiento de aplicaciones.',
    ],
    tags: ['Vuejs (Quasar)', 'Python (Django)', 'JavaScript', 'Tailwind',  'SQL', 'Figma', 'Jira'],
  },
]
</script>
