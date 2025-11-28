<script setup lang="ts">
// Nada por ahora...
</script>

<template>
  <footer class="bg-gradient-to-br from-blue-50 via-white to-sky-100 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 text-gray-800 dark:text-white transition-colors duration-300">
    <!-- Sección principal del footer -->
    <div class="container mx-auto px-6 pt-16 pb-8">
      <div class="grid lg:grid-cols-4 md:grid-cols-2 gap-8 lg:gap-12">
        
        <!-- Información principal -->
        <div class="lg:col-span-1 space-y-6">
          <div class="flex items-center space-x-4">
            <div class="w-14 h-14 bg-gradient-to-br from-blue-500 to-sky-400 dark:from-blue-600 dark:to-purple-700 rounded-2xl flex items-center justify-center shadow-lg">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            </div>
            <div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Priscila Badilla</h3>
              <p class="text-blue-700 dark:text-blue-300 font-semibold text-sm">Podología Profesional</p>
            </div>
          </div>
          
          <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
            Brindamos cuidado especializado para la salud de tus pies en la comodidad, utilizando materiales de alta calidad y esterilizados para garantizar tu seguridad. Nuestro objetivo es ayudar a mantener la salud y bienestar de tus pies.
          </p>
        </div>

        <!-- Servicios -->
        <div class="space-y-6">
          <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-6 relative">
            Servicios
            <div class="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-sky-400 dark:from-blue-600 dark:to-purple-700 rounded-full"></div>
          </h4>
          
          <ul class="space-y-3">
            <li>
              <a href="#servicios" class="group flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                <svg class="w-4 h-4 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/>
                </svg>
                <span class="group-hover:translate-x-1 transition-transform duration-300">Podología Clínica</span>
              </a>
            </li>
            <li>
              <a href="#servicios" class="group flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                <svg class="w-4 h-4 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/>
                </svg>
                <span class="group-hover:translate-x-1 transition-transform duration-300">Podología Preventiva</span>
              </a>
            </li>
            <li>
              <a href="#servicios" class="group flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                <svg class="w-4 h-4 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/>
                </svg>
                <span class="group-hover:translate-x-1 transition-transform duration-300">Cuidado Diabético</span>
              </a>
            </li>
            <li>
              <a href="#servicios" class="group flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                <svg class="w-4 h-4 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/>
                </svg>
                <span class="group-hover:translate-x-1 transition-transform duration-300">Asesoría Integral</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- Información de contacto -->
        <div class="space-y-6">
          <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-6 relative">
            Contacto
            <div class="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-sky-400 dark:from-blue-600 dark:to-purple-700 rounded-full"></div>
          </h4>
          
          <div class="space-y-4">
            <div class="flex items-start space-x-3">
              <div class="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mt-0.5">
                <svg class="w-5 h-5 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                </svg>
              </div>
              <div>
                <p class="text-gray-900 dark:text-white font-semibold">Ubicación</p>
                <p class="text-gray-600 dark:text-gray-300 text-sm">Puerto Montt, Chile</p>
                <p class="text-gray-500 dark:text-gray-400 text-xs">Centro de la ciudad</p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <div class="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mt-0.5">
                <svg class="w-5 h-5 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <div>
                <p class="text-gray-900 dark:text-white font-semibold">Teléfono</p>
                <a href="tel:+56 9 3511 4611" class="text-blue-700 dark:text-blue-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-sm font-medium">
                  +56 9 3511 4611
                </a>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <div class="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mt-0.5">
                <svg class="w-5 h-5 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div>
                <p class="text-gray-900 dark:text-white font-semibold">Horarios</p>
                <p class="text-gray-600 dark:text-gray-300 text-sm">Lun - Vie: 9:00 - 18:00</p>
                <p class="text-gray-600 dark:text-gray-300 text-sm">Sábados: 9:00 - 14:00</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Call to Action y enlaces rápidos -->
        <div class="space-y-6">
          <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-6 relative">
            Conecta Conmigo
            <div class="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-sky-400 dark:from-blue-600 dark:to-purple-700 rounded-full"></div>
          </h4>

          <!-- Botones de contacto rápido -->
          <div class="space-y-3">
            <a
              href="#contacto"
              class="group w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-sky-400 dark:from-blue-700 dark:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-sky-500 dark:hover:from-blue-800 dark:hover:to-purple-800 transition-all duration-300 transform hover:scale-105"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              Agendar Cita
              <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>

            <div class="grid grid-cols-2 gap-3">
              <a
                href="tel:+56 9 3511 4611"
                class="group flex items-center justify-center px-4 py-3 bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/40 transition-all duration-300"
              >
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span class="text-sm font-medium">Llamar</span>
              </a>

              <a
                href="https://wa.me/56935114611"
                target="_blank"
                class="group flex items-center justify-center px-4 py-3 bg-green-700 text-white rounded-xl hover:bg-green-600 transition-all duration-300"
              >
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.109"/>
                </svg>
                <span class="text-sm font-medium">WhatsApp</span>
              </a>
            </div>
          </div>

          <!-- Redes sociales (si las tienes) -->
          <div>
            <h5 class="text-gray-900 dark:text-white font-semibold mb-3 text-sm">Sígueme en:</h5>
            <div class="flex space-x-3">
              <a href="#" class="w-10 h-10 bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 transform hover:scale-110">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 transform hover:scale-110">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 transform hover:scale-110">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.333 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.74-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Separador -->
      <div class="border-t border-blue-200 dark:border-blue-900 my-8"></div>

      <!-- Footer bottom -->
      <div class="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
        <!-- Copyright -->
        <div class="text-center lg:text-left">
          <p class="text-gray-500 dark:text-gray-400 text-sm">
            &copy; {{ new Date().getFullYear() }} <span class="text-blue-700 dark:text-blue-300 font-semibold">Priscila Badilla</span> - Podología Puerto Montt
          </p>
          <p class="text-gray-400 dark:text-gray-500 text-xs mt-1">
            Todos los derechos reservados • Copyright © 2025
          </p>
        </div>

        <!-- Links legales -->
        <div class="flex flex-wrap justify-center lg:justify-end items-center space-x-6 text-sm">
          <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Términos de Servicio
          </a>
          <span class="text-gray-400 dark:text-gray-600">•</span>
          <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Política de Privacidad
          </a>
          <span class="text-gray-400 dark:text-gray-600">•</span>
          <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Aviso Legal
          </a>
        </div>

        <!-- Desarrollado por -->
        <div class="text-center lg:text-right">
          <div class="flex justify-center lg:justify-end items-center space-x-2 mt-1">
            <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span class="text-xs text-gray-400 dark:text-gray-500">Sitio web optimizado y seguro</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Barra inferior con gradiente -->
    <div class="bg-gradient-to-r from-blue-600 to-sky-400 dark:from-blue-700 dark:to-purple-700 h-1"></div>
  </footer>
</template>

<style scoped>
/* Custom animations */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-4px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* Hover effects for social links */
.social-link:hover {
  transform: translateY(-2px);
}

/* Gradient text effect */
.gradient-text {
  background: linear-gradient(45deg, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Custom focus styles */
input:focus {
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* Newsletter box glow effect */
.newsletter-glow {
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.1);
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>