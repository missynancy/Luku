# SmartLukuFitness

A fast, static blog for fitness and nutrition content with a focus on budget-friendly Kenyan meals and simple home workouts.

## What is included
- Astro + Markdown blog posts
- Mobile-first responsive design
- SEO basics: meta tags, Open Graph, sitemap, robots.txt, schema markup
- Category pages for Nutrition and Fitness
- Monetization placeholders for affiliate cards, AdSense slots, and email signup

## Run locally
1. Install dependencies: npm install
2. Start the site: npm run dev
3. Open http://localhost:4321

## Add a new blog post
1. Create a new Markdown file in src/content/posts/
2. Use this frontmatter structure:

```md
---
title: My Post Title
description: Short meta description for search results.
pubDate: 2026-07-13
category: Nutrition
_tags:
  - kenya
  - protein
readTime: 5 min read
image: hero-image.jpg
imageAlt: Descriptive alt text for the image
featured: false
draft: false
affiliateProduct:
  title: Example Product
  description: Short description
  price: KES 3,000
  image: /images/affiliate-product.jpg
  link: https://example.com
---
```

3. Write the post body below the frontmatter.
4. Restart the dev server if needed.

## Deploy
The site is ready for free deployment on Vercel or Netlify.
