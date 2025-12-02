import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const { name, email, message } = body as {
    name?: string;
    email?: string;
    message?: string;
  };

  // TODO: Amrit – connect this to SMTP or Formspree.
  console.log('CONTACT FORM SUBMISSION', { name, email, message });

  return NextResponse.json({ ok: true });
}
