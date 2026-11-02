import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="logo">OBSSESSION<small>STORE</small></div>
            <p style={{ marginTop: 14, fontSize: 14 }}>Shop smart. Live better.</p>
            <p style={{ marginTop: 6, fontSize: 13, color: '#bfa0a6' }}>A curated store for the things you end up loving.</p>
          </div>
          <div>
            <h5>Quick Links</h5>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/deals">Deals</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h5>Customer Care</h5>
            <ul>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/policy/shipping">Shipping Policy</Link></li>
              <li><Link to="/policy/returns">Return Policy</Link></li>
              <li><Link to="/policy/privacy">Privacy Policy</Link></li>
              <li><Link to="/policy/terms">Terms &amp; Conditions</Link></li>
            </ul>
          </div>
          <div>
            <h5>Account</h5>
            <ul>
              <li><Link to="/account">My Account</Link></li>
              <li><Link to="/wishlist">Wishlist</Link></li>
              <li><Link to="/cart">Cart</Link></li>
              <li><Link to="/brands">Brands</Link></li>
            </ul>
          </div>
          <div>
            <h5>We Accept</h5>
            <div className="pay"><span>VISA</span><span>Mastercard</span><span>Apple Pay</span><span>PayPal</span><span>COD</span></div>
          </div>
        </div>
        <div className="copy">© {new Date().getFullYear()} OBSSESSION STORE. All Rights Reserved.</div>
      </div>
    </footer>
  )
}
