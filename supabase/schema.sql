-- Unnamed HSC academic platform core — prepared for the cloud-account milestone.
-- Run only after reviewing it in a dedicated Supabase project.

create extension if not exists pgcrypto;

create table if not exists public.student_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null,
  class_level smallint check (class_level in (11, 12)),
  academic_group text check (academic_group in ('business-studies', 'humanities')),
  board text,
  hsc_year smallint,
  daily_minutes smallint default 45 check (daily_minutes between 10 and 480),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.syllabus_versions (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  academic_year text not null,
  source_url text,
  status text not null default 'draft' check (status in ('draft','review','published','archived')),
  reviewed_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.subjects (
  id uuid primary key default gen_random_uuid(),
  syllabus_version_id uuid not null references public.syllabus_versions(id),
  slug text not null,
  name_en text not null,
  name_bn text not null,
  academic_group text not null,
  paper smallint check (paper in (1,2)),
  unique (syllabus_version_id, slug, paper)
);

create table if not exists public.chapters (
  id uuid primary key default gen_random_uuid(),
  subject_id uuid not null references public.subjects(id) on delete cascade,
  position smallint not null,
  title_en text not null,
  title_bn text not null,
  status text not null default 'draft',
  unique (subject_id, position)
);

create table if not exists public.topics (
  id uuid primary key default gen_random_uuid(),
  chapter_id uuid not null references public.chapters(id) on delete cascade,
  position smallint not null,
  title_en text not null,
  title_bn text not null,
  unique (chapter_id, position)
);

create table if not exists public.questions (
  id uuid primary key default gen_random_uuid(),
  topic_id uuid not null references public.topics(id) on delete cascade,
  kind text not null check (kind in ('mcq','short','cq')),
  prompt jsonb not null,
  answer jsonb not null,
  explanation jsonb,
  difficulty text not null check (difficulty in ('foundation','standard','advanced')),
  source_type text not null default 'original',
  source_label text,
  source_url text,
  review_status text not null default 'draft',
  reviewed_by uuid references auth.users(id),
  reviewed_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.question_attempts (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references auth.users(id) on delete cascade,
  question_id uuid not null references public.questions(id) on delete cascade,
  selected_answer jsonb,
  is_correct boolean,
  confidence smallint check (confidence between 1 and 3),
  duration_seconds integer,
  attempted_at timestamptz not null default now()
);

create table if not exists public.topic_mastery (
  student_id uuid not null references auth.users(id) on delete cascade,
  topic_id uuid not null references public.topics(id) on delete cascade,
  mastery_score numeric(5,2) not null default 0 check (mastery_score between 0 and 100),
  next_review_at timestamptz,
  last_practised_at timestamptz,
  primary key (student_id, topic_id)
);

create table if not exists public.mistake_notebook (
  student_id uuid not null references auth.users(id) on delete cascade,
  question_id uuid not null references public.questions(id) on delete cascade,
  mistake_type text,
  repeat_count integer not null default 1,
  resolved_at timestamptz,
  next_review_at timestamptz not null default now(),
  primary key (student_id, question_id)
);

alter table public.student_profiles enable row level security;
alter table public.question_attempts enable row level security;
alter table public.topic_mastery enable row level security;
alter table public.mistake_notebook enable row level security;

create policy "Students read own profile" on public.student_profiles for select using (auth.uid() = id);
create policy "Students update own profile" on public.student_profiles for update using (auth.uid() = id);
create policy "Students own attempts" on public.question_attempts for all using (auth.uid() = student_id) with check (auth.uid() = student_id);
create policy "Students own mastery" on public.topic_mastery for all using (auth.uid() = student_id) with check (auth.uid() = student_id);
create policy "Students own mistakes" on public.mistake_notebook for all using (auth.uid() = student_id) with check (auth.uid() = student_id);
