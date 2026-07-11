-- Run this only if you already ran schema.sql before the
-- "Source to Sound Administrator" role was added.

alter table public.profiles
  drop constraint if exists profiles_role_check;

alter table public.profiles
  add constraint profiles_role_check
  check (
    role in (
      'Teacher',
      'Parent or Guardian',
      'School Administrator',
      'Community or Program Partner',
      'Source to Sound Administrator'
    )
  );

alter table public.bootcamp_registrations
  drop constraint if exists bootcamp_registrations_adult_role_check;

alter table public.bootcamp_registrations
  add constraint bootcamp_registrations_adult_role_check
  check (
    adult_role in (
      'Teacher',
      'Parent or Guardian',
      'School Administrator',
      'Community or Program Partner',
      'Source to Sound Administrator'
    )
  );
