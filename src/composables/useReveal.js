import { onMounted, onUnmounted } from 'vue'

/**
 * Añade la clase 'in' a los elementos .reveal cuando entran en el viewport.
 * También gestiona los puntos del timeline (.tl-dot) y las barras de skills (.sk-fill).
 */
export function useReveal() {
  let revealObs, dotObs, skillObs

  onMounted(() => {
    // ── Reveal general ──
    revealObs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); revealObs.unobserve(e.target) }
      }),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el))

    // ── Timeline dots ──
    dotObs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('active'); dotObs.unobserve(e.target) }
      }),
      { threshold: 0.2 }
    )
    document.querySelectorAll('.tl-dot').forEach(el => dotObs.observe(el))

    // ── Skill bars ──
    skillObs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.sk-fill').forEach(bar => {
            setTimeout(() => { bar.style.width = bar.dataset.pct + '%' }, 120)
          })
          skillObs.unobserve(e.target)
        }
      }),
      { threshold: 0.15 }
    )
    document.querySelectorAll('.sk-group').forEach(el => skillObs.observe(el))
  })

  onUnmounted(() => {
    revealObs?.disconnect()
    dotObs?.disconnect()
    skillObs?.disconnect()
  })
}
