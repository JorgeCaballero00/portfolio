<template>
  <section
    id="contact"
    class="bg-bg"
    :style="{ padding: 'clamp(4.5rem,10vw,7.5rem) clamp(1.25rem,5vw,4rem)' }"
  >
    <div class="max-w-[700px] mx-auto">
      <div class="eyebrow reveal">Contacto</div>
      <h2
        class="reveal font-display font-bold text-txt leading-[1.1] mb-2"
        style="font-size:clamp(1.7rem,4vw,2.4rem)"
      >
        ¿Quieres contactarme?
      </h2>
      <p class="reveal text-muted text-[.93rem] mb-8">
        Siempre abierto a nuevas experiencias profesionales.
      </p>

      <!-- Formulario -->
      <form class="reveal flex flex-col gap-4" novalidate @submit.prevent="handleSubmit">
        <div class="grid gap-4 sm:grid-cols-2">
          <!-- Nombre -->
          <div class="flex flex-col gap-1">
            <label class="font-mono text-[.65rem] tracking-[.1em] uppercase text-muted">Nombre</label>
            <input
              v-model="form.name"
              type="text"
              placeholder="Introduce tu nombre"
              autocomplete="name"
              :class="inputClass(fields.name)"
              @blur="fields.name.touched = true"
              @input="fields.name.touched = true"
            />
            <FieldFeedback :field="fields.name" error="Introduce tu nombre" />
          </div>

          <!-- Email -->
          <div class="flex flex-col gap-1">
            <label class="font-mono text-[.65rem] tracking-[.1em] uppercase text-muted">Email</label>
            <input
              v-model="form.email"
              type="email"
              placeholder="test@proyecto.io"
              autocomplete="email"
              :class="inputClass(fields.email)"
              @blur="fields.email.touched = true"
              @input="fields.email.touched = true"
            />
            <FieldFeedback :field="fields.email" error="Email no válido" />
          </div>
        </div>

        <!-- Mensaje -->
        <div class="flex flex-col gap-1">
          <label class="font-mono text-[.65rem] tracking-[.1em] uppercase text-muted">Mensaje</label>
          <textarea
            v-model="form.message"
            placeholder="Tengo un proyecto sobre..."
            rows="5"
            :class="inputClass(fields.message)"
            class="resize-y min-h-[120px]"
            @blur="fields.message.touched = true"
            @input="onMessageInput"
          ></textarea>
          <div class="flex justify-between items-center">
            <FieldFeedback :field="fields.message" error="Mínimo 20 caracteres" />
            <span :class="['font-mono text-[.65rem]', charCountClass]">{{ charCount }} / {{ MAX_CHARS }}</span>
          </div>
        </div>

        <!-- Submit -->
        <div class="flex items-center gap-5 flex-wrap">
          <button
            type="submit"
            :disabled="status.value === 'sending' || status.value === 'success'"
            :class="[
              'inline-flex items-center gap-2 font-display font-bold text-[.83rem] tracking-[.02em] px-7 py-3 rounded-lg border-none cursor-pointer transition-all',
              status.value === 'success'
                ? 'bg-green/20 text-green cursor-default'
                : 'bg-green text-[#071410] hover:shadow-glow hover:-translate-y-px',
              (status.value === 'sending') && 'opacity-50 cursor-default'
            ]"
          >
            <template v-if="status.value === 'idle'">Enviar mensaje →</template>
            <template v-else-if="status.value === 'sending'">Enviando...</template>
            <template v-else-if="status.value === 'success'">
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
              Mensaje enviado
            </template>
            <template v-else>Error, inténtalo de nuevo →</template>
          </button>

          <p v-if="status.value === 'success'" class="text-green text-[.88rem] font-display font-medium">
            Te escribiré pronto.
          </p>
          <p v-if="status.value === 'error'" class="text-red-400 text-[.83rem]">
            Algo salió mal. Prueba a escribirme directamente.
          </p>
        </div>
      </form>

      <!-- Redes -->
      <div class="reveal flex gap-6 flex-wrap mt-11 pt-9 border-t border-white/[.07]">
        <a :href="contact.github.link"   target="_blank" rel="noopener" class="social-link">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.37.6.1.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.74-1.33-1.74-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.82.57C20.57 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z"/></svg>
          {{ contact.github.title }}
        </a>
        <a :href="contact.linkedin.link" target="_blank" rel="noopener" class="social-link">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.91 1.64-1.87 3.37-1.87 3.6 0 4.27 2.37 4.27 5.45v6.31zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>
           {{ contact.linkedin.title }}
        </a>
        <a :href="contact.mail.link" class="social-link">
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>
           {{ contact.mail.title }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, computed } from 'vue'
import FieldFeedback from './FieldFeedback.vue'

// ── Config ──
// 👇 Reemplaza con tu ID de Formspree
const FORMSPREE_ID = 'maqzakjd'
const MAX_CHARS    = 500

// ── Estado ──
const form = reactive({ name: '', email: '', message: '' })
const status = reactive({ value: 'idle' })
const contact = {
    github :  {
      title: 'JorgeCaballero00', link: 'https://github.com/JorgeCaballero00'
    },
    linkedin : {
       title: 'jorge-caballero-jimenez', link: 'https://www.linkedin.com/in/jorge-caballero-jimenez/'
    },
    mail : {
      title: 'jorgecaballerojimenez00@email.com', link: 'mailto:jorgecaballerojimenez00@email.com'
    }
}

const fields = reactive({
  name:    { touched: false },
  email:   { touched: false },
  message: { touched: false },
})

// ── Validadores ──
const isValidName    = computed(() => form.name.trim().length >= 2)
const isValidEmail   = computed(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
const isValidMessage = computed(() => form.message.trim().length >= 20 && form.message.length <= MAX_CHARS)

const charCount = computed(() => form.message.length)
const charCountClass = computed(() => {
  if (charCount.value >= MAX_CHARS) return 'text-orange-400'
  if (charCount.value >= 20)        return 'text-green'
  return 'text-muted'
})

// ── Clases de inputs ──
function inputClass(field) {
  const base = 'w-full bg-surface border rounded-lg px-3.5 py-3 text-txt font-body text-[.88rem] outline-none transition-all placeholder:text-muted/50'
  if (!field.touched) return `${base} border-white/[.07] focus:border-green/40`
  return field === fields.name    && isValidName.value    ? `${base} border-green/50 bg-green/[.03]`
       : field === fields.email   && isValidEmail.value   ? `${base} border-green/50 bg-green/[.03]`
       : field === fields.message && isValidMessage.value ? `${base} border-green/50 bg-green/[.03]`
       : `${base} border-red-500/50 bg-red-500/[.03]`
}

// ── Helpers ──
Object.defineProperty(fields.name,    'valid', { get: () => isValidName.value })
Object.defineProperty(fields.email,   'valid', { get: () => isValidEmail.value })
Object.defineProperty(fields.message, 'valid', { get: () => isValidMessage.value })

function onMessageInput() {
  fields.message.touched = true
  if (form.message.length > MAX_CHARS) form.message = form.message.slice(0, MAX_CHARS)
}

// ── Submit ──
async function handleSubmit() {
  fields.name.touched = fields.email.touched = fields.message.touched = true
  if (!isValidName.value || !isValidEmail.value || !isValidMessage.value) return

  status.value = 'sending'
  try {
    const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method:  'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body:    JSON.stringify({ name: form.name.trim(), email: form.email.trim(), message: form.message.trim() }),
    })
    status.value = res.ok ? 'success' : 'error'
  } catch {
    status.value = 'error'
  }
}
</script>

<style scoped>
.social-link {
  @apply flex items-center gap-1.5 text-muted text-[.83rem] no-underline transition-colors;
}
.social-link:hover { color: theme('colors.green'); }
</style>
