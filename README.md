# SmartLukuFitness

A fast, static blog for fitness and nutrition content with a focus on budget-friendly Kenyan meals and simple home workouts.

## What is included
- Astro + Markdown blog posts
- Mobile-first responsive design
- SEO basics: meta tags, Open Graph, sitemap, robots.txt, schema markup
- Category pages for Nutrition and Fitness
- Affiliate-card and advertising-space components, ready to connect to real services

## Run locally
1. Install dependencies: npm ci
2. Start the site: npm run dev
3. Open http://localhost:4321
4. Validate the project: npm run check

## Add a new blog post
1. Create a new Markdown file in src/content/posts/
2. Use this frontmatter structure:

```md
---
title: My Post Title
description: Short meta description for search results.
pubDate: 2026-07-13
category: Nutrition
tags:
  - kenya
  - protein
readTime: 5 min read
image: meal1.jpg
imageAlt: Descriptive alt text for the image
featured: false
draft: false
affiliateProduct:
  title: Example Product
  description: Short description
  price: KES 3,000
  image: product-image.jpg
  link: https://your-affiliate-link.example
---
```

3. Write the post body below the frontmatter.
4. Restart the dev server if needed.

## Deploy
The included GitHub Actions workflow deploys the site to GitHub Pages. The configured URL is `https://missynancy.github.io/Luku/`.

## Before publishing

- Replace the sample affiliate URLs with real, disclosed partner links.
- Connect a real contact and newsletter provider before collecting visitor details.
- Use only images you created or have permission to publish.
