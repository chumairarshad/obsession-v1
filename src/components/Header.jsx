import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useStore } from '../context/StoreContext'
import { categories } from '../data/products'
import { Search, Heart, Bag, User } from './Icons'

export default function Header() {
  const { count, wishlist, user } = useStore()
  const nav = useNavigate()
  const [q, setQ] = useState('')
  const [open, setOpen] = useState(false)
  const [cats, setCats] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    nav(q.trim() ? `/shop?q=${encodeURIComponent(q.trim())}` : '/shop')
    setOpen(false)
  }
  const close = () => { setOpen(false); setCats(false) }

  return (
    <>
      <div className="topbar">
        <div className="container">
          <span>Free shipping across GCC on orders over 100 AED</span>
          <span>Trusted by 100K+ customers</span>
          <span>24/7 customer support</span>
        </div>
      </div>
      <header className="header">
        <div className="container header-main">
          <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu">☰</button>
          <Link to="/" className="logo" onClick={close}>OBSSESSION<small>STORE</small></Link>
          <form className="search" onSubmit={submit}>
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search for products…" />
            <button aria-label="Search"><Search width="17" height="17" /></button>
          </form>
          <div className="icons">
            <Link to="/account" className="icon-btn"><User /><span>{user ? user.name.split(' ')[0] : 'Account'}</span></Link>
            <Link to="/wishlist" className="icon-btn"><Heart />{wishlist.length > 0 && <b className="badge">{wishlist.length}</b>}<span>Wishlist</span></Link>
            <Link to="/cart" className="icon-btn"><Bag />{count > 0 && <b className="badge">{count}</b>}<span>Cart</span></Link>
          </div>
        </div>
        <nav className={`nav ${open ? 'open' : ''}`}>
          <div className="container">
            <div className="cat-wrap" onMouseLeave={() => setCats(false)}>
              <a href="#cats" className="cat-btn" onClick={(e) => { e.preventDefault(); setCats(!cats) }} onMouseEnter={() => setCats(true)}>☰ All Categories</a>
              {cats && (
                <div className="cat-menu">
                  {categories.map((c) => (
                    <Link key={c.slug} to={`/shop?cat=${c.slug}`} onClick={close}>{c.name}</Link>
                  ))}
                </div>
              )}
            </div>
            <NavLink end to="/" onClick={close}>Home</NavLink>
            <NavLink to="/shop" onClick={close}>Shop</NavLink>
            <NavLink to="/deals" onClick={close}>Deals</NavLink>
            <NavLink to="/new-arrivals" onClick={close}>New Arrivals</NavLink>
            <NavLink to="/best-sellers" onClick={close}>Best Sellers</NavLink>
            <NavLink to="/brands" onClick={close}>Brands</NavLink>
            <NavLink to="/about" onClick={close}>About Us</NavLink>
            <NavLink to="/contact" onClick={close}>Contact Us</NavLink>
          </div>
        </nav>
      </header>
    </>
  )
}
