import { Link, useLocation } from 'react-router-dom'
import { Check } from '../components/Icons'

export default function OrderSuccess() {
  const { state } = useLocation()
  return (
    <div className="container page">
      <div className="center">
        <div className="check"><Check width="34" height="34" /></div>
        <h1>Thank you</h1>
        <p style={{ color: 'var(--muted)', marginBottom: 6 }}>Your order has been placed.</p>
        {state?.id && <p style={{ marginBottom: 22 }}>Order number <b style={{ color: 'var(--wine)' }}>{state.id}</b></p>}
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
          <Link to="/account" className="btn btn-ghost">View orders</Link>
          <Link to="/shop" className="btn btn-wine">Keep shopping</Link>
        </div>
      </div>
    </div>
  )
}
