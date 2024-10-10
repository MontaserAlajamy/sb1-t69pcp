import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  const { name, email, message, to } = await req.json()

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: to,
      subject: `New message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    })

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 })
  } catch (error) {
    console.error('Failed to send email:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}