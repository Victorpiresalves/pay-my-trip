export const runtime = 'edge';

import { createSupabaseClient } from '@/lib/supabase';

export async function POST(request: Request) {
  const { country, goals } = await request.json();
  if (!country || !goals) {
    return Response.json({ error: 'missing params' }, { status: 400 });
  }

  const supabase = createSupabaseClient();
  const { error } = await supabase.rpc('increment_goals', {
    country_code: country,
    amount: Number(goals),
  });

  if (error) return Response.json({ error: error.message }, { status: 500 });

  return Response.json({ ok: true, country, goals });
}
