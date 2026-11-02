import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { products, categories } from '../data/products'
import ProductCard from '../components/ProductCard'
import PageHead from '../components/PageHead'

const titles = { deals: 'Deals', new: 'New Arrivals', best: 'Best Sellers' }

export default function Shop({ mode }) {
  const [params, setParams] = useSearchParams()
  const cat = params.get('cat') || ''
  const q = (params.get('q') || '').toLowerCase()
  const [sort, setSort] = useState('featured')
  const [max, setMax] = useState(300)

  const list = useMemo(() => {
    let l = products.filter((p) => p.price <= max)
    if (mode === 'deals') l = l.filter((p) => p.discount >= 40)
    if (mode === 'new') l = l.filter((p) => p.isNew)
    if (mode === 'best') l = l.filter((p) => p.best)
    if (cat) l = l.filter((p) => p.category === cat)
    if (q) l = l.filter((p) => (p.name + p.sub + p.brand + p.tag).toLowerCase().includes(q))
    const s = { 'price-asc': (a, b) => a.price - b.price, 'price-desc': (a, b) => b.price - a.price, discount: (a, b) => b.discount - a.discount, rating: (a, b) => b.rating - a.rating }[sort]
    return s ? [...l].sort(s) : l
  }, [cat, q, sort, max, mode])

  const setCat = (c) => { const n = new URLSearchParams(params); c ? n.set('cat', c) : n.delete('cat'); setParams(n) }
  const catName = categories.find((c) => c.slug === cat)?.name
  const title = mode ? titles[mode] : q ? `Results for “${params.get('q')}”` : catName || 'Shop'

  return (
    <>
      <PageHead title={title} crumb={mode ? titles[mode] : 'Shop'} />
      <div className="container page">
        <div className="shop">
          <aside className="filters">
            <h4>Categories</h4>
            <ul>
              <li><button className={!cat ? 'on' : ''} onClick={() => setCat('')}>All products</button></li>
              {categories.map((c) => <li key={c.slug}><button className={cat === c.slug ? 'on' : ''} onClick={() => setCat(c.slug)}>{c.name}</button></li>)}
            </ul>
            <h4>Max price</h4>
            <input type="range" min="20" max="300" step="10" value={max} onChange={(e) => setMax(+e.target.value)} />
            <p style={{ fontSize: 13, color: 'var(--muted)' }}>Up to {max} AED</p>
          </aside>
          <section>
            <div className="toolbar">
              <span>{list.length} product{list.length !== 1 && 's'}</span>
              <select className="select" value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="featured">Featured</option>
                <option value="price-asc">Price: low to high</option>
                <option value="price-desc">Price: high to low</option>
                <option value="discount">Biggest discount</option>
                <option value="rating">Top rated</option>
              </select>
            </div>
            {list.length ? (
              <div className="grid">{list.map((p) => <ProductCard key={p.id} product={p} />)}</div>
            ) : (
              <div className="empty"><h3>Nothing found</h3><p>Try a different category or raise the price filter.</p></div>
            )}
          </section>
        </div>
      </div>
    </>
  )
}
