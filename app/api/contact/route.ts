import { NextResponse } from 'next/server'
import { z } from 'zod'
import prisma from '@/lib/prisma'
import { contactSchema } from '@/lib/validations/contact' // እዚህ ጋር 'contact' መሆኑን አረጋግጥ

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // 1. ዳታውን በ contactSchema እናረጋግጣለን
    const data = contactSchema.parse(body) as any;

    // 2. በ Prisma በኩል ዳታውን እናስገባለን
    const contact = await prisma.contact.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        service: data.service,
        message: data.message,
        language: data.language || 'am', // TypeScript ስህተት እንዳያሳይ 'any' አድርገነዋል
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