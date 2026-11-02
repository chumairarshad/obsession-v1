import { Link } from 'react-router-dom'

export default function PageHead({ title, crumb, children }) {
  return (
    <div className="page-head">
      <div className="container">
        <div className="crumbs"><Link to="/">Home</Link> / {crumb || title}</div>
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  )
}
