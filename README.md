# Atventure Amazon Services

Amazon-focused marketing site rebuilt as a mobile-friendly React + Vite application, using the existing Atventure Retail Group content as the source material and reframing the experience around Amazon growth services.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Vercel deployment

This repo is set up for single-page-app routing on Vercel via [`vercel.json`](/Users/nithin_joseph@optum.com/Documents/Playground/vercel.json).

1. Push this repo to GitHub.
2. Import the repo into Vercel.
3. Use the default build settings for Vite:
   `Build Command`: `npm run build`
   `Output Directory`: `dist`
4. Add the production domain `www.atventureamazonservices.com` in Vercel once DNS is ready.

## Content notes

- The site preserves the original source themes: services, values, team, contact information, testimonials, and privacy policy.
- The positioning is intentionally shifted toward Amazon marketplace services while keeping the company’s Target and omnichannel experience as supporting credibility.
