import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL ??
  'https://jjeqvdzrdokjuwrzozph.supabase.co';

const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqZXF2ZHpyZG9ranV3cnpvenBoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA4NjE0NzAsImV4cCI6MjA5NjQzNzQ3MH0.RtqZ3QCbUoV4XcI2cFtC5ZWjh90Ce0hLy2SswNKfH6Q';

export function createSupabaseClient() {
  return createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}
