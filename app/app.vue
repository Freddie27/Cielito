<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isAppReady = ref(false)

onMounted(async () => {
  // Pequeño delay para asegurar que todo esté cargado
  await new Promise(resolve => setTimeout(resolve, 100))
  
  // Marcar la app como lista
  isAppReady.value = true
  
  // Agregar clase al body para transiciones suaves
  document.body.classList.add('vue-ready')
})
</script>

<template>
  <div v-cloak>
    <!-- Loading screen inicial profesional -->
    <div 
      v-if="!isAppReady"
      class="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
    >
      <!-- Partículas de fondo -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"></div>
        <div class="absolute top-1/3 right-1/3 w-1 h-1 bg-sky-300/40 rounded-full animate-pulse animation-delay-1000"></div>
        <div class="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-indigo-400/30 rounded-full animate-pulse animation-delay-2000"></div>
        <div class="absolute bottom-1/3 right-1/4 w-1 h-1 bg-purple-400/30 rounded-full animate-pulse animation-delay-1500"></div>
      </div>

      <!-- Contenido principal -->
      <div class="relative z-10 text-center space-y-8 px-6">
        
        <!-- Logo profesional -->
        <div class="relative">
          <div class="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 via-sky-400 to-cyan-400 rounded-3xl flex items-center justify-center shadow-2xl animate-pulse">
            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
          </div>
          <!-- Anillo de carga alrededor del logo -->
          <div class="absolute inset-0 w-24 h-24 mx-auto">
            <svg class="w-full h-full animate-spin" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="rgba(59, 130, 246, 0.3)"
                stroke-width="2"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="url(#gradient)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-dasharray="60 200"
                stroke-dashoffset="0"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#3b82f6" />
                  <stop offset="50%" style="stop-color:#06b6d4" />
                  <stop offset="100%" style="stop-color:#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <!-- Información profesional -->
        <div class="space-y-4">
          <h1 class="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Priscila Badilla
          </h1>
          <p class="text-blue-200/90 text-lg font-medium">
            Podología Profesional
          </p>
          <p class="text-slate-300/70 text-sm max-w-md mx-auto">
            Preparando la mejor experiencia para el cuidado de tus pies
          </p>
        </div>

        <!-- Barra de progreso moderna -->
        <div class="w-64 mx-auto">
          <div class="h-1 bg-slate-700/50 rounded-full overflow-hidden">
            <div class="h-full bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-400 rounded-full animate-loading-bar"></div>
          </div>
          <p class="text-slate-400 text-xs mt-2 font-medium">
            Cargando contenido...
          </p>
        </div>

        <!-- Indicadores de estado -->
        <div class="flex justify-center space-x-6 text-slate-400 text-xs">
          <div class="flex items-center space-x-2">
            <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Conectando</span>
          </div>
          <div class="flex items-center space-x-2">
            <div class="w-2 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-500"></div>
            <span>Optimizando</span>
          </div>
          <div class="flex items-center space-x-2">
            <div class="w-2 h-2 bg-purple-400 rounded-full animate-pulse animation-delay-1000"></div>
            <span>Finalizando</span>
          </div>
        </div>
      </div>

      <!-- Efectos de fondo adicionales -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
    </div>

    <!-- Contenido principal -->
    <transition
      enter-active-class="transition-opacity duration-500 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
    >
      <NuxtLayout v-if="isAppReady">
        <NuxtPage />
      </NuxtLayout>
    </transition>
  </div>
</template>

<style scoped>
/* Animación de la barra de progreso */
@keyframes loading-bar {
  0% { 
    transform: translateX(-100%);
  }
  50% { 
    transform: translateX(0%);
  }
  100% { 
    transform: translateX(100%);
  }
}

.animate-loading-bar {
  animation: loading-bar 2s ease-in-out infinite;
}

/* Delays para animaciones escalonadas */
.animation-delay-500 {
  animation-delay: 0.5s;
}

.animation-delay-1000 {
  animation-delay: 1s;
}

.animation-delay-1500 {
  animation-delay: 1.5s;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

/* Efecto de respiración para el logo */
@keyframes breath {
  0%, 100% { 
    transform: scale(1);
  }
  50% { 
    transform: scale(1.05);
  }
}

.animate-breath {
  animation: breath 3s ease-in-out infinite;
}

/* Gradiente animado de fondo */
@keyframes gradient-shift {
  0% { 
    background-position: 0% 50%;
  }
  50% { 
    background-position: 100% 50%;
  }
  100% { 
    background-position: 0% 50%;
  }
}

/* Partículas flotantes */
@keyframes float {
  0%, 100% { 
    transform: translateY(0px);
    opacity: 0.3;
  }
  50% { 
    transform: translateY(-10px);
    opacity: 0.6;
  }
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .space-y-8 > * + * {
    margin-top: 1.5rem;
  }
}
</style>