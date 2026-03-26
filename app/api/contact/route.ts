import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

// Prisma Client ኢንስታንስ መፍጠር
const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    // ከፎርሙ የመጣውን ዳታ መቀበል
    const body = await req.json()
    const { name, email, phone, message, service, language } = body

    // 1. አስፈላጊ ዳታዎች መኖራቸውን ማረጋገጥ (Validation)
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'እባክዎ ስም፣ ኢሜይል እና መልክት በትክክል መሙላትዎን ያረጋግጡ!' },
        { status: 400 }
      )
    }

    // 2. ባንተ Schema (model Contact) መሰረት ዳታቤዝ ውስጥ መመዝገብ
    const newContact = await prisma.contact.create({
      data: {
        name,
        email,
        phone: phone || null,
        message: message,
        service: service || "General",
        language: language || "am",
        status: "NEW", // ባንተ Enum መሰረት መጀመሪያ NEW ይሆናል
      },
    })

    // 3. የተሳካ ምላሽ መላክ
    return NextResponse.json(
      { 
        success: true, 
        message: 'መልክትዎ በስኬት ተመዝግቧል!',
        id: newContact.id 
      },
      { status: 201 }
    )

  } catch (error: any) {
    console.error('Prisma Error:', error)
    
    // በዳታቤዝ ወይም በኔትወርክ ምክንያት ስህተት ቢፈጠር
    return NextResponse.json(
      { 
        success: false, 
        error: 'መልክቱን መመዝገብ አልተቻለም። እባክዎ ትንሽ ቆይተው ደግመው ይሞክሩ!' 
      },
      { status: 500 }
    )
  } finally {
    // ግንኙነቱን ለጊዜው ማቋረጥ (Optional for Serverless)
    await prisma.$disconnect()
  }
}