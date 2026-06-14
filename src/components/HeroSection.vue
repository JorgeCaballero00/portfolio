<template>
  <section
    id="hero"
    class="relative min-h-svh flex flex-col justify-center overflow-hidden pt-[60px]"
    :style="{ paddingLeft: 'clamp(1.25rem,5vw,4rem)', paddingRight: 'clamp(1.25rem,5vw,4rem)' }"
  >
    <!-- Grid de fondo -->
    <div class="absolute inset-0 hero-grid pointer-events-none"></div>

    <!-- Orbe verde arriba-derecha -->
    <div
      class="absolute -top-[15%] -right-[5%] pointer-events-none rounded-full"
      style="width:min(520px,70vw);height:min(520px,70vw);background:radial-gradient(circle,rgba(0,229,160,.1) 0%,transparent 65%)"
    ></div>

    <!-- Orbe índigo abajo-izquierda -->
    <div
      class="absolute -bottom-[10%] -left-[8%] pointer-events-none rounded-full"
      style="width:min(400px,55vw);height:min(400px,55vw);background:radial-gradient(circle,rgba(99,102,241,.07) 0%,transparent 65%)"
    ></div>

    <!-- Contenido -->
    <div class="relative z-10 max-w-[700px] mx-auto w-full">
      <!-- Badge disponible -->
      <div class="inline-flex items-center gap-2 font-mono text-[.72rem] text-green border border-green/25 bg-green/[.06] px-3.5 py-1.5 rounded-full mb-7">
        <span class="dot-pulse"></span>
        Disponible para proyectos
      </div>

      <h1 class="font-display font-bold leading-[.95] tracking-[-0.03em] text-txt mb-5" style="font-size:clamp(3rem,9.5vw,6.5rem)">
        Hola, soy<br>
        <span class="text-green">Jorge Caballero</span>
      </h1>

      <p class="font-display mb-6" style="font-size:clamp(.95rem,2vw,1.1rem);color:#9ba3c0;">
        <strong class="text-txt font-medium">Frontend Developer ·  </strong>
        <strong class="text-txt font-medium">Tech Lead </strong> 
      </p>

      <p class="text-muted max-w-[500px] leading-[1.8] mb-10" style="font-size:clamp(.9rem,1.8vw,1rem)">
        Desarrollador Frontend con más de 5 años de
        experiencia en desarrollo de aplicaciones web. Especializado en arquitecturas
        escalables basadas en microfrontends.
      </p>

      <div class="flex flex-wrap gap-3.5 items-center">
        <!-- Ver trabajo -->
        <a
          href="#experience"
          class="inline-flex items-center gap-2 bg-green text-[#071410] font-display font-bold text-[.83rem] tracking-[.02em] px-[22px] py-3 rounded-lg no-underline transition-all hover:shadow-glow hover:-translate-y-px"
        >
          Ver mi trabajo
        </a>

        <!-- Contactar -->
        <a
          href="#contact"
          class="inline-flex items-center gap-2 bg-transparent text-soft font-display font-medium text-[.83rem] px-[22px] py-3 rounded-lg border border-surface2 no-underline transition-all hover:border-green hover:text-green"
        >
          Contactar
        </a>

        <!-- Descargar CV -->
        <a
          href="/Jorge_Caballero_CV.pdf"
          download="Jorge_Caballero_CV.pdf"
          class="inline-flex items-center gap-2 bg-transparent text-muted font-display font-medium text-[.83rem] px-[22px] py-3 rounded-lg border border-white/10 no-underline transition-all hover:text-green hover:border-green/30"
        >
          <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Descargar CV
        </a>
      </div>
    </div>

    <!-- Scroll cue -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
      <p class="text-[.6rem] tracking-[.15em] uppercase text-muted/50">Scroll</p>
      <div class="scroll-line"></div>
    </div>
  </section>
</template>
