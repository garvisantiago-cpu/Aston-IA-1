"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { GlassCard } from "@/components/ui/glass-card"
import { ArrowRight, Store } from "lucide-react"
import { motion } from "framer-motion"

export default function ConsultoriaSelectionPage() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <div className="min-h-screen py-20 px-6">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-600/20 rounded-full blur-[120px] animate-blob mix-blend-screen" />
        <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-purple-600/20 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] bg-indigo-600/20 rounded-full blur-[120px] animate-blob animation-delay-4000 mix-blend-screen" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Link href="/" className="inline-block mb-8">
            <Image src="/images/aston-ia-logo.svg" alt="Aston IA" width={160} height={45} className="h-10 w-auto" />
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Solicita tu Diagnostico Gratuito</h1>
          <p className="text-xl text-white/70">
            Selecciona el tipo de negocio para personalizar tu experiencia
          </p>
        </div>

        {/* Selection Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* E-commerce */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onClick={() => setSelected("ecommerce")}
            className="cursor-pointer"
          >
            <GlassCard
              className={`p-8 h-full transition-all transform hover:scale-105 ${
                selected === "ecommerce" ? "ring-2 ring-white bg-white/10" : "hover:bg-white/5"
              }`}
            >
              <div className="flex flex-col items-center text-center h-full">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                  <Store className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">E-commerce</h3>
                <p className="text-white/60 mb-6 flex-grow">
                  Automatiza la atencion, aumenta conversiones y escala tu tienda en linea con agentes IA
                </p>
                <Link
                  href="/consultoria/ecommerce"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-white/90 transition-colors mt-auto"
                >
                  Comenzar <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </GlassCard>
          </motion.div>

          {/* Otro Tipo de Negocio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onClick={() => setSelected("otro-negocio")}
            className="cursor-pointer"
          >
            <GlassCard
              className={`p-8 h-full transition-all transform hover:scale-105 ${
                selected === "otro-negocio" ? "ring-2 ring-white bg-white/10" : "hover:bg-white/5"
              }`}
            >
              <div className="flex flex-col items-center text-center h-full">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                  <Store className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Otro Tipo de Negocio</h3>
                <p className="text-white/60 mb-6 flex-grow">
                  Automatiza procesos, reduce costos y escala tu operacion con agentes IA personalizados
                </p>
                <Link
                  href="/consultoria/otro-negocio"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-white/90 transition-colors mt-auto"
                >
                  Comenzar <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-white/40 text-sm">
          Completar el formulario toma aproximadamente 5-7 minutos. Tu informacion es confidencial y segura.
        </p>
      </div>
    </div>
  )
}
