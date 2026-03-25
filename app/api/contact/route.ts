import { NextResponse } from 'next/server'
import { z } from 'zod'
import prisma from '@/lib/prisma'
import { contactSchema } from '@/lib/validations/contact'
import { getClientIp } from '@/lib/utils'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const data = contactSchema.parse(body)

    const contact = await prisma.contact.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        service: data.service,
        message: data.message,
        language: data.language,
      },
    })

    return NextResponse.json({ success: true, id: contact.id })
  } catch (error) {
    if (error instanceof z.ZodError) return NextResponse.json({ success: false, errors: error.errors }, { status: 400 })
    console.error(error)
    return NextResponse.json({ success: false, message: 'ውስጣዊ ስህተት' }, { status: 500 })
  }
}