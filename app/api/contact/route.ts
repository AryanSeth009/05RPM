import { createClient } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
    const body = await req.json()
    const supabase = createClient()
    const { error } = await supabase
        .from('inquiries')
        .insert([{ name: body.name, email: body.email, message: body.message || null }])

    if (error) return NextResponse.json({ error }, { status: 500 })

    return NextResponse.json({ success: true })
}
