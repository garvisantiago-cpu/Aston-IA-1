"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { GlassCard } from "@/components/ui/glass-card"
import { ArrowRight, ArrowLeft, MessageCircle, TrendingUp, Package, Users, Brain, Zap } from "lucide-react"

const agents = [
  {
    slug: "agente-atencion",
    title: "Agente de Atención",
    subtitle: "Soporte al cliente 24/7",
    description: "Responde consultas de clientes en múltiples canales (WhatsApp, Email, Instagram DM) de manera automática e instantánea.",
    icon: MessageCircle,
    features: [
      "Respuestas instantáneas",
      "Integración multicanal",
      "Entendimiento de contexto",
      "Escalation inteligente",
    ],
    metrics: ["47% ↑ Conversión", "-62% Tickets", "92% Satisfacción"],
    color: "from-blue-500/20 to-cyan-500/20",
    badge: "Más Popular",
  },
  {
    slug: "agente-prospector",
    title: "Agente Prospector",
    subtitle: "Lead generation automático",
    description: "Identifica, califica y nutre leads automáticamente. Envía secuencias personalizadas y convierte prospectos en clientes.",
    icon: Users,
    features: [
      "Identificación de leads",
      "Calificación automática",
      "Secuencias personalizadas",
      "Lead scoring",
    ],
    metrics: ["+156% Leads", "-20hrs/semana", "+34% Cierre"],
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    slug: "agente-inventario",
    title: "Agente de Inventario",
    subtitle: "Gestión automática de stock",
    description: "Predice demanda, gestiona reposiciones automáticas y previene stockouts usando machine learning.",
    icon: Package,
    features: [
      "Predicción de demanda",
      "Reposición automática",
      "Prevención de stockouts",
      "Optimización de rotación",
    ],
    metrics: ["-38% Stockouts", "-$18K/mes", "+23% Retención"],
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    slug: "agente-contenido",
    title: "Agente de Contenido",
    subtitle: "Social media y marketing",
    description: "Genera, redacta y programa contenido automático para tus redes sociales. Optimiza engagement y crecimiento.",
    icon: Brain,
    features: [
      "Generación de ideas",
      "Redacción de captions",
      "Scheduling automático",
      "Análisis de engagement",
    ],
    metrics: ["+78% Engagement", "-4hrs/día", "+52% Tráfico"],
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    slug: "agente-recomendador",
    title: "Agente Recomendador",
    subtitle: "Personalización inteligente",
    description: "Analiza preferencias y comportamiento del usuario para recomendar productos relevantes en tiempo real.",
    icon: Zap,
    features: [
      "Análisis de preferencias",
      "Recomendaciones en tiempo real",
      "Cross-selling inteligente",
      "Personalización dinámica",
    ],
    metrics: ["+41% Ticket", "+67% Cross-sell", "92% Satisfacción"],
    color: "from-indigo-500/20 to-purple-500/20",
  },
  {
    slug: "agente-catalogacion",
    title: "Agente de Catalogación",
    subtitle: "Procesamiento de imágenes",
    description: "Cataloga productos automáticamente usando visión por computadora. Extrae descripciones, precios y características.",
    icon: TrendingUp,
    features: [
      "Visión por computadora",
      "Extracción automática",
      "Pricing dinámico",
      "Multi-plataforma",
    ],
    metrics: ["-70% Tiempo", "+28% Margen", "5x Rotación"],
    color: "from-teal-500/20 to-cyan-500/20",
  },
]

export default function AgentsPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-600/20 rounded-full blur-[120px] animate-blob mix-blend-screen" />
        <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-purple-600/20 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-screen" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Link href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Volver
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Agentes IA
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/60 max-w-2xl mx-auto"
          >
            Soluciones especializadas para cada aspecto de tu operación. Desde atención al cliente hasta gestión de inventario.
          </motion.p>
        </div>

        {/* Agents Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {agents.map((agent, index) => {
            const IconComponent = agent.icon
            return (
              <motion.div
                key={agent.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/agentes/${agent.slug}`}>
                  <GlassCard className="h-full p-8 group hover:bg-white/10 transition-all duration-300 cursor-pointer relative overflow-hidden">
                    {/* Badge */}
                    {agent.badge && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 rounded-full bg-green-500/20 border border-green-500/50 text-green-400 text-xs font-semibold">
                          {agent.badge}
                        </span>
                      </div>
                    )}

                    {/* Background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${agent.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                    <div className="relative">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-1">{agent.title}</h3>
                      <p className="text-white/60 text-sm mb-4">{agent.subtitle}</p>
                      <p className="text-white/70 mb-6 leading-relaxed">{agent.description}</p>

                      {/* Features */}
                      <div className="space-y-2 mb-6 pb-6 border-b border-white/10">
                        {agent.features.slice(0, 2).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-white/60 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                            {feature}
                          </div>
                        ))}
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-2 mb-6">
                        {agent.metrics.map((metric, idx) => (
                          <div key={idx} className="text-center p-2 rounded bg-white/5 border border-white/10">
                            <p className="text-xs font-semibold text-white">{metric}</p>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <span className="text-white/60 text-sm">Conocer más</span>
                        <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-2 transition-all" />
                      </div>
                    </div>
                  </GlassCard>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-white/60 text-lg mb-8">¿Necesitas una combinación de agentes? Podemos crearla.</p>
          <Link
            href="/consultoria"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-white/90 transition-colors"
          >
            Solicitar diagnostico gratuito
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
