# HSC2Plus Supabase setup

The app remains fully usable in guest/offline mode. Supabase only adds optional email login and cross-device progress backup.

1. Create a Supabase project.
2. In SQL Editor, run `supabase/migrations/001_student_progress.sql`.
3. In Authentication → URL Configuration add:
   - Production site URL: the final Vercel domain
   - Redirect URL: `https://YOUR_DOMAIN/account`
   - Local redirect (development only): `http://localhost:3000/account`
4. In Vercel → Project → Settings → Environment Variables add:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Redeploy the project.

Security decisions:

- Never expose the Supabase service-role key in the browser.
- Row-level security limits each student to their own `student_progress` row.
- Sync is manual to prevent silent cross-device overwrites.
- CQ answer PDFs are not uploaded by this feature.
- Guest mode and existing JSON backup/restore continue to work.
