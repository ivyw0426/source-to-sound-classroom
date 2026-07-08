# Source to Sound Classroom

Open-access environmental STEM lesson library and online bootcamp MVP for grades 6-8.

## Run Locally

```powershell
pnpm install
pnpm run dev
```

Open `http://localhost:3000`.

## Useful Commands

```powershell
pnpm run typecheck
pnpm run build
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:

```text
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_SITE_URL=http://localhost:3000
SUPABASE_SERVICE_ROLE_KEY=
```

The service role key is server-only and is not required for the current MVP user flows. Never expose it in client-side code.

## Supabase Setup

1. Create a Supabase project.
2. Enable email/password authentication.
3. In Supabase SQL Editor, run `supabase/schema.sql`.
4. In Authentication > URL Configuration, set the local Site URL while testing:
   - `http://127.0.0.1:3000`
5. Add local and production redirect URLs:
   - `http://localhost:3000/auth/callback`
   - `http://localhost:3000/auth/callback?next=/account`
   - `http://localhost:3000/auth/callback?next=/reset-password`
   - `http://127.0.0.1:3000/auth/callback`
   - `http://127.0.0.1:3000/auth/callback?next=/account`
   - `http://127.0.0.1:3000/auth/callback?next=/reset-password`
   - your Vercel production equivalents
6. Add the environment variables to `.env.local` and to Vercel Project Settings.
7. Restart the local dev server after editing `.env.local`.

For first local testing, you can temporarily disable required email confirmation in Supabase Authentication settings. Turn confirmation back on before inviting real users.

The schema creates:

- `profiles`
- `bootcamp_registrations`
- row-level security policies so users can view/edit only their own records
- a trigger to create a profile when a user signs up

## Bootcamp Cohorts

Edit class-slot data in `lib/bootcamp.ts`.

Each cohort supports:

- name
- start and end date
- day/time/time zone
- maximum capacity
- remaining spaces
- status: `open`, `waitlist`, `full`, or `closed`

Use `null` dates to display “Dates to be announced.”

## Routes

- `/` homepage with lesson and bootcamp promotion
- `/lessons` public lesson library
- `/lessons/[slug]` public lesson detail pages
- `/bootcamp` public online bootcamp overview
- `/bootcamp/apply` protected application form
- `/login`, `/signup`, `/forgot-password`, `/reset-password`
- `/account` protected account dashboard
- `/privacy`, `/terms`

## Privacy and Safety Notes

The MVP does not create direct student accounts, public profiles, public comments, or student-to-student messaging. Bootcamp applications ask for student first name only and avoid birthdays, home addresses, student phone numbers, and unnecessary student information.

Programs serving minors should receive professional privacy, legal, and school-policy review before collecting information at scale. Educational and safety information should be adapted to school, district, program, and local requirements.

## Deployment

Deploy to Vercel as a Next.js project. Leave the Vercel Output Directory blank/default. Add Supabase environment variables in Vercel Project Settings before enabling accounts and applications.

## Placeholders

- Bootcamp cohort dates are placeholders until final dates are announced.
- ArcGIS access, symposium professional participation, certificates, and final materials are described as planned, expected, or subject to availability.
