import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const { email } = body as { email?: string };

  // TODO: Amrit – hook this up to a newsletter provider if you add one.
  console.log('SUBSCRIBE REQUEST', { email });

  return NextResponse.json({ ok: true });
}
