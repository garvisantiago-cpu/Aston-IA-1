"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Work() {
  return (
    <section id="credibilidad" className="py-32 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Somos una empresa nueva con un sistema probado</h2>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-10 mb-8">
            <p className="text-lg text-white/80 leading-relaxed">
              En lugar de mostrarte números inventados, te mostramos exactamente cómo trabajamos y qué resultados podés
              esperar.
            </p>
          </div>

          <p className="text-white/60 max-w-2xl mx-auto mb-10">
            Cada agente que implementamos está documentado con KPIs reales, casos de uso verificables y un proceso de
            onboarding transparente. Nuestro diferencial no está en los números, sino en la especialización y la
            capacidad de entrega.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="#nosotros"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full font-semibold text-white transition-all"
            >
              Conocé cómo trabajamos
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
