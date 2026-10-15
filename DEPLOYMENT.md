# GitHub and Vercel deployment

## First push

```powershell
cd "PATH\TO\hsc-compass"
git init
git add .
git commit -m "Launch HSC Compass foundation"
git branch -M main
git remote add origin YOUR_NEW_GITHUB_REPOSITORY_URL
git push -u origin main
```

## Vercel

1. Import the new GitHub repository in Vercel.
2. Keep Framework Preset as **Next.js**.
3. Keep the root directory unchanged.
4. Deploy.

Supabase variables are not required for this demonstration release. Add the two values from `.env.example` when cloud accounts and persistent progress are connected.

## Later updates

```powershell
git add .
git commit -m "Update HSC Compass"
git push
```

