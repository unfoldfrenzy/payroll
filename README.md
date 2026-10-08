# Payroll Intelligence V3.1

Production-oriented Indian payroll software benchmark built for **Vercel + MongoDB Atlas**. No Docker, Redis, VPS, or local MongoDB required.

## Features
- MongoDB Atlas database
- Admin dashboard with Basic Auth
- Vendor CRUD foundation + add/edit/delete API
- Multiple vendor sources
- CSS / regex / JSON-LD extraction foundation
- Daily Vercel Cron price checks
- Pending price-change approval workflow
- Price history
- Crawl health/error tracking
- Programmatic vendor pages
- Dynamic sitemap and robots.txt
- Programmatic vendor-vs-vendor comparison pages

## Local setup (Windows CMD)
1. Create a MongoDB Atlas Free cluster.
2. Create a database user and allow your current IP.
3. Copy `.env.example` to `.env.local`.
4. Put your real `MONGODB_URI` in `.env.local`.
5. Run:

```cmd
npm install
npm run seed
npm run dev
```

Open http://localhost:3000
Admin: http://localhost:3000/admin
Health: http://localhost:3000/api/health
Sitemap: http://localhost:3000/sitemap.xml

## Admin
The browser asks once for `ADMIN_EMAIL` and `ADMIN_PASSWORD` and keeps the Basic Auth header in sessionStorage for the tab. Use Logout to clear it.

## Automatic price updates
Vercel Cron calls `/api/cron/update-prices` daily. The Admin dashboard can also trigger the same job manually. The endpoint requires `Authorization: Bearer <CRON_SECRET>`.

A detected price change is **pending** and is not published until an admin approves it.

## Vercel deployment
Import the repository into Vercel, add these environment variables for Production/Preview as needed:
- MONGODB_URI
- ADMIN_EMAIL
- ADMIN_PASSWORD
- CRON_SECRET
- NEXT_PUBLIC_SITE_URL

The included `vercel.json` schedules the price updater once per day. Vercel Hobby cron schedules are limited to once daily.

## Google Search Console
After deployment, verify your domain in Google Search Console and submit:
`https://YOUR-DOMAIN/sitemap.xml`

## Important crawler limitation
Many vendor sites render prices with JavaScript, cookies, forms, or login gates. The built-in collector is intentionally conservative. Prefer official server-rendered pricing sources and verify changes before publishing.
