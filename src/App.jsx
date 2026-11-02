import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Newsletter from './components/Newsletter'
import { useStore } from './context/StoreContext'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import OrderSuccess from './pages/OrderSuccess'
import Wishlist from './pages/Wishlist'
import Account from './pages/Account'
import Brands from './pages/Brands'
import About from './pages/About'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import Policy from './pages/Policy'
import NotFound from './pages/NotFound'

export default function App() {
  const { pathname } = useLocation()
  const { toast } = useStore()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/deals" element={<Shop mode="deals" />} />
          <Route path="/new-arrivals" element={<Shop mode="new" />} />
          <Route path="/best-sellers" element={<Shop mode="best" />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/account" element={<Account />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/policy/:slug" element={<Policy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Newsletter />
      <Footer />
      {toast && <div className="toast">{toast}</div>}
    </>
  )
}
