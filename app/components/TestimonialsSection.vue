<script setup lang="ts">
/* Datos de testimonios (puedes cambiarlos por los reales) */
const testimonials = [
  {
    text: 'El trato fue muy profesional y amable, sentí un alivio inmediato en mis pies.',
    name: 'María González',
    role: 'Paciente',
    image: 'https://via.placeholder.com/100x100?text=MG'
  },
  {
    text: 'Me encantó la atención, explican todo con paciencia y dedicación.',
    name: 'Jorge Ramírez',
    role: 'Paciente',
    image: 'https://via.placeholder.com/100x100?text=JR'
  },
  {
    text: 'El mejor lugar en Puerto Montt para el cuidado de los pies, 100% recomendado.',
    name: 'Carolina Pérez',
    role: 'Paciente',
    image: 'https://via.placeholder.com/100x100?text=CP'
  },
  {
    text: 'Excelente ambiente y profesionales muy preparados, me siento en confianza.',
    name: 'Luis Fernández',
    role: 'Paciente',
    image: 'https://via.placeholder.com/100x100?text=LF'
  },
  {
    text: 'Gracias al tratamiento ya no sufro de uñas encarnadas, mejoró mi calidad de vida.',
    name: 'Patricia Soto',
    role: 'Paciente',
    image: 'https://via.placeholder.com/100x100?text=PS'
  },
  {
    text: 'Muy buena atención, se preocupan de la prevención además del tratamiento.',
    name: 'Eduardo Vargas',
    role: 'Paciente',
    image: 'https://via.placeholder.com/100x100?text=EV'
  }
]
</script>

<template>
  <section id="testimonios" class="py-20 bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-6">
      <!-- Título -->
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Testimonios de Nuestros Pacientes
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          La satisfacción y bienestar de nuestros pacientes es nuestra mejor carta de presentación.
        </p>
      </div>

      <!-- Grid de testimonios -->
      <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(testimonial, i) in testimonials"
          :key="i"
          class="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl p-8 transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col"
        >
          <!-- Texto -->
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed flex-grow mb-6">
            “{{ testimonial.text }}”
          </p>

          <!-- Perfil -->
          <div class="flex items-center mt-auto">
            <img
              :src="testimonial.image"
              :alt="testimonial.name"
              class="w-12 h-12 rounded-full object-cover border-2 border-purple-500"
            />
            <div class="ml-4">
              <p class="font-semibold text-gray-900 dark:text-white">{{ testimonial.name }}</p>
              <p class="text-sm text-gray-500 dark:text-gray-400">{{ testimonial.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>