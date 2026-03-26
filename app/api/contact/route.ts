import { NextResponse } from 'next/server'
import { z } from 'zod'
import prisma from '@/lib/prisma'
import { subscribeSchema } from '@/lib/validations/subscribe'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // 1. ዳታውን በ subscribeSchema እናረጋግጣለን
    // TypeScript ስህተት እንዳያሳይ 'as any' እንጠቀማለን
    const parsedData = subscribeSchema.parse(body) as any;
    const email = parsedData.email;
    const language = parsedData.language || 'am';

    // 2. በ Prisma በኩል ዳታውን እናስገባለን ወይም እናድሳለን (Upsert)
    const subscriber = await prisma.subscriber.upsert({
      where: { email },
      update: { 
        language,
        active: true 
      },
      create: { 
        email, 
        language 
      },
    })

    return NextResponse.json({ success: true, id: subscriber.id })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: error.errors }, { status: 400 })
    }
    console.error('Subscribe API Error:', error)
    return NextResponse.json({ success: false, message: 'የውስጥ ስህተት አጋጥሟል' }, { status: 500 })
  }
}