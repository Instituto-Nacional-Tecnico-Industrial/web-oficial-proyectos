-- Referencia S2 (misma BD). Canonico: Sistema 1/supabase/tabla-contenido-inicio.sql. No aplicar dos veces.

create table if not exists public.contenido_inicio (
	id smallint primary key default 1 check (id = 1),
	contenido jsonb not null default '{"bloques":[]}'::jsonb,
	updated_by uuid references public.perfiles (id) on delete set null,
	updated_at timestamptz not null default now(),
	constraint contenido_inicio_bloques_objeto check (
		jsonb_typeof(contenido) = 'object'
		and contenido ? 'bloques'
		and jsonb_typeof(contenido -> 'bloques') = 'array'
	)
);
