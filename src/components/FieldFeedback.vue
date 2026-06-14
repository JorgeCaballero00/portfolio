<template>
  <Transition name="hint">
    <span
      v-if="field.touched && !field.valid"
      class="flex items-center gap-1 text-[.7rem] text-red-400 font-display"
    >
      <svg width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="13"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
      {{ error }}
    </span>
    <span
      v-else-if="field.touched && field.valid"
      class="flex items-center gap-1 text-[.7rem] text-green font-display"
    >
      <svg width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
      Correcto
    </span>
  </Transition>
</template>

<script setup>
defineProps({
  field: { type: Object, required: true },
  error: { type: String, required: true },
})
</script>

<style scoped>
.hint-enter-active, .hint-leave-active { transition: opacity .2s, transform .2s; }
.hint-enter-from, .hint-leave-to       { opacity: 0; transform: translateY(-4px); }
</style>
