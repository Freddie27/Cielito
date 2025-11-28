<!-- pages/index.vue - SEO y Responsive Optimizado -->
<script setup lang="ts">
import HeroSection from '~/components/HeroSection.vue'
import ServicesSection from '~/components/ServicesSection.vue'
import AboutSection from '~/components/AboutSection.vue'
import ContactSection from '~/components/ContactSection.vue'

// SEO optimizado completo
useHead({
  title: 'Priscila Badilla - Podóloga Puerto Montt | Cuidado Profesional de Pies',
  titleTemplate: '%s | Podología Especializada Chile',
  meta: [
    // Meta básicos mejorados
    {
      name: 'description',
      content: 'Priscila Badilla, podóloga profesional en Puerto Montt. Tratamientos especializados: callosidades, uñas encarnadas, podología diabética y preventiva. ✅ Consulta gratuita ✅ Atención personalizada ✅ Operativos en terreno'
    },
    {
      name: 'keywords',
      content: 'podóloga Puerto Montt, podología Chile, tratamiento pies, callosidades, uñas encarnadas, podología diabética, pie diabético, helomas, durezas, cuidado pies, podólogo Los Lagos, consulta podológica gratuita'
    },
    {
      name: 'author',
      content: 'Priscila Badilla - Podóloga Profesional'
    },
    {
      name: 'robots',
      content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    },
    {
      name: 'googlebot',
      content: 'index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1'
    },

    // Open Graph mejorado
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:site_name',
      content: 'Priscila Badilla Podología'
    },
    {
      property: 'og:title',
      content: 'Priscila Badilla - Podóloga Profesional Puerto Montt'
    },
    {
      property: 'og:description',
      content: 'Cuidado especializado para la salud de tus pies en Puerto Montt. Podología clínica, preventiva y diabética con atención personalizada. Consulta gratuita disponible.'
    },
    {
      property: 'og:url',
      content: 'https://priscilabadilla-podologia.cl'
    },
    {
      property: 'og:image',
      content: 'https://res.cloudinary.com/dqiayyqfp/image/upload/v1756531813/proceso-de-pedicura-pedicura-de-salon-en-casa-tratamiento-de-cuidado-de-los-pies-y-unas-el-proceso-de-pedicura-profesional-maestro-en-guantes-azules-hace-pedicura_fc4lt3.jpg'
    },
    {
      property: 'og:image:width',
      content: '1200'
    },
    {
      property: 'og:image:height',
      content: '630'
    },
    {
      property: 'og:image:alt',
      content: 'Priscila Badilla realizando tratamiento podológico profesional'
    },
    {
      property: 'og:locale',
      content: 'es_CL'
    },

    // Twitter Card
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'Priscila Badilla - Podóloga Puerto Montt'
    },
    {
      name: 'twitter:description',
      content: 'Servicios profesionales de podología en Puerto Montt. Tratamientos especializados con atención personalizada.'
    },
    {
      name: 'twitter:image',
      content: 'https://res.cloudinary.com/dqiayyqfp/image/upload/v1756531813/proceso-de-pedicura-pedicura-de-salon-en-casa-tratamiento-de-cuidado-de-los-pies-y-unas-el-proceso-de-pedicura-profesional-maestro-en-guantes-azules-hace-pedicura_fc4lt3.jpg'
    },
    {
      name: 'twitter:image:alt',
      content: 'Priscila Badilla - Podóloga profesional en Puerto Montt'
    },

    // Geo localización
    {
      name: 'geo.region',
      content: 'CL-LL'
    },
    {
      name: 'geo.placename',
      content: 'Puerto Montt'
    },
    {
      name: 'geo.position',
      content: '-41.4693;-72.9424'
    },
    {
      name: 'ICBM',
      content: '-41.4693, -72.9424'
    },

    // Móvil y viewport mejorado
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0, user-scalable=yes'
    },
    {
      name: 'format-detection',
      content: 'telephone=yes'
    },
    {
      name: 'mobile-web-app-capable',
      content: 'yes'
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black-translucent'
    },
    {
      name: 'apple-mobile-web-app-title',
      content: 'Priscila Badilla Podología'
    },

    // Theme color
    {
      name: 'theme-color',
      content: '#3b82f6'
    },
    {
      name: 'msapplication-TileColor',
      content: '#3b82f6'
    },

    // Business info estructurado
    {
      name: 'business:contact_data:locality',
      content: 'Puerto Montt'
    },
    {
      name: 'business:contact_data:region',
      content: 'Los Lagos'
    },
    {
      name: 'business:contact_data:country_name',
      content: 'Chile'
    },
    {
      name: 'business:contact_data:phone_number',
      content: '+56935114611'
    }
  ],
  link: [
    // Favicon optimizado
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png'
    },
    {
      rel: 'manifest',
      href: '/manifest.json'
    },

    // Preconnect para performance
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: ''
    },
    {
      rel: 'preconnect',
      href: 'https://res.cloudinary.com'
    },

    // Canonical
    {
      rel: 'canonical',
      href: 'https://priscilabadilla-podologia.cl'
    }
  ],
  script: [
    // JSON-LD Schema mejorado
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'HealthAndBeautyBusiness',
        '@id': 'https://priscilabadilla-podologia.cl/#organization',
        name: 'Priscila Badilla - Podología Puerto Montt',
        alternateName: 'Podología Priscila Badilla',
        description: 'Servicios profesionales de podología en Puerto Montt. Especialista en tratamiento de callosidades, uñas encarnadas, podología preventiva y cuidado del pie diabético.',
        url: 'https://priscilabadilla-podologia.cl',
        telephone: '+56935114611',
        email: 'contacto@priscilabadilla-podologia.cl',
        priceRange: '$$',
        paymentAccepted: 'Efectivo, Transferencia, Tarjetas',
        currenciesAccepted: 'CLP',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Centro de Puerto Montt',
          addressLocality: 'Puerto Montt',
          addressRegion: 'Los Lagos',
          postalCode: '5480000',
          addressCountry: 'CL'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: -41.4693,
          longitude: -72.9424
        },
        openingHours: [
          'Mo-Fr 09:00-14:00',
          'Mo-Fr 16:00-19:00',
          'Sa 09:00-14:00'
        ],
        image: [
          'https://res.cloudinary.com/dqiayyqfp/image/upload/v1756531813/proceso-de-pedicura-pedicura-de-salon-en-casa-tratamiento-de-cuidado-de-los-pies-y-unas-el-proceso-de-pedicura-profesional-maestro-en-guantes-azules-hace-pedicura_fc4lt3.jpg',
          'https://res.cloudinary.com/dqiayyqfp/image/upload/v1756532613/Todo-lo-que-debes-saber-sobre-la-podologia-4_cujdxi.webp'
        ],
        founder: {
          '@type': 'Person',
          name: 'Priscila Badilla',
          jobTitle: 'Podóloga Profesional',
          knowsAbout: ['Podología Clínica', 'Podología Preventiva', 'Cuidado del Pie Diabético', 'Tratamiento de Callosidades'],
          alumniOf: 'Instituto de Podología'
        },
        areaServed: {
          '@type': 'City',
          name: 'Puerto Montt',
          containedInPlace: {
            '@type': 'AdministrativeArea',
            name: 'Los Lagos',
            containedInPlace: {
              '@type': 'Country',
              name: 'Chile'
            }
          }
        },
        makesOffer: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Consulta Podológica',
              description: 'Evaluación completa de la salud de los pies'
            },
            price: '0',
            priceCurrency: 'CLP',
            availability: 'https://schema.org/InStock'
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Podología Clínica',
              description: 'Tratamiento especializado de callosidades, uñas encarnadas y helomas'
            },
            priceCurrency: 'CLP',
            availability: 'https://schema.org/InStock'
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Podología Preventiva',
              description: 'Cuidado especializado para personas con diabetes y problemas circulatorios'
            },
            priceCurrency: 'CLP',
            availability: 'https://schema.org/InStock'
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Operativos en Terreno',
              description: 'Servicios podológicos directamente en el lugar de trabajo o domicilio'
            },
            priceCurrency: 'CLP',
            availability: 'https://schema.org/InStock'
          }
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+56935114611',
          contactType: 'customer service',
          availableLanguage: 'Spanish',
          hoursAvailable: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '09:00',
              closes: '19:00'
            },
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: 'Saturday',
              opens: '09:00',
              closes: '14:00'
            }
          ]
        },
        sameAs: [
          'https://wa.me/56935114611'
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '47',
          bestRating: '5',
          worstRating: '1'
        },
        review: [
          {
            '@type': 'Review',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5',
              bestRating: '5'
            },
            author: {
              '@type': 'Person',
              name: 'María González'
            },
            reviewBody: 'Excelente atención profesional. Priscila es muy cuidadosa y el tratamiento fue efectivo.'
          }
        ]
      })
    },
    // FAQ Schema
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: '¿La consulta es realmente gratuita?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sí, ofrecemos una consulta inicial completamente gratuita donde evaluamos el estado de tus pies y determinamos el tratamiento más adecuado.'
            }
          },
          {
            '@type': 'Question',
            name: '¿Qué servicios de podología ofrece Priscila Badilla?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ofrecemos podología clínica (tratamiento de callosidades, uñas encarnadas), podología preventiva para diabéticos, asesoría integral y operativos podológicos en terreno.'
            }
          },
          {
            '@type': 'Question',
            name: '¿Dónde está ubicada la consulta?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Estamos ubicados en el centro de Puerto Montt, Los Lagos, Chile. También realizamos operativos en terreno para empresas y zonas rurales.'
            }
          },
          {
            '@type': 'Question',
            name: '¿Cómo puedo agendar una cita?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Puedes agendar tu cita llamando al +56 9 3511 4611 o escribiendo a nuestro WhatsApp. Estamos disponibles de lunes a viernes de 9:00 a 19:00 hrs.'
            }
          }
        ]
      })
    }
  ]
})

// Configuración adicional para performance
useSeoMeta({
  ogTitle: 'Priscila Badilla - Podóloga Profesional Puerto Montt',
  ogDescription: 'Cuidado especializado para la salud de tus pies en Puerto Montt. Podología clínica, preventiva y diabética.',
  ogImage: 'https://res.cloudinary.com/dqiayyqfp/image/upload/v1756531813/proceso-de-pedicura-pedicura-de-salon-en-casa-tratamiento-de-cuidado-de-los-pies-y-unas-el-proceso-de-pedicura-profesional-maestro-en-guantes-azules-hace-pedicura_fc4lt3.jpg',
  twitterTitle: 'Priscila Badilla - Podóloga Puerto Montt',
  twitterDescription: 'Servicios profesionales de podología con atención personalizada.',
  twitterImage: 'https://res.cloudinary.com/dqiayyqfp/image/upload/v1756531813/proceso-de-pedicura-pedicura-de-salon-en-casa-tratamiento-de-cuidado-de-los-pies-y-unas-el-proceso-de-pedicura-profesional-maestro-en-guantes-azules-hace-pedicura_fc4lt3.jpg'
})
</script>

<template>
  <!-- Contenedor principal optimizado para responsive -->
  <div class="w-full overflow-x-hidden">
    <!-- Hero Section -->
    <HeroSection />

    <!-- Servicios Section -->
    <ServicesSection />

    <!-- About Section -->
    <AboutSection />

    <!-- Contact Section -->
    <ContactSection />

    <!-- Footer CTA - Totalmente responsive -->
    <section class="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-sky-400 dark:from-indigo-900 dark:to-purple-900 transition-colors duration-300">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <!-- Contenido responsive -->
        <div class="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
            ¿Listo para cuidar tus pies?
          </h2>
          <p class="text-base sm:text-lg lg:text-xl text-blue-100 dark:text-blue-200 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4">
            No esperes más para darle a tus pies el cuidado profesional que merecen. Agenda tu consulta gratuita hoy mismo.
          </p>
          
          <!-- Botones responsive -->
          <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-4">
            <a
              href="#contacto"
              class="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-white text-blue-700 dark:text-blue-600 font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm sm:text-base lg:text-lg"
            >
              <svg class="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              <span class="whitespace-nowrap">Agenda tu Cita Ahora</span>
              <svg class="ml-2 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
            
            <a
              href="tel:+56935114611"
              class="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-2xl hover:bg-white/30 hover:border-white/40 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base lg:text-lg"
            >
              <svg class="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <span class="whitespace-nowrap">Llamar Ahora</span>
            </a>
          </div>

          <!-- Información adicional responsive -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-8 sm:pt-12">
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20">
              <div class="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                <span class="text-emerald-300">✓</span> Gratuita
              </div>
              <div class="text-xs sm:text-sm text-blue-100/80">Consulta sin costo</div>
            </div>
            
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20">
              <div class="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                <span class="text-purple-300">24/7</span>
              </div>
              <div class="text-xs sm:text-sm text-blue-100/80">WhatsApp disponible</div>
            </div>
            
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20">
              <div class="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                <span class="text-pink-300">98%</span>
              </div>
              <div class="text-xs sm:text-sm text-blue-100/80">Satisfacción cliente</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Responsive breakpoints personalizados */
@media (max-width: 374px) {
  .container {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
}

@media (min-width: 375px) and (max-width: 639px) {
  .text-2xl {
    font-size: 1.75rem;
    line-height: 2.25rem;
  }
}

@media (min-width: 640px) and (max-width: 767px) {
  .text-3xl {
    font-size: 2rem;
    line-height: 2.5rem;
  }
}

/* Optimización para pantallas muy grandes */
@media (min-width: 1920px) {
  .container {
    max-width: 1400px;
  }
}

/* Mejorar performance de animaciones */
.transform,
.transition-all,
.hover\:scale-105:hover {
  will-change: transform;
}

/* Glassmorphism responsive */
@supports (backdrop-filter: blur()) {
  .backdrop-blur-sm {
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }
}

/* Fallback para navegadores sin soporte */
@supports not (backdrop-filter: blur()) {
  .backdrop-blur-sm {
    background-color: rgba(255, 255, 255, 0.9);
  }
  
  .dark .backdrop-blur-sm {
    background-color: rgba(0, 0, 0, 0.8);
  }
}

/* Optimización de fuentes responsive */
@media (max-width: 480px) {
  * {
    font-size: calc(100% + 0.5vw);
  }
}

/* Prevenir horizontal scroll */
body {
  overflow-x: hidden;
}

/* Mejor legibilidad en dispositivos pequeños */
@media (max-width: 640px) {
  .text-blue-100\/80 {
    color: rgba(219, 234, 254, 0.95);
  }
}
</style>