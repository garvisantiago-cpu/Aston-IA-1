import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Agents } from "@/components/agents"
import { Services } from "@/components/services"
import { Work } from "@/components/work"
import { Journey } from "@/components/journey"
import { About } from "@/components/about"
import { Newsletter } from "@/components/newsletter"
import { LeadCapture } from "@/components/lead-capture"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <Agents />
      <Services />
      <Work />
      <Journey />
      <About />
      <Newsletter />
      <LeadCapture variant="popup" />
      <Footer />
    </main>
  )
}
