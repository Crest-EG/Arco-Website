# Arco Chemicals — Website Build Plan

Read this whole file before writing code. Follow it strictly. Do not invent colors, content structure, or features that are not listed here.

## 1. Project

Marketing website for **Arco Chemicals (اركو للكيماويات)**, an Egyptian factory producing agricultural chemicals: **pesticides** and **fertilizers**. The company has no website yet.

- Frontend only. No backend, no database, no auth.
- Stack: **Next.js (App Router) + TypeScript + Tailwind CSS**, deployed on **Vercel**.
- Languages: **Arabic (RTL, default) + English (LTR)**.
- All content lives in the repo (files, not a CMS).

## 2. Company info (use everywhere consistently)

| Item | Value |
|---|---|
| Name EN | Arco Chemicals (short: Arco) |
| Name AR | اركو للكيماويات (short: اركو) |
| Legal name | اركو للكيماويات |
| Phone / WhatsApp | 010 80021195 (international: +20 10 80021195) |
| Instagram | https://www.instagram.com/arcochemicals1 |
| Facebook | https://www.facebook.com/arcochemicals1/ |
| Factory | South of the 3rd Industrial Zone, Borg El Arab, Alexandria, Egypt |
| Factory map | https://maps.google.com/maps?q=30.8450646%2C29.6111098&z=17&hl=en |
| Dealings | All business is handled through the company's office in **Smouha, Alexandria** |

Put all of these in one file `src/config/site.ts` and read from it everywhere. Never hardcode them in components.

Do not invent: email address, office street address, founding year, certifications, client names, statistics. If a section needs a number or claim that is not provided, leave it out or mark it with a clearly visible `TODO` in the data file, never on the rendered page.

## 3. Brand and design rules

### Colors (only these, no exceptions)
- White `#FFFFFF`
- Green `#8DC63F`
- Black `#000000`

Ratio: **60% white, 30% green, 10% black.**

- Define them as CSS variables / Tailwind theme tokens: `--white`, `--green`, `--black`. Use nothing else.
- Allowed derived usage: opacity of these three (e.g. `black/70` for secondary text, `green/10` for subtle backgrounds). No new hues, no grays picked from a palette generator, no gradients to other colors.
- Secondary/ghost elements: white with a **thin border** (use sparingly), or dark.
- Contrast: green text on white is weak. Use green for backgrounds, accents, icons, and large shapes; use dark for body text. Text on green background must be dark (`#000000`) or white only when large and bold. Verify contrast.

### Logo
Logo pack is provided in the repo (all sizes and variants: white, dark, icon-only, full). Choose per context:
- Navbar: horizontal/full logo in dark on white (white variant if the navbar sits on a dark/green hero).
- Favicon, tab icon, app icons: icon-only.
- Footer: full logo (white variant on dark footer).
- Open Graph image: full logo on white with green accent.

Prefer SVG. Do not recolor or distort logos. Generate favicon/apple-touch-icon/OG image from the provided files.

### Look and feel
- Must **not** look like a WordPress/ready-made template. Custom, clean, modern, industrial-agricultural feel. Generous white space, large type, strong grid, real hierarchy.
- Typography: one Arabic-capable family pair that works for both languages (e.g. Cairo or IBM Plex Sans Arabic for Arabic + a matching Latin face). Load with `next/font`. Max 2 families.
- Shapes: draw inspiration from the logo's geometry (rounded pill + diagonal cut lines). Reuse that motif subtly as section dividers or decorative shapes, in the brand colors only.
- Imagery: use product images and real photos when provided. Until then use clean placeholders (flat brand-color blocks or simple SVG shapes), not stock photos.
- **Motion:** smooth transitions between sections (scroll-reveal, staggered entrances, subtle parallax or section-to-section transitions). Use **Framer Motion** (or CSS scroll-driven animations). Respect `prefers-reduced-motion`. Keep it performant (transform/opacity only).
- Responsive: mobile first. Test 360px, 768px, 1024px, 1440px.
- Accessibility: semantic HTML, focus states, alt text, correct `lang` and `dir`, keyboard navigable, WCAG AA contrast.

## 4. i18n and routing

- Library: `next-intl` (or equivalent App Router solution).
- Routes: `/ar/...` and `/en/...`. Default locale `ar`. Root `/` redirects to `/ar` (or detects browser language, default Arabic).
- `<html lang dir>` set per locale. Use logical CSS properties (`ms-`, `me-`, `ps-`, `pe-`, `start`, `end`) so RTL/LTR both work. No hardcoded left/right.
- Language switcher in navbar. Preserves the current page.
- All UI strings in `messages/ar.json` and `messages/en.json`. No hardcoded strings in components.
- Arabic copy must be natural, professional Modern Standard Arabic, not literal translation. Write both languages properly.
- Numbers/phone: keep phone number LTR inside RTL text (`dir="ltr"` on that span).

## 5. Pages

| Page | Route |
|---|---|
| Landing | `/[locale]` |
| Products (listing with categories) | `/[locale]/products` |
| Category | `/[locale]/products/[category]` (or filter via query, choose the cleaner option) |
| Product details | `/[locale]/products/[category]/[slug]` |
| About | `/[locale]/about` |
| Contact + FAQ | `/[locale]/contact` |
| Privacy Policy | `/[locale]/privacy` |
| Terms & Conditions | `/[locale]/terms` |
| Error page | `error.tsx` (+ `global-error.tsx`) |
| Not found | `not-found.tsx` |

Error and 404 pages: branded, bilingual (based on locale), with a link back home and to products.

### Shared layout
- **Navbar:** logo, links (Home, Products, About, Contact), language switcher, a primary CTA button ("Contact us" / "تواصل معنا"). Sticky, with subtle change on scroll. Mobile: clean slide-in menu.
- **Footer:** full logo, short company line, quick links, product categories, contact info (phone, socials, factory location link), legal links (Privacy, Terms), copyright with the company name and current year.
- **Floating WhatsApp button** (bottom corner, mirrored for RTL): opens `https://wa.me/201080021195`.

## 6. Landing page structure

Sections in this order, each with its own entrance animation and a smooth transition to the next:

1. **Hero**: strong headline + one-line subheading, two CTAs (Browse products / Contact us), a hero visual built from brand shapes (and product/factory image when available).
2. **About (short)**: who Arco is, 2 to 3 sentences, a link to the About page.
3. **Our products**: two big category cards (Pesticides, Fertilizers) linking to the category pages, plus a row of featured products from the data file.
4. **Why choose us**: 3 to 4 cards with icon + title + line. Only claims that are safe and generic (e.g. local manufacturing, quality focus, technical support through the office, reliable supply). No unverifiable numbers.
5. **Our services**: **include only if supported by real content**. Default content: technical guidance on product usage, supply to distributors and farms, product inquiries and quotations. Keep it short and generic. Easy to remove via a flag in `site.ts`.
6. **Call to action**: band in green with dark text, "Contact us" button and the phone/WhatsApp.
7. **Footer**.

## 7. Products

### Data model
Products live in `src/data/products.ts` (typed) with images in `public/products/<slug>/`. The user will replace the demo data later, so the structure must stay stable and simple.

```ts
type Localized = { ar: string; en: string };

type Category = {
  slug: 'pesticides' | 'fertilizers';
  name: Localized;
  description: Localized;
  image?: string;
};

type Product = {
  slug: string;
  category: Category['slug'];
  name: Localized;
  description: Localized;       // short + full
  composition: Localized;       // the formulation/composition (free text or list)
  usage: Localized;             // usage methods / application
  image: string;                // main image path
  gallery?: string[];
  featured?: boolean;
};
```

Optional fields can be added later by the user without code changes (render a section only if the field exists).

- Start with the two categories: **Pesticides (مبيدات)** and **Fertilizers (أسمدة)**.
- Create **6 demo products** (3 per category) with realistic but clearly placeholder content, so the layout can be judged. Mark demo products with `demo: true` in the data and keep a `// DEMO DATA` comment at the top of the file. Do not make safety, dosage, or registration claims in the demo content.
- Do not publish demo data silently as fact: in the final handoff list which items are demo.

### Product listing
Category tabs/filters, a responsive grid of product cards (image, name, short description, "View details"), and a search box (client-side) if it stays clean. Empty state when a category has no products.

### Product details page
Image (with gallery if present), name, category badge, description, composition, usage methods, a prominent **"Inquire about this product"** CTA that goes to the contact form with the product preselected (query param), related products from the same category.

## 8. Contact page and form

Page contains: the form, contact details (phone, WhatsApp, socials), factory location (map link or embedded map via iframe, bilingual), a note that business dealings are through the Smouha office, and an **FAQ** accordion.

### Form fields (keep it minimal)
- Name (required)
- Email **or** phone (at least one required)
- Message (required)
- Product (optional, dropdown from products data, preselected from query param)
- Country (optional)
- Preferred channel: **WhatsApp or Email** (the user chooses where the inquiry is sent)

### Behavior (frontend only)
1. Validate with `zod` + `react-hook-form`, with bilingual error messages.
2. On submit, **send the data to a Google Sheet** through a **Google Apps Script web app** endpoint (URL from `NEXT_PUBLIC_SHEET_ENDPOINT` env var). Use `fetch` with `mode: 'no-cors'` or the pattern that works with Apps Script. Include timestamp, locale, and all fields.
3. redirect to the chosen channel with the data pre-filled:
   - WhatsApp: `https://wa.me/201080021195?text=<encoded message with the form data>`
   - Email: `mailto:` with subject and body (use the email from `site.ts`; if no email is set, hide this option and show only WhatsApp, and flag it in the handoff). يروح للوات والايميل سواء نجح او فشل او ايا كان هوا بيفاير اند فورجيت بالنسبه للفورم وميستنهوش بيروح للاتشانل علطول - وكمان يجرب يفتح الاب اذا كان واتس او ايميل اب - لو فشل يفتح ف نيو لينك بقي 
4. Success and error states, loading state, and a basic honeypot field against bots.
5. Even if the sheet request fails, still proceed to the chosen channel so the lead is not lost.

Provide `docs/google-apps-script.md` containing the full Apps Script code (`doPost` appending a row to a sheet) and step-by-step deployment instructions (create sheet, header row, deploy as web app, "Anyone" access, copy URL to the env var). Provide `.env.example`.

### FAQ
8 to 10 questions, bilingual, generic and safe (how to order, where to buy, how to inquire about a product, delivery and coordination via the office, how to get technical advice, etc.). Stored in `src/data/faq.ts`. Add FAQPage JSON-LD.

## 9. Content pages

- **About:** company story (generic, no invented dates or numbers), mission, what we make, our factory location (Borg El Arab), how we work (through the Smouha office), a CTA.
- **Privacy Policy and Terms & Conditions:** write **real, final, usable text** in both Arabic and English, not lorem ipsum. Tailor them to this site: the company is اركو للكيماويات, it is a frontend site that collects name, email/phone or poth, message, optional product and country via the contact form, stores them in a Google Sheet, and forwards via WhatsApp/email; mention cookies/analytics only if actually used; data use, retention, user rights (access/deletion by contacting us), third parties (Google, WhatsApp/Meta, Vercel), children, policy updates, governing law **Arab Republic of Egypt**, contact details. Terms: acceptable use, product information disclaimer (information is for guidance, follow the product label and local regulations, consult an agricultural specialist), intellectual property, limitation of liability, links to third parties, changes, governing law and jurisdiction (Alexandria, Egypt). Add "Last updated" date. In the handoff, note that a legal review is recommended.

## 10. SEO

- Per-page `generateMetadata` (title, description, canonical, `alternates.languages` for hreflang `ar` / `en` / `x-default`).
- Open Graph + Twitter cards, with a generated OG image (`opengraph-image`).
- `sitemap.ts` (all locales, all products) and `robots.ts`.
- JSON-LD: `Organization` (with logo, phone, socials, factory address), `LocalBusiness`/`Manufacturer` if appropriate, `Product` on product pages, `BreadcrumbList`, `FAQPage`.
- Clean semantic headings (one `h1` per page), descriptive image alt text, `next/image` with sizes, fast LCP.
- Set `metadataBase` from `NEXT_PUBLIC_SITE_URL`.
- Target keywords naturally in both languages (agricultural chemicals, pesticides, fertilizers, Egypt, Alexandria, Borg El Arab; and Arabic equivalents).

## 11. Performance and quality

- Lighthouse targets: Performance 90+, Accessibility 95+, Best Practices 95+, SEO 100 (mobile).
- Use `next/image`, `next/font`, lazy-load below the fold, avoid heavy libraries.
- No console errors, no hydration warnings, no layout shift.
- ESLint + TypeScript strict, Prettier. No `any` without reason.
- Optional lightweight analytics only if requested (not now).

## 12. Suggested structure

```
src/
  app/[locale]/
    layout.tsx, page.tsx
    products/page.tsx, products/[category]/page.tsx, products/[category]/[slug]/page.tsx
    about/page.tsx, contact/page.tsx, privacy/page.tsx, terms/page.tsx
  app/error.tsx, app/global-error.tsx, app/not-found.tsx
  app/sitemap.ts, app/robots.ts
  components/ (layout, sections, ui, forms)
  config/site.ts
  data/products.ts, data/faq.ts
  lib/ (seo, whatsapp, form helpers)
  i18n/ (routing, request config)
messages/ar.json, messages/en.json
public/logo/, public/products/
docs/google-apps-script.md
.env.example
```

## 13. Delivery order

1. Project setup, tokens (the 3 colors), fonts, i18n, layout (navbar, footer, WhatsApp button).
2. Landing page with all sections and animations.
3. Products data, listing, category, details.
4. Contact page, form (Sheet + WhatsApp/email), FAQ, Apps Script doc.
5. About, Privacy, Terms (final copy, AR + EN).
6. Error and 404 pages.
7. SEO (metadata, sitemap, robots, JSON-LD, OG).
8. QA pass: RTL/LTR, responsive, accessibility, Lighthouse, brand color audit (search the code for any hex or Tailwind color outside the 3 brand colors and remove it).
9. Deploy to Vercel, set env vars, verify production.

## 14. Final handoff note (the agent must provide)

- What is demo and must be replaced (products, images, FAQ if generic, services section).
-- for service (في خدمة الدعم الفني كان بشمهندس مصطفى وافق على ان ممكن العملاء يتوصلوا مع المهندسين الزراعيين لاي دعم او سؤال مش شرط في المنتجات فقط
و طبعا خدمة الرئيسية مثل  التوصيل في جميع المحافظات و التعامل مع تجار الجمله والقطعه)
- Missing info to fill in: email address, office address in Smouha, any real stats or certifications.
-- D Entrance, Grand Towers, Smouha 21523, Alexandria, Egypt
-- https://maps.app.goo.gl/8LvtaXWh1MoNN7gq5
- Env vars to set on Vercel.
- How to add or edit a product.
