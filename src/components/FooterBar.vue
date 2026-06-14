<template>
  <footer class="border-t border-white/[.07] text-center py-7 px-[clamp(1.25rem,5vw,4rem)]">
    <p class="font-mono text-[.68rem] text-muted">
      Diseñado y construido por <em class="text-soft not-italic">Jorge Caballero</em>
      · Vue.js + Tailwind CSS ·
      <em class="text-soft not-italic">{{ year }}</em>
    </p>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>
