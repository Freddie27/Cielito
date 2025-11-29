<template>
  <footer class="relative w-full mt-12">
    <div class="pt-10 pb-8 flex flex-col items-center text-center">

      <!-- Corazones -->
      <div class="relative w-full h-28 overflow-visible pointer-events-none">
        <svg
          v-for="n in 20"
          :key="n"
          class="heart-svg"
          :class="`hpos-${n}`"
          width="26"
          height="26"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 21s-7.5-4.35-10-9.75C-1.5 5 2 1 6 3.25 7.75 4.2 9 6 12 9.25 15 6 16.25 4.2 18 3.25 22 1 25.5 5 22 11.25 19.5 16.65 12 21 12 21z"
          />
        </svg>
      </div>

      <!-- Texto -->
      <div>
        <p class="text-xl font-semibold text-gray-900 dark:text-gray-100">
          Dedicado para mi cielito por
          <span class="text-pink-500 dark:text-pink-300">
            Freddy Angulo
          </span>
        </p>
        <p class="text-sm text-gray-600 dark:text-gray-300 mt-1">
          Con todo mi Cariño y Amor
        </p>
      </div>

      <!-- Línea -->
      <div class="w-full max-w-xs h-px bg-gray-400/20 dark:bg-gray-100/10 mt-4"></div>

      <div class="text-xs text-gray-500 dark:text-gray-400 mt-2">
        © {{ new Date().getFullYear() }} — Amor eterno ✨
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Color dinámico (modo claro/oscuro) */
.heart-svg {
  fill: #ff4f92;
  opacity: 0.8;
  position: absolute;
  animation: floatUp 7s infinite ease-in-out;
  filter: drop-shadow(0 4px 8px rgba(255, 90, 160, 0.35));
  transform: translateY(0);
  transition: fill 0.3s ease;
}

.dark .heart-svg {
  fill: #ff7abf;
}

/* Distribución */
.hpos-1  { left: 5%;  top: 60%; animation-delay: .1s; }
.hpos-2  { left: 12%; top: 40%; animation-delay: .4s; }
.hpos-3  { left: 18%; top: 70%; animation-delay: .7s; }
.hpos-4  { left: 26%; top: 55%; animation-delay: .2s; }
.hpos-5  { left: 33%; top: 45%; animation-delay: .5s; }
.hpos-6  { left: 41%; top: 65%; animation-delay: .9s; }
.hpos-7  { left: 49%; top: 50%; animation-delay: .3s; }
.hpos-8  { left: 56%; top: 70%; animation-delay: .6s; }
.hpos-9  { left: 64%; top: 40%; animation-delay: .8s; }
.hpos-10 { left: 72%; top: 55%; animation-delay: .4s; }
.hpos-11 { left: 80%; top: 65%; animation-delay: .7s; }
.hpos-12 { left: 87%; top: 48%; animation-delay: .2s; }
.hpos-13 { left: 94%; top: 60%; animation-delay: .5s; }

/* Animación flotante */
@keyframes floatUp {
  0%   { transform: translateY(0) scale(1); opacity: 0; }
  10%  { opacity: 1; }
  50%  { transform: translateY(-30px) scale(1.12); }
  100% { transform: translateY(-65px) scale(1.2); opacity: 0; }
}
</style>
