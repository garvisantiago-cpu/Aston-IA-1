"use client"

import { motion } from "framer-motion"
import { Cog, Code, TrendingUp } from "lucide-react"

export function About() {
  const values = [
    {
      icon: Cog,
      title: "Especialización real",
      description:
        "Nos enfocamos en e-commerce porque creemos que la profundidad vale más que la amplitud. Sabemos exactamente qué problemas tienen los negocios en línea y cómo resolverlos con IA.",
    },
    {
      icon: Code,
      title: "Tecnología sin rodeos",
      description:
        "Construimos con n8n, OpenAI y las APIs de WhatsApp, Instagram y Shopify. Nada de plataformas genéricas — cada sistema está hecho a medida para el negocio del cliente.",
    },
    {
      icon: TrendingUp,
      title: "Resultados medibles",
      description:
        "Cada implementación tiene KPIs definidos desde el día uno. Si el agente no genera valor medible, hay algo mal y lo arreglamos.",
    },
  ]

  return (
    <section id="nosotros" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-12">¿Quiénes somos?</h2>

          <div className="max-w-3xl space-y-6 mb-16">
            <p className="text-lg text-white/80 leading-relaxed">
              Aston IA es una empresa especializada en inteligencia artificial para e-commerce. Creamos agentes de IA que trabajan de forma autónoma dentro de los sectores más críticos de tu negocio: atención al cliente, gestión de devoluciones, marketing y fidelización.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              Nos enfocamos en e-commerce que operan en Instagram y WhatsApp, porque sabemos que ahí está el problema sin resolver: la velocidad de respuesta y la capacidad de atender cientos de consultas simultáneamente sin perder ventas.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              No vendemos software genérico. Implementamos sistemas que se adaptan a la operación real de tu negocio, los integramos con tus herramientas existentes (Shopify, APIs, bases de datos), y los mantenemos funcionando en el tiempo.
            </p>
          </div>
        </motion.div>

        {/* Values Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 group-hover:bg-white/20 flex items-center justify-center mb-6 transition-colors">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{value.title}</h3>
                <p className="text-white/70 leading-relaxed">{value.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
