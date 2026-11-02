import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { products, money, categories } from '../data/products'
import { useStore } from '../context/StoreContext'
import ProductArt from '../components/ProductArt'
import ProductCard, { Stars } from '../components/ProductCard'
import { Truck, Return, Shield } from '../components/Icons'
import NotFound from './NotFound'

export default function ProductDetail() {
  const { id } = useParams()
  const p = products.find((x) => x.id === +id)
  const { addToCart, toggleWish, wishlist } = useStore()
  const nav = useNavigate()
  const [qty, setQty] = useState(1)
  if (!p) return <NotFound />
  const related = products.filter((x) => x.category === p.category && x.id !== p.id).slice(0, 4)
  const catName = categories.find((c) => c.slug === p.category)?.name

  return (
    <div className="container page">
      <div className="crumbs"><Link to="/">Home</Link> / <Link to={`/shop?cat=${p.category}`}>{catName}</Link> / {p.name}</div>
      <div className="pd">
        <ProductArt kind={p.kind} image={p.image} seed={p.id} alt={p.name} />
        <div>
          <span className="eyebrow" style={{ color: 'var(--gold)' }}>{p.brand}</span>
          <h1>{p.name}</h1>
          <Stars rating={p.rating} reviews={p.reviews} />
          <div className="price" style={{ margin: '14px 0' }}>
            <b>{money(p.price)}</b><s>{money(p.was)}</s><span className="save">Save {p.discount}%</span>
          </div>
          <p style={{ color: 'var(--muted)' }}>{p.desc}</p>
          <div className="pd-actions">
            <div className="qty">
              <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button><span>{qty}</span><button onClick={() => setQty(qty + 1)}>+</button>
            </div>
            <button className="btn btn-wine" onClick={() => addToCart(p.id, qty)}>Add to cart</button>
            <button className="btn btn-gold" onClick={() => { addToCart(p.id, qty); nav('/cart') }}>Buy now</button>
            <button className="btn btn-ghost" onClick={() => toggleWish(p.id)}>{wishlist.includes(p.id) ? '♥ Saved' : '♡ Wishlist'}</button>
          </div>
          <ul>
            <li><Truck /> Free shipping across GCC on orders over 100 AED</li>
            <li><Return /> 14-day easy returns</li>
            <li><Shield /> 100% genuine product, secure payment</li>
          </ul>
        </div>
      </div>
      {related.length > 0 && (
        <section className="section">
          <div className="sec-head"><h2>You may also like</h2></div>
          <div className="grid">{related.map((r) => <ProductCard key={r.id} product={r} />)}</div>
        </section>
      )}
    </div>
  )
}
