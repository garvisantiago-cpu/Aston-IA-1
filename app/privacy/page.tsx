export const metadata = {
  title: "Política de Privacidad — Aston IA",
  description: "Política de privacidad y protección de datos de Aston IA",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black">
      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-white">Política de Privacidad</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-white/70 mb-8">Última actualización: Febrero 2025</p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">1. Introducción</h2>
            <p className="text-white/70 mb-4">
              Aston IA ("nosotros", "nuestro" o "la empresa") se compromete a proteger tu privacidad. Esta Política de Privacidad explica cómo recopilamos, utilizamos, compartimos y salvaguardamos tu información cuando utilizas nuestro sitio web y servicios.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">2. Información que Recopilamos</h2>
            <p className="text-white/70 mb-4">Recopilamos información que nos proporcionas directamente, incluyendo:</p>
            <ul className="list-disc list-inside text-white/70 mb-4 space-y-2">
              <li>Nombre completo</li>
              <li>Correo electrónico</li>
              <li>Número de teléfono/WhatsApp</li>
              <li>Nombre de la marca/empresa</li>
              <li>URL de tu sitio web</li>
              <li>Información sobre tu negocio e-commerce</li>
              <li>Cualquier otra información que proporciones voluntariamente</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">3. Cómo Utilizamos tu Información</h2>
            <p className="text-white/70 mb-4">Utilizamos la información recopilada para:</p>
            <ul className="list-disc list-inside text-white/70 mb-4 space-y-2">
              <li>Contactarte sobre consultoría personalizada</li>
              <li>Proporcionar información sobre nuestros servicios</li>
              <li>Responder a tus consultas y solicitudes</li>
              <li>Mejorar nuestros servicios y sitio web</li>
              <li>Cumplir con obligaciones legales y regulatorias</li>
              <li>Enviar comunicaciones relacionadas con tu consultoría</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">4. Protección de Datos</h2>
            <p className="text-white/70 mb-4">
              Implementamos medidas de seguridad técnicas, administrativas y físicas para proteger tu información personal contra acceso, alteración, divulgación o destrucción no autorizadas. Todos los datos se transmiten a través de conexiones seguras (HTTPS).
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">5. Compartir de Información</h2>
            <p className="text-white/70 mb-4">
              No vendemos, comercializamos ni alquilamos tus datos personales. Solo compartimos información cuando es necesario para prestar nuestros servicios o cuando la ley lo requiere.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">6. Retención de Datos</h2>
            <p className="text-white/70 mb-4">
              Retenemos tu información personal durante el tiempo necesario para proporcionarte nuestros servicios y cumplir con obligaciones legales. Puedes solicitar la eliminación de tus datos en cualquier momento contactándonos.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">7. Tus Derechos</h2>
            <p className="text-white/70 mb-4">Tienes derecho a:</p>
            <ul className="list-disc list-inside text-white/70 mb-4 space-y-2">
              <li>Acceder a tus datos personales</li>
              <li>Corregir datos inexactos</li>
              <li>Solicitar la eliminación de tus datos</li>
              <li>Optar por no recibir comunicaciones de marketing</li>
              <li>Revocar tu consentimiento</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">8. Contacto</h2>
            <p className="text-white/70 mb-4">
              Si tienes preguntas sobre esta Política de Privacidad o sobre cómo manejamos tus datos, contáctanos:
            </p>
            <p className="text-white/70">
              Email: <a href="mailto:info@astonia.website" className="text-blue-400 hover:text-blue-300">info@astonia.website</a>
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">9. Cambios en esta Política</h2>
            <p className="text-white/70">
              Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. Los cambios serán efectivos cuando se publiquen en nuestro sitio web.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
