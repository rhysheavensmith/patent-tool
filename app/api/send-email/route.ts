import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'delivered@resend.dev'; // Replace with your desired recipient email or use env var
const FROM_EMAIL = 'Questionnaire <onboarding@resend.dev>'; // Replace with your verified Resend domain/email

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message, result } = body;

    if (!name || !email || !message || !result) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // You can customize the email subject and body here
    const subject = `New Quote Request from ${name}`;
    const emailBody = `
      <p>You received a new quote request:</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      <hr>
      <p><strong>Questionnaire Result:</strong></p>
      <p>${result}</p>
    `;

    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      subject: subject,
      html: emailBody,
      replyTo: email,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email sent successfully', data });

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
} 