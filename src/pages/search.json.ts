import { getCollection } from 'astro:content';

const basePath = '/Luku';

export async function GET() {
  const posts = (await getCollection('posts')).filter((post) => !post.data.draft);

  const postItems = posts.map((post) => ({
    id: `post-${post.slug}`,
    title: post.data.title,
    url: `${basePath}/posts/${post.slug}/`,
    category: post.data.category,
    tags: post.data.tags || [],
    description: post.data.description,
    body: post.body ? post.body.slice(0, 300) : '',
    image: post.data.image ? `${basePath}/images/${post.data.image}` : `${basePath}/images/hero-image.svg`,
    type: 'article'
  }));

  const staticItems = [
    {
      id: 'page-style',
      title: 'Style Hub — Corporate, Smart Casual & Modest Wear',
      url: `${basePath}/style/`,
      category: 'Style',
      tags: ['style', 'office wear', 'corporate', 'smart casual', 'modest wear', 'capsule wardrobe'],
      description: 'Practical styling for corporate wear, modest wear, smart casual dressing, and fashion design learning.',
      image: `${basePath}/images/nancy-smart-luku.webp`,
      type: 'page'
    },
    {
      id: 'page-corporate-wear',
      title: 'Corporate Wear — Professional Office Dressing',
      url: `${basePath}/style/corporate-wear/`,
      category: 'Style',
      tags: ['corporate wear', 'office outfits', 'blazers', 'trousers', 'shirts', 'suits'],
      description: 'Corporate wear guidelines, office wardrobe essentials, blazers, trousers, and professional outfits.',
      image: `${basePath}/images/office-capsule-brown-blazer.jpg`,
      type: 'category'
    },
    {
      id: 'page-corporate-wear-men',
      title: "Men's Corporate Wear — Suits, Shirts & Office Style",
      url: `${basePath}/style/corporate-wear/men/`,
      category: 'Style',
      tags: ['men', "men's corporate", 'shirts', 'trousers', 'blazers', 'shoes', 'accessories'],
      description: "Tailored suits, dress shirts, formal trousers, and professional office layering for men.",
      image: `${basePath}/images/office-capsule-hero-camel.jpg`,
      type: 'subcategory'
    },
    {
      id: 'page-corporate-wear-women',
      title: "Women's Corporate Wear — Blazers, Blouses & Tailored Outfits",
      url: `${basePath}/style/corporate-wear/women/`,
      category: 'Style',
      tags: ['women', "women's corporate", 'blouses', 'trousers', 'skirts', 'blazers'],
      description: "Tailored blazers, blouses, trousers, pencil skirts, office heels, and executive outfits for women.",
      image: `${basePath}/images/office-capsule-brown-blazer.jpg`,
      type: 'subcategory'
    },
    {
      id: 'page-smart-casual',
      title: 'Smart Casual — Friday Workwear & Relaxed Outfits',
      url: `${basePath}/style/smart-casual/`,
      category: 'Style',
      tags: ['smart casual', 'friday wear', 'work to weekend', 'polos', 'chinos'],
      description: 'Friday office outfits, work-to-weekend combinations, polos, relaxed blazers, and chinos.',
      image: `${basePath}/images/three-ways-trousers-look-one.jpg`,
      type: 'category'
    },
    {
      id: 'page-smart-casual-men',
      title: "Men's Smart Casual — Polos, Chinos & Casual Blazers",
      url: `${basePath}/style/smart-casual/men/`,
      category: 'Style',
      tags: ['men', "men's smart casual", 'polos', 'chinos', 'unstructured blazers'],
      description: "Polished polo shirts, casual button-downs, tailored chinos, and loafers for men.",
      image: `${basePath}/images/three-ways-trousers-look-one.jpg`,
      type: 'subcategory'
    },
    {
      id: 'page-smart-casual-women',
      title: "Women's Smart Casual — Tops, Trousers & Friday Dressing",
      url: `${basePath}/style/smart-casual/women/`,
      category: 'Style',
      tags: ['women', "women's smart casual", 'blouses', 'flats', 'casual blazers'],
      description: "Smart tops, versatile trousers, relaxed blazers, stylish flats, and Friday outfits for women.",
      image: `${basePath}/images/nancy-smart-luku.webp`,
      type: 'subcategory'
    },
    {
      id: 'page-modest-wear',
      title: 'Modest Wear — Professional Coverage & Silhouettes',
      url: `${basePath}/style/modest-wear/`,
      category: 'Style',
      tags: ['modest wear', 'modest style', 'layering', 'silhouettes', 'duster coats'],
      description: 'Modest professional dressing, appropriate lengths, layering, and elegant office wardrobe building.',
      image: `${basePath}/images/office-capsule-flatlay-10pieces.jpg`,
      type: 'category'
    },
    {
      id: 'page-modest-wear-men',
      title: "Men's Modest Wear — Long-Sleeve Shirts & Relaxed Trousers",
      url: `${basePath}/style/modest-wear/men/`,
      category: 'Style',
      tags: ['men', "men's modest", 'long-sleeve', 'relaxed trousers', 'jackets'],
      description: "Full-sleeve professional shirts, relaxed tailored trousers, longline outerwear for men.",
      image: `${basePath}/images/office-capsule-flatlay-10pieces.jpg`,
      type: 'subcategory'
    },
    {
      id: 'page-modest-wear-women',
      title: "Women's Modest Wear — Skirts, Wide-Leg Trousers & Duster Coats",
      url: `${basePath}/style/modest-wear/women/`,
      category: 'Style',
      tags: ['women', "women's modest", 'midi skirts', 'maxi skirts', 'wide-leg trousers'],
      description: "Midi/maxi skirts, fluid wide-leg trousers, longline coats, and modest office outfits for women.",
      image: `${basePath}/images/office-capsule-skirt-combo.png`,
      type: 'subcategory'
    },
    {
      id: 'page-design-journey',
      title: 'Design Journey — Fashion Theory & Garment Construction',
      url: `${basePath}/design-journey/`,
      category: 'Style',
      tags: ['design journey', 'fashion design', 'fabric study', 'pattern drafting', 'garment construction', 'sewing'],
      description: 'Documenting fashion theory, silhouettes, fabrics, pattern drafting, and sewing machine practice.',
      image: `${basePath}/images/office-capsule-flatlay-10pieces.jpg`,
      type: 'page'
    },
    {
      id: 'page-fitness',
      title: 'Fitness — 30-Minute Workouts for Busy Professionals',
      url: `${basePath}/fitness/`,
      category: 'Fitness',
      tags: ['fitness', '30-minute workout', 'home workout', 'no gym', 'workday movement', 'mobility'],
      description: '30-minute full-body routines, no-equipment home workouts, and workday mobility for busy professionals.',
      image: `${basePath}/images/cardio-conditioning-cover.jpg`,
      type: 'page'
    },
    {
      id: 'page-lifestyle',
      title: 'Lifestyle — Routines, Organization & Working Life',
      url: `${basePath}/lifestyle/`,
      category: 'Lifestyle',
      tags: ['lifestyle', 'daily routines', 'organization', 'time management', 'workday prep'],
      description: 'Practical lifestyle systems, personal organization, time management, and habits for working professionals.',
      image: `${basePath}/images/office-capsule-flatlay-10pieces.jpg`,
      type: 'page'
    },
    {
      id: 'page-about',
      title: 'About SmartLukuFitness — Style, Fitness & Lifestyle',
      url: `${basePath}/about/`,
      category: 'About',
      tags: ['about', 'smartlukufitness', 'nancy wambui', 'luku story'],
      description: 'Learn about SmartLukuFitness and our core three pillars: Style, Fitness, and Lifestyle.',
      image: `${basePath}/images/logo.webp`,
      type: 'page'
    }
  ];

  const allItems = [...postItems, ...staticItems];

  return new Response(JSON.stringify(allItems), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}
