import { useState } from 'react'
import { useStore } from '../context/StoreContext'
import { Shield, Globe, Headset, Gift, Arrow } from './Icons'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const { notify } = useStore()
  const submit = (e) => {
    e.preventDefault()
    if (!email.includes('@')) return notify('Please enter a valid email')
    notify('Welcome — you are on the list')
    setEmail('')
  }
  return (
    <div className="container">
      <div className="strip">
        <div><h3>Obssession Store</h3><p style={{ color: '#6b4a4e' }}>Your one-stop store in Gulf countries</p></div>
        <div className="strip-perks">
          <div><Shield />Safe &amp; Secure<br />Shopping</div>
          <div><Globe />Worldwide<br />Shipping</div>
          <div><Headset />Dedicated<br />Support</div>
          <div><Gift />Great Deals<br />Always</div>
        </div>
        <div className="news">
          <h4>Join our newsletter</h4>
          <p>Exclusive offers &amp; updates</p>
          <form onSubmit={submit}>
            <input type="email" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button aria-label="Subscribe"><Arrow width="16" height="16" /></button>
          </form>
        </div>
      </div>
    </div>
  )
}
