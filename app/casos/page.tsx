"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { GlassCard } from "@/components/ui/glass-card"
import { ArrowRight, ArrowLeft } from "lucide-react"

const cases = [
  {
    slug: "velvet-urban",
    title: "Velvet Urban",
    subtitle: "Streetwear premium",
    description: "Agente IA 24/7 para atención al cliente multicanal",
    metric: "+47%",
    metricLabel: "Conversion",
    image: "bg-gradient-to-br from-purple-600/40 to-pink-600/40",
  },
  {
    slug: "luna-textile",
    title: "Luna Textile",
    subtitle: "Moda sustentable",
    description: "Automatización de drops y lanzamientos de productos",
    metric: "+89%",
    metricLabel: "Ventas en drops",
    image: "bg-gradient-to-br from-green-600/40 to-emerald-600/40",
  },
  {
    slug: "norte-basics",
    title: "Norte Basics",
    subtitle: "Básicos minimalistas",
    description: "Sistema IA de predicción de demanda e inventario",
    metric: "-38%",
    metricLabel: "Stockouts",
    image: "bg-gradient-to-br from-blue-600/40 to-cyan-600/40",
  },
  {
    slug: "calle-54",
    title: "Calle 54",
    subtitle: "Sneakers y accesorios",
    description: "Bot de prospección y calificación automática de leads",
    metric: "+156%",
    metricLabel: "Leads calificados",
    image: "bg-gradient-to-br from-orange-600/40 to-red-600/40",
  },
  {
    slug: "hilo-co",
    title: "Hilo & Co",
    subtitle: "Ropa infantil artesanal",
    description: "Agente IA para generación y scheduling de contenido",
    metric: "+78%",
    metricLabel: "Engagement",
    image: "bg-gradient-to-br from-indigo-600/40 to-purple-600/40",
  },
  {
    slug: "draft-store",
    title: "Draft Store",
    subtitle: "Ropa deportiva técnica",
    description: "Sistema de recomendación personalizada inteligente",
    metric: "+41%",
    metricLabel: "Ticket promedio",
    image: "bg-gradient-to-br from-teal-600/40 to-green-600/40",
  },
  {
    slug: "ambar-vintage",
    title: "Ámbar Vintage",
    subtitle: "Ropa de segunda mano",
    description: "Catalogación automática con IA y pricing dinámico",
    metric: "-70%",
    metricLabel: "Tiempo catalogación",
    image: "bg-gradient-to-br from-amber-600/40 to-yellow-600/40",
  },
  {
    slug: "forma-studio",
    title: "Forma Studio",
    subtitle: "Athleisure premium",
    description: "Sistema gamificado de referidos y embajadores",
    metric: "+124%",
    metricLabel: "UGC generado",
    image: "bg-gradient-to-br from-rose-600/40 to-pink-600/40",
  },
]

export default function CasosPage() {
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
            Casos de Exito
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/60 max-w-2xl mx-auto"
          >
            Historias reales de negocios que transformaron su operacion con agentes IA
          </motion.p>
        </div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {cases.map((caseItem, index) => (
            <motion.div
              key={caseItem.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/casos/${caseItem.slug}`}>
                <GlassCard className="h-full p-8 group hover:bg-white/10 transition-all duration-300 cursor-pointer">
                  <div className={`w-full h-32 rounded-xl ${caseItem.image} mb-6 group-hover:scale-105 transition-transform`} />

                  <h3 className="text-2xl font-bold text-white mb-1">{caseItem.title}</h3>
                  <p className="text-white/60 text-sm mb-4">{caseItem.subtitle}</p>
                  <p className="text-white/70 mb-6">{caseItem.description}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div>
                      <div className="text-2xl font-bold text-white">{caseItem.metric}</div>
                      <div className="text-white/60 text-xs">{caseItem.metricLabel}</div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-2 transition-all" />
                  </div>
                </GlassCard>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-white/60 text-lg mb-8">¿Listo para transformar tu negocio como estos casos?</p>
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
