// import { NextResponse } from 'next/server';
// import twilio from 'twilio';

// const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// export async function POST(request) {
//   const body = await request.json();
//   const { name, email, phone, projectType, message } = body;

//   const smsContent = `
//     New Contact Form Submission:
//     Name: ${name}
//     Email: ${email}
//     Phone: ${phone}
//     Project Type: ${projectType}
//     Message: ${message}
//   `;

//   try {
//     await client.messages.create({
//       body: smsContent,
//       from: process.env.TWILIO_PHONE_NUMBER,
//       to: 'your-company-phone-number'
//     });
//     return NextResponse.json({ message: 'SMS sent successfully' }, { status: 200 });
//   } catch (error) {
//     console.error('Error sending SMS:', error);
//     return NextResponse.json({ error: 'Error sending SMS' }, { status: 500 });
//   }
// }