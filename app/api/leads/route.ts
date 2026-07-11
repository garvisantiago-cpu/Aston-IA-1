import { NextRequest, NextResponse } from "next/server"

// In a real app, you would save this to a database
const capturedLeads: Array<{ email: string; timestamp: string }> = []

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 })
    }

    // In a real app, you would:
    // 1. Check if email already exists
    // 2. Save to database (Supabase, MongoDB, etc.)
    // 3. Send confirmation email
    // 4. Integrate with CRM/email service

    console.log("New lead captured:", email)
    capturedLeads.push({
      email,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      { success: true, message: "Lead captured successfully" },
      { status: 201 }
    )
  } catch (error) {
    console.error("Error capturing lead:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    message: "Lead capture endpoint - use POST to submit a lead",
    leadsCount: capturedLeads.length,
  })
}
