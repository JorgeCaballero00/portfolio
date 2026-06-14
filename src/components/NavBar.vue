<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 h-[60px] flex items-center justify-between transition-all duration-300',
      'px-[clamp(1.25rem,5vw,4rem)]',
      scrolled
        ? 'bg-bg/90 border-b border-white/5 backdrop-blur-lg'
        : 'bg-transparent'
    ]"
  >
    <!-- Logo -->
    <a href="#hero" class="font-mono text-[.9rem] font-medium text-txt no-underline">
      <em class="text-green not-italic">&lt;</em>dev<em class="text-green not-italic">/&gt;</em>
    </a>

    <!-- Links desktop -->
    <ul class="hidden md:flex items-center gap-8 list-none">
      <li v-for="link in links" :key="link.href">
        <a
          :href="link.href"
          class="text-[.75rem] tracking-[.09em] uppercase text-muted no-underline transition-colors hover:text-green"
        >{{ link.label }}</a>
      </li>
      <!-- Separador + CV -->
      <li>
        <a
          href="/Jorge_Caballero_CV.pdf"
          download="Jorge_Caballero_CV"
          class="inline-flex items-center gap-1.5 text-[.75rem] tracking-[.09em] uppercase text-muted no-underline transition-colors hover:text-green border-l border-white/10 pl-8"
        >
          <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          CV
        </a>
      </li>
    </ul>

    <!-- CTA desktop -->
    <a
      href="#contact"
      class="hidden md:inline-flex font-display text-[.78rem] font-semibold px-[18px] py-[7px] rounded-md bg-green text-[#0a1a12] no-underline transition-all hover:shadow-glow hover:-translate-y-px"
    >
      Hablemos →
    </a>

    <!-- Hamburger móvil -->
    <button
      class="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
      aria-label="Menú"
      @click="mobileOpen = !mobileOpen"
    >
      <span :class="['block w-[22px] h-px bg-soft transition-all duration-300 origin-center', mobileOpen ? 'translate-y-[6.5px] rotate-45 bg-green' : '']"></span>
      <span :class="['block w-[22px] h-px bg-soft transition-all duration-300', mobileOpen ? 'opacity-0' : '']"></span>
      <span :class="['block w-[22px] h-px bg-soft transition-all duration-300 origin-center', mobileOpen ? '-translate-y-[6.5px] -rotate-45 bg-green' : '']"></span>
    </button>
  </nav>

  <!-- Menú móvil overlay -->
  <Transition name="fade">
    <div
      v-if="mobileOpen"
      class="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-bg/97 backdrop-blur-xl"
    >
      <a
        v-for="link in links" :key="link.href"
        :href="link.href"
        class="font-display font-bold text-[clamp(1.8rem,6vw,2.4rem)] text-txt no-underline transition-colors hover:text-green"
        @click="mobileOpen = false"
      >{{ link.label }}</a>
      <a
        href="/Jorge_Caballero_CV.pdf"
        download="Jorge_Caballero_CV"
        class="flex items-center gap-2.5 font-display font-bold text-[clamp(1.8rem,6vw,2.4rem)] text-green no-underline"
        @click="mobileOpen = false"
      >
        <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
        Descargar CV
      </a>
    </div>
  </Transition>
</template>

<script setup>
import { ref } from 'vue'

defineProps({ scrolled: Boolean })

const mobileOpen = ref(false)

const links = [
  { href: '#about',      label: 'Sobre mí' },
  { href: '#experience', label: 'Experiencia' },
  { href: '#skills',     label: 'Skills' },
  { href: '#contact',    label: 'Contacto' },
]
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity .25s ease; }
.fade-enter-from, .fade-leave-to       { opacity: 0; }
</style>
