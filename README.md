# Arco Chemicals website

Frontend-only bilingual marketing site for Arco Chemicals, built with Next.js App Router, TypeScript, Tailwind CSS, and next-intl.

## Local development

1. Install Node.js 20 or later.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL`. Add `NEXT_PUBLIC_SHEET_ENDPOINT` after configuring Google Sheets; see [the Apps Script setup](./docs/google-apps-script.md).
4. Run `npm run dev`, then open `http://localhost:3000`.

The root route redirects to Arabic. English and Arabic pages are under `/en` and `/ar`.

## Product content

Edit the typed catalog in `src/data/products.ts` and the Crest demo list in `src/data/crest-demo-products.ts`. Store product images under `public/products/` and company photography under `public/images/`; reference both with their public URL paths. The current catalog includes demo content and must be replaced with approved product information before launch.

The shared font is in `src/app/fonts/`. Keep only active logo variants in `public/logo/`.

## Company configuration

Company details, contact methods, social links, factory and office locations, and the services visibility flag are maintained in `src/config/site.ts`.

## Validation

- `npm run typecheck`
- `npm run lint`
- `npm run build`

Set `NEXT_PUBLIC_SITE_URL` to the canonical production origin on Vercel. Set `NEXT_PUBLIC_SHEET_ENDPOINT` to the deployed Google Apps Script URL if inquiry recording is enabled.
