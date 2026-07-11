"use client"

import { motion } from "framer-motion"
import {
  MessageCircle,
  Clock,
  Users,
  TrendingUp,
  Shield,
  Zap,
  CheckCircle2,
  Database,
  Mail,
  Package,
} from "lucide-react"

export function Agents() {
  return (
    <section id="agentes" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">¿Qué es un agente de IA?</h2>
          <p className="text-xl text-white/60 max-w-3xl mb-12">
            Para dueños de e-commerce que no conocen el concepto, te lo explicamos en simple.
          </p>

          <div className="max-w-4xl space-y-6 mb-12">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-lg text-white/80 leading-relaxed mb-4">
                Un agente de IA es un sistema de inteligencia artificial que puede leer mensajes, tomar decisiones y ejecutar acciones de forma autónoma, sin que ningún humano tenga que intervenir en cada paso.
              </p>
              <p className="text-lg text-white/80 leading-relaxed mb-4">
                A diferencia de un chatbot simple que solo responde preguntas con respuestas predefinidas, un agente de IA entiende el contexto de la conversación, consulta información en tiempo real (como el stock de tu tienda o el estado de un pedido), y decide qué acción tomar en función de lo que el cliente necesita.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                En el contexto de un e-commerce en Instagram, esto significa: responder todos los mensajes del día sin que ningún empleado los lea, identificar qué clientes quieren comprar, gestionar cambios y devoluciones, y registrar los datos de cada conversación para usarlos después en campañas de fidelización.
              </p>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm md:text-base">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 font-semibold text-white"></th>
                  <th className="text-left py-4 px-4 font-semibold text-white">Sin agente IA</th>
                  <th className="text-left py-4 px-4 font-semibold text-white">Con Aston Desk</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-4 px-4 text-white/70">Tiempo de respuesta</td>
                  <td className="py-4 px-4 text-white/60">Horas (o sin respuesta)</td>
                  <td className="py-4 px-4 text-white">Menos de 60 segundos</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-4 px-4 text-white/70">Horario de atención</td>
                  <td className="py-4 px-4 text-white/60">Solo en horario laboral</td>
                  <td className="py-4 px-4 text-white">24/7, todos los días</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-4 px-4 text-white/70">Registro de clientes</td>
                  <td className="py-4 px-4 text-white/60">Manual o inexistente</td>
                  <td className="py-4 px-4 text-white">Automático con cada consulta</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-4 px-4 text-white/70">Costo operativo</td>
                  <td className="py-4 px-4 text-white/60">Alto (personal dedicado)</td>
                  <td className="py-4 px-4 text-white">Fijo mensual, sin variables</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-4 text-white/70">Escala</td>
                  <td className="py-4 px-4 text-white/60">Limitada por personal</td>
                  <td className="py-4 px-4 text-white">Ilimitada sin costo adicional</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Aston Desk Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-32"
        >
          <h3 className="text-3xl md:text-5xl font-bold mb-4">Aston Desk</h3>
          <p className="text-2xl text-white/70 mb-8 font-light">Agente de atención al cliente</p>
          <p className="text-xl text-white/60 mb-12 max-w-3xl italic">
            Atiende, responde y vende por vos las 24 horas, integrado directamente con tu tienda Shopify.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 mb-12">
            <h4 className="text-xl font-semibold mb-4 text-white">¿Qué es Aston Desk?</h4>
            <p className="text-white/80 leading-relaxed">
              Aston Desk es el agente de IA de Aston IA para el sector de atención al cliente. Opera de forma autónoma en Instagram DMs y WhatsApp, responde en menos de 60 segundos, consulta el estado de pedidos en tiempo real a través de Shopify y registra los datos de cada cliente para futuras campañas.
            </p>
          </div>

          {/* Features Grid */}
          <div className="mb-12">
            <h4 className="text-xl font-semibold mb-8 text-white">Funciones principales</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: MessageCircle,
                  title: "Respuesta automática",
                  desc: "En Instagram DMs y WhatsApp",
                },
                {
                  icon: Clock,
                  title: "Respuestas en tiempo real",
                  desc: "Menos de 60 segundos siempre",
                },
                {
                  icon: Package,
                  title: "Consulta de pedidos",
                  desc: "Stock y precios en tiempo real vía Shopify",
                },
                {
                  icon: Users,
                  title: "Gestión de cambios",
                  desc: "Devoluciones y reclamos sin intervención",
                },
                {
                  icon: Database,
                  title: "Registro de contacto",
                  desc: "Guarda nombre y motivo de consulta de cada cliente",
                },
                {
                  icon: TrendingUp,
                  title: "Sugerencias de productos",
                  desc: "Upsell y cross-sell automático",
                },
                {
                  icon: Shield,
                  title: "Derivación inteligente",
                  desc: "Al agente humano cuando lo requiera",
                },
                {
                  icon: Mail,
                  title: "Flujos de seguimiento",
                  desc: "Automatización post-compra",
                },
              ].map((feature, idx) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * idx }}
                    className="flex gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex-shrink-0">
                      <Icon className="w-6 h-6 text-white/80 mt-1" />
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1">{feature.title}</p>
                      <p className="text-sm text-white/60">{feature.desc}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-12">
            <h4 className="text-xl font-semibold mb-6 text-white">Stack tecnológico</h4>
            <div className="flex flex-wrap gap-3">
              {["n8n", "OpenAI GPT-4", "Instagram Graph API", "WhatsApp Business API", "Shopify API", "Google Sheets"].map(
                (tech) => (
                  <span key={tech} className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium">
                    {tech}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Problems Solved */}
          <div>
            <h4 className="text-xl font-semibold mb-8 text-white">Problemas que resuelve</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  problem: "Demora de horas en responder mensajes de Instagram",
                  solution: "El agente responde en menos de 60 segundos, todos los días, sin descanso.",
                },
                {
                  problem: "Ventas perdidas fuera del horario laboral",
                  solution: "Opera las 24 horas los 7 días de la semana, incluyendo fines de semana y feriados.",
                },
                {
                  problem: "No hay registro de qué consultan los clientes",
                  solution: "Cada interacción captura nombre, contacto y motivo de consulta en el CRM automáticamente.",
                },
                {
                  problem: "El equipo pierde tiempo en preguntas repetitivas",
                  solution: "Resuelve de forma autónoma la mayoría de las consultas frecuentes sin intervención humana.",
                },
                {
                  problem: "La atención no tiene acceso al inventario real",
                  solution: "Integración directa con Shopify para consultar stock, precios y pedidos en tiempo real.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * idx }}
                  className="p-6 rounded-xl bg-white/5 border border-white/10"
                >
                  <div className="flex gap-3 mb-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-white/80 mt-0.5" />
                    <p className="text-white/70 font-medium">Problema</p>
                  </div>
                  <p className="text-white/60 mb-4 ml-8">{item.problem}</p>
                  <div className="flex gap-3 mb-3">
                    <Zap className="w-5 h-5 flex-shrink-0 text-white/80 mt-0.5" />
                    <p className="text-white/70 font-medium">Solución</p>
                  </div>
                  <p className="text-white/60 ml-8">{item.solution}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Aston CRM Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-32 pt-20 border-t border-white/10"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/20 border border-blue-500/50 text-blue-300">
              Extensión opcional
            </span>
          </div>
          
          <h3 className="text-3xl md:text-5xl font-bold mb-4">Aston CRM</h3>
          <p className="text-2xl text-white/70 mb-8 font-light">Extensión de fidelización (opcional)</p>
          <p className="text-xl text-white/60 mb-12 max-w-3xl italic">
            Un paso más allá de Aston Desk, para cuando tu operación ya está lista para escalar.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 mb-12">
            <h4 className="text-xl font-semibold mb-4 text-white">¿Qué es Aston CRM?</h4>
            <p className="text-white/80 leading-relaxed mb-4">
              Aston CRM no viene incluido en Aston Desk. Es una extensión que se suma más adelante, cuando tu negocio ya se acostumbró al nuevo volumen de consultas y ventas que genera el agente de atención.
            </p>
            <p className="text-white/80 leading-relaxed">
              Toma los datos que Aston Desk va recolectando y activa campañas de fidelización: emails de nuevos lanzamientos, descuentos para clientes frecuentes e invitaciones a la comunidad de la marca.
            </p>
          </div>

          <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-6">
            <p className="text-white/80 text-center">
              <span className="font-semibold text-white">Se implementa después de Aston Desk</span> — una vez que validaste que tu operación puede manejar el nuevo volumen de demanda
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
