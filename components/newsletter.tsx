"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"

export function Newsletter() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Diagnóstico inicial de tu operación
            </h2>
            <p className="text-xl text-white/60 mb-12">
              El primer paso es entender cómo funciona tu operación hoy. Completá el cuestionario y coordinamos una llamada para ver qué necesitás.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Link
                href="/consultoria"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-white/90 transition-colors shadow-lg"
              >
                <CheckCircle2 className="w-5 h-5" />
                Comenzar diagnóstico
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
