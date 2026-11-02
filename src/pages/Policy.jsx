import { useParams } from 'react-router-dom'
import PageHead from '../components/PageHead'
import NotFound from './NotFound'

const docs = {
  shipping: ['Shipping Policy', [
    ['Coverage', 'We deliver across the UAE, Saudi Arabia, Qatar, Kuwait, Bahrain and Oman.'],
    ['Delivery times', 'Standard delivery takes 2–5 working days. Remote areas may take longer.'],
    ['Cost', 'Free on orders over 100 AED, otherwise a flat 15 AED.'],
  ]],
  returns: ['Return Policy', [
    ['Eligibility', 'Items can be returned within 14 days of delivery if unused and in original packaging.'],
    ['Refunds', 'Refunds go back to your original payment method within 5–7 working days of us receiving the item.'],
    ['Exceptions', 'For hygiene reasons, opened fragrance and personal-care items cannot be returned.'],
  ]],
  privacy: ['Privacy Policy', [
    ['What we collect', 'Your name, contact and delivery details, and order history, only to fulfil your orders.'],
    ['How we use it', 'To process orders, provide support and — if you opt in — send offers. We never sell your data.'],
    ['Your choices', 'You can ask us to access or delete your information at any time.'],
  ]],
  terms: ['Terms & Conditions', [
    ['Orders', 'An order is confirmed once payment is authorised and we send a confirmation email.'],
    ['Pricing', 'Prices are in AED and may change without notice. Errors may be corrected before dispatch.'],
    ['Liability', 'Our liability is limited to the value of the goods purchased.'],
  ]],
}

export default function Policy() {
  const { slug } = useParams()
  const d = docs[slug]
  if (!d) return <NotFound />
  return (
    <>
      <PageHead title={d[0]} />
      <div className="container page">
        <div className="prose">
          <p style={{ color: 'var(--muted)' }}>Template text — have it reviewed before launch.</p>
          {d[1].map(([h, t]) => <div key={h}><h3>{h}</h3><p>{t}</p></div>)}
        </div>
      </div>
    </>
  )
}
