<template>
  <div
    class="min-h-screen w-full bg-gradient-to-b from-[#0a0f24] via-[#1d0640] to-[#350421] text-white overflow-x-hidden">

    <!-- Encabezado romántico -->
    <section class="py-20 text-center space-y-4">
      <h1 class="text-4xl sm:text-5xl font-bold tracking-wide drop-shadow-lg">
        Nuestro pequeño universo❤️
      </h1>
      <p class="text-slate-300/80 text-lg max-w-xl mx-auto font-light">
        Cada instante contigo es maravilloso y espero podamos tener muchos más.
      </p>
    </section>

    <!-- Collage Galáctico -->
    <section class="max-w-5xl mx-auto px-6 pb-24">
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">

        <!-- Foto 1 -->
        <div
          class="group relative overflow-hidden rounded-2xl shadow-xl bg-white/5 backdrop-blur-sm border border-white/10 cursor-pointer"
          @click="openImage('https://res.cloudinary.com/dqiayyqfp/image/upload/v1764374395/1_cizgeb.jpg')">
          <img src="https://res.cloudinary.com/dqiayyqfp/image/upload/v1764374395/1_cizgeb.jpg"
            class="h-40 sm:h-52 w-full object-cover transition duration-300 group-hover:scale-110">

          <div
            class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-sm tracking-wide font-light">
            Momento 1
          </div>
        </div>

        <!-- Foto 2 -->
        <div
          class="group relative overflow-hidden rounded-2xl shadow-xl bg-white/5 backdrop-blur-sm border border-white/10 cursor-pointer"
          @click="openImage('https://res.cloudinary.com/dqiayyqfp/image/upload/v1764374404/2_lzk742.jpg')">
          <img src="https://res.cloudinary.com/dqiayyqfp/image/upload/v1764374404/2_lzk742.jpg"
            class="h-40 sm:h-52 w-full object-cover transition duration-300 group-hover:scale-110">

          <div
            class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-sm tracking-wide font-light">
            Momento 2
          </div>
        </div>

        <!-- Foto 3 -->
        <div
          class="group relative overflow-hidden rounded-2xl shadow-xl bg-white/5 backdrop-blur-sm border border-white/10 cursor-pointer"
          @click="openImage('https://res.cloudinary.com/dqiayyqfp/image/upload/v1764374404/3_vnok33.jpg')">
          <img src="https://res.cloudinary.com/dqiayyqfp/image/upload/v1764374404/3_vnok33.jpg"
            class="h-40 sm:h-52 w-full object-cover transition duration-300 group-hover:scale-110">

          <div
            class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-sm tracking-wide font-light">
            Momento 3
          </div>
        </div>

        <!-- Foto 4 -->
        <div
          class="group relative overflow-hidden rounded-2xl shadow-xl bg-white/5 backdrop-blur-sm border border-white/10 cursor-pointer"
          @click="openImage('https://res.cloudinary.com/dqiayyqfp/image/upload/v1764374405/4_vbfyig.jpg')">
          <img src="https://res.cloudinary.com/dqiayyqfp/image/upload/v1764374405/4_vbfyig.jpg"
            class="h-40 sm:h-52 w-full object-cover transition duration-300 group-hover:scale-110">

          <div
            class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-sm tracking-wide font-light">
            Momento 4
          </div>
        </div>

        <!-- Foto 5 -->
        <div
          class="group relative overflow-hidden rounded-2xl shadow-xl bg-white/5 backdrop-blur-sm border border-white/10 cursor-pointer"
          @click="openImage('https://res.cloudinary.com/dqiayyqfp/image/upload/v1764374486/5_hsw9ze.jpg')">
          <img src="https://res.cloudinary.com/dqiayyqfp/image/upload/v1764374486/5_hsw9ze.jpg"
            class="h-40 sm:h-52 w-full object-cover transition duration-300 group-hover:scale-110">

          <div
            class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-sm tracking-wide font-light">
            Momento 5
          </div>
        </div>

        <!-- Foto 6 -->
        <div
          class="group relative overflow-hidden rounded-2xl shadow-xl bg-white/5 backdrop-blur-sm border border-white/10 cursor-pointer"
          @click="openImage('https://res.cloudinary.com/dqiayyqfp/image/upload/v1764374405/6_yjgyxt.jpg')">
          <img src="https://res.cloudinary.com/dqiayyqfp/image/upload/v1764374405/6_yjgyxt.jpg"
            class="h-40 sm:h-52 w-full object-cover transition duration-300 group-hover:scale-110">

          <div
            class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-sm tracking-wide font-light">
            Momento 6
          </div>
        </div>

      </div>

      <!-- Modal de imagen ampliada -->
      <div v-if="selectedImage"
        class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[999]"
        @click="selectedImage = null">
        <img :src="selectedImage"
          class="max-w-[90vw] max-h-[80vh] rounded-2xl shadow-2xl scale-100 transition-transform duration-300">
      </div>

    </section>

    <!-- Mensaje final -->
    <section class="py-16 text-center px-6">
      <p class="text-lg text-slate-300/80 max-w-2xl mx-auto leading-relaxed font-light">
        Este es solo el comienzo de todos los recuerdos que construiremos juntos,
        cada foto es una estrella más en nuestro cielo infinito♡
      </p>
    </section>

  </div>
</template>

<script setup>

import { ref } from 'vue'

const selectedImage = ref(null)

const openImage = (url) => {
  selectedImage.value = url
}


</script>

<style scoped>
/* Efecto sutil de resplandor en hover */
.group:hover {
  box-shadow: 0 0 20px rgba(255, 180, 255, 0.25), 0 0 35px rgba(120, 120, 255, 0.15);
  transition: box-shadow 0.3s ease;
}
</style>
