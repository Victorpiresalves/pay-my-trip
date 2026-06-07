import Stripe from 'stripe';

const PRICES: Record<number, number> = { 1: 1000, 2: 1500, 3: 2000 }; // cents CAD

export async function POST(request: Request) {
  const { country, goals } = await request.json() as { country: string; goals: number };

  if (!country || !goals || !PRICES[goals]) {
    return Response.json({ error: 'Invalid payload' }, { status: 400 });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? '';

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'cad',
          product_data: {
            name: `${goals} Polaroid${goals > 1 ? 's' : ''} — ${goals} Goal${goals > 1 ? 's' : ''} for ${country}`,
          },
          unit_amount: PRICES[goals],
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    metadata: { country, goals: String(goals) },
    success_url: `${siteUrl}/success`,
    cancel_url: `${siteUrl}/`,
  });

  return Response.json({ url: session.url });
}
