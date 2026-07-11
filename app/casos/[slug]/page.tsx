"use client"

import { motion } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, TrendingUp, Clock, Users, Package } from "lucide-react"

const casesData = [
  {
    slug: "velvet-urban",
    title: "Velvet Urban",
    subtitle: "Streetwear premium",
    description: "Marca de ropa urbana con 12 tiendas físicas y e-commerce que implementó un agente de atención al cliente 24/7",
    challenge: "Con crecimiento exponencial, Velvet Urban recibía 200+ consultas diarias sobre tallas, disponibilidad y seguimiento de pedidos. Su equipo de 4 personas no daba abasto, causando respuestas lentas y pérdida de conversiones.",
    solution: "Implementamos un agente IA multicanal que atiende por WhatsApp, Instagram DM e Email, integrado directamente con su plataforma Shopify.",
    timeline: [
      { month: "Semana 1-2", task: "Análisis de flujo de consultas y mapeo de respuestas" },
      { month: "Semana 3-4", task: "Entrenamiento del agente con bases de datos históricas" },
      { month: "Semana 5-6", task: "Integración y testing en ambiente de staging" },
      { month: "Semana 7", task: "Go-live con monitoreo 24/7" },
    ],
    results: [
      { metric: "+47%", label: "Aumento en conversión" },
      { metric: "-62%", label: "Reducción de tickets manuales" },
      { metric: "2min", label: "Tiempo de respuesta promedio" },
      { metric: "92%", label: "Satisfacción del cliente" },
    ],
    testimonial: {
      text: "El agente IA fue un game-changer para nosotros. Pasamos de tener a 2 personas atendiendo consultas full-time a apenas 30 minutos diarios de revisión. Las conversiones se dispararon y nuestros clientes están más satisfechos que nunca.",
      author: "Mateo Ruiz",
      role: "Founder & CEO, Velvet Urban",
    },
  },
  {
    slug: "luna-textile",
    title: "Luna Textile",
    subtitle: "Moda femenina sustentable",
    description: "E-commerce de moda eco-friendly con drops mensuales que automatizó su gestión de lanzamientos",
    challenge: "Cada drop generaba caos operativo: listas de espera manuales, notificaciones tardías y campaigns desorganizadas. Luna perdía 30% de su potencial de ventas por falta de automatización.",
    solution: "Creamos un sistema automático de lanzamientos que gestiona listas de espera, envía notificaciones inteligentes y coordina campañas en redes sociales.",
    timeline: [
      { month: "Semana 1", task: "Diseño del flujo de drops y automatizaciones" },
      { month: "Semana 2-3", task: "Integración con Shopify y herramientas de marketing" },
      { month: "Semana 4", task: "Configuración de notificaciones y escalamiento" },
      { month: "Semana 5", task: "Testing con drop piloto" },
    ],
    results: [
      { metric: "+89%", label: "Ventas en drops" },
      { metric: "3.2x", label: "ROI en campañas" },
      { metric: "-45%", label: "Tiempo administrativo" },
      { metric: "18K", label: "Clientes en lista de espera" },
    ],
    testimonial: {
      text: "Los drops antes eran stresantes y caóticos. Ahora son precisos, automáticos y generan el doble de ingresos. El agente maneja todo sin que tengamos que intervenir. Es como tener un equipo virtual de 5 personas.",
      author: "Sofia Martinez",
      role: "CMO, Luna Textile",
    },
  },
  {
    slug: "norte-basics",
    title: "Norte Basics",
    subtitle: "Básicos minimalistas",
    description: "Tienda de ropa básica con modelo de suscripción que optimizó su gestión de inventario",
    challenge: "Norte tenía constantemente stockouts en items populares mientras acumulaba exceso de stock en otros. Su gestión manual de reposiciones causaba pérdida de $18K/mes.",
    solution: "Implementamos un sistema IA de predicción de demanda y reposición automática integrado con su inventory management.",
    timeline: [
      { month: "Semana 1-2", task: "Análisis histórico de datos de ventas" },
      { month: "Semana 3-4", task: "Entrenamiento del modelo predictivo" },
      { month: "Semana 5-6", task: "Configuración de reglas de reposición automática" },
      { month: "Semana 7+", task: "Optimización continua basada en datos reales" },
    ],
    results: [
      { metric: "-38%", label: "Reducción de stockouts" },
      { metric: "+23%", label: "Retención de suscriptores" },
      { metric: "-$18K", label: "Ahorros mensuales" },
      { metric: "91%", label: "Precisión de predicción" },
    ],
    testimonial: {
      text: "El sistema IA de predicción es increíblemente preciso. Ahora reordenamos exactamente lo que vamos a vender. Los stockouts casi desaparecieron y la rotación de inventario mejoró 40%. Es como tener un supply chain manager IA.",
      author: "Juan Fernández",
      role: "Operations Manager, Norte Basics",
    },
  },
  {
    slug: "calle-54",
    title: "Calle 54",
    subtitle: "Sneakers y accesorios",
    description: "Reseller de sneakers que automatizó su prospección de leads",
    challenge: "Calle 54 recibía 300+ inquiries mensuales pero solo convertía 12% porque los leads no eran calificados adecuadamente y las respuestas eran lentas.",
    solution: "Implementamos un bot de prospección que identifica leads calientes, califica automáticamente y envía secuencias personalizadas.",
    timeline: [
      { month: "Semana 1", task: "Mapeo de criterios de lead calificado" },
      { month: "Semana 2-3", task: "Desarrollo del scoring y secuencias" },
      { month: "Semana 4", task: "Integración con WhatsApp y CRM" },
      { month: "Semana 5", task: "Go-live y optimización" },
    ],
    results: [
      { metric: "+156%", label: "Leads calificados" },
      { metric: "< 2min", label: "Tiempo de respuesta" },
      { metric: "+34%", label: "Tasa de cierre" },
      { metric: "-20hrs", label: "Tiempo semanal ahorrado" },
    ],
    testimonial: {
      text: "El agente de prospección cambió nuestro negocio completamente. Ahora cada lead se atiende inmediatamente y de forma personalizada. Nuestros conversions subieron 34% en el primer mes. Definitivamente la mejor inversión que hemos hecho.",
      author: "Carlos López",
      role: "Sales Director, Calle 54",
    },
  },
  {
    slug: "hilo-co",
    title: "Hilo & Co",
    subtitle: "Ropa infantil artesanal",
    description: "Marca de ropa para niños hecha a mano que automatizó su content marketing",
    challenge: "Hilo & Co creaba contenido amazing pero consumía 8 horas diarias. No tenía tiempo para escalar redes sociales mientras producía prendas.",
    solution: "Creamos un agente IA que genera ideas de contenido, redacta captions, programa publicaciones y optimiza hashtagsautomáticamente.",
    timeline: [
      { month: "Semana 1", task: "Análisis del tono y estilo de marca" },
      { month: "Semana 2-3", task: "Entrenamiento del modelo de generación de contenido" },
      { month: "Semana 4", task: "Integración con herramientas de scheduling" },
      { month: "Semana 5+", task: "Optimización basada en engagement" },
    ],
    results: [
      { metric: "+78%", label: "Engagement en Instagram" },
      { metric: "4hrs", label: "Tiempo ahorrado diariamente" },
      { metric: "+52%", label: "Tráfico orgánico" },
      { metric: "15K", label: "Nuevos followers en 3 meses" },
    ],
    testimonial: {
      text: "Finalmente puedo enfocarse en lo que amo: diseñar y crear ropa hermosa. El agente maneja todo el content. Estoy más tranquila, mis redes crecen orgánicamente y mis clientes aman el contenido. No sé cómo hacía esto manualmente antes.",
      author: "Laura Morales",
      role: "Founder, Hilo & Co",
    },
  },
  {
    slug: "draft-store",
    title: "Draft Store",
    subtitle: "Ropa deportiva técnica",
    description: "E-commerce de ropa para runners que implementó un sistema de recomendación personalizada",
    challenge: "Draft Store vendía mucho pero el ticket promedio era bajo. Los clientes compraban solo lo que buscaban sin descubrir otros productos. 40% de carrito abandons.",
    solution: "Implementamos un agente recomendador que analiza perfil de usuario y sugiere productos complementarios en tiempo real.",
    timeline: [
      { month: "Semana 1-2", task: "Análisis de patrones de compra y correlaciones" },
      { month: "Semana 3-4", task: "Desarrollo del motor de recomendaciones" },
      { month: "Semana 5", task: "Integración con plataforma e-commerce" },
      { month: "Semana 6+", task: "A/B testing y optimización" },
    ],
    results: [
      { metric: "+41%", label: "Ticket promedio" },
      { metric: "+67%", label: "Cross-selling exitoso" },
      { metric: "92%", label: "Satisfacción del cliente" },
      { metric: "-25%", label: "Reducción de cart abandons" },
    ],
    testimonial: {
      text: "Las recomendaciones del agente son sorprendentemente precisas. Los clientes compran más productos relevantes y están más satisfechos. Nuestro ticket promedio creció 40% en 2 meses sin aumentar CAC. Es magic.",
      author: "Roberto García",
      role: "CEO, Draft Store",
    },
  },
  {
    slug: "ambar-vintage",
    title: "Ámbar Vintage",
    subtitle: "Ropa de segunda mano",
    description: "Tienda de vintage que automatizó su catalogación de prendas",
    challenge: "Ámbar tenía 2000+ prendas únicas pero catalogarlas manualmente era imposible. Gastaba 15 horas semanales en fotos, descripción y pricing. Rotación lenta.",
    solution: "Un agente IA que cataloga automáticamente (foto, descripción, estimación de precio) analizando fotos y patrones históricos.",
    timeline: [
      { month: "Semana 1", task: "Integración de cámara IA con sistema de inventario" },
      { month: "Semana 2-3", task: "Entrenamiento del modelo con prendas históricas" },
      { month: "Semana 4", task: "Implementación de pricing dinámico" },
      { month: "Semana 5+", task: "Publicación multi-plataforma automática" },
    ],
    results: [
      { metric: "-70%", label: "Tiempo de catalogación" },
      { metric: "+28%", label: "Margen por prenda" },
      { metric: "5x", label: "Velocidad de rotación" },
      { metric: "1500+", label: "Prendas catalogadas/mes" },
    ],
    testimonial: {
      text: "El agente IA cataloga en 30 segundos lo que antes tardaba 15 minutos. Ahora puedo listar 40 prendas en el tiempo que antes hacía 5. La precisión es excelente y el pricing es justo. Mi negocio finalmente escala.",
      author: "Mercedes López",
      role: "Owner, Ámbar Vintage",
    },
  },
  {
    slug: "forma-studio",
    title: "Forma Studio",
    subtitle: "Athleisure premium",
    description: "Marca de athleisure que automatizó su programa de embajadores",
    challenge: "Forma tenía una comunidad leal pero no había sistema para monetizar el boca a boca. Perdía 50% de los referidos potenciales.",
    solution: "Creamos un sistema automático de gamificación y referidos que incentiva el UGC y multiplica el word-of-mouth.",
    timeline: [
      { month: "Semana 1-2", task: "Diseño del programa de referidos y rewards" },
      { month: "Semana 3-4", task: "Desarrollo del sistema de gamificación" },
      { month: "Semana 5", task: "Integración con plataforma y CRM" },
      { month: "Semana 6+", task: "Optimización basada en participación" },
    ],
    results: [
      { metric: "+124%", label: "UGC generado" },
      { metric: "+89%", label: "Clientes que refieren" },
      { metric: "-55%", label: "Reducción de CAC" },
      { metric: "40%", label: "Ingresos por referidos" },
    ],
    testimonial: {
      text: "El sistema de referidos es adictivo. Nuestros clientes están incentivados a compartir y traer amigos. En 3 meses, 40% de nuestro revenue viene de referidos. Es el CAC más bajo que hemos tenido.",
      author: "Valentina Sosa",
      role: "CEO, Forma Studio",
    },
  },
]

export default function CaseDetailPage({ params }: { params: { slug: string } }) {
  const caseData = casesData.find((c) => c.slug === params.slug)

  if (!caseData) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Caso no encontrado</h1>
          <Link href="/" className="text-blue-400 hover:text-blue-300">
            Volver al inicio
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20 px-6">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-600/20 rounded-full blur-[120px] animate-blob mix-blend-screen" />
        <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-purple-600/20 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-screen" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Header */}
        <Link href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Volver
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">{caseData.title}</h1>
          <p className="text-xl text-white/60 mb-8">{caseData.subtitle}</p>

          {/* Main Results Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {caseData.results.map((result, index) => (
              <GlassCard key={index} className="p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">{result.metric}</div>
                <div className="text-sm text-white/60">{result.label}</div>
              </GlassCard>
            ))}
          </div>

          {/* Description */}
          <GlassCard className="p-8 md:p-12 mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Sobre el caso</h2>
            <p className="text-white/70 text-lg mb-6">{caseData.description}</p>
          </GlassCard>

          {/* Challenge */}
          <GlassCard className="p-8 md:p-12 mb-12 border-l-4 border-red-500/50">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400">!</span>
              El Desafio
            </h3>
            <p className="text-white/70 text-lg">{caseData.challenge}</p>
          </GlassCard>

          {/* Solution */}
          <GlassCard className="p-8 md:p-12 mb-12 border-l-4 border-green-500/50">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">✓</span>
              La Solucion
            </h3>
            <p className="text-white/70 text-lg">{caseData.solution}</p>
          </GlassCard>

          {/* Timeline */}
          <GlassCard className="p-8 md:p-12 mb-12">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Clock className="w-6 h-6" />
              Timeline de Implementacion
            </h3>
            <div className="space-y-6">
              {caseData.timeline.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-bold text-white">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <p className="font-semibold text-white mb-1">{item.month}</p>
                    <p className="text-white/60">{item.task}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Testimonial */}
          <GlassCard className="p-8 md:p-12 mb-12 bg-gradient-to-r from-white/10 to-white/5 border border-white/20">
            <p className="text-lg md:text-xl text-white mb-6 italic leading-relaxed">{`"${caseData.testimonial.text}"`}</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
                {caseData.testimonial.author.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-white">{caseData.testimonial.author}</p>
                <p className="text-white/60 text-sm">{caseData.testimonial.role}</p>
              </div>
            </div>
          </GlassCard>

          {/* CTA */}
          <div className="text-center">
            <p className="text-white/60 mb-6">¿Quieres resultados similares para tu negocio?</p>
            <Link
              href="/consultoria"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-white/90 transition-colors"
            >
              Solicitar tu diagnostico gratuito
              <ArrowLeft className="w-5 h-5 rotate-180" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
