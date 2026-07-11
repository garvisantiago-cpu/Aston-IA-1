"use client"

import Link from "next/link"

interface LeadCaptureProps {
  variant?: "modal" | "inline" | "popup"
}

export function LeadCapture({ variant = "popup" }: LeadCaptureProps) {
  // Popup variant - redirect to consultation
  if (variant === "popup") {
    return (
      <Link
        href="/consultoria"
        className="fixed bottom-6 right-6 z-40 px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-white/90 shadow-lg hover:shadow-xl transition-all hover:scale-110"
      >
        Solicitar consultoría
      </Link>
    )
  }

  return null
}
