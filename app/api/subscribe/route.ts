import { NextResponse } from 'next/server'
import { z } from 'zod'
import prisma from '@/lib/prisma'
import { subscribeSchema } from '@/lib/validations/contact'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, language } = subscribeSchema.parse(body)

    const subscriber = await prisma.subscriber.upsert({
      where: { email },
      update: { active: true, language },
      create: { email, language, active: true },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    if (error instanceof z.ZodError) return NextResponse.json({ success: false, errors: error.errors }, { status: 400 })
    return NextResponse.json({ success: false, message: 'ውስጣዊ ስህተት' }, { status: 500 })
  }
}