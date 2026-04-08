# Adam Peluqueria

Landing page built with Next.js for a `peluquero / barbero a domicilio en Bilbao`.

The site is designed to convert paid and organic traffic into two primary actions:

- WhatsApp reservations
- Phone calls

## Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts

```bash
npm run dev
npm run build
npm run start
```

## Configuration

Set the public site URL in your environment when deploying:

```bash
NEXT_PUBLIC_SITE_URL=https://adampeluqueria.com
NEXT_PUBLIC_CONTACT_EMAIL=hola@adampeluqueria.com
LEGAL_TAX_ID=
```

Main business and SEO constants live in `lib/site.ts`, including:

- WhatsApp URL
- Phone number
- Service area
- Site title and description

The tax ID is intentionally not hardcoded in the repository. Keep it in `LEGAL_TAX_ID` and only
publish it when the site is no longer in prelaunch mode.

## Project structure

- `app/page.tsx`: main landing page
- `app/globals.css`: global design system and shared UI tokens
- `app/aviso-legal/page.tsx`: legal placeholder page
- `app/privacidad/page.tsx`: privacy placeholder page
- `lib/site.ts`: contact, SEO, and service metadata

## Notes

- The current design direction is premium, minimal, and conversion-focused.
- The page is optimized for mobile-first booking flows.
- Legal pages are placeholders and should be completed with final business data before launch.
- This project is ready for static deployment on Cloudflare Pages.
- See `CLOUDFLARE_PAGES.md` for the recommended deployment flow.
