<script setup lang="ts">
import { useTheme } from '~/composables/useTheme'
import { Sun, Moon } from '~/composables/useIcons'

const { isDarkMode, toggleTheme } = useTheme()
const mounted = ref(false)

onMounted(() => {
  mounted.value = true
})

// Elegimos el icono actual (Sol o Luna)
const icon = computed(() => isDarkMode.value ? Sun : Moon)

// Definimos dinámicamente el color del icono
const iconColorClass = computed(() => 
  isDarkMode.value 
    ? 'text-yellow-300' 
    : 'text-orange-500'
)

// Clase dinámica para el fondo del botón
const buttonBgClass = computed(() =>
  isDarkMode.value
    ? 'bg-gray-800 border-gray-700 hover:bg-gray-750'
    : 'bg-white border-gray-200 hover:bg-gray-50'
)
</script>

<template>
  <button
    @click="toggleTheme"
    aria-label="Cambiar tema"
    class="relative w-10 h-10 rounded-xl border transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent transform hover:scale-105 shadow-sm hover:shadow-md"
    :class="[
      buttonBgClass,
      mounted ? 'opacity-100' : 'opacity-0'
    ]"
  >
    <!-- Contenedor del ícono con animación -->
    <div class="absolute inset-0 flex items-center justify-center">
      <transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 rotate-90 scale-50"
        enter-to-class="opacity-100 rotate-0 scale-100"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 rotate-0 scale-100"
        leave-to-class="opacity-0 -rotate-90 scale-50"
        mode="out-in"
      >
        <component
          v-if="mounted"
          :is="icon"
          :key="isDarkMode ? 'dark' : 'light'"
          class="w-5 h-5 transition-all duration-300"
          :class="iconColorClass"
        />
      </transition>
    </div>

    <!-- Efectos decorativos -->
    <div 
      class="absolute inset-0 rounded-xl bg-gradient-to-br opacity-0 hover:opacity-20 transition-opacity duration-300"
      :class="isDarkMode ? 'from-blue-700 to-purple-700' : 'from-blue-400 to-sky-300'"
    ></div>
    
    <!-- Indicador de estado -->
    <div 
      class="absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 transition-all duration-300"
      :class="[
        isDarkMode 
          ? 'bg-yellow-400 border-gray-800' 
          : 'bg-blue-500 border-white',
        mounted ? 'scale-100' : 'scale-0'
      ]"
    ></div>
  </button>
</template>

<style scoped>
/* Animación personalizada para el hover */
@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 0 5px rgba(59, 130, 246, 0.3); /* azul claro */
  }
  50% {
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.6); /* azul claro */
  }
}

button:hover {
  animation: pulse-glow 2s infinite;
}

/* Animación de rotación suave */
.rotate-animation {
  animation: rotate 0.5s ease-in-out;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
}

/* Efecto de glassmorphism sutil */
button::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0));
  opacity: 0;
  transition: opacity 0.3s ease;
}

button:hover::before {
  opacity: 1;
}

/* Dark mode adjustments */
.dark button::before {
  background: linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0));
}
</style>