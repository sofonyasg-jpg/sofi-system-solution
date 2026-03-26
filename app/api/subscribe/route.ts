import { NextResponse } from 'next/server'
import { z } from 'zod'
import prisma from '@/lib/prisma'

// ፋይሉ ስለሌለ እዚሁ schema-ውን እንፈጥረዋለን
const subscribeSchema = z.object({
  email: z.string().email("ትክክለኛ ኢሜይል ያስገቡ"),
  language: z.string().optional(),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // ዳታውን እዚሁ ባለው schema እናረጋግጣለን
    const parsedData = subscribeSchema.parse(body);
    const email = parsedData.email;
    const language = parsedData.language || 'am';

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