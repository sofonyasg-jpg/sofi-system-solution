import { NextResponse } from 'next/server'
import { z } from 'zod'
import prisma from '@/lib/prisma'
import { contactSchema } from '@/lib/validations/contact'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    // 'as any' ማድረጋችን TypeScript 'language' የለም ብሎ እንዳያስቆመን ይረዳናል
    const data = contactSchema.parse(body) as any;

    const contact = await prisma.contact.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        service: data.service,
        message: data.message,
        language: data.language || 'am',
      },
    })

    return NextResponse.json({ success: true, id: contact.id })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: error.errors }, { status: 400 })
    }
    console.error('Contact API Error:', error)
    return NextResponse.json({ success: false, message: 'ውስጣዊ ስህተት አጋጥሟል' }, { status: 500 })
  }
}