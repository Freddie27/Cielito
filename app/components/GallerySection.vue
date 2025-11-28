<script setup lang="ts">
/* Galería de imágenes: puedes reemplazar los enlaces por los de tu proyecto */
const gallery = [
  {
    src: 'https://via.placeholder.com/600x400?text=Consulta+1',
    alt: 'Imagen de atención podológica',
    caption: 'Atención podológica personalizada en consulta'
  },
  {
    src: 'https://via.placeholder.com/600x400?text=Tratamiento+2',
    alt: 'Tratamiento de uñas encarnadas',
    caption: 'Tratamiento de uñas encarnadas con técnicas modernas'
  },
  {
    src: 'https://via.placeholder.com/600x400?text=Prevencion+3',
    alt: 'Prevención de problemas podológicos',
    caption: 'Prevención y cuidado de los pies'
  },
  {
    src: 'https://via.placeholder.com/600x400?text=Tecnologia+4',
    alt: 'Instrumentos esterilizados',
    caption: 'Instrumental podológico esterilizado y seguro'
  },
  {
    src: 'https://via.placeholder.com/600x400?text=Consulta+5',
    alt: 'Atención profesional en Puerto Montt',
    caption: 'Atención en Puerto Montt con equipamiento moderno'
  },
  {
    src: 'https://via.placeholder.com/600x400?text=Resultados+6',
    alt: 'Resultados podológicos',
    caption: 'Resultados efectivos en la salud de tus pies'
  }
]
</script>

<template>
  <section id="galeria" class="py-20 bg-white dark:bg-gray-950">
    <div class="container mx-auto px-6">
      <!-- Título -->
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Galería de Tratamientos
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Conoce algunos resultados y el ambiente de nuestra consulta podológica.
        </p>
      </div>

      <!-- Grid de imágenes -->
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(item, i) in gallery"
          :key="i"
          class="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500"
        >
          <!-- Imagen -->
          <img
            :src="item.src"
            :alt="item.alt"
            class="w-full h-72 object-cover transform group-hover:scale-105 transition duration-500"
          />

          <!-- Overlay con descripción -->
          <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-center p-4">
            <p class="text-white text-lg font-semibold">
              {{ item.caption }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>