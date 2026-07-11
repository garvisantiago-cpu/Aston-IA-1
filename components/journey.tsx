"use client"

import { motion } from "framer-motion"
import { Check, FileText, Brain, Phone, Code2, TrendingUp } from "lucide-react"

const steps = [
  {
    number: 1,
    title: "Cuestionario de diagnóstico",
    description:
      "El proceso arranca cuando completás el cuestionario disponible en la web. Este formulario recopila toda la información que nuestro equipo necesita para analizar tu negocio: tu rubro, plataformas que usás, volumen de mensajes que recibís, herramientas actuales, principales problemas operativos y qué áreas querés automatizar. Con esa información, hacemos el análisis completo sin necesidad de ninguna interacción previa.",
    icon: FileText,
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    number: 2,
    title: "Análisis interno y armado de la propuesta",
    description:
      "Con las respuestas del cuestionario, nuestro equipo trabaja internamente: analiza tu operación, identifica qué agente se adapta mejor a tus necesidades y prepara una propuesta concreta que incluye qué se va a implementar, cómo va a funcionar y el tiempo estimado. Vos no intervenís en este paso. Cuando la propuesta está lista, agendamos la primera llamada.",
    icon: Brain,
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    number: 3,
    title: "Primera llamada: presentación y cierre",
    description:
      "Esta llamada no es de diagnóstico — el diagnóstico ya está hecho. Te presentamos la propuesta armada en base a tu cuestionario: qué agente se implementa, cómo funciona en tu operación y cuánto tiempo tarda. Si estás de acuerdo, cerramos el servicio en esa misma llamada.",
    icon: Phone,
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    number: 4,
    title: "Onboarding operativo",
    description:
      "Una vez contratado, completás un formulario de onboarding con la información operativa necesaria para construir el agente: accesos a plataformas, catálogo de productos, tono de comunicación de tu marca, preguntas frecuentes de tus clientes y políticas del negocio. Este es distinto al cuestionario inicial: no sirve para diagnosticar, sino para personalizar el agente a tu negocio real.",
    icon: FileText,
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    number: 5,
    title: "Implementación en n8n",
    description:
      "Con el onboarding completo, construimos el agente en n8n e integramos con tus herramientas: Shopify, Instagram, WhatsApp, Google Sheets y las demás plataformas que correspondan según la propuesta. Antes de activarlo, realizamos pruebas exhaustivas para verificar que todo funcione correctamente.",
    icon: Code2,
    color: "from-indigo-500/20 to-blue-500/20",
  },
  {
    number: 6,
    title: "Activación y monitoreo",
    description:
      "Una vez aprobadas las pruebas, activamos el agente en tu negocio. Los primeros 30 días hacemos seguimiento activo: ajustamos respuestas, corregimos errores y optimizamos el sistema en base al comportamiento real. A partir del mes uno, el mantenimiento es continuo para garantizar que siempre opere correctamente.",
    icon: TrendingUp,
    color: "from-cyan-500/20 to-blue-500/20",
  },
]

export function Journey() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Así trabajamos con vos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/60 max-w-2xl mx-auto"
          >
            Un proceso de 6 pasos: desde que completás el cuestionario hasta la implementación y monitoreo continuo
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="mb-12 relative"
              >
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-20 w-[2px] h-32 bg-gradient-to-b from-white/30 to-transparent" />
                )}

                <div className="flex gap-8">
                  {/* Step Circle */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} border border-white/20 flex items-center justify-center`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white text-black font-bold text-sm flex items-center justify-center">
                        {step.number}
                      </div>
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-bold mb-2 text-white">{step.title}</h3>
                    <p className="text-white/60 text-lg">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Check className="w-4 h-4 text-green-400" />
            <span className="text-white/70 text-sm">Proceso probado y optimizado</span>
          </div>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Cada fase esta diseñada para asegurar que obtengas resultados medibles y sostenibles en tu operacion.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
