import { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react'
import { products } from '../data/products'

const Ctx = createContext(null)
export const useStore = () => useContext(Ctx)

const load = (key, fallback) => {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback } catch { return fallback }
}

export function StoreProvider({ children }) {
  const [cart, setCart] = useState(() => load('obs_cart', []))
  const [wishlist, setWishlist] = useState(() => load('obs_wish', []))
  const [user, setUser] = useState(() => load('obs_user', null))
  const [orders, setOrders] = useState(() => load('obs_orders', []))
  const [coupon, setCoupon] = useState(null)
  const [toast, setToast] = useState('')

  useEffect(() => { localStorage.setItem('obs_cart', JSON.stringify(cart)) }, [cart])
  useEffect(() => { localStorage.setItem('obs_wish', JSON.stringify(wishlist)) }, [wishlist])
  useEffect(() => { localStorage.setItem('obs_user', JSON.stringify(user)) }, [user])
  useEffect(() => { localStorage.setItem('obs_orders', JSON.stringify(orders)) }, [orders])
  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(''), 2200)
    return () => clearTimeout(t)
  }, [toast])

  const notify = useCallback((m) => setToast(m), [])

  const addToCart = (id, qty = 1) => {
    setCart((c) => {
      const f = c.find((i) => i.id === id)
      return f ? c.map((i) => (i.id === id ? { ...i, qty: i.qty + qty } : i)) : [...c, { id, qty }]
    })
    notify('Added to your cart')
  }
  const setQty = (id, qty) =>
    setCart((c) => (qty < 1 ? c.filter((i) => i.id !== id) : c.map((i) => (i.id === id ? { ...i, qty } : i))))
  const removeFromCart = (id) => setCart((c) => c.filter((i) => i.id !== id))
  const clearCart = () => { setCart([]); setCoupon(null) }

  const toggleWish = (id) => {
    setWishlist((w) => {
      const has = w.includes(id)
      notify(has ? 'Removed from wishlist' : 'Saved to wishlist')
      return has ? w.filter((x) => x !== id) : [...w, id]
    })
  }

  const applyCoupon = (code) => {
    if (code.trim().toUpperCase() === 'OBSESS10') { setCoupon('OBSESS10'); notify('10% off applied'); return true }
    notify('That code is not valid')
    return false
  }

  const lines = useMemo(
    () => cart.map((i) => ({ ...i, product: products.find((p) => p.id === i.id) })).filter((l) => l.product),
    [cart]
  )
  const subtotal = lines.reduce((s, l) => s + l.product.price * l.qty, 0)
  const discount = coupon ? subtotal * 0.1 : 0
  const shipping = subtotal - discount >= 100 || subtotal === 0 ? 0 : 15
  const total = subtotal - discount + shipping
  const count = cart.reduce((s, i) => s + i.qty, 0)

  const placeOrder = (details) => {
    const order = {
      id: 'OBS-' + Math.floor(100000 + Math.random() * 900000),
      date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      items: lines.map((l) => ({ name: l.product.name, qty: l.qty, price: l.product.price })),
      total, details,
    }
    setOrders((o) => [order, ...o])
    clearCart()
    return order
  }

  const value = {
    cart, lines, count, subtotal, discount, shipping, total, coupon,
    addToCart, setQty, removeFromCart, clearCart, applyCoupon, placeOrder,
    wishlist, toggleWish, user, setUser, orders, toast, notify,
  }
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}
