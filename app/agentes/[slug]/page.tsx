"use client"

import { motion } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"
import Link from "next/link"
import { ArrowLeft, Check, MessageCircle, Users, Package, Brain, Zap, TrendingUp } from "lucide-react"

const agentsData = [
  {
    slug: "agente-atencion",
    title: "Agente de Atención al Cliente",
    subtitle: "Soporte 24/7 Multicanal",
    description: "Un agente IA que atiende a tus clientes 24/7 en WhatsApp, Email e Instagram DM. Responde consultas sobre productos, tallas, envíos y más de forma instantánea.",
    icon: MessageCircle,
    color: "text-blue-400",
    bgColor: "from-blue-500/20 to-cyan-500/20",
    features: [
      "Responde consultas instantáneamente",
      "Integración con múltiples canales",
      "Entiende contexto y urgencia",
      "Escala consultas complejas a humanos",
      "Disponible 24/7 sin descansos",
      "Aprendizaje continuo",
    ],
    capabilities: [
      "Responder preguntas sobre tallas y disponibilidad",
      "Seguimiento de pedidos automático",
      "Gestión de devoluciones",
      "Recomendaciones de productos",
      "Resolución de problemas",
      "Información de políticas",
    ],
    benefits: [
      { metric: "+47%", desc: "Aumento en conversión" },
      { metric: "-62%", desc: "Reducción de tickets manuales" },
      { metric: "2min", desc: "Tiempo de respuesta promedio" },
      { metric: "92%", desc: "Satisfacción del cliente" },
    ],
    implementation: [
      "Semana 1: Análisis de conversaciones históricas",
      "Semana 2-3: Entrenamiento del agente",
      "Semana 4: Integración con canales",
      "Semana 5: Testing y optimización",
      "Semana 6: Go-live",
    ],
    bestFor: ["E-commerce", "Alto volumen de consultas", "Múltiples canales de comunicación"],
  },
  {
    slug: "agente-prospector",
    title: "Agente Prospector",
    subtitle: "Lead Generation Automático",
    description: "Identifica y califica leads automáticamente. Envía secuencias personalizadas y convierte prospectos en clientes.",
    icon: Users,
    color: "text-purple-400",
    bgColor: "from-purple-500/20 to-pink-500/20",
    features: [
      "Identifica leads potenciales",
      "Calificación automática inteligente",
      "Envío de secuencias personalizadas",
      "Lead scoring en tiempo real",
      "Follow-up automático",
      "Análisis de comportamiento",
    ],
    capabilities: [
      "Análisis de perfiles de clientes",
      "Priorización de leads calientes",
      "Mensajes personalizados",
      "Ciclos de follow-up optimizados",
      "Integración con CRM",
      "Reportes de performance",
    ],
    benefits: [
      { metric: "+156%", desc: "Aumento en leads calificados" },
      { metric: "< 2min", desc: "Tiempo de respuesta" },
      { metric: "+34%", desc: "Aumento en tasa de cierre" },
      { metric: "-20hrs", desc: "Tiempo semanal ahorrado" },
    ],
    implementation: [
      "Semana 1: Definir criterios de lead ideal",
      "Semana 2-3: Crear secuencias y scripts",
      "Semana 4: Integración con plataformas",
      "Semana 5: Testing y ajustes",
      "Semana 6: Monitoreo y optimización",
    ],
    bestFor: ["B2B SaaS", "Altos volúmenes de inquiries", "Sales teams pequeños"],
  },
  {
    slug: "agente-inventario",
    title: "Agente de Inventario",
    subtitle: "Gestión Automática de Stock",
    description: "Predice demanda, gestiona reposiciones automáticas y previene stockouts usando machine learning avanzado.",
    icon: Package,
    color: "text-green-400",
    bgColor: "from-green-500/20 to-emerald-500/20",
    features: [
      "Predicción de demanda con ML",
      "Reposición automática inteligente",
      "Prevención de stockouts",
      "Optimización de rotación",
      "Análisis de tendencias",
      "Alertas en tiempo real",
    ],
    capabilities: [
      "Análisis histórico de ventas",
      "Predicción de demanda futura",
      "Sugerencias de reorden automáticas",
      "Gestión multi-almacén",
      "Análisis de estacionalidad",
      "Optimización de espacio",
    ],
    benefits: [
      { metric: "-38%", desc: "Reducción de stockouts" },
      { metric: "-$18K", desc: "Ahorros mensuales" },
      { metric: "+23%", desc: "Aumento en retención" },
      { metric: "91%", desc: "Precisión de predicción" },
    ],
    implementation: [
      "Semana 1-2: Análisis de datos históricos",
      "Semana 3-4: Entrenamiento del modelo",
      "Semana 5-6: Integración con sistemas",
      "Semana 7: Testing y validación",
      "Semana 8+: Optimización continua",
    ],
    bestFor: ["Retail con múltiples SKUs", "Modelos de suscripción", "Producto perecedero"],
  },
  {
    slug: "agente-contenido",
    title: "Agente de Contenido",
    subtitle: "Social Media Marketing Automático",
    description: "Genera, redacta y programa contenido automático para tus redes sociales. Optimiza engagement y crecimiento orgánico.",
    icon: Brain,
    color: "text-orange-400",
    bgColor: "from-orange-500/20 to-red-500/20",
    features: [
      "Generación de ideas de contenido",
      "Redacción de captions atractivos",
      "Scheduling automático",
      "Análisis de engagement",
      "Optimización de hashtags",
      "Respuestas automáticas a comentarios",
    ],
    capabilities: [
      "Brainstorm de temas relevantes",
      "Redacción en tono de marca",
      "Programación multi-plataforma",
      "Análisis de mejores horarios",
      "A/B testing de contenido",
      "Reportes de performance",
    ],
    benefits: [
      { metric: "+78%", desc: "Aumento en engagement" },
      { metric: "4hrs/día", desc: "Tiempo ahorrado diariamente" },
      { metric: "+52%", desc: "Aumento en tráfico orgánico" },
      { metric: "15K", desc: "Nuevos followers en 3 meses" },
    ],
    implementation: [
      "Semana 1: Análisis del tono y estilo",
      "Semana 2-3: Entrenamiento del modelo",
      "Semana 4: Integración con herramientas",
      "Semana 5: Testing de contenido",
      "Semana 6+: Optimización continua",
    ],
    bestFor: ["E-commerce de moda", "Marcas con comunidad activa", "Startups sin team de marketing"],
  },
  {
    slug: "agente-recomendador",
    title: "Agente Recomendador",
    subtitle: "Personalización Inteligente",
    description: "Analiza preferencias y comportamiento del usuario para recomendar productos relevantes en tiempo real.",
    icon: Zap,
    color: "text-indigo-400",
    bgColor: "from-indigo-500/20 to-purple-500/20",
    features: [
      "Análisis de preferencias usuario",
      "Recomendaciones en tiempo real",
      "Cross-selling inteligente",
      "Personalización dinámica",
      "Aprendizaje del comportamiento",
      "Optimización de conversión",
    ],
    capabilities: [
      "Perfilamiento de clientes",
      "Análisis de historial de compras",
      "Recomendaciones contextuales",
      "Bundles inteligentes",
      "Upselling automático",
      "Prevención de cart abandonment",
    ],
    benefits: [
      { metric: "+41%", desc: "Aumento en ticket promedio" },
      { metric: "+67%", desc: "Éxito en cross-selling" },
      { metric: "92%", desc: "Satisfacción del cliente" },
      { metric: "-25%", desc: "Reducción de cart abandons" },
    ],
    implementation: [
      "Semana 1-2: Análisis de patrones de compra",
      "Semana 3-4: Desarrollo del motor",
      "Semana 5: Integración con e-commerce",
      "Semana 6: A/B testing",
      "Semana 7+: Optimización continua",
    ],
    bestFor: ["E-commerce grandes", "Catálogos extensos", "Alta repetición de compra"],
  },
  {
    slug: "agente-catalogacion",
    title: "Agente de Catalogación",
    subtitle: "Procesamiento Automático de Imágenes",
    description: "Cataloga productos automáticamente usando visión por computadora. Extrae descripciones, precios y características.",
    icon: TrendingUp,
    color: "text-teal-400",
    bgColor: "from-teal-500/20 to-cyan-500/20",
    features: [
      "Visión por computadora avanzada",
      "Extracción de datos automática",
      "Pricing dinámico",
      "Publicación multi-plataforma",
      "Análisis de calidad de imagen",
      "Validación automática",
    ],
    capabilities: [
      "Reconocimiento de prendas",
      "Extracción de características",
      "Estimación de precio automática",
      "Generación de descripción",
      "Categorización inteligente",
      "Sincronización multi-canal",
    ],
    benefits: [
      { metric: "-70%", desc: "Reducción de tiempo" },
      { metric: "+28%", desc: "Aumento en margen" },
      { metric: "5x", desc: "Velocidad de rotación" },
      { metric: "1500+", desc: "Prendas/mes catalogadas" },
    ],
    implementation: [
      "Semana 1: Integración de cámaras",
      "Semana 2-3: Entrenamiento del modelo",
      "Semana 4: Implementación de pricing",
      "Semana 5: Testing en vivo",
      "Semana 6+: Publicación automática",
    ],
    bestFor: ["Vintage y segunda mano", "Alta rotación de SKUs", "Resellers"],
  },
]

export default function AgentDetailPage({ params }: { params: { slug: string } }) {
  const agentData = agentsData.find((a) => a.slug === params.slug)

  if (!agentData) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Agente no encontrado</h1>
          <Link href="/agentes" className="text-blue-400 hover:text-blue-300">
            Volver a agentes
          </Link>
        </div>
      </div>
    )
  }

  const IconComponent = agentData.icon

  return (
    <div className="min-h-screen py-20 px-6">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-600/20 rounded-full blur-[120px] animate-blob mix-blend-screen" />
        <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-purple-600/20 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-screen" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Header */}
        <Link href="/agentes" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Volver a agentes
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-start gap-4 mb-8">
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${agentData.bgColor} flex items-center justify-center`}>
              <IconComponent className={`w-8 h-8 ${agentData.color}`} />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">{agentData.title}</h1>
              <p className="text-xl text-white/60">{agentData.subtitle}</p>
            </div>
          </div>

          {/* Main Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {agentData.benefits.map((benefit, index) => (
              <GlassCard key={index} className="p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">{benefit.metric}</div>
                <div className="text-sm text-white/60">{benefit.desc}</div>
              </GlassCard>
            ))}
          </div>

          {/* Description */}
          <GlassCard className="p-8 md:p-12 mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">¿Qué es?</h2>
            <p className="text-white/70 text-lg">{agentData.description}</p>
          </GlassCard>

          {/* Features */}
          <GlassCard className="p-8 md:p-12 mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Características Principales</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {agentData.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-white/70">{feature}</span>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Capabilities */}
          <GlassCard className="p-8 md:p-12 mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Lo que puede hacer</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {agentData.capabilities.map((capability, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0 mt-2" />
                  <span className="text-white/70 text-sm">{capability}</span>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Timeline */}
          <GlassCard className="p-8 md:p-12 mb-12">
            <h3 className="text-2xl font-bold text-white mb-8">Timeline de Implementación</h3>
            <div className="space-y-4">
              {agentData.implementation.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 font-bold text-white text-sm">
                    {index + 1}
                  </div>
                  <p className="text-white/70 pt-1">{step}</p>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Best For */}
          <GlassCard className="p-8 md:p-12 mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Ideal para...</h3>
            <div className="flex flex-wrap gap-3">
              {agentData.bestFor.map((item, index) => (
                <span key={index} className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/80">
                  {item}
                </span>
              ))}
            </div>
          </GlassCard>

          {/* CTA */}
          <div className="text-center">
            <p className="text-white/60 text-lg mb-6">¿Te gustaría implementar este agente en tu negocio?</p>
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
