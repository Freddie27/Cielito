<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isAppReady = ref(false)

onMounted(async () => {
  // EXTENDER EL TIEMPO DEL LOADER (3.5s)
  await new Promise(resolve => setTimeout(resolve, 3500))

  isAppReady.value = true
  document.body.classList.add('vue-ready')
})
</script>

<template>
  <div v-cloak>

    <!-- ROMANTIC CELESTIAL LOADER -->
    <div 
      v-if="!isAppReady"
      class="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0e2a] via-[#1a0440] to-[#360421]"
    >

      <!-- ESTRELLAS CELESTIALES -->
      <div class="absolute inset-0 pointer-events-none">
        <div v-for="n in 40" 
             :key="n"
             class="absolute rounded-full bg-white/40 animate-floating"
             :style="{
                width: Math.random() * 3 + 'px',
                height: Math.random() * 3 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animationDuration: (Math.random() * 6 + 6) + 's',
                animationDelay: (Math.random() * 6) + 's',
             }">
        </div>
      </div>

      <!-- CONTENIDO CENTRAL -->
      <div class="relative z-10 text-center px-8 space-y-10 max-w-[90%]">

        <!-- INFINITO ANIMADO -->
        <div class="relative mx-auto w-40 h-40">
          <svg class="w-full h-full" viewBox="0 0 300 150" fill="none">
            <path 
              d="M30,75 C30,20 120,20 150,75 C180,130 270,130 270,75 C270,20 180,20 150,75 C120,130 30,130 30,75 Z" 
              stroke="url(#loveGradient)" 
              stroke-width="6" 
              fill="none"
              class="animate-draw"
              stroke-linecap="round"
            />
            <defs>
              <linearGradient id="loveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#ff7ae5"/>
                <stop offset="50%" stop-color="#b388ff"/>
                <stop offset="100%" stop-color="#72d4ff"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        <!-- NOMBRES -->
        <h1 class="text-3xl sm:text-5xl font-bold text-white drop-shadow-md tracking-wide leading-tight">
          Constanza Camila <span class="text-pink-300">&</span> Freddy Andrés
        </h1>

        <!-- FRASES CELESTIALES ROTATIVAS -->
        <p class="text-lg text-slate-300/80 max-w-md mx-auto font-light animate-fade">
          "Te quiero mucho mi cielito♡" <br />
          "Espero que tengamos muchos más momentos lindos" <br />
          "♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡" <br />
        </p>

        <!-- BARRA DE ENERGÍA CELESTIAL -->
        <div class="mx-auto w-64">
          <div class="h-1.5 bg-white/20 rounded-full overflow-hidden">
            <div class="h-full bg-gradient-to-r from-pink-500 via-purple-400 to-blue-400 animate-energy"></div>
          </div>
          <p class="text-slate-400 text-xs mt-3 tracking-wide">
            Conectando nuestros cielitos...
          </p>
        </div>

      </div>
    </div>

    <!-- CONTENIDO PRINCIPAL -->
    <div :class="{ 'opacity-0': !isAppReady, 'opacity-100': isAppReady }"
         class="transition-opacity duration-[1400ms] ease-out">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>

  </div>
</template>

<style scoped>
/* Partículas flotantes */
@keyframes floating {
  0% { transform: translateY(0px) scale(1); opacity: 0.4; }
  50% { transform: translateY(-20px) scale(1.3); opacity: 0.9; }
  100% { transform: translateY(0px) scale(1); opacity: 0.4; }
}

.animate-floating {
  animation: floating linear infinite;
}

/* Animación del símbolo infinito */
@keyframes draw {
  0% { stroke-dasharray: 0 500; }
  100% { stroke-dasharray: 500 0; }
}

.animate-draw {
  animation: draw 4s ease-out forwards, pulseGlow 4s ease-in-out infinite alternate;
}

/* Resplandor del infinito */
@keyframes pulseGlow {
  0% { filter: drop-shadow(0 0 4px rgba(255,150,255,0.5)); }
  100% { filter: drop-shadow(0 0 12px rgba(255,120,255,0.9)); }
}

/* Barra de energía */
@keyframes energy {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.animate-energy {
  animation: energy 3s linear infinite;
}

/* Fade suave para frases */
@keyframes fade {
  0%, 100% { opacity: 0.2; }
  50% { opacity: 1; }
}

.animate-fade {
  animation: fade 6s ease-in-out infinite;
}
</style>