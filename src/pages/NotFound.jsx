import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container page">
      <div className="center">
        <span className="eyebrow" style={{ color: 'var(--gold)' }}>404</span>
        <h1>Page not found</h1>
        <p style={{ color: 'var(--muted)', marginBottom: 22 }}>The page you are looking for has moved or does not exist.</p>
        <Link to="/" className="btn btn-wine">Back to home</Link>
      </div>
    </div>
  )
}
