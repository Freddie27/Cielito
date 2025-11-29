<template>
  <header class="fixed w-full top-0 left-0 z-50 transition-all duration-500"
    :class="[
      scrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-lg' 
        : 'bg-transparent'
    ]"
  >
    <nav class="container mx-auto px-4 lg:px-6">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <!-- Logo y nombre profesional -->
        <div class="flex items-center space-x-3 lg:space-x-4 z-10">
          <div class="relative group">
            <!-- Logo circular con gradiente y efecto hover -->
            <div class="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-500 via-sky-400 to-cyan-400 dark:from-blue-600 dark:via-purple-600 dark:to-indigo-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transform group-hover:scale-105 transition-all duration-300">
              <svg class="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            </div>
          </div>
          
          <div class="hidden sm:block">
            <h1 class="text-lg lg:text-xl font-bold text-gray-900 dark:text-white tracking-tight">
              Constanza & Freddie
            </h1>
            <p class="text-xs lg:text-sm text-blue-600 dark:text-blue-400 font-medium -mt-0.5">
              ♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡
            </p>
          </div>
        </div>

        <!-- Menú de navegación principal (desktop) -->
        <div class="hidden xl:flex items-center space-x-1">
          <a 
            v-for="item in menuItems" 
            :key="item.name"
            :href="item.href" 
            class="group relative px-4 lg:px-6 py-2.5 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-all duration-300 rounded-xl hover:bg-blue-50/80 dark:hover:bg-blue-900/30"
            @click="closeMenu"
          >
            <span class="relative z-10">{{ item.name }}</span>
            <!-- Indicador activo -->
            <div class="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 dark:from-blue-400 dark:to-purple-500 group-hover:w-8 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-300 rounded-full"></div>
          </a>
        </div>

        <!-- Acciones del header -->
        <div class="flex items-center space-x-2 lg:space-x-3">
        <a
            href="#"
            @click.prevent=""
            class="relative hidden lg:inline-flex items-center px-4 lg:px-6 py-2 bg-gradient-to-r
              from-blue-500 via-sky-400 to-cyan-400 dark:from-blue-600 dark:via-purple-600 dark:to-indigo-700
              text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <span class="absolute inset-0 flex items-center justify-center">
              ❤️
            </span>
            <span class="opacity-0">Agendar</span>
          </a>

          <!-- Botón menú móvil -->
          <button
            @click="toggleMenu"
            class="xl:hidden relative w-10 h-10 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none transition-all duration-300 rounded-xl hover:bg-blue-50/80 dark:hover:bg-blue-900/30"
            :class="{ 'text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-900/30': menuOpen }"
            aria-label="Toggle menu"
          >
            <div class="absolute inset-0 flex items-center justify-center">
              <!-- Ícono hamburguesa animado -->
              <div class="w-5 h-5 flex flex-col justify-center items-center">
                <span 
                  class="w-5 h-0.5 bg-current transition-all duration-300 ease-in-out"
                  :class="menuOpen ? 'rotate-45 translate-y-0.5 w-6' : 'mb-1'"
                ></span>
                <span 
                  class="w-5 h-0.5 bg-current transition-all duration-300 ease-in-out"
                  :class="menuOpen ? 'opacity-0 scale-0' : 'mb-1'"
                ></span>
                <span 
                  class="w-5 h-0.5 bg-current transition-all duration-300 ease-in-out"
                  :class="menuOpen ? '-rotate-45 -translate-y-0.5 w-6' : ''"
                ></span>
              </div>
            </div>
          </button>
        </div>
      </div>
    </nav>

    <!-- Menú móvil expandible -->
    <transition
      enter-active-class="transition-all duration-400 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div 
        v-if="menuOpen" 
        class="xl:hidden absolute top-full left-0 right-0 bg-white/98 dark:bg-gray-900/98 backdrop-blur-xl shadow-2xl"
      >
        <div class="container mx-auto px-4 lg:px-6 py-6 space-y-6 max-h-[calc(100vh-5rem)] overflow-y-auto">
          <!-- Info del profesional en móvil -->
          <div class="flex items-center space-x-4 pb-6 border-b border-gray-200 dark:border-gray-700">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-500 via-sky-400 to-cyan-400 dark:from-blue-600 dark:via-purple-600 dark:to-indigo-700 rounded-2xl flex items-center justify-center shadow-lg">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            </div>
            <div>
              <h2 class="font-bold text-gray-900 dark:text-white text-lg">Priscila Badilla</h2>
              <p class="text-sm text-blue-600 dark:text-blue-400 font-medium">Podología Profesional</p>
              <div class="flex items-center space-x-1 mt-1">
                <div class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span class="text-xs text-gray-500 dark:text-gray-400">Disponible ahora</span>
              </div>
            </div>
          </div>

          <!-- Enlaces de navegación móvil -->
          <div class="space-y-2">
            <a 
              v-for="(item, index) in menuItems" 
              :key="item.name"
              :href="item.href" 
              class="flex items-center space-x-4 p-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 dark:hover:from-blue-900/30 dark:hover:to-purple-900/30 rounded-2xl transition-all duration-300 font-medium group"
              @click="closeMenu"
            >
              <div class="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-xl flex items-center justify-center group-hover:from-blue-100 group-hover:to-cyan-100 dark:group-hover:from-blue-800 dark:group-hover:to-purple-800 transition-all duration-300">
                <svg class="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.icon"/>
                </svg>
              </div>
              <span class="text-base font-medium">{{ item.name }}</span>
              <svg class="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </transition>

    <!-- Overlay para cerrar menú en móvil -->
    <transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div 
        v-if="menuOpen" 
        class="xl:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
        @click="closeMenu"
      ></div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Estado del menú móvil
const menuOpen = ref(false)
const scrolled = ref(false)

// Items del menú de navegación
const menuItems = [
  { 
    name: '', 
    href: '/',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
  }
]

// Funciones del menú
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
  // Prevenir scroll del body cuando el menú está abierto
  if (menuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMenu = () => {
  menuOpen.value = false
  document.body.style.overflow = ''
}

// Detección de scroll para efecto glassmorphism
const handleScroll = () => {
  scrolled.value = window.scrollY > 10
}

// Cerrar menú con ESC
const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && menuOpen.value) {
    closeMenu()
  }
}

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('keydown', handleKeyDown)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('keydown', handleKeyDown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
/* Glassmorphism backdrop effect */
.backdrop-blur-xl {
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Focus visible improvements */
button:focus-visible,
a:focus-visible {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
  border-radius: 0.75rem;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

/* Prevent horizontal scrolling */
.overflow-y-auto {
  -webkit-overflow-scrolling: touch;
}
</style>