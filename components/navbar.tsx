"use client"

import { useState } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Menu, X, Instagram, Linkedin } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  const navLinks = [
    { name: "Agentes IA", href: "#agentes" },
    { name: "Servicios", href: "#servicios" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Contacto", href: "#contacto" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "py-4" : "py-6",
      )}
    >
        <div
          className={cn(
            "max-w-7xl mx-auto rounded-full transition-all duration-300 flex items-center justify-between px-6 py-3",
            "bg-black/70 backdrop-blur-xl border border-white/10",
          )}
        >
        <Link href="/" className="relative z-50">
          <Image
            src="/images/aston-ia-logo.svg"
            alt="Aston IA Logo"
            width={140}
            height={40}
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-3 pl-3 border-l border-white/10">
            <a
              href="https://www.instagram.com/aston_ia_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/aston-ia-586825358"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          <Link
            href="/consultoria"
            className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-white/90 transition-colors"
          >
            Solicitar consultoria gratuita
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden relative z-50 text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 bg-black/60 z-40 flex items-center justify-center md:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-light text-white hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/consultoria"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 bg-white text-black px-8 py-3 rounded-full text-lg font-semibold"
              >
                Solicitar consultoria gratuita
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
