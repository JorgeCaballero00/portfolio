<template>
  <div>
    <div id="progress-bar" :style="{ width: scrollPct + '%' }"></div>
    <NavBar :scrolled="scrolled" />
    <main>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
    </main>
    <FooterBar />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useReveal } from './composables/useReveal.js'
import NavBar          from './components/NavBar.vue'
import HeroSection     from './components/HeroSection.vue'
import AboutSection    from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import SkillsSection   from './components/SkillsSection.vue'
import ContactSection  from './components/ContactSection.vue'
import FooterBar       from './components/FooterBar.vue'

useReveal()

const scrolled  = ref(false)
const scrollPct = ref(0)

function onScroll() {
  const s   = window.scrollY
  const max = document.body.scrollHeight - window.innerHeight
  scrolled.value  = s > 30
  scrollPct.value = max > 0 ? (s / max) * 100 : 0
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
