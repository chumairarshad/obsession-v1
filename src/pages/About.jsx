import { Link } from 'react-router-dom'
import PageHead from '../components/PageHead'

export default function About() {
  return (
    <>
      <PageHead title="About Obssession" crumb="About Us" />
      <div className="container page">
        <div className="prose">
          <p style={{ fontSize: 18 }}>Obssession began with a simple idea: shopping should feel considered, not crowded. We bring together beauty, fashion, home and tech worth keeping — and deliver it across the Gulf.</p>
        </div>
        <div className="values">
          {[['Curated', 'Every product is selected for quality and finish, not for volume.'], ['Genuine', '100% authentic products from trusted brands and suppliers.'], ['Cared for', 'Fast delivery, easy returns and a team that answers 24/7.']].map(([t, d]) => (
            <div className="box" key={t}><h3>{t}</h3><p style={{ color: 'var(--muted)' }}>{d}</p></div>
          ))}
        </div>
        <Link to="/shop" className="btn btn-wine">Start shopping</Link>
      </div>
    </>
  )
}
