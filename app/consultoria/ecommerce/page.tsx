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
  { id: 3, title: "Atencion al cliente" },
  { id: 4, title: "Devoluciones" },
  { id: 5, title: "Tecnologia" },
  { id: 6, title: "Vision" },
]

const plataformas = [
  "Shopify",
  "WooCommerce",
  "TiendaNube",
  "Magento",
  "VTEX",
  "Desarrollo propio",
]

const volumenes = ["0-100", "100-500", "500-1000", "+1000"]

const facturacion = [
  "Menos de $5,000",
  "$5,000 - $15,000",
  "$15,000 - $50,000",
  "$50,000 - $100,000",
  "Mas de $100,000",
]

const canales = ["WhatsApp", "Instagram DM", "Email", "Chat en web", "Facebook Messenger", "Telefono"]

const helpdesks = ["Zendesk", "Gorgias", "Freshdesk", "Gmail/WhatsApp Business", "Ninguno"]

const motivosDevoluciones = [
  "No era lo que esperaba",
  "Producto danado o defectuoso",
  "Error en la orden",
  "Cambio de opinion",
  "Otro",
]

const procesoDevoluciones = [
  "Proceso manual",
  "Parcialmente automatizado",
  "Totalmente automatizado",
]

const tiempoEntrega = [
  "Mismo dia",
  "1-3 dias",
  "3-7 dias",
  "7-15 dias",
  "Mas de 15 dias",
]

const emailMarketing = ["Klaviyo", "Mailchimp", "ActiveCampaign", "Otro", "Ninguno"]

const baseDatos = [
  "Excel/Google Sheets",
  "En la plataforma de E-commerce",
  "CRM (HubSpot, Salesforce, etc.)",
  "Otro",
]

const problemas = [
  "Reducir devoluciones",
  "Responder mas rapido a clientes",
  "Vender mas a clientes antiguos",
  "Conseguir trafico nuevo",
  "Automatizar tareas repetitivas",
  "Otro",
]

interface ValidationErrors {
  [key: string]: string
}

export default function EcommerceFormPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<ValidationErrors>({})
  const [formData, setFormData] = useState({
    // Step 1
    nombreCompleto: "",
    cargo: "",
    email: "",
    whatsapp: "",
    // Step 2
    nombreMarca: "",
    urlSitio: "",
    plataforma: "",
    volumenPedidos: "",
    facturacion: "",
    // Step 3
    volumenConsultas: "",
    canalesAtencion: [] as string[],
    tiempoRepetitivas: 5,
    helpdesk: "",
    // Step 4
    tasaDevoluciones: "",
    motivoDevoluciones: "",
    guiaTallas: "",
    tallaje: "",
    // Step 5
    emailMarketing: "",
    baseDatos: "",
    // Step 6
    problemaUnico: "",
    comentarios: "",
  })

  const validateStep = (step: number): boolean => {
    const newErrors: ValidationErrors = {}

    if (step === 1) {
      if (!formData.nombreCompleto.trim()) newErrors.nombreCompleto = "El nombre es obligatorio"
      if (!formData.cargo) newErrors.cargo = "El cargo es obligatorio"
      if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
        newErrors.email = "Correo valido es obligatorio"
      if (!formData.whatsapp.trim()) newErrors.whatsapp = "WhatsApp es obligatorio"
    } else if (step === 2) {
      if (!formData.nombreMarca.trim()) newErrors.nombreMarca = "El nombre de marca es obligatorio"
      if (!formData.plataforma) newErrors.plataforma = "Selecciona una plataforma"
      if (!formData.volumenPedidos) newErrors.volumenPedidos = "Selecciona el volumen"
    } else if (step === 3) {
      if (!formData.volumenConsultas.trim()) newErrors.volumenConsultas = "Indica el volumen de consultas"
      if (formData.canalesAtencion.length === 0) newErrors.canalesAtencion = "Selecciona al menos un canal"
    } else if (step === 4) {
      if (!formData.tasaDevoluciones.trim()) newErrors.tasaDevoluciones = "La tasa es obligatoria"
      if (!formData.motivoDevoluciones) newErrors.motivoDevoluciones = "Selecciona un motivo"
      if (!formData.guiaTallas) newErrors.guiaTallas = "Selecciona una opcion"
      if (!formData.tallaje) newErrors.tallaje = "Selecciona el tipo de tallaje"
    } else if (step === 5) {
      if (!formData.emailMarketing) newErrors.emailMarketing = "Selecciona una herramienta"
      if (!formData.baseDatos) newErrors.baseDatos = "Selecciona un tipo de base de datos"
    } else if (step === 6) {
      if (!formData.problemaUnico) newErrors.problemaUnico = "Selecciona tu problema principal"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const updateFormData = (field: string, value: string | string[] | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const toggleCanal = (canal: string) => {
    setFormData((prev) => ({
      ...prev,
      canalesAtencion: prev.canalesAtencion.includes(canal)
        ? prev.canalesAtencion.filter((c) => c !== canal)
        : [...prev.canalesAtencion, canal],
    }))
  }

  const nextStep = () => {
    if (validateStep(currentStep) && currentStep < 6) {
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
              Gracias por tu interes en Aston IA. Nuestro equipo revisara tu informacion y te contactara en las proximas 24-48 horas para agendar tu consultoria gratuita.
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
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Diagnostico E-commerce de Ropa</h1>
          <p className="text-white/70">Completa el formulario para recibir tu consultoria gratuita personalizada</p>
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

        {/* Form Card - contenido original del formulario */}
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
              {currentStep === 1 && "Datos para contactarte y hacer seguimiento"}
              {currentStep === 2 && "Contexto sobre tu negocio y volumen de operacion"}
              {currentStep === 3 && "Entender como manejas la atencion al cliente actualmente"}
              {currentStep === 4 && "Diagnostico sobre devoluciones y tallas"}
              {currentStep === 5 && "Herramientas que usas actualmente"}
              {currentStep === 6 && "Tu prioridad numero uno"}
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
                  <label className="block text-sm font-medium mb-2 text-white">Cargo en la empresa *</label>
                  <select
                    value={formData.cargo}
                    onChange={(e) => updateFormData("cargo", e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border focus:outline-none transition-colors appearance-none text-white ${
                      errors.cargo ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-white/30"
                    }`}
                  >
                    <option value="" className="bg-black">Selecciona tu cargo</option>
                    <option value="Dueno" className="bg-black">Dueño/Fundador</option>
                    <option value="Gerente E-commerce" className="bg-black">Gerente de E-commerce</option>
                    <option value="Marketing" className="bg-black">Marketing</option>
                    <option value="Atencion al cliente" className="bg-black">Atención al cliente</option>
                    <option value="Otro" className="bg-black">Otro</option>
                  </select>
                  {errors.cargo && <p className="text-red-500 text-sm mt-1">{errors.cargo}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Correo electronico corporativo *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData("email", e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border focus:outline-none transition-colors text-white placeholder:text-white/40 ${
                      errors.email ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-white/30"
                    }`}
                    placeholder="juan@tuempresa.com"
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
                  <label className="block text-sm font-medium mb-2 text-white">Nombre de la marca/empresa *</label>
                  <input
                    type="text"
                    value={formData.nombreMarca}
                    onChange={(e) => updateFormData("nombreMarca", e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border focus:outline-none transition-colors text-white placeholder:text-white/40 ${
                      errors.nombreMarca ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-white/30"
                    }`}
                    placeholder="Mi Marca"
                  />
                  {errors.nombreMarca && <p className="text-red-500 text-sm mt-1">{errors.nombreMarca}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">URL del sitio web</label>
                  <input
                    type="url"
                    value={formData.urlSitio}
                    onChange={(e) => updateFormData("urlSitio", e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border focus:outline-none transition-colors text-white placeholder:text-white/40 border-white/10 focus:border-white/30`}
                    placeholder="https://mimarca.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-3 text-white">Plataforma de E-commerce *</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {plataformas.map((plat) => (
                      <button
                        key={plat}
                        type="button"
                        onClick={() => updateFormData("plataforma", plat)}
                        className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                          formData.plataforma === plat
                            ? "bg-white text-black"
                            : "bg-white/5 border border-white/10 hover:bg-white/10 text-white"
                        }`}
                      >
                        {plat}
                      </button>
                    ))}
                  </div>
                  {errors.plataforma && <p className="text-red-500 text-sm mt-2">{errors.plataforma}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-3 text-white">Volumen promedio de pedidos mensuales *</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {volumenes.map((vol) => (
                      <button
                        key={vol}
                        type="button"
                        onClick={() => updateFormData("volumenPedidos", vol)}
                        className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                          formData.volumenPedidos === vol
                            ? "bg-white text-black"
                            : "bg-white/5 border border-white/10 hover:bg-white/10 text-white"
                        }`}
                      >
                        {vol}
                      </button>
                    ))}
                  </div>
                  {errors.volumenPedidos && <p className="text-red-500 text-sm mt-2">{errors.volumenPedidos}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-3 text-white">Facturacion mensual promedio (aprox USD)</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {facturacion.map((fac) => (
                      <button
                        key={fac}
                        type="button"
                        onClick={() => updateFormData("facturacion", fac)}
                        className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                          formData.facturacion === fac
                            ? "bg-white text-black"
                            : "bg-white/5 border border-white/10 hover:bg-white/10 text-white"
                        }`}
                      >
                        {fac}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Steps 3-6 remain the same as before - truncated for space */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">
                    Volumen aproximado de consultas de soporte por semana
                  </label>
                  <input
                    type="text"
                    value={formData.volumenConsultas}
                    onChange={(e) => updateFormData("volumenConsultas", e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border focus:outline-none transition-colors text-white placeholder:text-white/40 ${
                      errors.volumenConsultas ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-white/30"
                    }`}
                    placeholder="Ej: 50-100 consultas"
                  />
                  {errors.volumenConsultas && <p className="text-red-500 text-sm mt-1">{errors.volumenConsultas}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-3 text-white">
                    Canales principales de atencion (selecciona todos los que apliquen)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {canales.map((canal) => (
                      <button
                        key={canal}
                        type="button"
                        onClick={() => toggleCanal(canal)}
                        className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                          formData.canalesAtencion.includes(canal)
                            ? "bg-white text-black"
                            : "bg-white/5 border border-white/10 hover:bg-white/10 text-white"
                        }`}
                      >
                        {canal}
                      </button>
                    ))}
                  </div>
                  {errors.canalesAtencion && <p className="text-red-500 text-sm mt-2">{errors.canalesAtencion}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-3 text-white">
                    Del 1 al 10, cuanto tiempo consume responder preguntas repetitivas?
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={formData.tiempoRepetitivas}
                      onChange={(e) => updateFormData("tiempoRepetitivas", parseInt(e.target.value))}
                      className="flex-1 h-2 bg-white/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
                    />
                    <span className="text-2xl font-bold w-8 text-center text-white">{formData.tiempoRepetitivas}</span>
                  </div>
                  <p className="text-xs text-white/60 mt-2">1 = Poco tiempo | 10 = Muchisimo tiempo</p>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-3 text-white">Herramienta de Helpdesk actual</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {helpdesks.map((hd) => (
                      <button
                        key={hd}
                        type="button"
                        onClick={() => updateFormData("helpdesk", hd)}
                        className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                          formData.helpdesk === hd
                            ? "bg-white text-black"
                            : "bg-white/5 border border-white/10 hover:bg-white/10 text-white"
                        }`}
                      >
                        {hd}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Tasa de devoluciones actual aproximada (%)</label>
                  <input
                    type="text"
                    value={formData.tasaDevoluciones}
                    onChange={(e) => updateFormData("tasaDevoluciones", e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border focus:outline-none transition-colors text-white placeholder:text-white/40 ${
                      errors.tasaDevoluciones ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-white/30"
                    }`}
                    placeholder="Ej: 15%"
                  />
                  {errors.tasaDevoluciones && <p className="text-red-500 text-sm mt-1">{errors.tasaDevoluciones}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-3 text-white">Razon principal de las devoluciones</label>
                  <div className="grid grid-cols-2 gap-3">
                    {motivosDevoluciones.map((motivo) => (
                      <button
                        key={motivo}
                        type="button"
                        onClick={() => updateFormData("motivoDevoluciones", motivo)}
                        className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                          formData.motivoDevoluciones === motivo
                            ? "bg-white text-black"
                            : "bg-white/5 border border-white/10 hover:bg-white/10 text-white"
                        }`}
                      >
                        {motivo}
                      </button>
                    ))}
                  </div>
                  {errors.motivoDevoluciones && <p className="text-red-500 text-sm mt-2">{errors.motivoDevoluciones}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-3 text-white">Cual es tu proceso de devolucion actual?</label>
                  <div className="space-y-3">
                    {procesoDevoluciones.map((proceso) => (
                      <button
                        key={proceso}
                        type="button"
                        onClick={() => updateFormData("guiaTallas", proceso)}
                        className={`w-full px-4 py-3 rounded-xl text-sm font-medium transition-all text-left ${
                          formData.guiaTallas === proceso
                            ? "bg-white text-black"
                            : "bg-white/5 border border-white/10 hover:bg-white/10 text-white"
                        }`}
                      >
                        {proceso}
                      </button>
                    ))}
                  </div>
                  {errors.guiaTallas && <p className="text-red-500 text-sm mt-2">{errors.guiaTallas}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-3 text-white">Cual es tu tiempo de entrega promedio?</label>
                  <div className="space-y-3">
                    {tiempoEntrega.map((tiempo) => (
                      <button
                        key={tiempo}
                        type="button"
                        onClick={() => updateFormData("tallaje", tiempo)}
                        className={`w-full px-4 py-3 rounded-xl text-sm font-medium transition-all text-left ${
                          formData.tallaje === tiempo
                            ? "bg-white text-black"
                            : "bg-white/5 border border-white/10 hover:bg-white/10 text-white"
                        }`}
                      >
                        {tiempo}
                      </button>
                    ))}
                  </div>
                  {errors.tallaje && <p className="text-red-500 text-sm mt-2">{errors.tallaje}</p>}
                </div>
              </div>
            )}

            {currentStep === 5 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-3 text-white">Herramienta de email marketing actual</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {emailMarketing.map((em) => (
                      <button
                        key={em}
                        type="button"
                        onClick={() => updateFormData("emailMarketing", em)}
                        className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                          formData.emailMarketing === em
                            ? "bg-white text-black"
                            : "bg-white/5 border border-white/10 hover:bg-white/10 text-white"
                        }`}
                      >
                        {em}
                      </button>
                    ))}
                  </div>
                  {errors.emailMarketing && <p className="text-red-500 text-sm mt-2">{errors.emailMarketing}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-3 text-white">Donde almacenan la base de datos de clientes?</label>
                  <div className="space-y-3">
                    {baseDatos.map((bd) => (
                      <button
                        key={bd}
                        type="button"
                        onClick={() => updateFormData("baseDatos", bd)}
                        className={`w-full px-4 py-3 rounded-xl text-sm font-medium transition-all text-left ${
                          formData.baseDatos === bd
                            ? "bg-white text-black"
                            : "bg-white/5 border border-white/10 hover:bg-white/10 text-white"
                        }`}
                      >
                        {bd}
                      </button>
                    ))}
                  </div>
                  {errors.baseDatos && <p className="text-red-500 text-sm mt-2">{errors.baseDatos}</p>}
                </div>
              </div>
            )}

            {currentStep === 6 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-3 text-white">
                    Si pudieras solucionar UN solo problema de tu E-commerce manana con una varita magica, cual seria?
                  </label>
                  <div className="space-y-3">
                    {problemas.map((prob) => (
                      <button
                        key={prob}
                        type="button"
                        onClick={() => updateFormData("problemaUnico", prob)}
                        className={`w-full px-4 py-3 rounded-xl text-sm font-medium transition-all text-left ${
                          formData.problemaUnico === prob
                            ? "bg-white text-black"
                            : "bg-white/5 border border-white/10 hover:bg-white/10 text-white"
                        }`}
                      >
                        {prob}
                      </button>
                    ))}
                  </div>
                  {errors.problemaUnico && <p className="text-red-500 text-sm mt-2">{errors.problemaUnico}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Comentarios adicionales (opcional)</label>
                  <textarea
                    value={formData.comentarios}
                    onChange={(e) => updateFormData("comentarios", e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none transition-colors resize-none text-white placeholder:text-white/40"
                    placeholder="Cuentanos mas sobre tu negocio o cualquier detalle que consideres importante..."
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
