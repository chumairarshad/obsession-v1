import { useState } from 'react'
import { useStore } from '../context/StoreContext'
import { money } from '../data/products'
import PageHead from '../components/PageHead'

export default function Account() {
  const { user, setUser, orders, notify } = useStore()
  const [tab, setTab] = useState('login')
  const [f, setF] = useState({ name: '', email: '', password: '' })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })

  // Demo auth only: stored in this browser. Replace with a real backend when you go live.
  const submit = (e) => {
    e.preventDefault()
    setUser({ name: f.name || f.email.split('@')[0], email: f.email })
    notify(tab === 'login' ? 'Welcome back' : 'Account created')
  }

  if (user)
    return (
      <>
        <PageHead title="My account" />
        <div className="container page two">
          <div className="box">
            <h3>Orders</h3>
            {orders.length ? orders.map((o) => (
              <div key={o.id} className="line" style={{ gridTemplateColumns: '1fr auto' }}>
                <div><b>{o.id}</b><div style={{ fontSize: 12, color: 'var(--muted)' }}>{o.date} · {o.items.map((i) => `${i.name} × ${i.qty}`).join(', ')}</div></div>
                <b style={{ color: 'var(--wine)' }}>{money(o.total)}</b>
              </div>
            )) : <p style={{ color: 'var(--muted)' }}>No orders yet.</p>}
          </div>
          <div className="box">
            <h3>{user.name}</h3>
            <p style={{ color: 'var(--muted)', marginBottom: 16 }}>{user.email}</p>
            <button className="btn btn-ghost btn-block" onClick={() => setUser(null)}>Sign out</button>
          </div>
        </div>
      </>
    )

  return (
    <>
      <PageHead title="My account" />
      <div className="container page">
        <div className="box" style={{ maxWidth: 440, margin: '0 auto' }}>
          <div className="tabs">
            <button className={tab === 'login' ? 'on' : ''} onClick={() => setTab('login')}>Sign in</button>
            <button className={tab === 'register' ? 'on' : ''} onClick={() => setTab('register')}>Create account</button>
          </div>
          <form onSubmit={submit}>
            {tab === 'register' && <div className="field"><label>Full name</label><input required value={f.name} onChange={set('name')} /></div>}
            <div className="field"><label>Email</label><input required type="email" value={f.email} onChange={set('email')} /></div>
            <div className="field"><label>Password</label><input required type="password" minLength={6} value={f.password} onChange={set('password')} /></div>
            <button className="btn btn-wine btn-block">{tab === 'login' ? 'Sign in' : 'Create account'}</button>
          </form>
        </div>
      </div>
    </>
  )
}
