import { Link } from 'react-router-dom'
import { brands } from '../data/products'
import PageHead from '../components/PageHead'

export default function Brands() {
  return (
    <>
      <PageHead title="Brands" />
      <div className="container page">
        <div className="brand-grid">
          {brands.map((b) => <Link key={b} to={`/shop?q=${encodeURIComponent(b)}`} className="brand">{b}</Link>)}
        </div>
      </div>
    </>
  )
}
