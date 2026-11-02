import { Link } from 'react-router-dom'
import { useStore } from '../context/StoreContext'
import { money } from '../data/products'
import ProductArt from './ProductArt'
import { Heart } from './Icons'

export const Stars = ({ rating, reviews }) => (
  <div className="stars">
    {'★'.repeat(Math.round(rating))}{'☆'.repeat(5 - Math.round(rating))}
    <i>({rating}){reviews ? ` · ${reviews}` : ''}</i>
  </div>
)

export default function ProductCard({ product: p }) {
  const { addToCart, toggleWish, wishlist } = useStore()
  const on = wishlist.includes(p.id)
  return (
    <div className="card">
      <span className="tag">-{p.discount}%</span>
      <button className={`heart ${on ? 'on' : ''}`} onClick={() => toggleWish(p.id)} aria-label="Wishlist"><Heart /></button>
      <Link to={`/product/${p.id}`}><ProductArt kind={p.kind} image={p.image} seed={p.id} alt={p.name} /></Link>
      <div className="card-body">
        <Link to={`/product/${p.id}`} className="card-name">{p.name}</Link>
        <span className="card-sub">{p.sub}</span>
        <Stars rating={p.rating} />
        <div className="price"><b>{money(p.price)}</b><s>{money(p.was)}</s></div>
        <button className="add" onClick={() => addToCart(p.id)}>Add to cart</button>
      </div>
    </div>
  )
}
