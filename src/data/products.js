export const categories = [
  { slug: 'electronics', name: 'Electronics', kind: 'earbuds', image: '/images/categories/electronics.jpg' },
  { slug: 'fashion', name: 'Fashion & Apparel', kind: 'bag', image: '/images/categories/fashion.jpg' },
  { slug: 'beauty', name: 'Beauty & Personal Care', kind: 'makeup', image: '/images/categories/beauty.jpg' },
  { slug: 'home', name: 'Home & Kitchen', kind: 'airfryer', image: '/images/categories/home.jpg' },
  { slug: 'wellness', name: 'Health & Wellness', kind: 'vitamin', image: '/images/categories/wellness.jpg' },
  { slug: 'toys', name: 'Toys & Games', kind: 'toy', image: '/images/categories/toys.jpg' },
  { slug: 'fitness', name: 'Fitness', kind: 'dumbbell', image: '/images/categories/fitness.jpg' },
]

export const brands = [
  'Aurelia', 'Noor & Co', 'Maison Dar', 'Velvet Oak', 'Halcyon', 'Saffron Lane', 'Atelier Zoe', 'Mirage',
]

const p = (id, name, sub, category, kind, price, was, rating, reviews, brand, tag, isNew, best, image) => ({
  id, name, sub, category, kind, price, was, rating, reviews, brand, tag,
  image: image || `/images/products/${kind}.jpg`,
  discount: Math.round((1 - price / was) * 100),
  isNew: !!isNew, best: !!best,
  desc: `${name} — ${sub.toLowerCase()}. Carefully selected for quality, finish and everyday use. Backed by Obssession's genuine-product guarantee and 14-day easy returns.`,
})

export const products = [
  p(1, 'Wireless Earbuds', 'Premium quality', 'electronics', 'earbuds', 79, 129, 4.7, 312, 'Halcyon', 'Audio', true, false),
  p(2, 'Smart Watch', 'Series 8', 'electronics', 'watch', 99, 149, 4.7, 521, 'Halcyon', 'Wearables', true, true),
  p(3, 'Luxury Perfume', 'For men', 'beauty', 'perfume', 149, 269, 4.8, 204, 'Maison Dar', 'Fragrance', true, true),
  p(4, 'Hair Dryer', 'Professional', 'beauty', 'dryer', 69, 139, 4.6, 148, 'Aurelia', 'Hair care', true, false),
  p(5, 'Portable Bluetooth Speaker', 'Deep bass, 20h battery', 'electronics', 'speaker', 59, 89, 4.8, 640, 'Mirage', 'Audio', false, true),
  p(6, 'Makeup Set', 'Complete brush & palette', 'beauty', 'makeup', 129, 199, 4.6, 187, 'Atelier Zoe', 'Makeup', false, true),
  p(7, 'Insulated Water Bottle', 'Keeps cold 24h', 'fitness', 'bottle', 29, 49, 4.7, 902, 'Velvet Oak', 'Hydration', false, true),
  p(8, 'Digital Air Fryer', '5L, touch controls', 'home', 'airfryer', 299, 399, 4.8, 433, 'Velvet Oak', 'Kitchen', false, true),
  p(9, 'Leather Tote Bag', 'Everyday carry', 'fashion', 'bag', 189, 329, 4.5, 96, 'Noor & Co', 'Bags', true, false),
  p(10, 'Classic Abaya', 'Soft crepe, elegant fall', 'fashion', 'abaya', 159, 299, 4.7, 233, 'Saffron Lane', 'Modest wear', false, false),
  p(11, 'Over-Ear Headphones', 'Noise cancelling', 'electronics', 'headphones', 139, 249, 4.6, 275, 'Mirage', 'Audio', false, false),
  p(12, 'Vitamin Daily Pack', '30-day wellness supply', 'wellness', 'vitamin', 49, 79, 4.5, 311, 'Aurelia', 'Supplements', false, false),
  p(13, 'Plush Teddy Bear', 'Super soft, gift ready', 'toys', 'toy', 39, 69, 4.9, 158, 'Atelier Zoe', 'Plush', false, false),
  p(14, 'Adjustable Dumbbell Set', '2 × 10 kg', 'fitness', 'dumbbell', 119, 189, 4.6, 120, 'Halcyon', 'Strength', false, false),
  p(15, 'Ceramic Cookware Set', '8 pieces, non-stick', 'home', 'pot', 219, 349, 4.7, 175, 'Maison Dar', 'Kitchen', true, false),
  p(16, 'Silk Scarf', 'Hand-finished edges', 'fashion', 'scarf', 59, 99, 4.4, 64, 'Noor & Co', 'Accessories', false, false),
]

export const money = (n) => `${n.toFixed(0)} AED`
