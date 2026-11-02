import fs from 'fs';
import path from 'path';

const productImages = {
  // 1: Wireless Earbuds
  earbuds: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=700&h=700&q=85',
  // 2: Smart Watch
  watch: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&h=700&q=85',
  // 3: Luxury Perfume
  perfume: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=700&h=700&q=85',
  // 4: Hair Dryer
  dryer: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&h=700&q=85',
  // 5: Portable Bluetooth Speaker
  speaker: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=700&h=700&q=85',
  // 6: Makeup Set
  makeup: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=700&h=700&q=85',
  // 7: Insulated Water Bottle
  bottle: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=700&h=700&q=85',
  // 8: Digital Air Fryer
  airfryer: 'https://images.unsplash.com/photo-1585659722983-3a675dabf23d?auto=format&fit=crop&w=700&h=700&q=85',
  // 9: Leather Tote Bag
  bag: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=700&h=700&q=85',
  // 10: Classic Abaya
  abaya: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=700&h=700&q=85',
  // 11: Over-Ear Headphones
  headphones: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&h=700&q=85',
  // 12: Vitamin Daily Pack
  vitamin: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=700&h=700&q=85',
  // 13: Plush Teddy Bear
  toy: 'https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=700&h=700&q=85',
  // 14: Adjustable Dumbbell Set
  dumbbell: 'https://images.unsplash.com/photo-1586401100295-7a8096fd231a?auto=format&fit=crop&w=700&h=700&q=85',
  // 15: Ceramic Cookware Set
  pot: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=700&h=700&q=85',
  // 16: Silk Scarf
  scarf: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=700&h=700&q=85',
};

// Category curated images
const categoryImages = {
  electronics: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&h=500&q=85',
  fashion: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=500&h=500&q=85',
  beauty: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=500&h=500&q=85',
  home: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=500&h=500&q=85',
  wellness: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=500&h=500&q=85',
  toys: 'https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=500&h=500&q=85',
  fitness: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=500&h=500&q=85',
};

// Hero and promo banners
const bannerImages = {
  hero: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&h=800&q=85',
  promo: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&h=600&q=85',
};

async function download(url, dest) {
  const dir = path.dirname(dest);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  console.log(`Downloading: ${url} -> ${dest}`);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buf);
  console.log(`Saved ${dest} (${buf.length} bytes)`);
}

async function run() {
  for (const [key, url] of Object.entries(productImages)) {
    const dest = path.resolve('public/images/products', `${key}.jpg`);
    await download(url, dest);
  }
  for (const [key, url] of Object.entries(categoryImages)) {
    const dest = path.resolve('public/images/categories', `${key}.jpg`);
    await download(url, dest);
  }
  for (const [key, url] of Object.entries(bannerImages)) {
    const dest = path.resolve('public/images/banners', `${key}.jpg`);
    await download(url, dest);
  }
  console.log('All downloads completed successfully!');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});

