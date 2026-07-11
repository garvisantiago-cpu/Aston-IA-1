"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"
import { ArrowLeft, ArrowRight, Send, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const steps = [
  { id: 1, title: "Datos de contacto" },
  { id: 2, title: "Tu negocio" },
  { id: 3, title: "Operacion actual" },
  { id: 4, title: "Tecnologia" },
  { id: 5, title: "Desafios" },
]

interface ValidationErrors {
  [key: string]: string
}

export default function OtroNegocioPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<ValidationErrors>({})
  const [formData, setFormData] = useState({
    // Step 1
    nombreCompleto: "",
    email: "",
    whatsapp: "",
    // Step 2
    nombreEmpresa: "",
    rubro: "",
    taminoEquipo: "",
    // Step 3
    procesosActuales: "",
    tareasManuales: "",
    // Step 4
    herramientasActuales: "",
    // Step 5
    problemasPrincipales: [] as string[],
    presupuesto: "",
    comentarios: "",
  })

  const validateStep = (step: number): boolean => {
    const newErrors: ValidationErrors = {}

    if (step === 1) {
      if (!formData.nombreCompleto.trim()) newErrors.nombreCompleto = "El nombre es obligatorio"
      if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
        newErrors.email = "Correo valido es obligatorio"
      if (!formData.whatsapp.trim()) newErrors.whatsapp = "WhatsApp es obligatorio"
    } else if (step === 2) {
      if (!formData.nombreEmpresa.trim()) newErrors.nombreEmpresa = "El nombre de empresa es obligatorio"
      if (!formData.rubro.trim()) newErrors.rubro = "El rubro/industria es obligatoria"
      if (!formData.taminoEquipo.trim()) newErrors.taminoEquipo = "Especifica el tamaño del equipo"
    } else if (step === 3) {
      if (!formData.procesosActuales.trim()) newErrors.procesosActuales = "Describe tus procesos actuales"
      if (!formData.tareasManuales.trim()) newErrors.tareasManuales = "Indica las tareas manuales"
    } else if (step === 4) {
      if (!formData.herramientasActuales.trim()) newErrors.herramientasActuales = "Especifica las herramientas"
    } else if (step === 5) {
      if (formData.problemasPrincipales.length === 0) newErrors.problemasPrincipales = "Selecciona al menos un desafio"
      if (!formData.presupuesto.trim()) newErrors.presupuesto = "Indica tu rango de presupuesto"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const updateFormData = (field: string, value: string | string[] | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const toggleProblema = (problema: string) => {
    setFormData((prev) => ({
      ...prev,
      problemasPrincipales: prev.problemasPrincipales.includes(problema)
        ? prev.problemasPrincipales.filter((p) => p !== problema)
        : [...prev.problemasPrincipales, problema],
    }))
  }

  const nextStep = () => {
    if (validateStep(currentStep) && currentStep < 5) {
      setCurrentStep(currentStep + 1)
      setErrors({})
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      setErrors({})
    }
  }

  const handleSubmit = () => {
    if (validateStep(currentStep)) {
      console.log("Form submitted:", formData)
      setIsSubmitted(true)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-600/20 rounded-full blur-[120px] animate-blob mix-blend-screen" />
          <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-purple-600/20 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-screen" />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center relative z-10"
        >
          <GlassCard className="p-12 max-w-lg mx-auto">
            <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-500" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-white">Formulario enviado</h2>
            <p className="text-white/70 mb-8">
              Gracias por tu interes en Aston IA. Nuestro equipo analizara tu solicitud y te contactara en las proximas 24-48 horas con una propuesta personalizada.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-white/90 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </Link>
          </GlassCard>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20 px-6">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-600/20 rounded-full blur-[120px] animate-blob mix-blend-screen" />
        <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-purple-600/20 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] bg-indigo-600/20 rounded-full blur-[120px] animate-blob animation-delay-4000 mix-blend-screen" />
      </div>

      <div className="container mx-auto max-w-3xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/consultoria" className="inline-block mb-8">
            <Image src="/images/aston-ia-logo.svg" alt="Aston IA" width={160} height={45} className="h-10 w-auto" />
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Diagnostico para tu Negocio</h1>
          <p className="text-white/70">Cuéntanos sobre tu operacion actual para crear una solucion personalizada</p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-between mb-12 px-4">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                  currentStep >= step.id
                    ? "bg-white text-black"
                    : "bg-white/10 text-white/40 border border-white/20"
                }`}
              >
                {step.id}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`hidden sm:block w-8 md:w-16 h-[2px] mx-1 transition-all ${
                    currentStep > step.id ? "bg-white" : "bg-white/20"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Form Card */}
        <GlassCard className="p-8 md:p-12">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-2 text-white">{steps[currentStep - 1].title}</h2>
            <p className="text-white/70 text-sm mb-8">
              {currentStep === 1 && "Datos para contactarte"}
              {currentStep === 2 && "Informacion basica sobre tu negocio"}
              {currentStep === 3 && "Como funciona actualmente tu operacion"}
              {currentStep === 4 && "Herramientas y sistemas que utilizas"}
              {currentStep === 5 && "Identifica tus principales desafios"}
            </p>

            {/* Step 1: Datos de contacto */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Nombre completo *</label>
                  <input
                    type="text"
                    value={formData.nombreCompleto}
                    onChange={(e) => updateFormData("nombreCompleto", e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border focus:outline-none transition-colors text-white placeholder:text-white/40 ${
                      errors.nombreCompleto ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-white/30"
                    }`}
                    placeholder="Juan Perez"
                  />
                  {errors.nombreCompleto && <p className="text-red-500 text-sm mt-1">{errors.nombreCompleto}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Correo electronico *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData("email", e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border focus:outline-none transition-colors text-white placeholder:text-white/40 ${
                      errors.email ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-white/30"
                    }`}
                    placeholder="juan@empresa.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Numero de WhatsApp *</label>
                  <input
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) => updateFormData("whatsapp", e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border focus:outline-none transition-colors text-white placeholder:text-white/40 ${
                      errors.whatsapp ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-white/30"
                    }`}
                    placeholder="+54 9 11 1234 5678"
                  />
                  {errors.whatsapp && <p className="text-red-500 text-sm mt-1">{errors.whatsapp}</p>}
                </div>
              </div>
            )}

            {/* Step 2: Tu negocio */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Nombre de la empresa *</label>
                  <input
                    type="text"
                    value={formData.nombreEmpresa}
                    onChange={(e) => updateFormData("nombreEmpresa", e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border focus:outline-none transition-colors text-white placeholder:text-white/40 ${
                      errors.nombreEmpresa ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-white/30"
                    }`}
                    placeholder="Mi Empresa"
                  />
                  {errors.nombreEmpresa && <p className="text-red-500 text-sm mt-1">{errors.nombreEmpresa}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Rubro/Industria *</label>
                  <input
                    type="text"
                    value={formData.rubro}
                    onChange={(e) => updateFormData("rubro", e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border focus:outline-none transition-colors text-white placeholder:text-white/40 ${
                      errors.rubro ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-white/30"
                    }`}
                    placeholder="Ej: SaaS, Servicios, Manufactura"
                  />
                  {errors.rubro && <p className="text-red-500 text-sm mt-1">{errors.rubro}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Tamaño del equipo *</label>
                  <input
                    type="text"
                    value={formData.taminoEquipo}
                    onChange={(e) => updateFormData("taminoEquipo", e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border focus:outline-none transition-colors text-white placeholder:text-white/40 ${
                      errors.taminoEquipo ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-white/30"
                    }`}
                    placeholder="Ej: 5-10 personas"
                  />
                  {errors.taminoEquipo && <p className="text-red-500 text-sm mt-1">{errors.taminoEquipo}</p>}
                </div>
              </div>
            )}

            {/* Step 3: Operacion actual */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Procesos principales de tu negocio *</label>
                  <textarea
                    value={formData.procesosActuales}
                    onChange={(e) => updateFormData("procesosActuales", e.target.value)}
                    rows={4}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border focus:outline-none transition-colors resize-none text-white placeholder:text-white/40 ${
                      errors.procesosActuales ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-white/30"
                    }`}
                    placeholder="Describe los principales procesos de tu operacion (ventas, atencion, logistica, etc)"
                  />
                  {errors.procesosActuales && <p className="text-red-500 text-sm mt-1">{errors.procesosActuales}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Tareas manuales/repetitivas que consumen tiempo *</label>
                  <textarea
                    value={formData.tareasManuales}
                    onChange={(e) => updateFormData("tareasManuales", e.target.value)}
                    rows={4}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border focus:outline-none transition-colors resize-none text-white placeholder:text-white/40 ${
                      errors.tareasManuales ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-white/30"
                    }`}
                    placeholder="Cuales son las tareas manuales que crees que podrian automatizarse"
                  />
                  {errors.tareasManuales && <p className="text-red-500 text-sm mt-1">{errors.tareasManuales}</p>}
                </div>
              </div>
            )}

            {/* Step 4: Tecnologia */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Herramientas/sistemas que utilizas actualmente *</label>
                  <textarea
                    value={formData.herramientasActuales}
                    onChange={(e) => updateFormData("herramientasActuales", e.target.value)}
                    rows={4}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border focus:outline-none transition-colors resize-none text-white placeholder:text-white/40 ${
                      errors.herramientasActuales ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-white/30"
                    }`}
                    placeholder="Ej: Salesforce, Zapier, Google Workspace, etc"
                  />
                  {errors.herramientasActuales && <p className="text-red-500 text-sm mt-1">{errors.herramientasActuales}</p>}
                </div>
              </div>
            )}

            {/* Step 5: Desafios */}
            {currentStep === 5 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-3 text-white">Cuales son tus principales desafios? (selecciona multiples) *</label>
                  <div className="space-y-3">
                    {["Procesos lentos", "Errores humanos", "Falta de escalabilidad", "Costos operativos altos", "Falta de datos/insights", "Rotacion de personal", "Otra"].map((prob) => (
                      <button
                        key={prob}
                        type="button"
                        onClick={() => toggleProblema(prob)}
                        className={`w-full px-4 py-3 rounded-xl text-sm font-medium transition-all text-left ${
                          formData.problemasPrincipales.includes(prob)
                            ? "bg-white text-black"
                            : "bg-white/5 border border-white/10 hover:bg-white/10 text-white"
                        }`}
                      >
                        {prob}
                      </button>
                    ))}
                  </div>
                  {errors.problemasPrincipales && <p className="text-red-500 text-sm mt-2">{errors.problemasPrincipales}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Presupuesto estimado para la solucion *</label>
                  <input
                    type="text"
                    value={formData.presupuesto}
                    onChange={(e) => updateFormData("presupuesto", e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border focus:outline-none transition-colors text-white placeholder:text-white/40 ${
                      errors.presupuesto ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-white/30"
                    }`}
                    placeholder="Ej: $500-1000/mes"
                  />
                  {errors.presupuesto && <p className="text-red-500 text-sm mt-1">{errors.presupuesto}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Comentarios adicionales (opcional)</label>
                  <textarea
                    value={formData.comentarios}
                    onChange={(e) => updateFormData("comentarios", e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none transition-colors resize-none text-white placeholder:text-white/40"
                    placeholder="Cualquier detalle adicional que consideres importante"
                  />
                </div>
              </div>
            )}
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-white/10">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                currentStep === 1
                  ? "text-white/30 cursor-not-allowed"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              Anterior
            </button>

            <div className="flex-1 text-center">
              <p className="text-white/50 text-sm">
                Paso {currentStep} de {steps.length}
              </p>
            </div>

            {currentStep === steps.length ? (
              <button
                type="button"
                onClick={handleSubmit}
                className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-colors"
              >
                <Send className="w-4 h-4" />
                Enviar
              </button>
            ) : (
              <button
                type="button"
                onClick={nextStep}
                className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-colors"
              >
                Siguiente
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </GlassCard>

        <p className="text-center text-white/40 text-sm mt-8">
          Los datos que proporciones seran tratados de forma confidencial y segura.
        </p>
      </div>
    </div>
  )
}
