import { defineNuxtPlugin } from 'nuxt/app'

export default defineNuxtPlugin(() => {
  const html = document.documentElement

  // Fuerza clase dark permanentemente
  html.classList.add('dark')

  // Sobrescribe cualquier intento de cambiar el tema
  try {
    localStorage.setItem('nuxt-color-mode', 'dark')
  } catch (e) {}

  // Re-aplica el modo oscuro si algo lo remueve
  const observer = new MutationObserver(() => {
    if (!html.classList.contains('dark')) {
      html.classList.add('dark')
      localStorage.setItem('nuxt-color-mode', 'dark')
    }
  })

  observer.observe(html, { attributes: true })
})
