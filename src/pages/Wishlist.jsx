import { Link } from 'react-router-dom'
import { products } from '../data/products'
import { useStore } from '../context/StoreContext'
import ProductCard from '../components/ProductCard'
import PageHead from '../components/PageHead'

export default function Wishlist() {
  const { wishlist } = useStore()
  const list = products.filter((p) => wishlist.includes(p.id))
  return (
    <>
      <PageHead title="Wishlist" />
      <div className="container page">
        {list.length ? (
          <div className="grid">{list.map((p) => <ProductCard key={p.id} product={p} />)}</div>
        ) : (
          <div className="empty"><h3>Nothing saved yet</h3><p style={{ marginBottom: 20 }}>Tap the heart on anything you love.</p><Link to="/shop" className="btn btn-wine">Explore the shop</Link></div>
        )}
      </div>
    </>
  )
}
