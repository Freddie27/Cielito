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
            <!-- Indicador de estado online -->
            <div class="absolute -bottom-0.5 -right-0.5 w-3 h-3 lg:w-4 lg:h-4 bg-emerald-400 border-2 border-white dark:border-gray-900 rounded-full">
              <div class="w-full h-full bg-emerald-400 rounded-full animate-ping opacity-75"></div>
            </div>
          </div>
          
          <div class="hidden sm:block">
            <h1 class="text-lg lg:text-xl font-bold text-gray-900 dark:text-white tracking-tight">
              Priscila Badilla
            </h1>
            <p class="text-xs lg:text-sm text-blue-600 dark:text-blue-400 font-medium -mt-0.5">
              Podología Profesional
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
          <!-- Información de contacto rápido (desktop xl) -->
          <div class="hidden xl:flex items-center space-x-4 mr-4 bg-gray-50/90 dark:bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-xl border border-gray-200/50 dark:border-gray-700/50">
            <div class="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <div class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span class="font-medium">En línea</span>
            </div>
            
            <div class="w-px h-4 bg-gray-300 dark:bg-gray-600"></div>
            
            <div class="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <span class="font-medium">+56 9 3511 4611</span>
            </div>
          </div>

          <!-- Botón de agendar cita -->
          <a
            href="#contacto"
            class="hidden lg:inline-flex items-center px-4 lg:px-6 py-2 lg:py-2.5 bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-400 dark:from-blue-600 dark:via-purple-600 dark:to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-blue-600 hover:via-sky-500 hover:to-cyan-500 dark:hover:from-blue-700 dark:hover:via-purple-700 dark:hover:to-indigo-800 transition-all duration-300 transform hover:scale-105 text-sm lg:text-base"
          >
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
            <span class="hidden lg:inline">Agendar</span>
            <span class="lg:hidden">Cita</span>
          </a>

          <!-- Botón de cambio de tema -->
          <ButtonTheme />

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

          <!-- Contacto rápido móvil -->
          <div class="pt-6 border-t border-gray-200 dark:border-gray-700 space-y-3">
            <h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-4">Contacto Directo</h4>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="tel:+56935114611"
                class="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-2xl transition-all duration-300 hover:from-blue-100 hover:to-cyan-100 dark:hover:from-blue-800/50 dark:hover:to-purple-800/50 border border-blue-200/50 dark:border-blue-700/50"
                @click="closeMenu"
              >
                <div class="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div class="text-left min-w-0">
                  <div class="font-semibold text-sm">Llamar</div>
                  <div class="text-xs opacity-80 truncate">Respuesta inmediata</div>
                </div>
              </a>

              <a
                href="https://wa.me/56935114611"
                target="_blank"
                class="flex items-center space-x-3 p-4 bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 text-emerald-700 dark:text-emerald-400 rounded-2xl transition-all duration-300 hover:from-emerald-100 hover:to-green-100 dark:hover:from-emerald-900/30 dark:hover:to-green-900/30 border border-emerald-200/50 dark:border-emerald-700/50"
                @click="closeMenu"
              >
                <div class="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.109"/>
                  </svg>
                </div>
                <div class="text-left min-w-0">
                  <div class="font-semibold text-sm">WhatsApp</div>
                  <div class="text-xs opacity-80 truncate">Chat 24/7</div>
                </div>
              </a>
            </div>
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
import ButtonTheme from './ButtonTheme.vue'

// Estado del menú móvil
const menuOpen = ref(false)
const scrolled = ref(false)

// Items del menú de navegación
const menuItems = [
  { 
    name: 'Inicio', 
    href: '/',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
  },
  { 
    name: 'Servicios', 
    href: '#servicios',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  { 
    name: 'Sobre Mí', 
    href: '#Perfil',
    icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
  },
  { 
    name: 'Contacto', 
    href: '#contacto',
    icon: 'M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
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