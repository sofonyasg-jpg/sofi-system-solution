import { NextResponse } from 'next/server'
import { z } from 'zod'
import prisma from '@/lib/prisma'
import { contactSchema } from '@/lib/validations/contact'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // 1. ዳታውን በ contactSchema እናረጋግጣለን
    const data = contactSchema.parse(body)

    // 2. በ Prisma በኩል ዳታውን እናስገባለን
    // ማሳሰቢያ፡ 'language' የሚለው በ Prisma Schema ላይ መኖሩን አረጋግጥ
    const contact = await prisma.contact.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        service: data.service,
        message: data.message,
        // TypeScript ስህተት ካመጣብህ (as any) በመጠቀም ለጊዜው ማለፍ ትችላለህ
        language: (data as any).language || 'am', 
      },
    })

    return NextResponse.json({ success: true, id: contact.id })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: error.errors }, { status: 400 })
    }
    console.error('Contact API Error:', error)
    return NextResponse.json({ success: false, message: 'የውስጥ ስህተት አጋጥሟል' }, { status: 500 })
  }
}