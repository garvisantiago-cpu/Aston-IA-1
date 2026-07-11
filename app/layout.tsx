import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Aston IA — Agentes IA y automatización para e-commerce de ropa",
  description:
    "Aston IA implementa agentes de inteligencia artificial para e-commerce de moda: atención 24/7, gestión de stock, prospección de leads, publicaciones automáticas y análisis de rendimiento.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn("min-h-screen bg-black font-sans antialiased selection:bg-white/20", inter.variable)}>
        {children}
      </body>
    </html>
  )
}
