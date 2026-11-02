import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useStore } from '../context/StoreContext'
import { money } from '../data/products'
import ProductArt from '../components/ProductArt'
import PageHead from '../components/PageHead'

export function Summary({ children }) {
  const { subtotal, discount, shipping, total, coupon } = useStore()
  return (
    <div className="box">
      <h3>Order summary</h3>
      <div className="row"><span>Subtotal</span><span>{money(subtotal)}</span></div>
      {coupon && <div className="row"><span>Code {coupon}</span><span>− {money(discount)}</span></div>}
      <div className="row"><span>Shipping</span><span>{shipping ? money(shipping) : 'Free'}</span></div>
      <div className="row total"><span>Total</span><span>{money(total)}</span></div>
      {children}
    </div>
  )
}

export default function Cart() {
  const { lines, setQty, removeFromCart, applyCoupon, subtotal } = useStore()
  const [code, setCode] = useState('')

  if (!lines.length)
    return (
      <>
        <PageHead title="Your cart" />
        <div className="container empty"><h3>Your cart is empty</h3><p style={{ marginBottom: 20 }}>Find something you will love.</p><Link to="/shop" className="btn btn-wine">Continue shopping</Link></div>
      </>
    )

  return (
    <>
      <PageHead title="Your cart" />
      <div className="container page two">
        <div className="box">
          {lines.map(({ product: p, qty }) => (
            <div className="line" key={p.id}>
              <Link to={`/product/${p.id}`}><ProductArt kind={p.kind} image={p.image} seed={p.id} alt={p.name} /></Link>
              <div>
                <Link to={`/product/${p.id}`} style={{ fontWeight: 500 }}>{p.name}</Link>
                <div style={{ fontSize: 12, color: 'var(--muted)' }}>{p.sub}</div>
                <div className="qty" style={{ marginTop: 8, transform: 'scale(.88)', transformOrigin: 'left' }}>
                  <button onClick={() => setQty(p.id, qty - 1)}>−</button><span>{qty}</span><button onClick={() => setQty(p.id, qty + 1)}>+</button>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <b style={{ color: 'var(--wine)' }}>{money(p.price * qty)}</b>
                <div><button className="rm" onClick={() => removeFromCart(p.id)}>Remove</button></div>
              </div>
            </div>
          ))}
        </div>
        <Summary>
          {subtotal < 100 && <div className="free" style={{ marginTop: 12 }}>Add {money(100 - subtotal)} more for free shipping.</div>}
          <div className="coupon">
            <input placeholder="Discount code (try OBSESS10)" value={code} onChange={(e) => setCode(e.target.value)} />
            <button className="btn btn-ghost" onClick={() => applyCoupon(code)}>Apply</button>
          </div>
          <Link to="/checkout" className="btn btn-wine btn-block">Proceed to checkout</Link>
        </Summary>
      </div>
    </>
  )
}
