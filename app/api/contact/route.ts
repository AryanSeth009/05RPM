import { createClient } from '@/lib/supabase'
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { name, email, message } = body

        // 1. Save to Supabase
        const supabase = createClient()
        const { error: supabaseError } = await supabase
            .from('inquiries')
            .insert([{ name, email, message: message || null }])

        if (supabaseError) {
            console.error('Supabase Error:', supabaseError)
            return NextResponse.json({ error: 'Failed to save inquiry' }, { status: 500 })
        }

        // 2. Send Email Notification
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || '587'),
            secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        })

        const mailOptions = {
            from: `"05RPM Website" <${process.env.SMTP_USER}>`,
            to: process.env.ADMIN_EMAIL,
            subject: `New Inquiry from ${name}`,
            text: `You have a new inquiry from your website.

Name: ${name}
Email: ${email}
Message: ${message || 'No message provided.'}

---
Sent from 05RPM Website`,
            html: `
                <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
                    <h2 style="color: #333;">New Inquiry Received</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Message:</strong></p>
                    <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #cc0000; margin-top: 10px;">
                        ${(message || 'No message provided.').replace(/\n/g, '<br>') || ''}
                    </div>
                    <hr style="margin-top: 30px; border: 0; border-top: 1px solid #eee;">
                    <p style="font-size: 12px; color: #888;">This email was sent from the contact form on 05RPM Website.</p>
                </div>
            `,
        }

        await transporter.sendMail(mailOptions)

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('API Error:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
