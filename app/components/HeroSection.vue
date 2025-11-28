<script setup lang="ts">
import { ref, onMounted, onUnmounted, h } from 'vue'

/* ---------- Íconos como componentes funcionales ---------- */
const DiagnosticIcon = () => h('svg', {
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24'
}, [
  h('path', {
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'stroke-width': '2',
    d: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
  })
])

const TreatmentIcon = () => h('svg', {
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24'
}, [
  h('path', {
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'stroke-width': '2',
    d: 'M12 8v4l3 3'
  })
])

const PreventionIcon = () => h('svg', {
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24'
}, [
  h('path', {
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'stroke-width': '2',
    d: 'M5 13l4 4L19 7'
  })
])

const TechnologyIcon = () => h('svg', {
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24'
}, [
  h('path', {
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'stroke-width': '2',
    d: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
  })
])

/* ---------- Slides con imágenes ---------- */
const slides = [
  {
    title: 'Diagnóstico Preciso',
    description: 'Evaluación completa de la salud de tus pies utilizando métodos clínicos para identificar problemas desde hongos hasta deformidades estructurales.',
    shortTitle: 'Diagnóstico Profesional',
    icon: DiagnosticIcon,
    color: 'blue',
    image: 'https://res.cloudinary.com/dqiayyqfp/image/upload/v1756531813/proceso-de-pedicura-pedicura-de-salon-en-casa-tratamiento-de-cuidado-de-los-pies-y-unas-el-proceso-de-pedicura-profesional-maestro-en-guantes-azules-hace-pedicura_fc4lt3.jpg'
  },
  {
    title: 'Tratamientos Especializados',
    description: 'Procedimientos especializados para uñas encarnadas, helomas y otros problemas podológicos con técnicas modernas.',
    shortTitle: 'Tratamientos Personalizados',
    icon: TreatmentIcon,
    color: 'purple',
    image: 'https://res.cloudinary.com/dqiayyqfp/image/upload/v1756532613/Todo-lo-que-debes-saber-sobre-la-podologia-4_cujdxi.webp'
  },
  {
    title: 'Cuidado Preventivo',
    description: 'Educación especializada en higiene podal, recomendaciones y rutinas de cuidado para mantener la salud óptima de tus pies.',
    shortTitle: 'Prevención y Cuidado',
    icon: PreventionIcon,
    color: 'green',
    image: 'https://res.cloudinary.com/dqiayyqfp/image/upload/v1756539680/12620341_l_vsidkr.jpg'
  },
  {
    title: 'Instrumentos Esterilizados',
    description: 'Equipos adaptados para tu tratamiento, instrumentos esterilizados a manos de una profesional para garantizar los mejores resultados.',
    shortTitle: 'Instrumentos Adecuados',
    icon: TechnologyIcon,
    color: 'orange',
    image: 'https://res.cloudinary.com/dqiayyqfp/image/upload/v1756533157/5-senales-de-que-necesitas-visitar-al-podologo-y-no-lo-sabias-2_bx3cpn.webp'
  }
]

/* ---------- Estado del carrusel ---------- */
const currentSlide = ref(0)
const totalSlides = slides.length
const isImageLoaded = ref(Array(slides.length).fill(false))
const allImagesLoaded = ref(false)
const isInitialLoad = ref(true)
const scrolled = ref(false)
let slideInterval: ReturnType<typeof setInterval> | null = null

// Precargar imágenes con mejor manejo del estado inicial
const preloadImages = () => {
  let loadedCount = 0
  const totalImages = slides.length

  slides.forEach((slide, index) => {
    const img = new Image()
    img.onload = () => {
      isImageLoaded.value[index] = true
      loadedCount++
      
      // Cuando se cargue la primera imagen, quitar el estado inicial
      if (loadedCount === 1) {
        isInitialLoad.value = false
      }
      
      // Cuando se carguen todas las imágenes
      if (loadedCount === totalImages) {
        allImagesLoaded.value = true
      }
    }
    img.onerror = () => {
      isImageLoaded.value[index] = true
      loadedCount++
      
      if (loadedCount === 1) {
        isInitialLoad.value = false
      }
      
      if (loadedCount === totalImages) {
        allImagesLoaded.value = true
      }
    }
    img.src = slide.image
  })
}

const getCurrentSlideTitle = () => slides[currentSlide.value].shortTitle
const getCurrentSlideDescription = () => slides[currentSlide.value].description

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % totalSlides
  resetAutoSlide()
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + totalSlides) % totalSlides
  resetAutoSlide()
}

const goToSlide = (slideIndex: number) => {
  currentSlide.value = slideIndex
  resetAutoSlide()
}

/* ---------- Auto-slide ---------- */
const startAutoSlide = () => {
  if (slideInterval) return
  slideInterval = setInterval(nextSlide, 6000)
}

const resetAutoSlide = () => {
  if (slideInterval) {
    clearInterval(slideInterval)
  }
  startAutoSlide()
}

const stopAutoSlide = () => {
  if (slideInterval) {
    clearInterval(slideInterval)
    slideInterval = null
  }
}

/* ---------- Badge classes ---------- */
const getBadgeClasses = () => {
  const colorMap = {
    blue: 'bg-blue-500/20 text-blue-100 border-blue-300/30',
    purple: 'bg-purple-500/20 text-purple-100 border-purple-300/30',
    green: 'bg-emerald-500/20 text-emerald-100 border-emerald-300/30',
    orange: 'bg-orange-500/20 text-orange-100 border-orange-300/30'
  }
  return colorMap[(slides[currentSlide.value].color as keyof typeof colorMap)] || ''
}

/* ---------- Eventos de teclado y scroll ---------- */
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'ArrowLeft') {
    prevSlide()
  } else if (event.key === 'ArrowRight') {
    nextSlide()
  } else if (event.key === ' ') {
    event.preventDefault()
    if (slideInterval) {
      stopAutoSlide()
    } else {
      startAutoSlide()
    }
  }
}

const handleScroll = () => {
  scrolled.value = window.scrollY > 100 // Se oculta después de 100px de scroll
}

onMounted(() => {
  preloadImages()
  startAutoSlide()
  window.addEventListener('keydown', handleKeydown)
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll() // Verificar scroll inicial
})

onUnmounted(() => {
  stopAutoSlide()
  window.removeEventListener('keydown', handleKeydown)
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <!-- Hero Section -->
  <section class="relative w-full min-h-screen overflow-hidden" :class="isInitialLoad ? 'bg-gray-900' : 'bg-gray-900'">
    
    <!-- Contenedor de imágenes de fondo -->
    <div class="absolute inset-0 z-0">
      <!-- Fondo inicial mientras cargan las imágenes -->
      <div 
        v-if="isInitialLoad"
        class="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
      >
        <!-- Loader inicial elegante -->
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="text-center space-y-4">
            <div class="w-12 h-12 border-3 border-white/20 border-t-white rounded-full animate-spin mx-auto"></div>
            <p class="text-white/70 text-sm font-medium">Cargando experiencia...</p>
          </div>
        </div>
      </div>

      <!-- Slides de imágenes -->
      <div 
        v-for="(slide, index) in slides"
        :key="index"
        class="absolute inset-0 transition-opacity duration-1000"
        :class="[
          currentSlide === index && !isInitialLoad ? 'opacity-100' : 'opacity-0'
        ]"
      >
        <!-- Imagen de fondo -->
        <div 
          v-if="isImageLoaded[index]"
          class="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500"
          :style="{ backgroundImage: `url(${slide.image})` }"
        ></div>
        
        <!-- Fallback de color (solo si la imagen no se carga) -->
        <div 
          v-else-if="!isInitialLoad"
          class="absolute inset-0 transition-opacity duration-500"
          :class="{
            'bg-gradient-to-br from-blue-600 to-blue-800': slide.color === 'blue',
            'bg-gradient-to-br from-purple-600 to-purple-800': slide.color === 'purple',
            'bg-gradient-to-br from-emerald-600 to-emerald-800': slide.color === 'green',
            'bg-gradient-to-br from-orange-600 to-orange-800': slide.color === 'orange'
          }"
        ></div>

        <!-- Overlay para legibilidad -->
        <div 
          v-if="!isInitialLoad" 
          class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"
        ></div>
      </div>
    </div>

    <!-- Contenido principal -->
    <div 
      class="relative z-10 flex items-center min-h-screen transition-opacity duration-500"
      :class="isInitialLoad ? 'opacity-0' : 'opacity-100'"
    >
      <!-- Espaciado para navbar fijo -->
      <div class="w-full pt-20 pb-16 lg:pt-24 lg:pb-20">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-7xl mx-auto">
            <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              
              <!-- Contenido textual -->
              <div class="space-y-6 lg:space-y-8 text-center lg:text-left">
                <!-- Badge dinámico -->
                <div class="flex justify-center lg:justify-start">
                  <div 
                    class="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 rounded-full text-sm font-medium border transition-all duration-500"
                    :class="getBadgeClasses()"
                  >
                    <span class="mr-2">✨</span>
                    {{ getCurrentSlideTitle() }}
                  </div>
                </div>
                
                <!-- Título principal -->
                <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                  <span class="block mb-2">Tu salud podológica</span>
                  <span class="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    en buenas manos
                  </span>
                </h1>
                
                <!-- Descripción -->
                <div class="space-y-4 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  <p class="text-white/95 bg-black/30 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20">
                    En la ciudad de <strong class="text-blue-300">Puerto Montt</strong>, <strong class="text-purple-300">Priscila Badilla</strong> ofrece servicios especializados en podología clínica y preventiva con técnicas avanzadas y atención personalizada.
                  </p>
                  <p 
                    class="text-white/90 bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-white/20 transition-all duration-500"
                    :key="currentSlide"
                  >
                    {{ getCurrentSlideDescription() }}
                  </p>
                </div>

                <!-- Botones de acción -->
                <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                  <a
                    href="#contacto"
                    class="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
                  >
                    Agenda tu Consulta
                    <svg class="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </a>
                  
                  <a
                    href="#servicios"
                    class="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-2xl hover:bg-white/30 hover:border-white/40 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
                  >
                    Ver Servicios
                  </a>
                </div>

                <!-- Estadísticas -->
                <div class="flex flex-wrap gap-3 sm:gap-4 pt-4 justify-center lg:justify-start">
                  <div class="text-center bg-white/20 backdrop-blur-sm border border-white/20 rounded-2xl p-3 sm:p-4 min-w-[80px] sm:min-w-[90px]">
                    <div class="text-xl sm:text-2xl font-bold text-blue-300">98%</div>
                    <div class="text-xs text-white/80">Satisfacción</div>
                  </div>
                  <div class="text-center bg-white/20 backdrop-blur-sm border border-white/20 rounded-2xl p-3 sm:p-4 min-w-[80px] sm:min-w-[90px]">
                    <div class="text-xl sm:text-2xl font-bold text-purple-300">200+</div>
                    <div class="text-xs text-white/80">Pacientes</div>
                  </div>
                  <div class="text-center bg-white/20 backdrop-blur-sm border border-white/20 rounded-2xl p-3 sm:p-4 min-w-[80px] sm:min-w-[90px]">
                    <div class="text-xl sm:text-2xl font-bold text-pink-300">24/7</div>
                    <div class="text-xs text-white/80">WhatsApp</div>
                  </div>
                </div>
              </div>

              <!-- Espacio para contenido adicional (responsive) -->
              <div class="hidden lg:block">
                <div class="relative">
                  <!-- Decorative elements -->
                  <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl backdrop-blur-sm border border-white/20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Controles del carrusel -->
    <div 
      class="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-30 transition-opacity duration-500"
      :class="isInitialLoad ? 'opacity-0' : 'opacity-100'"
    >
      <div class="flex items-center space-x-2 sm:space-x-4 bg-black/30 backdrop-blur-md rounded-2xl p-2 sm:p-3 border border-white/20">
        <!-- Botón anterior -->
        <button 
          @click="prevSlide"
          class="p-1.5 sm:p-2 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-all duration-300"
          aria-label="Slide anterior"
        >
          <svg class="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>

        <!-- Indicadores -->
        <div class="flex space-x-1.5 sm:space-x-2">
          <button 
            v-for="(slide, index) in slides"
            :key="index"
            @click="goToSlide(index)" 
            class="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300"
            :class="{
              'bg-white scale-125': currentSlide === index,
              'bg-white/50 hover:bg-white/70': currentSlide !== index
            }"
            :aria-label="`Slide ${index + 1}`"
          ></button>
        </div>

        <!-- Botón siguiente -->
        <button 
          @click="nextSlide"
          class="p-1.5 sm:p-2 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-all duration-300"
          aria-label="Slide siguiente"
        >
          <svg class="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>

        <!-- Contador -->
        <div class="ml-2 px-2 py-1 bg-black/20 rounded text-xs font-medium text-white hidden sm:block">
          {{ currentSlide + 1 }}/{{ slides.length }}
        </div>
      </div>
    </div>

    <!-- Barra de progreso (oculta durante carga inicial y al hacer scroll) -->
    <div 
      v-if="!isInitialLoad"
      class="fixed top-16 sm:top-20 left-0 w-full h-0.5 sm:h-1 bg-black/20 z-40 transition-all duration-500"
      :class="scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'"
    >
      <div 
        class="h-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transition-all duration-300"
        :style="{ width: `${((currentSlide + 1) / slides.length) * 100}%` }"
      ></div>
    </div>

    <!-- Indicador de carga mejorado -->
    <div 
      v-if="isInitialLoad"
      class="absolute top-20 sm:top-24 right-4 z-20 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-xs sm:text-sm"
    >
      <div class="flex items-center space-x-2">
        <div class="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        <span>Preparando contenido...</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Glassmorphism */
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.backdrop-blur-md {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

/* Responsive text sizing */
@media (max-width: 640px) {
  .text-3xl {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
}

@media (max-width: 480px) {
  .text-3xl {
    font-size: 1.5rem;
    line-height: 2rem;
  }
}

/* Mejoras para prevenir FOUC */
.border-3 {
  border-width: 3px;
}

/* Loading state específico */
.loading-state {
  background: linear-gradient(135deg, #1f2937, #374151, #1f2937);
  background-size: 400% 400%;
  animation: loading-gradient 3s ease infinite;
}

@keyframes loading-gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Ensure proper z-index stacking */
.z-10 {
  z-index: 10;
}

.z-20 {
  z-index: 20;
}

.z-30 {
  z-index: 30;
}

.z-40 {
  z-index: 40;
}

/* Prevent overflow on mobile */
@media (max-width: 768px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>