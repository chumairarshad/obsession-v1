import { Link } from 'react-router-dom'
import { products, categories } from '../data/products'
import ProductCard from '../components/ProductCard'
import ProductArt from '../components/ProductArt'
import { Truck, Shield, Headset, Return, Medal, Tag, Arrow } from '../components/Icons'

const perks = [
  [Truck, 'Free shipping across GCC'], [Shield, 'Secure payments'], [Headset, '24/7 support'],
  [Return, 'Easy returns'], [Medal, 'Genuine products'], [Tag, 'Best deals'],
]

export default function Home() {
  const arrivals = products.filter((p) => p.isNew).slice(0, 4)
  const best = products.filter((p) => p.best).slice(0, 6)
  return (
    <div className="container">
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">Obssession Store</span>
          <h1>The Big <em>Sale</em></h1>
          <p>Thoughtfully chosen pieces for your home, your style and your everyday. Shop more, save more.</p>
          <div><Link to="/deals" className="btn btn-gold">Shop Now <Arrow width="16" height="16" /></Link></div>
        </div>
        <div className="hero-art">
          <div className="hero-ring"><div className="big"><span>Up to</span><b>70%</b><span>off</span></div></div>
        </div>
      </section>

      <div className="perks">
        {perks.map(([Icon, t]) => <div className="perk" key={t}><Icon />{t}</div>)}
      </div>

      <section className="section">
        <div className="sec-head"><h2>Shop by Categories</h2><Link to="/shop" className="link">View all categories →</Link></div>
        <div className="cat-grid">
          {categories.map((c, i) => (
            <Link key={c.slug} to={`/shop?cat=${c.slug}`} className="cat">
              <ProductArt kind={c.kind} image={c.image} seed={i} className="art" alt={c.name} />
              {c.name}
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="split">
          <div className="promo">
            <span className="eyebrow">Limited time offer</span>
            <h3>Save big<span>on top brands</span></h3>
            <p style={{ color: '#ead9d9', maxWidth: 320 }}>Fragrance, wearables and more — handpicked favourites at their lowest prices.</p>
            <Link to="/deals" className="btn btn-gold">Shop the sale →</Link>
          </div>
          <div>
            <div className="sec-head"><h2>New Arrivals</h2><Link to="/new-arrivals" className="link">View all →</Link></div>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
              {arrivals.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sec-head"><div><h2>Shop More</h2><p>Explore our wide range of products</p></div><Link to="/shop" className="link">View all →</Link></div>
        <div className="tiles">
          <div className="tile t1"><div><h4>Electronics</h4><p>Up to 50% off</p></div><Link className="btn btn-gold" to="/shop?cat=electronics">Shop now</Link><ProductArt kind="headphones" image="/images/categories/electronics.jpg" className="art" seed={0} alt="Electronics" /></div>
          <div className="tile t2"><div><h4>Beauty &amp; Personal Care</h4><p>Up to 60% off</p></div><Link className="btn btn-wine" to="/shop?cat=beauty">Shop now</Link><ProductArt kind="makeup" image="/images/categories/beauty.jpg" className="art" seed={1} alt="Beauty & Personal Care" /></div>
          <div className="tile t3"><div><h4>Home &amp; Kitchen</h4><p>Up to 60% off</p></div><Link className="btn btn-wine" to="/shop?cat=home">Shop now</Link><ProductArt kind="airfryer" image="/images/categories/home.jpg" className="art" seed={2} alt="Home & Kitchen" /></div>
          <div className="tile t4"><div><h4>Fashion &amp; Apparel</h4><p>Up to 70% off</p></div><Link className="btn btn-gold" to="/shop?cat=fashion">Shop now</Link><ProductArt kind="abaya" image="/images/categories/fashion.jpg" className="art" seed={3} alt="Fashion & Apparel" /></div>
        </div>
      </section>

      <section className="section">
        <div className="sec-head"><div><h2>Best Sellers</h2><p>Our most popular products</p></div><Link to="/best-sellers" className="link">View all →</Link></div>
        <div className="grid six">
          {best.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
    </div>
  )
}
