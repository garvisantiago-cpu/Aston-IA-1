import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="relative pt-32 pb-12 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <Link href="/" className="mb-6 block">
              <Image
                src="/images/aston-ia-logo.svg"
                alt="Aston IA Logo"
                width={140}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-white/50 leading-relaxed">
              Agentes IA especializados para e-commerce de ropa. Automatización inteligente para tu negocio.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Navegación</h4>
            <ul className="space-y-4 text-white/60">
              <li>
                <Link href="#agentes" className="hover:text-white transition-colors">
                  Agentes IA
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#nosotros" className="hover:text-white transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Redes</h4>
            <ul className="space-y-4 text-white/60">
              <li>
                <a
                  href="https://www.instagram.com/aston_ia_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="Aston IA en Instagram"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/aston-ia-586825358"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="Aston IA en LinkedIn"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Consultoria</h4>
            <p className="text-white/60 mb-4">¿Tenés un proyecto en mente?</p>
            <Link
              href="/consultoria"
              className="inline-block text-xl font-medium hover:text-blue-400 transition-colors mb-6"
            >
              Solicitar consultoría
            </Link>
            <p className="text-white/60 mb-2">¿Preguntas?</p>
            <a href="mailto:info@astonia.website" className="text-white/80 font-medium hover:text-blue-400 transition-colors">
              info@astonia.website
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-sm text-white/40">
          <p>&copy; 2025 Aston IA — Agentes IA para e-commerce.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Política de privacidad
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Términos de servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
