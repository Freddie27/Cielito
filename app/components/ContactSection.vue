<!-- Contacto Section -->
<template>
    <section id="contacto" class="py-20 bg-gradient-to-br from-blue-100 via-blue-50 to-sky-200 dark:from-indigo-900 dark:via-blue-900 dark:to-purple-900 transition-colors duration-500">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Agenda tu Consulta
          </h2>
          <p class="text-xl text-blue-900 dark:text-blue-100 max-w-3xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos para agendar tu cita o resolver cualquier consulta sobre nuestros servicios.
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <!-- Información de contacto -->
          <div class="lg:col-span-1 space-y-8">
            <div class="bg-gradient-to-br from-blue-200 to-sky-200 dark:from-blue-800 dark:to-purple-800 rounded-3xl p-8 space-y-6 shadow-xl transition-colors duration-500">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Información de Contacto</h3>
              
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0 w-12 h-12 bg-blue-500 dark:bg-blue-600 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-gray-900 dark:text-white">Teléfono</h4>
                  <p class="text-blue-900 dark:text-blue-100">+56 9 3511 4611</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0 w-12 h-12 bg-purple-500 dark:bg-purple-600 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-gray-900 dark:text-white">Ubicación</h4>
                  <p class="text-blue-900 dark:text-blue-100">Puerto Montt, Chile</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0 w-12 h-12 bg-indigo-500 dark:bg-indigo-600 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-gray-900 dark:text-white">Horarios</h4>
                  <p class="text-blue-900 dark:text-blue-100">Lun - Vie Mañana: 9:00 - 14:00</p>
                  <p class="text-blue-900 dark:text-blue-100">Lun - Vie  Tarde: 16:00 - 19:00</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Botones de contacto -->
          <div class="lg:col-span-2 space-y-6">
            <div class="grid sm:grid-cols-2 gap-6">
              <a
                href="tel:+56912345678"
                class="group bg-gradient-to-r from-blue-400 to-sky-400 dark:from-blue-700 dark:to-purple-700 text-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0 w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-semibold">Llamar Ahora</h4>
                    <p class="text-blue-900 dark:text-blue-100">Respuesta inmediata</p>
                  </div>
                  <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </div>
              </a>

              <a
                href="https://wa.me/56912345678"
                target="_blank"
                class="group bg-gradient-to-r from-green-400 to-emerald-400 dark:from-green-600 dark:to-emerald-600 text-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0 w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.109"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-semibold">WhatsApp</h4>
                    <p class="text-green-900 dark:text-green-100">Chat disponible 24/7</p>
                  </div>
                  <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </div>
              </a>
            </div>

            <!-- Formulario de contacto -->
            <div class="bg-gradient-to-br from-blue-200 to-sky-200 dark:from-blue-800 dark:to-purple-800 rounded-3xl p-8 shadow-xl transition-colors duration-500">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Envía un Mensaje</h3>
              <form class="space-y-6">
                <div class="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-blue-900 dark:text-blue-100 mb-2">Nombre</label>
                    <input type="text" class="w-full px-4 py-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl border border-blue-300 dark:border-blue-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors" placeholder="Tu nombre">
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-blue-900 dark:text-blue-100 mb-2">Teléfono</label>
                    <input type="tel" class="w-full px-4 py-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl border border-blue-300 dark:border-blue-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors" placeholder="+56 9 1234 5678">
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-medium text-blue-900 dark:text-blue-100 mb-2">Email</label>
                  <input type="email" class="w-full px-4 py-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl border border-blue-300 dark:border-blue-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors" placeholder="tu@email.com">
                </div>
                <div>
                  <label class="block text-sm font-medium text-blue-900 dark:text-blue-100 mb-2">Mensaje</label>
                  <textarea rows="4" class="w-full px-4 py-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl border border-blue-300 dark:border-blue-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors" placeholder="Cuéntanos sobre tu consulta..."></textarea>
                </div>
                <button type="submit" class="w-full bg-gradient-to-r from-blue-400 to-sky-400 dark:from-blue-700 dark:to-purple-700 text-white py-3 rounded-xl font-semibold hover:from-blue-500 hover:to-sky-500 dark:hover:from-blue-800 dark:hover:to-purple-800 transition-all duration-300 transform hover:scale-[1.02]">
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>