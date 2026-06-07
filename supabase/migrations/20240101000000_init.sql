-- Tabela de países com contagem de gols
create table if not exists countries (
  code  text primary key,
  goals int  not null default 0
);

-- Dados iniciais dos 10 países do ranking
insert into countries (code) values
  ('BR'), ('AR'), ('FR'), ('DE'), ('PT'),
  ('ES'), ('CA'), ('IT'), ('MX'), ('US')
on conflict (code) do nothing;

-- Função para incrementar gols de forma atômica (sem race condition)
create or replace function increment_goals(country_code text, amount int)
returns void
language sql
security definer
as $$
  update countries
  set goals = goals + amount
  where code = country_code;
$$;

-- Permitir que a função seja chamada pelo anon key via PostgREST
grant execute on function increment_goals(text, int) to anon, authenticated;
