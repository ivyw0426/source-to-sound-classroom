-- Source to Sound Classroom Supabase setup.
-- Review policies with a qualified privacy/legal advisor before collecting
-- information from minors or operating the bootcamp at scale.

create extension if not exists "pgcrypto";

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  full_name text,
  role text check (
    role in (
      'Teacher',
      'Parent or Guardian',
      'School Administrator',
      'Community or Program Partner',
      'Source to Sound Administrator'
    )
  ),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.bootcamp_registrations (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  adult_name text not null,
  adult_email text not null,
  adult_role text not null check (
    adult_role in (
      'Teacher',
      'Parent or Guardian',
      'School Administrator',
      'Community or Program Partner',
      'Source to Sound Administrator'
    )
  ),
  school_or_organization text not null,
  student_first_name text not null,
  student_grade text not null check (student_grade in ('6', '7', '8')),
  city text not null,
  state text not null,
  preferred_class_slot text not null,
  alternate_class_slot text,
  technology_access text not null,
  research_interest text not null,
  accommodations_or_notes text,
  guardian_consent_confirmed boolean not null default false,
  status text not null default 'Submitted' check (
    status in ('Submitted', 'Under Review', 'Accepted', 'Waitlisted', 'Declined')
  ),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id)
);

alter table public.profiles enable row level security;
alter table public.bootcamp_registrations enable row level security;

create policy "Users can view own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can insert own profile"
  on public.profiles for insert
  with check (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id)
  with check (auth.uid() = id);

create policy "Users can view own bootcamp registration"
  on public.bootcamp_registrations for select
  using (auth.uid() = user_id);

create policy "Users can insert own bootcamp registration"
  on public.bootcamp_registrations for insert
  with check (auth.uid() = user_id);

create policy "Users can update own submitted bootcamp registration"
  on public.bootcamp_registrations for update
  using (auth.uid() = user_id and status = 'Submitted')
  with check (auth.uid() = user_id and status = 'Submitted');

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name, role)
  values (
    new.id,
    new.email,
    new.raw_user_meta_data ->> 'full_name',
    new.raw_user_meta_data ->> 'role'
  )
  on conflict (id) do update
    set email = excluded.email,
        full_name = coalesce(public.profiles.full_name, excluded.full_name),
        role = coalesce(public.profiles.role, excluded.role),
        updated_at = now();
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
