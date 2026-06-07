import Stripe from 'stripe';
import { createSupabaseClient } from '@/lib/supabase';

export async function POST(request: Request) {
  const body = await request.text();
  const signature = request.headers.get('stripe-signature') ?? '';

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

  let event: Stripe.Event;
  try {
    event = await stripe.webhooks.constructEventAsync(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );
  } catch {
    return new Response('Invalid signature', { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const country = session.metadata?.country;
    const goals = parseInt(session.metadata?.goals ?? '0', 10);

    if (country && goals > 0) {
      const supabase = createSupabaseClient();
      await supabase.rpc('increment_goals', { country_code: country, amount: goals });
    }
  }

  return new Response('OK', { status: 200 });
}
