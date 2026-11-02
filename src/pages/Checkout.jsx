import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useStore } from '../context/StoreContext'
import PageHead from '../components/PageHead'
import { Summary } from './Cart'

const countries = ['United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Bahrain', 'Oman']

export default function Checkout() {
  const { lines, placeOrder, user } = useStore()
  const nav = useNavigate()
  const [pay, setPay] = useState('card')
  const [f, setF] = useState({ name: user?.name || '', email: user?.email || '', phone: '', country: countries[0], city: '', address: '' })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })

  if (!lines.length)
    return (
      <>
        <PageHead title="Checkout" />
        <div className="container empty"><h3>Nothing to check out</h3><Link to="/shop" className="btn btn-wine">Browse the shop</Link></div>
      </>
    )

  const submit = (e) => {
    e.preventDefault()
    const order = placeOrder({ ...f, pay })
    nav('/order-success', { state: { id: order.id } })
  }

  return (
    <>
      <PageHead title="Checkout" />
      <form className="container page two" onSubmit={submit}>
        <div>
          <div className="box" style={{ marginBottom: 20 }}>
            <h3>Delivery details</h3>
            <div className="cols">
              <div className="field"><label>Full name</label><input required value={f.name} onChange={set('name')} /></div>
              <div className="field"><label>Email</label><input required type="email" value={f.email} onChange={set('email')} /></div>
              <div className="field"><label>Phone</label><input required value={f.phone} onChange={set('phone')} placeholder="+971 50 000 0000" /></div>
              <div className="field"><label>Country</label><select value={f.country} onChange={set('country')}>{countries.map((c) => <option key={c}>{c}</option>)}</select></div>
              <div className="field"><label>City</label><input required value={f.city} onChange={set('city')} /></div>
              <div className="field"><label>Address</label><input required value={f.address} onChange={set('address')} /></div>
            </div>
          </div>
          <div className="box">
            <h3>Payment</h3>
            {[['card', 'Credit / debit card'], ['apple', 'Apple Pay'], ['cod', 'Cash on delivery']].map(([k, l]) => (
              <label key={k} className={`opt ${pay === k ? 'on' : ''}`}>
                <input type="radio" checked={pay === k} onChange={() => setPay(k)} /> {l}
              </label>
            ))}
            <p style={{ fontSize: 12, color: 'var(--muted)' }}>This is a demo storefront — no real payment is taken.</p>
          </div>
        </div>
        <Summary><button className="btn btn-wine btn-block" style={{ marginTop: 14 }}>Place order</button></Summary>
      </form>
    </>
  )
}
