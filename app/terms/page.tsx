export const metadata = {
  title: "Términos de Servicio — Aston IA",
  description: "Términos y condiciones de uso de Aston IA",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black">
      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-white">Términos de Servicio</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-white/70 mb-8">Última actualización: Febrero 2025</p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">1. Aceptación de Términos</h2>
            <p className="text-white/70 mb-4">
              Al acceder y utilizar el sitio web de Aston IA y nuestros servicios, aceptas estar vinculado por estos Términos de Servicio. Si no estás de acuerdo con alguna parte de estos términos, no podrás utilizar nuestros servicios.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">2. Descripción de Servicios</h2>
            <p className="text-white/70 mb-4">
              Aston IA proporciona servicios de consultoría e implementación de agentes de inteligencia artificial para e-commerce de ropa. Nuestros servicios incluyen diagnósticos iniciales, diseño de soluciones IA, implementación y soporte continuo.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">3. Consultoría Gratuita</h2>
            <p className="text-white/70 mb-4">
              La consultoría inicial es gratuita y tiene como objetivo evaluar tus necesidades. Esta consultoría es sin compromiso y no obliga a la compra de servicios adicionales.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">4. Propiedad Intelectual</h2>
            <p className="text-white/70 mb-4">
              El sitio web, incluyendo todo su contenido, características y funcionalidad (incluyendo pero no limitado a, todo el código, diseño, texto e imágenes) son propiedad de Aston IA.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">5. Limitación de Responsabilidad</h2>
            <p className="text-white/70 mb-4">
              En la medida permitida por la ley, Aston IA no será responsable por daños indirectos, incidentales, especiales, consecuentes o punitivos que resulten del uso o la imposibilidad de usar nuestros servicios.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">6. Exención de Garantías</h2>
            <p className="text-white/70 mb-4">
              Nuestros servicios se proporcionan "tal cual" sin garantías de ningún tipo, ya sean expresas o implícitas. No garantizamos que nuestros servicios serán ininterrumpidos, seguros o libres de errores.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">7. Conducta del Usuario</h2>
            <p className="text-white/70 mb-4">Al utilizar nuestros servicios, aceptas:</p>
            <ul className="list-disc list-inside text-white/70 mb-4 space-y-2">
              <li>Proporcionar información precisa y completa</li>
              <li>No utilizar nuestros servicios para actividades ilegales</li>
              <li>No acosar, amenazar o abusar de nuestro personal</li>
              <li>No intentar acceder no autorizado a nuestros sistemas</li>
              <li>Cumplir con todas las leyes y regulaciones aplicables</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">8. Rescisión</h2>
            <p className="text-white/70 mb-4">
              Nos reservamos el derecho de rescindir o suspender el acceso a nuestros servicios sin previo aviso si violas estos Términos de Servicio.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">9. Modificaciones de Servicios</h2>
            <p className="text-white/70 mb-4">
              Aston IA se reserva el derecho de modificar, suspender o descontinuar nuestros servicios en cualquier momento, con o sin previo aviso.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">10. Ley Aplicable</h2>
            <p className="text-white/70 mb-4">
              Estos Términos de Servicio se rigen por las leyes de Argentina y te sometes a la jurisdicción exclusiva de los tribunales ubicados en Argentina.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">11. Contacto</h2>
            <p className="text-white/70 mb-4">
              Si tienes preguntas sobre estos Términos de Servicio, contáctanos:
            </p>
            <p className="text-white/70">
              Email: <a href="mailto:info@astonia.website" className="text-blue-400 hover:text-blue-300">info@astonia.website</a>
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">12. Cambios en estos Términos</h2>
            <p className="text-white/70">
              Nos reservamos el derecho de actualizar estos Términos de Servicio en cualquier momento. Los cambios serán efectivos cuando se publiquen en nuestro sitio web.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
